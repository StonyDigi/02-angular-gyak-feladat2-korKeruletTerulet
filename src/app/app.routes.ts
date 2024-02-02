import { Routes } from '@angular/router';
import { KorkeruletteruletComponent } from './korkeruletterulet/korkeruletterulet.component';

export const routes: Routes = [
    {path: 'korkeruletterulet', component: KorkeruletteruletComponent},
    {path: '', redirectTo: '/korkeruletterulet', pathMatch: 'full'},
    {path: '**', redirectTo: '/korkeruletterulet', pathMatch: 'full'}
];
