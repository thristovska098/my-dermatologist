import { APPOINTMENT_STATUSES } from '../../client-ui/home-page/constants';
import doctor from '../../../assets/icons/doctor.png';
import patient from '../../../assets/icons/patient-photo.jpeg';

export const listOfAppointments = [
  {
    appointmentId: '23242',
    title: 'Akni na grb',
    appointmentStatus: APPOINTMENT_STATUSES.WAITING_FOR_REVIEW,
    createdOnDate: '11-11-2022',
    medicinePrescription: '',
    medicalDiagnosis: '',
    treatment: '',
    description: 'Description text',
    images: [doctor, patient, doctor, patient, doctor],
    patient: {
      name: 'Marija',
      lastName: 'Marijovska',
      ssn: '123456789123',
      dateOfBirth: '12-12-1998',
      gender: 'Female',
      contactInformation: {
        phone: '070111222',
        email: 'test@gmail.com',
      },
    },
  },
  {
    appointmentId: '23234',
    title: 'Akni na grb',
    appointmentStatus: APPOINTMENT_STATUSES.COMPLETED,
    createdOnDate: '11-11-2022',
    medicinePrescription: '',
    medicalDiagnosis: '',
    treatment: '',
    description: 'Description text',
    images: [doctor, patient, doctor, patient, doctor],
    patient: {
      name: 'Marija',
      lastName: 'Marijovska',
      ssn: '123456789123',
      dateOfBirth: '12-12-1998',
      gender: 'Female',
      contactInformation: {
        phone: '070111222',
        email: 'test@gmail.com',
      },
    },
  },
  {
    appointmentId: '23244',
    title: 'Akni na grb',
    appointmentStatus: APPOINTMENT_STATUSES.WAITING_FOR_REVIEW,
    createdOnDate: '11-11-2022',
    medicinePrescription: '',
    medicalDiagnosis: '',
    treatment: '',
    description: 'Description text',
    images: [doctor, patient, doctor, patient, doctor],
    patient: {
      name: 'Marija',
      lastName: 'Marijovska',
      ssn: '123456789123',
      dateOfBirth: '12-12-1998',
      gender: 'Female',
      contactInformation: {
        phone: '070111222',
        email: 'test@gmail.com',
      },
    },
  },
];
