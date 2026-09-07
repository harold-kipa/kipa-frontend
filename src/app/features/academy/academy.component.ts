import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { CardIdeasComponent } from "../../shared/components/card-ideas/card-ideas.component";

@Component({
  selector: 'app-academy',
  imports: [ButtonComponent, CardIdeasComponent],
  templateUrl: './academy.component.html',
  styleUrl: './academy.component.scss',
})
export class AcademyComponent {

}
