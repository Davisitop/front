import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of, delay } from 'rxjs';
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
  // Simular llamada HTTP con delay
  getDestinos(): Observable<Destino[]> {
    return of(MOCK_DESTINOS).pipe(delay(800));
  }

  // Obtener destino por ID
  getDestinoById(id: number): Observable<Destino | undefined> {
    return of(MOCK_DESTINOS.find((d) => d.id === id)).pipe(delay(500));
  }

  // Simular búsqueda
  buscarDestinos(termino: string): Observable<Destino[]> {
    const resultados = MOCK_DESTINOS.filter(
      (d) =>
        d.titulo.toLowerCase().includes(termino.toLowerCase()) ||
        d.descripcion.toLowerCase().includes(termino.toLowerCase()) ||
        d.ubicacion.toLowerCase().includes(termino.toLowerCase())
    );
    return of(resultados).pipe(delay(600));
  }
}
