import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CardIdeasComponent } from '../../shared/components/card-ideas/card-ideas.component';

@Component({
  selector: 'app-community',
  imports: [ButtonComponent, CardIdeasComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {

}
