import { Recervaciones } from "src/app/interfaces/recervaciones-inteface";

export const recervacionesLista: Recervaciones[] = [
  {
    id: 1,
    nombre: 'John Doe',
    email: 'johndoe@example.com',
    telefono: 123456789,
    fecha: new Date('2024-07-24'),
    hora: new Date('2024-07-24T19:00:00'),
    tipoHabitacion: 'Suite',
    solicitud: 'Mesa junto a la ventana'
  },
  {
    id: 2,
    nombre: 'Jane Smith',
    email: 'janesmith@example.com',
    telefono: 987654321,
    fecha: new Date('2024-07-25'),
    hora: new Date('2024-07-25T20:00:00'),
    tipoHabitacion: 'Habitación Doble',
    solicitud: 'Piso alto'
  },
  {
    id: 3,
    nombre: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    telefono: 112233445,
    fecha: new Date('2024-07-26'),
    hora: new Date('2024-07-26T18:30:00'),
    tipoHabitacion: 'Suite',
    solicitud: 'Cama extra'
  },
  {
    id: 4,
    nombre: 'Bob Brown',
    email: 'bobbrown@example.com',
    telefono: 556677889,
    fecha: new Date('2024-07-27'),
    hora: new Date('2024-07-27T21:00:00'),
    tipoHabitacion: 'Habitación Individual',
    solicitud: 'Vista al mar'
  }
]