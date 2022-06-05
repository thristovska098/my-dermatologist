// @flow
export type Address = {
  city: string,
  zipCode: string,
  street: string,
  streetNumber: number,
  country: string,
};

export type ContactInformation = {
  address: Address,
  phone: string,
  email: string,
};

export type PersonalData = {
  name: string,
  lastName: string,
  ssn: number,
  dateOfBirth: string,
  gender: string,
  contactInformation: ContactInformation,
};

export type Patient = {
  ssn: number,
  personalData: PersonalData,
};

export type Doctor = {
  code: string,
  doctor: PersonalData,
  officeInformation: ContactInformation,
};

export type AppointmentStatus = 'Completed' | 'Waiting for review';

export type Appointment = {
  appointmentId: string,
  doctorCode: string,
  patientSsn: number,
  title: string,
  description: string,
  images: Array<Object>,
  createdOnDate: string,
  appointmentStatus: AppointmentStatus, // WAITING FOR REVIEW, COMPLETED
  medicalDiagnosis: string,
  medicalPrescription: string,
  treatment: string,
};

export type Action = {
  type: string,
  [x: string]: any,
};

export type Reducer<S = any, A = Action> = (state: S, action: A) => S;
