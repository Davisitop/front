import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones';
import { MapaComponent } from './components/mapa/mapa';
import { LoginComponent } from './components/login/login';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', redirectTo: 'panel-usuario', pathMatch: 'full' },
  { path: 'panel-usuario', component: UserDashboardComponent, canActivate: [authGuard] },
  { path: '', component: HomeComponent },
  { path: 'recomendaciones', component: RecomendacionesComponent },
  { path: 'mapa', component: MapaComponent },
  { path: '**', redirectTo: '' }
];
