import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SohoComponentsModule } from 'ids-enterprise-ng';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SohoComponentsModule, FormsModule],
  template: `
    <label soho-label for="dropdown">Color</label>
    <select id="dropdown" soho-dropdown [(ngModel)]="color">
      @for (color of colors; track color.id) {
      <option [ngValue]="color.value" [attr.data-icon]="toIcon(color)" [attr.data-hex]="color.value">
        {{color.name}}
      </option>
      }
    </select>
  `,
})
export class AppComponent {
  colors = Object.values(Soho.theme.personalizationColors());
  color = this.colors[0].value;

  toIcon(color: SohoPersonalizationColor): string {
    return JSON.stringify({
      icon: "swatch",
      class: `${color.backgroundColorClass} swatch}`,
    })
  }
}
