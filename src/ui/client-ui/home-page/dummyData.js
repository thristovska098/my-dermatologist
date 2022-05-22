import { APPOINTMENT_STATUSES } from './constants';

export const listOfAppointments = [
  {
    appointmentId: '2324',
    title: 'Akni na grb',
    appointmentStatus: APPOINTMENT_STATUSES.COMPLETED,
    createdOnDate: '11-11-2022',
    medicinePrescription: 'Lek1, Lek2',
    medicalDiagnosis: 'Acne hormonales',
    treatment: 'Nanesi od lek1 nautro, nanesi od lek2 navecer na cista koza',
    doctor: {
      name: 'Marija',
      lastName: 'Marijovska',
      officeInformation: {
        address: {
          city: 'Bitola',
          zipCode: 7000,
          street: 'Test street',
          streetNumber: '1',
          country: 'Macedonia',
        },
        phone: '070111222',
        email: 'test@gmail.com',
      },
    },
  },
  {
    appointmentId: 'sadadasdas',
    title: 'Akni na grb -test',
    appointmentStatus: APPOINTMENT_STATUSES.WAITING_FOR_REVIEW,
    createdOnDate: '12-11-2022',
    medicinePrescription: 'Lek1, Lek2',
    medicalDiagnosis: 'Acne test',
    treatment: 'Nanesi od lek1 nautro, nanesi od lek2 navecer na cista koza',
    doctor: {
      name: 'Marija',
      lastName: 'Marijovska',
      officeInformation: {
        address: {
          city: 'Bitola',
          zipCode: 7000,
          street: 'Test street',
          streetNumber: '1',
          country: 'Macedonia',
        },
        phone: '070111222',
        email: 'test@gmail.com',
      },
    },
  },
  {
    appointmentId: 'sadadasdas',
    title: 'Akni na grb -test',
    appointmentStatus: APPOINTMENT_STATUSES.COMPLETED,
    createdOnDate: '12-11-2022',
    medicinePrescription: 'Lek1, Lek2',
    medicalDiagnosis: 'Acne test',
    treatment: 'Nanesi od lek1 nautro, nanesi od lek2 navecer na cista koza',
    doctor: {
      name: 'Marija',
      lastName: 'Marijovska',
      officeInformation: {
        address: {
          city: 'Bitola',
          zipCode: 7000,
          street: 'Test street',
          streetNumber: '1',
          country: 'Macedonia',
        },
        phone: '070111222',
        email: 'test@gmail.com',
      },
    },
  },
  {
    appointmentId: 'sadadasdas',
    title: 'Akni na grb -test',
    appointmentStatus: APPOINTMENT_STATUSES.WAITING_FOR_REVIEW,
    createdOnDate: '12-11-2022',
    medicinePrescription: 'Lek1, Lek2',
    medicalDiagnosis: 'Acne test',
    treatment: 'Nanesi od lek1 nautro, nanesi od lek2 navecer na cista koza',
    doctor: {
      name: 'Marija',
      lastName: 'Marijovska',
      officeInformation: {
        address: {
          city: 'Bitola',
          zipCode: 7000,
          street: 'Test street',
          streetNumber: '1',
          country: 'Macedonia',
        },
        phone: '070111222',
        email: 'test@gmail.com',
      },
    },
  },
];
