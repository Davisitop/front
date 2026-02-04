import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MOCK_DESTINOS } from '../data/mock-data';

export interface Destino {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  ubicacion: string;
  horario: string;
  entrada: string;
}

@Injectable({
  providedIn: 'root',
})
export class TurismoService {
  getDestinos(): Observable<Destino[]> {
    // Simula una llamada HTTP con un retraso de 1 segundo
    return of(MOCK_DESTINOS).pipe(delay(1000));
  }

  getDestino(id: number): Observable<Destino | undefined> {
    const destino = MOCK_DESTINOS.find((d) => d.id === id);
    return of(destino).pipe(delay(500));
  }
}
