export const getCitiesList = (state) => state?.citiesList?.cities;
export const getUserType = (state) => state?.userInformation?.userType;
export const getUserId = (state) => state?.userInformation?.userId;
export const getIsSignInSignUpModalOpen = (state) => state?.common?.isSignInSignUpModalOpen;
export const getIsPaymentModalOpen = (state) => state?.common?.isPaymentModalOpen;
export const getIsPaymentOutcomeModalOpen = (state) => state?.common?.isPaymentOutcomeModalOpen;
export const getModalOpenedForAppointmentId = (state) => state?.common?.modalOpenedForAppointmentId;
