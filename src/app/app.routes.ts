import { Routes } from '@angular/router';
import { VarNavComponent } from './features/var-nav/var-nav.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () =>
            import('./features/var-nav/var-nav.component').then(m => m.VarNavComponent),
        
    },
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full',
    },
    // {
    //     path: '**',
    //     redirectTo: '/auth',
    // },
];
