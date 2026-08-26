import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VarNavComponent } from './var-nav/var-nav.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, VarNavComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

}
