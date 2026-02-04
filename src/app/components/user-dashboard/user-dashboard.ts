import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { TurismoService, Destino } from '../../services/turismo.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboardComponent implements OnInit {
  private authService = inject(AuthService);
  private turismoService = inject(TurismoService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  destinos: Destino[] = [];
  isLoading = true;
  userName = '';

  ngOnInit(): void {
    // Obtener nombre de usuario
    const user = this.authService.user();
    this.userName = user?.nombre || 'Usuario';

    // Cargar destinos
    this.turismoService.getDestinos().subscribe({
      next: (data) => {
        this.destinos = data;
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open(
          'Error cargando destinos. Intente nuevamente.',
          'Cerrar',
          { duration: 5000 }
        );
        this.isLoading = false;
      },
    });
  }

  verDetalle(destino: Destino): void {
    this.snackBar.open(
      `${destino.titulo} - ${destino.ubicacion}`,
      'Cerrar',
      { duration: 4000 }
    );
    console.log('Destino seleccionado:', destino);
  }
}
