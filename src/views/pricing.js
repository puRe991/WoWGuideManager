import { subscriptionTiers } from '../data/subscriptions.js';
import { escapeHtml } from '../render/shared.js';

export function renderPricing() {
  return `
    <section class="page narrow">
      <span class="eyebrow">Monetarisierung</span>
      <h1>Abo-Modell vorbereitet, Payment später integrierbar.</h1>
      <p>Die Oberfläche trennt Free- und Premium-Content bereits sichtbar. Der nächste Schritt ist ein Lizenzserver mit Stripe- oder Paddle-Anbindung.</p>
      <div class="pricing-grid">
        ${subscriptionTiers.map((tier) => `
          <article class="price-card ${tier.highlighted ? 'highlighted' : ''}">
            <h3>${escapeHtml(tier.name)}</h3>
            <strong>${escapeHtml(tier.price)}</strong>
            <p>${escapeHtml(tier.description)}</p>
            <ul>${tier.features.map((f) => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
            <button type="button">${escapeHtml(tier.cta)}</button>
          </article>`).join('')}
      </div>
    </section>`;
}
