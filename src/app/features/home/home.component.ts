import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CardIdeasComponent } from '../../shared/components/card-ideas/card-ideas.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';


@Component({
  selector: 'app-home',
  imports: [CardIdeasComponent, ButtonComponent, AnimateOnScrollModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
// @ViewChild('handsSection')
//     handsSection!: ElementRef;

//     progress = 0;

//     get leftTransform(): string {

//         const start = -1400;
//         const end = -700;

//         const x = start + (end - start) * this.progress;

//         return `translateX(${x}px)`;
//     }

//     get rightTransform(): string {

//         const start = 900;
//         const end = 450;

//         const x = start + (end - start) * this.progress;

//         return `translateX(${x}px)`;
//     }


//     @HostListener('window:scroll')
//     onScroll() {

//         if (!this.handsSection) return;

//         const section =
//             this.handsSection.nativeElement
//                 .getBoundingClientRect();

//         const scrollDistance =
//             section.height - window.innerHeight;

//         const current =
//             -section.top;

//         this.progress =
//             Math.min(
//                 Math.max(current / scrollDistance, 0),
//                 1
//             );
//     }
}
