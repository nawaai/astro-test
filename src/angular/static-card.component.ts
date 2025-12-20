import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-static-card',
  standalone: true,
  template: `
    <div>
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <small>Rendered statically with Zoneless Angular</small>
    </div>
  `,
})
export class StaticCardComponent {
  @Input() title = '';
  @Input() message = '';
}