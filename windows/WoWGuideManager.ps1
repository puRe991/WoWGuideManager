param(
  [string]$DataPath = (Join-Path $PSScriptRoot 'app-data.json')
)

Add-Type -AssemblyName PresentationFramework, PresentationCore, WindowsBase

if (-not (Test-Path -LiteralPath $DataPath)) {
  [System.Windows.MessageBox]::Show("App data not found: $DataPath`nPlease run npm run dist:win first.", 'WoW Guide Manager', 'OK', 'Error') | Out-Null
  exit 1
}

$data = Get-Content -LiteralPath $DataPath -Raw | ConvertFrom-Json

function New-TextBlock($text, $size = 14, $weight = 'Normal', $color = '#f7efe0') {
  $block = New-Object System.Windows.Controls.TextBlock
  $block.Text = $text
  $block.FontSize = $size
  $block.FontWeight = $weight
  $block.Foreground = [System.Windows.Media.BrushConverter]::new().ConvertFromString($color)
  $block.TextWrapping = 'Wrap'
  $block.Margin = '0,0,0,8'
  return $block
}

function New-Section($title, $items) {
  $panel = New-Object System.Windows.Controls.StackPanel
  $panel.Margin = '0,0,16,16'
  $panel.Children.Add((New-TextBlock $title 16 'Bold' '#ffc86b')) | Out-Null
  foreach ($item in @($items)) {
    $panel.Children.Add((New-TextBlock "- $item" 13 'Normal' '#d7d0c4')) | Out-Null
  }
  return $panel
}

function Set-Details($title, $subtitle, $sections) {
  $script:Details.Children.Clear()
  $script:Details.Children.Add((New-TextBlock $title 26 'Bold' '#ffe39a')) | Out-Null
  if ($subtitle) { $script:Details.Children.Add((New-TextBlock $subtitle 14 'Normal' '#c8c0b5')) | Out-Null }
  foreach ($section in $sections) {
    $script:Details.Children.Add((New-Section $section.Title $section.Items)) | Out-Null
  }
}

function Show-Class($classGuide) {
  $build = $data.classBuildGuides.($classGuide.id)
  $specs = @($data.specGuides.($classGuide.id))
  $sections = @(
    @{ Title = 'Roles'; Items = @($classGuide.roles) },
    @{ Title = 'Core rotation'; Items = @($classGuide.rotation) },
    @{ Title = 'Stats'; Items = @($classGuide.statPriority) },
    @{ Title = 'Leveling rotation'; Items = @($build.rotations.leveling) },
    @{ Title = 'Dungeon rotation'; Items = @($build.rotations.dungeon) },
    @{ Title = 'Raid rotation'; Items = @($build.rotations.raid) },
    @{ Title = 'Best-in-slot targets'; Items = @($build.bestInSlot) }
  )
  foreach ($spec in $specs) {
    $sections += @{ Title = "Spec: $($spec.name) - $($spec.role)"; Items = @($spec.rotation + $spec.gear + $spec.consumables) }
  }
  Set-Details "$($classGuide.name) Classic Guide" $classGuide.summary $sections
}

function Show-Dungeon($dungeon) {
  Set-Details "$($dungeon.name)" "$($dungeon.levelRange) - $($dungeon.zone) - $($dungeon.time)" @(
    @{ Title = 'Route'; Items = @($dungeon.route) },
    @{ Title = 'Bosses'; Items = @($dungeon.bosses) },
    @{ Title = 'Loot targets'; Items = @($dungeon.loot) },
    @{ Title = 'Quests / prep'; Items = @($dungeon.quests) },
    @{ Title = 'Group setup'; Items = @($dungeon.composition) },
    @{ Title = 'Group tips'; Items = @($dungeon.tips) }
  )
}

function Show-Guide($guide) {
  Set-Details $guide.title "$($guide.category) - $($guide.audience) - $($guide.minutes) min." @(
    @{ Title = 'Summary'; Items = @($guide.summary) },
    @{ Title = 'Checklist'; Items = @($guide.checklist) },
    @{ Title = 'Tags'; Items = @($guide.tags) }
  )
}

$window = New-Object System.Windows.Window
$window.Title = 'WoW Guide Manager'
$window.Width = 1380
$window.Height = 900
$window.MinWidth = 1100
$window.MinHeight = 720
$window.Background = [System.Windows.Media.BrushConverter]::new().ConvertFromString('#080b14')

$grid = New-Object System.Windows.Controls.Grid
$grid.Margin = '18'
$grid.ColumnDefinitions.Add((New-Object System.Windows.Controls.ColumnDefinition -Property @{ Width = '340' }))
$grid.ColumnDefinitions.Add((New-Object System.Windows.Controls.ColumnDefinition -Property @{ Width = '*' }))

$left = New-Object System.Windows.Controls.StackPanel
$left.Margin = '0,0,18,0'
[System.Windows.Controls.Grid]::SetColumn($left, 0)

$left.Children.Add((New-TextBlock 'WoW Guide Manager' 30 'Bold' '#ffe39a')) | Out-Null
$left.Children.Add((New-TextBlock 'Portable Windows app - Classic content pack' 14 'Normal' '#c8c0b5')) | Out-Null

$tabs = New-Object System.Windows.Controls.TabControl
$tabs.Background = [System.Windows.Media.BrushConverter]::new().ConvertFromString('#111827')
$tabs.Foreground = [System.Windows.Media.BrushConverter]::new().ConvertFromString('#f7efe0')

function Add-ListTab($header, $items, $display, $handler) {
  $tab = New-Object System.Windows.Controls.TabItem
  $tab.Header = $header
  $list = New-Object System.Windows.Controls.ListBox
  $list.Background = [System.Windows.Media.BrushConverter]::new().ConvertFromString('#111827')
  $list.Foreground = [System.Windows.Media.BrushConverter]::new().ConvertFromString('#f7efe0')
  $list.BorderThickness = 0
  $list.DisplayMemberPath = $display
  foreach ($item in @($items)) { $list.Items.Add($item) | Out-Null }
  $selectionHandler = $handler
  $onSelectionChanged = {
    if ($this.SelectedItem) {
      & $selectionHandler $this.SelectedItem
    }
  }.GetNewClosure()
  $list.Add_SelectionChanged($onSelectionChanged)
  $tab.Content = $list
  $tabs.Items.Add($tab) | Out-Null
  return $list
}

$classList = Add-ListTab 'Classes' $data.classGuides 'name' ${function:Show-Class}
$dungeonList = Add-ListTab 'Dungeons' $data.dungeonGuides 'name' ${function:Show-Dungeon}
$guideList = Add-ListTab 'Guides' $data.guideCards 'title' ${function:Show-Guide}

$left.Children.Add($tabs) | Out-Null
$grid.Children.Add($left) | Out-Null

$scroll = New-Object System.Windows.Controls.ScrollViewer
$scroll.VerticalScrollBarVisibility = 'Auto'
[System.Windows.Controls.Grid]::SetColumn($scroll, 1)
$script:Details = New-Object System.Windows.Controls.StackPanel
$script:Details.Margin = '22'
$scroll.Content = $script:Details
$grid.Children.Add($scroll) | Out-Null

$window.Content = $grid
$classList.SelectedIndex = 0
$window.ShowDialog() | Out-Null
