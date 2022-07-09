// @flow
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { ButtonContainer, LogoAndButtonsContainer, StyledLogo } from './styles';
import Navigation from '../../common/navigation/Navigation';
import type { PageType } from '../../common/navigation/Navigation';
import { LOG_OUT_LABEL } from '../../labels';
import { BASE_ROUTE } from '../../../routing/pages';
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
  shouldLetLogOut?: boolean,
};

const Header = ({
  pages,
  initialPage = 0,
  onChangeFunction = () => {},
  hasValidationErrors,
  shouldLetLogOut = true,
}: Props): React.Node => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOutButtonClick = () => {
    if (shouldLetLogOut) {
      dispatch(setIsUserLoggedIn(false));
      dispatch(setDoctorPersonalData({}));
      dispatch(setDoctorCreditCardData({}));
      dispatch(setDoctorOfficeData({}));
      history.push(BASE_ROUTE);
    } else {
      onChangeFunction();
    }
  };

  return (
    <>
      <LogoAndButtonsContainer>
        <StyledLogo />
        <ButtonContainer>
          <Button onClick={handleLogOutButtonClick}>{LOG_OUT_LABEL}</Button>
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
