import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';
import { of, delay } from 'rxjs';
import { MOCK_USERS } from '../data/mock-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSignal = signal(false);
  private userSignal = signal<{ email: string; nombre: string } | null>(null);

  isAuthenticated = this.isAuthenticatedSignal.asReadonly();
  user = this.userSignal.asReadonly();

  isLoggedIn = computed(() => this.isAuthenticatedSignal());

  // Simulación de login con validación contra mock data
  login(email: string, password: string, nombre: string): boolean {
    // Validación básica
    if (!email || !password) {
      return false;
    }

    // Validar contra mock users
    const foundUser = MOCK_USERS.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      return false;
    }

    // Simulación de autenticación exitosa
    this.isAuthenticatedSignal.set(true);
    this.userSignal.set({ email, nombre: foundUser.nombre });

    // Guardar estado en sessionStorage (persistencia básica)
    sessionStorage.setItem(
      'auth_user',
      JSON.stringify({ email, nombre: foundUser.nombre })
    );

    return true;
  }

  logout(): void {
    this.isAuthenticatedSignal.set(false);
    this.userSignal.set(null);
    sessionStorage.removeItem('auth_user');
  }

  // Restaurar sesión al iniciar la app
  restoreSession(): void {
    const savedUser = sessionStorage.getItem('auth_user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        this.isAuthenticatedSignal.set(true);
        this.userSignal.set(user);
      } catch {
        this.logout();
      }
    }
  }
}
