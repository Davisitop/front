import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  loginForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  isLoading = false;
  errorMessage = '';

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
      this.snackBar.open(
        '❌ Formulario incompleto. Verifica los datos.',
        'Cerrar',
        { duration: 5000 }
      );
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const { email, password, nombre } = this.loginForm.value;

    // Simular delay de red
    setTimeout(() => {
      if (this.authService.login(email || '', password || '', nombre || '')) {
        this.snackBar.open(
          `✓ ¡Bienvenido, ${nombre}!`,
          'Cerrar',
          { duration: 3000 }
        );
        this.router.navigate(['/panel-usuario']);
      } else {
        this.errorMessage =
          'Credenciales inválidas. Intenta con otro usuario.';
        this.snackBar.open(
          '❌ Email o contraseña incorrectos. Intenta de nuevo.',
          'Cerrar',
          { duration: 5000, panelClass: ['error-snackbar'] }
        );
        this.isLoading = false;
      }
    }, 600);
  }

  get nombre() {
    return this.loginForm.get('nombre');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
