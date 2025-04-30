import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  imports: [NgIf, DecimalPipe],
})
export class DetailsComponent {
  @Input() country: any;
  @Output() close = new EventEmitter<void>();

  get languages(): string[] {
    return this.country?.languages
      ? Object.values(this.country.languages)
      : [];
  }

  onClose() {
    this.close.emit();
  }
}
