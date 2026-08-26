import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-ideas',
  imports: [],
  templateUrl: './card-ideas.component.html',
  styleUrl: './card-ideas.component.scss',
})
export class CardIdeasComponent {
  @Input() type: string = '';
  @Input() description: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
}
