export interface Destino {
  id: number;
  title: string;
  description: string;
  image: string;
  tag?: string;
  travelTime?: string;
}

export const DESTINOS: Destino[] = [
  {
    id: 1,
    title: 'Centro Histórico',
    description: 'Calles planas, muchas bancas para descansar y baños públicos cerca.',
    image: 'images/destino1.png',
    tag: 'Accesible',
    travelTime: 'A 15 min de aquí'
  },
  {
    id: 2,
    title: 'Basílica del Voto Nacional',
    description: 'Arquitectura neogótica y accesos con ascensor en algunos puntos.',
    image: 'images/destino2.png',
    tag: 'Histórico',
    travelTime: 'A 10 min de aquí'
  },
  {
    id: 3,
    title: 'Parque La Carolina',
    description: 'Amplios senderos y zonas de sombra para caminar con tranquilidad.',
    image: 'images/destino3.png',
    tag: 'Naturaleza',
    travelTime: 'A 20 min de aquí'
  },
  {
    id: 4,
    title: 'Mitad del Mundo',
    description: 'Punto turístico emblemático con áreas para descansar y vistas.',
    image: 'images/destino4.png',
    tag: 'Panorámico',
    travelTime: 'A 45 min de aquí'
  },
  {
    id: 5,
    title: 'Mirador de Guápulo',
    description: 'Mirador con accesos peatonales y áreas para sentarse.',
    image: 'images/destino5.png',
    tag: 'Mirador',
    travelTime: 'A 30 min de aquí'
  }
];
// Mock usuarios para autenticación
export const MOCK_USERS = [
  {
    email: 'admin@quito.ec',
    password: '1234',
    nombre: 'Admin Turismo',
  },
  {
    email: 'usuario@example.com',
    password: '5678',
    nombre: 'Juan Pérez',
  },
  {
    email: 'turista@example.com',
    password: 'abcd',
    nombre: 'María García',
  },
];

// Mock destinos turísticos de Quito
export const MOCK_DESTINOS = [
  {
    id: 1,
    titulo: 'Centro Histórico de Quito',
    descripcion:
      'Patrimonio cultural de la humanidad con arquitectura colonial. Visita la Basílica del Voto Nacional, la Catedral Metropolitana y las plazas históricas.',
    imagen: '/assets/images/centroHistorioco.svg',
    ubicacion: 'Centro Histórico, Quito',
    horario: '08:00 - 17:00',
    entrada: 'Gratuita',
  },
  {
    id: 2,
    titulo: 'Basílica del Voto Nacional',
    descripcion:
      'Imponente iglesia neogótica. Sube a las torres para vistas panorámicas de la ciudad y disfruta de la arquitectura más bella de Quito.',
    imagen: '/assets/images/centroHistorioco.svg',
    ubicacion: 'García Moreno y Sucre',
    horario: '09:00 - 16:30',
    entrada: '$4',
  },
  {
    id: 3,
    titulo: 'Teleférico de Quito',
    descripcion:
      'Sube 4 km para disfrutar de vistas espectaculares de la ciudad y los volcanes nevados circundantes. Ideal para observar la geografía quiteña.',
    imagen: '/assets/images/Bienvenidoaquito.svg',
    ubicacion: 'Av. Occidental, Pichincha',
    horario: '09:00 - 18:00',
    entrada: '$12',
  },
  {
    id: 4,
    titulo: 'Parque Metropolitano',
    descripcion:
      'Pulmón verde de Quito con 676 hectáreas. Camina por senderos naturales y disfruta de la flora nativa y vistas de la ciudad.',
    imagen: '/assets/images/Bienvenidoaquito.svg',
    ubicacion: 'Sur de Quito',
    horario: '06:00 - 18:00',
    entrada: 'Gratuita',
  },
  {
    id: 5,
    titulo: 'Monasterio de San Francisco',
    descripcion:
      'Joya del arte colonial con iglesia, convento y museo. Observa artefactos religiosos, arte colonial y la arquitectura del siglo XVI.',
    imagen: '/assets/images/centroHistorioco.svg',
    ubicacion: 'Plaza de San Francisco',
    horario: '10:00 - 17:00',
    entrada: '$3',
  },
  {
    id: 6,
    titulo: 'Mitad del Mundo',
    descripcion:
      'Monumento ubicado en la línea ecuatorial. Visita a 22 km al norte para ver donde se cruzan los hemisferios norte y sur.',
    imagen: '/assets/images/MitadWord.svg',
    ubicacion: 'Pichincha (Línea Ecuatorial)',
    horario: '09:00 - 17:00',
    entrada: '$10',
  },
];
