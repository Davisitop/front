import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TurismoService } from '../../services/turismo.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  user: any;
  destinos: any[] = [];
  loading = true;
  reservas: any[] = [];

  constructor(
    private authService: AuthService,
    private turismoService: TurismoService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.loadDestinos();
  }

  loadDestinos(): void {
    this.turismoService.getDestinos().subscribe(
      (data) => {
        this.destinos = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar destinos', error);
        this.loading = false;
      }
    );
  }

  reservar(destino: any): void {
    this.reservas.push(destino);
    console.log('Destino reservado:', destino);
  }

  logout(): void {
    this.authService.logout();
  }
}
