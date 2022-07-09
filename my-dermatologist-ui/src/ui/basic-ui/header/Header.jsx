// @flow
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { getUserType } from '../../../redux/selectors';
import { USER_TYPE } from '../../constants';
import { ButtonContainer, LogoAndButtonsContainer, StyledLogo } from './styles';
import Navigation from '../../common/navigation/Navigation';
import type { PageType } from '../../common/navigation/Navigation';
import { EDIT_PERSONAL_DATA_LABEL, LOG_OUT_LABEL } from '../../labels';
import { BASE_ROUTE, PAGES_FULL_ROUTES } from '../../../routing/pages';
import {
  setDoctorCreditCardData,
  setDoctorOfficeData,
  setDoctorPersonalData,
  setIsUserLoggedIn,
} from '../../../redux/actions';

type Props = {
  pages?: Array<PageType>,
  initialPage?: number,
  onChangeFunction?: Function,
  hasValidationErrors?: boolean,
  showEditPersonalData?: boolean,
};

const Header = ({
  pages,
  initialPage = 0,
  onChangeFunction = () => {},
  hasValidationErrors,
  showEditPersonalData = false,
}: Props): React.Node => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userType = useSelector(getUserType);

  const handleLogOutButtonClick = useCallback(() => {
    onChangeFunction();

    if (!hasValidationErrors) {
      dispatch(setIsUserLoggedIn(false));
      dispatch(setDoctorPersonalData({}));
      dispatch(setDoctorCreditCardData({}));
      dispatch(setDoctorOfficeData({}));
      history.push(BASE_ROUTE);
    }
  }, [dispatch, history, onChangeFunction, hasValidationErrors]);

  const handleEditPersonalData = () => {
    onChangeFunction();

    if (!hasValidationErrors) {
      if (userType.toLowerCase() === USER_TYPE.DOCTOR) {
        history.push(PAGES_FULL_ROUTES.REGISTER_DOCTOR_PERSONAL_DATA);
      } else {
        history.push(PAGES_FULL_ROUTES.REGISTER_PATIENT);
      }
    }
  };

  return (
    <>
      <LogoAndButtonsContainer>
        <StyledLogo />
        <ButtonContainer>
          {showEditPersonalData && (
            <Button onClick={handleEditPersonalData} variant="outlined">
              {EDIT_PERSONAL_DATA_LABEL}
            </Button>
          )}
          <Button onClick={handleLogOutButtonClick} variant="outlined">
            {LOG_OUT_LABEL}
          </Button>
        </ButtonContainer>
      </LogoAndButtonsContainer>
      {pages && (
        <Navigation
          pages={pages}
          initialPage={initialPage}
          onChangeFunction={onChangeFunction}
          hasValidationErrors={hasValidationErrors}
        />
      )}
    </>
  );
};

export default Header;
