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
  patient: PersonalData,
};

export type Doctor = {
  code: string,
  doctor: PersonalData,
  officeInformation: ContactInformation,
};

export type AppointmentStatus = 'Completed' | 'Waiting for review';

export type PatientVirtualVisitForm = {
  doctorCode: string,
  title: string,
  description: string,
  date: string,
  images: Array<Object>,
  createdOnDate: string,
  appointmentStatus: AppointmentStatus, // WAITING FOR REVIEW, COMPLETED
  patientSsn: string,
};

export type Action = {
  type: string,
  [x: string]: any,
};

export type Reducer<S = any, A = Action> = (state: S, action: A) => S;
