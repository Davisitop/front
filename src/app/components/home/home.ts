import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // <-- IMPORTANTE
import { MatIconModule } from '@angular/material/icon';     // <-- IMPORTANTE
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule], // <-- agrégalos aquí
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}
export { HomeComponent as Home };