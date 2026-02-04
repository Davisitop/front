import { Destino } from '../services/turismo.service';

export const MOCK_USERS = [
  {
    id: 1,
    email: 'admin@example.com',
    password: '1234',
    nombre: 'Admin',
  },
];

export const MOCK_DESTINOS: Destino[] = [
  {
    id: 1,
    titulo: 'Centro Histórico de Quito',
    descripcion:
      'El corazón de la ciudad y el centro histórico mejor conservado de América Latina.',
    imagen: 'https://via.placeholder.com/400x300.png?text=Centro+Historico',
    ubicacion: 'Centro de Quito',
    horario: 'Siempre abierto',
    entrada: 'Gratuita',
  },
  {
    id: 2,
    titulo: 'Teleférico de Quito',
    descripcion:
      'Disfruta de vistas espectaculares de la ciudad y los volcanes circundantes desde Cruz Loma.',
    imagen: 'https://via.placeholder.com/400x300.png?text=Teleferico',
    ubicacion: 'Faldas del Pichincha',
    horario: '9:00 AM - 8:00 PM',
    entrada: '$8.50 Adultos',
  },
  {
    id: 3,
    titulo: 'La Mitad del Mundo',
    descripcion:
      'Párate en ambos hemisferios al mismo tiempo en este icónico monumento a la línea ecuatorial.',
    imagen: 'https://via.placeholder.com/400x300.png?text=Mitad+del+Mundo',
    ubicacion: 'San Antonio de Pichincha',
    horario: '9:00 AM - 6:00 PM',
    entrada: '$5.00 Adultos',
  },
  {
    id: 4,
    titulo: 'Parque Nacional Cotopaxi',
    descripcion:
      'Hogar de uno de los volcanes activos más altos del mundo. Ideal para senderismo y vistas impresionantes.',
    imagen: 'https://via.placeholder.com/400x300.png?text=Cotopaxi',
    ubicacion: 'A 50 km de Quito',
    horario: '8:00 AM - 3:00 PM',
    entrada: 'Gratuita (con registro)',
  },
  {
    id: 5,
    titulo: 'Mercado Artesanal La Mariscal',
    descripcion:
      'Encuentra artesanías, textiles y recuerdos únicos de la cultura ecuatoriana.',
    imagen: 'https://via.placeholder.com/400x300.png?text=Mercado+Artesanal',
    ubicacion: 'La Mariscal',
    horario: '10:00 AM - 7:00 PM',
    entrada: 'Gratuita',
  },
];
