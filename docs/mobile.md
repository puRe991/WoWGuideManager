# Android and iOS app shells

The Android and iOS apps are Capacitor wrappers around the same dependency-light
web bundle used by the browser preview and the Windows portable build. There is
one guide UI (`src/`, built to `dist/`); Capacitor loads that bundle inside a
native WebView shell per platform, the same way `windows/Start-WoWGuideManager.cmd`
opens it in a chromeless Microsoft Edge window on the Windows portable build.

## Layout

- `capacitor.config.json` – app id, app name, and `webDir: dist`.
- `android/` – native Android Studio/Gradle project (committed, build output is gitignored).
- `ios/` – native Xcode project (committed, build output/Pods are gitignored).

## Rebuilding the web bundle into both native shells

```bash
npm install
npm run cap:sync
```

`cap:sync` runs the same `scripts/build.mjs` used by the browser and Windows
builds, then calls `npx cap sync` to copy the fresh `dist/` output into
`android/app/src/main/assets/public` and `ios/App/App/public` and refresh each
platform's Capacitor config/plugin registration. Run it after any change to
`src/`, `index.html`, or `assets/`.

## Android (Windows/macOS/Linux with Android Studio)

1. Install [Android Studio](https://developer.android.com/studio) (includes the Android SDK).
2. `npm run cap:sync`
3. `npm run android:open` (or open the `android/` folder directly in Android Studio).
4. Let Gradle sync, then run on an emulator or a USB-connected device.
5. For a release build, use Android Studio's Build > Generate Signed App Bundle/APK, or `./gradlew assembleRelease` / `bundleRelease` from `android/` once you've configured a signing key.

## iOS (macOS with Xcode required)

Apple only allows building and signing iOS apps on macOS with Xcode, so this
step cannot run inside the Linux build/CI environment — it must be done on a
Mac.

1. Install Xcode and CocoaPods (`sudo gem install cocoapods`).
2. `npm run cap:sync`
3. `cd ios/App && pod install` (first time, or after adding a Capacitor plugin).
4. `npm run ios:open` (or open `ios/App/App.xcworkspace` in Xcode).
5. Pick a simulator or a signed device/team, then Run. For distribution, use Xcode's Archive workflow (TestFlight/App Store) or `xcodebuild -workspace App.xcworkspace -scheme App archive`.

## Automated APK downloads via GitHub Releases

`.github/workflows/android-release.yml` builds a debug-signed APK (via
`./gradlew assembleDebug`, no manual signing setup required) and attaches it
to the GitHub Release automatically whenever a release is published on
GitHub. It can also be triggered manually from the Actions tab
(`workflow_dispatch`), in which case the APK is only kept as a workflow
artifact for testing the build itself.

To ship a new downloadable APK: bump `version` in `package.json` if desired,
then publish a new GitHub Release (any tag, e.g. `v0.1.0`) from the
repository's Releases page. The workflow picks it up, rebuilds the web
bundle, syncs it into `android/`, builds the APK and uploads
`WoW-Guide-Manager-<version>.apk` as a release asset.

This APK is debug-signed (Gradle's auto-generated debug keystore), which is
installable for sideloading/testing but not suitable for a Play Store
listing. A Play Store release still needs a real upload keystore configured
in `android/app/build.gradle` with secrets injected via GitHub Actions.

## App icons and splash screen

The repo doesn't ship real WoW artwork (see `docs/assets.md`), so both
platforms currently use Capacitor's default placeholder icon/splash. Before a
store release, generate real icons/splash screens (e.g. with
`@capacitor/assets`) from a source logo and re-run `npm run cap:sync`.

## Responsive UI

The shared UI in `src/styles.css` now includes a `max-width: 640px` breakpoint
so the same guide UI is usable on phone-sized screens (single-column grids,
smaller paddings, safe-area insets for notches/status bars) in addition to the
existing 1200px tablet/desktop breakpoints. Test phone layouts in a desktop
browser by narrowing the window below 640px, or via the Android
emulator/iOS simulator.

## Why Capacitor instead of a rewrite

Capacitor keeps a single HTML/CSS/JS codebase as the source of truth (same
`src/data/*.js` content packs, same `app.js` UI logic) and adds only a thin
native bridge per platform, rather than duplicating the guide UI in Kotlin/Swift.
This mirrors the project's existing pattern of one browser build feeding
multiple native shells (Windows today, Android/iOS now).
