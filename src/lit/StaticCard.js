import { LitElement, html } from 'lit';

export class StaticCard extends LitElement {
  static properties = {
    title: { type: String },
    message: { type: String },
  };

  render() {
    return html`
      <div style="border: 1px solid cyan; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <h3 style="color: cyan;">${this.title}</h3>
        <p>${this.message}</p>
        <small>Rendered with Lit (Native Web Component)</small>
      </div>
    `;
  }
}

customElements.define('lit-static-card', StaticCard);
