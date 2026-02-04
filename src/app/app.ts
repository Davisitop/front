import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterModule, 
    MatIconModule, 
    MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  private router = inject(Router);
  title = 'turismo-frontend';

  ngOnInit(): void {
    // Restaurar sesión al iniciar la aplicación
    this.authService.restoreSession();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
export { AppComponent as App };
