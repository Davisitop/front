# Sistema de Autenticación - AppTurismo

## Descripción General

Sistema de login completo implementado con Angular 21 (sintaxis moderna), Signals y Angular Material, siguiendo la arquitectura de componentes standalone de tu proyecto.

## Archivos Creados

### 1. **Auth Service** - `src/app/services/auth.service.ts`
Gestor centralizado de estado de autenticación usando Signals.

**Características:**
- `isAuthenticated` - Signal readonly que indica si el usuario está autenticado
- `user` - Signal readonly con datos del usuario (email, nombre)
- `isLoggedIn` - Computed signal para acceso simplificado
- `login(email, password, nombre)` - Método de autenticación
- `logout()` - Cierra sesión
- `restoreSession()` - Restaura sesión desde sessionStorage al iniciar la app
- Inyección de dependencias con `inject()` (sintaxis moderna)

**Uso:**
```typescript
private authService = inject(AuthService);

// Verificar autenticación
if (this.authService.isAuthenticated()) {
  // Usuario autenticado
}

// Obtener datos del usuario
const user = this.authService.user();
```

### 2. **Login Component** - `src/app/components/login/`

#### login.ts
Componente standalone con validaciones reactivas.

**Características:**
- Formulario reactivo con validaciones (email, contraseña mínimo 6 caracteres)
- Estados de carga con spinner de Material
- Mensajes de error accesibles
- Inyección moderna con `inject()`
- Módulos Material incluidos: MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule

#### login.html
Template con:
- Card de Material centrada
- Form fields con iconos (person, mail, lock)
- Validaciones en tiempo real
- Spinner durante envío
- Mensajes de error con rol ARIA
- Diseño accesible para adultos mayores

#### login.css
Estilos coherentes con tu identidad visual:
- Colores: `--quito-blue` (#003366) y `--quito-gold` (#ffcc00)
- Fuentes: Montserrat (títulos) y Open Sans (cuerpo)
- Responsive design
- Accessibility focus visible
- Animaciones suaves

#### login.spec.ts
Suite de pruebas unitarias completa con Vitest.

### 3. **Rutas Actualizadas** - `src/app/app.routes.ts`
```typescript
{ path: 'login', component: LoginComponent },
```
La ruta `/login` se agregó al inicio para prioridad de matching.

### 4. **Header Actualizado** - `src/app/app.html`
Botón "INGRESAR" en oro con icono login, posicionado en la navegación principal.

### 5. **Estilos del Header** - `src/app/app.css`
`.login-button-header` con:
- Color de fondo dorado (#ffcc00)
- Texto azul Quito
- Hover con elevation y cambio de color
- Focus visible para accesibilidad
- Responsive para móviles

### 6. **Inicialización de Sesión** - `src/app/app.ts`
AppComponent ahora llama a `authService.restoreSession()` en `ngOnInit()` para mantener sesión activa.

### 7. **Estilos Globales** - `src/styles.css`
Agregadas personalizaciones globales de Material con las fuentes del proyecto.

---

## Flujo de Funcionamiento

1. **Usuario llega a la app** → AppComponent restaura sesión si existe
2. **Usuario hace clic en "INGRESAR"** → Navega a `/login`
3. **En el formulario de Login:**
   - Completa nombre, email y contraseña
   - Validaciones en tiempo real
   - Al enviar, se muestra spinner
   - `AuthService.login()` autentica y guarda en sessionStorage
4. **Post-autenticación:**
   - Se navega automáticamente al home
   - Las Signals se actualizan
   - La sesión persiste durante la navegación

---

## Especificaciones Técnicas Implementadas

✅ **Signals para Estado:** `isAuthenticated`, `user`, `isLoggedIn`  
✅ **Inyección Modern:** Uso de `inject()` en lugar de constructor  
✅ **Componentes Standalone:** Sin necesidad de NgModule  
✅ **Material Design:** Card, Form Fields, Buttons, Icons, Spinner  
✅ **Validaciones Reactivas:** Email, contraseña mínimo 6 caracteres  
✅ **Accesibilidad:** ARIA labels, focus visible, tamaños legibles  
✅ **Fuentes:** Montserrat (900 weight) y Open Sans (400/600)  
✅ **Colores:** `--quito-blue` y `--quito-gold` del proyecto  
✅ **Responsive:** Mobile, tablet, desktop  
✅ **Tests:** Suite completa en `login.spec.ts`  

---

## Próximos Pasos (Recomendaciones)

### Para Backend Real
```typescript
// En auth.service.ts - Reemplazar simulación
login(email: string, password: string, nombre: string): Promise<boolean> {
  return this.http.post<{token: string}>('/api/auth/login', {
    email, password, nombre
  }).pipe(
    tap(response => {
      sessionStorage.setItem('auth_token', response.token);
      this.isAuthenticatedSignal.set(true);
    }),
    catchError(() => {
      this.errorSignal.set('Credenciales inválidas');
      return of(false);
    })
  ).toPromise() as Promise<boolean>;
}
```

### Para Proteger Rutas
```typescript
// Crear guard en src/app/guards/auth.guard.ts
export const authGuard = (): boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};

// Usar en routes
{ path: 'recomendaciones', component: RecomendacionesComponent, canActivate: [authGuard] }
```

### Para Mostrar Usuario en Header
```html
<!-- En app.html -->
<div *ngIf="authService.isAuthenticated()" class="user-section">
  <span>Bienvenido, {{ authService.user()?.nombre }}</span>
  <button mat-button (click)="logout()">SALIR</button>
</div>
```

---

## Testing

Ejecutar tests del Login Component:
```bash
npm test -- login.spec.ts
```

---

## Notas de Seguridad

⚠️ **Advertencia:** Este sistema usa sessionStorage (no seguro para datos sensibles).  
Para producción:
- Implementar backend con JWT/tokens seguros
- Usar HttpOnly cookies
- Validar tokens en cada request
- Implementar refresh tokens

---

¡Tu sistema de login está listo para usar! 🚀
