import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-persons',
  imports: [CommonModule],
  templateUrl: './card-persons.component.html',
  styleUrl: './card-persons.component.scss',
})
export class CardPersonsComponent {
  @Input() urlImg: string = '';
  @Input() align: boolean = false;
  @Input() name: string = '';
  @Input() occupation: string = '';
  @Input() label: any[] = [];
  @Input() description: string = '';
}
