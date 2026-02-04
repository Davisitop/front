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
    imagen:
      'https://images.unsplash.com/photo-1580649387425-e6a2c3e94c78?w=500&h=400&fit=crop',
    ubicacion: 'Centro Histórico, Quito',
    horario: '08:00 - 17:00',
    entrada: 'Gratuita',
  },
  {
    id: 2,
    titulo: 'Basílica del Voto Nacional',
    descripcion:
      'Imponente iglesia neogótica. Sube a las torres para vistas panorámicas de la ciudad y disfruta de la arquitectura más bella de Quito.',
    imagen:
      'https://images.unsplash.com/photo-1584574694223-e85bd69c0b49?w=500&h=400&fit=crop',
    ubicacion: 'García Moreno y Sucre',
    horario: '09:00 - 16:30',
    entrada: '$4',
  },
  {
    id: 3,
    titulo: 'Teleférico de Quito',
    descripcion:
      'Sube 4 km para disfrutar de vistas espectaculares de la ciudad y los volcanes nevados circundantes. Ideal para observar la geografía quiteña.',
    imagen:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    ubicacion: 'Av. Occidental, Pichincha',
    horario: '09:00 - 18:00',
    entrada: '$12',
  },
  {
    id: 4,
    titulo: 'Parque Metropolitano',
    descripcion:
      'Pulmón verde de Quito con 676 hectáreas. Camina por senderos naturales y disfruta de la flora nativa y vistas de la ciudad.',
    imagen:
      'https://images.unsplash.com/photo-1469227900611-bab228ccb347?w=500&h=400&fit=crop',
    ubicacion: 'Sur de Quito',
    horario: '06:00 - 18:00',
    entrada: 'Gratuita',
  },
  {
    id: 5,
    titulo: 'Monasterio de San Francisco',
    descripcion:
      'Joya del arte colonial con iglesia, convento y museo. Observa artefactos religiosos, arte colonial y la arquitectura del siglo XVI.',
    imagen:
      'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=500&h=400&fit=crop',
    ubicacion: 'Plaza de San Francisco',
    horario: '10:00 - 17:00',
    entrada: '$3',
  },
  {
    id: 6,
    titulo: 'Mitad del Mundo',
    descripcion:
      'Monumento ubicado en la línea ecuatorial. Visita a 22 km al norte para ver donde se cruzan los hemisferios norte y sur.',
    imagen:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    ubicacion: 'Pichincha (Línea Ecuatorial)',
    horario: '09:00 - 17:00',
    entrada: '$10',
  },
];
