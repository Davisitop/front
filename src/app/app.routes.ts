import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { DestinosComponent } from './components/destinos/destinos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'destinos',
    component: DestinosComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'panel-usuario',
    component: UserDashboardComponent,
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: '**',
    redirectTo: '',
  },
];
