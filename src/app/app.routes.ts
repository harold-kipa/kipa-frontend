import { Routes } from '@angular/router';
import { VarNavComponent } from './layout/var-nav/var-nav.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/auth',
    //     pathMatch: 'full',
    // },
    {
        path: '',
        loadComponent: () =>
            import('./layout/layout.component').then(m => m.LayoutComponent),
            children: [
                    {
                        path: 'home',
                        loadComponent: () =>
                            import('./features/home/home.component').then(m => m.HomeComponent),
                        
                    },
                    {
                        path: 'nosotros',
                        loadComponent: () =>
                            import('./features/us/us.component').then(m => m.UsComponent),
                        
                    },
                    {
                        path: 'consultoria',
                        loadComponent: () =>
                            import('./features/consultancy/consultancy.component').then(m => m.ConsultancyComponent),
                        
                    },
                    {
                        path: '**',
                        redirectTo: '/home',
                    },
                ]
    },
    {
        path: '**',
        redirectTo: '',
    },
];
