import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CardIdeasComponent } from "../../shared/components/card-ideas/card-ideas.component";

@Component({
  selector: 'app-solutions',
  imports: [ButtonComponent, CardIdeasComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {

}
