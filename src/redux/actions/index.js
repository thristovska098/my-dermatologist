export const SET_CITIES = 'MY_DERMATOLOGIST@CONFIG.SET_CITIES';
export const SET_USER_TYPE = 'MY_DERMATOLOGIST@USER_INFORMATION.SET_USER_TYPE';
export const SET_IS_MODAL_OPEN = 'MY_DERMATOLOGIST@COMMON.SET_IS_MODAL_OPEN';

export function setCountries(cities) {
  return {
    type: SET_CITIES,
    cities,
  };
}

export function setUserType(userType) {
  return {
    type: SET_USER_TYPE,
    userType,
  };
}

export function setIsModalOpen(isModalOpen) {
  return {
    type: SET_IS_MODAL_OPEN,
    isModalOpen,
  };
}
