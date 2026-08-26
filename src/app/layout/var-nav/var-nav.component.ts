import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-var-nav',
  imports: [CommonModule],
  templateUrl: './var-nav.component.html',
  styleUrl: './var-nav.component.scss',
})
export class VarNavComponent {

  menuOpen: boolean = false;

}
