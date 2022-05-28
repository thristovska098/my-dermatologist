export const getCitiesList = (state) => state?.citiesList?.cities;
export const getUserType = (state) => state?.userInformation?.userType;
export const getIsUserLoggedIn = (state) => state?.userInformation?.isUserLoggedIn;
export const getIsSignInSignUpModalOpen = (state) => state?.common?.isSignInSignUpModalOpen;
export const getIsPaymentModalOpen = (state) => state?.common?.isPaymentModalOpen;
export const getIsPaymentOutcomeModalOpen = (state) => state?.common?.isPaymentOutcomeModalOpen;
export const getModalOpenedForAppointmentId = (state) => state?.common?.modalOpenedForAppointmentId;
