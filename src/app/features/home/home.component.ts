import { Component } from '@angular/core';
import { CardIdeasComponent } from '../../shared/components/card-ideas/card-ideas.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-home',
  imports: [CardIdeasComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
