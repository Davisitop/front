import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { MOCK_USERS } from '../data/mock-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(
    null
  );
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    // Revisa si hay un usuario en localStorage al iniciar
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(email: string, password: string): Observable<any> {
    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      return of(user).pipe(
        delay(1000), // Simula latencia de red
        tap(() => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
    } else {
      return throwError(() => new Error('Usuario o contraseña incorrectos')).pipe(
        delay(1000)
      );
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }
}
