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
  styleUrls: ['./user-dashboard.css'],
})
export class UserDashboardComponent implements OnInit {
  private authService = inject(AuthService);
  private turismoService = inject(TurismoService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  destinos: Destino[] = [];
  isLoading = true;
  userName = '';
  // Use a local placeholder served from public/images/placeholder.png
  // (public is configured as the assets root in angular.json)
  placeholder = 'images/placeholder.png';

  ngOnInit(): void {
    const user = this.authService.user?.() as any;
    this.userName = user?.nombre || 'Usuario';

    this.turismoService.getDestinos().subscribe({
      next: (data) => {
        this.destinos = data;
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open('Error cargando destinos. Intente nuevamente.', 'Cerrar', { duration: 5000 });
        this.isLoading = false;
      },
    });
  }

  verDetalle(destino: Destino): void {
    this.snackBar.open(`${destino.titulo} - ${destino.ubicacion}`, 'Cerrar', { duration: 4000 });
    console.log('Destino seleccionado:', destino);
  }

  onImgError(event: any) {
    const img: HTMLImageElement | null = event?.target ?? null;
    if (!img) return;
    // If already set to placeholder, switch to an embedded data-URL fallback
    const current = (img.getAttribute('src') || img.src || '').toString();
    if (current.endsWith('placeholder.png')) {
      // 1x1 transparent PNG data URI as last-resort fallback
      img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=';
      return;
    }

    img.src = this.placeholder;
  }
}
