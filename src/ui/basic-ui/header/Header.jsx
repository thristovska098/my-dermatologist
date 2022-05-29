// @flow
import * as React from 'react';

// Utils
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import { Button } from '@mui/material';
import { ButtonContainer, StyledLogo } from './styles';
import Navigation from '../../common/navigation/Navigation';

// Types
import type { PageType } from '../../common/navigation/Navigation';

// Constants
import { LOG_OUT_LABEL } from '../../labels';
import { BASE_ROUTE } from '../../../routing/pages';

// Action
import { setIsUserLoggedIn } from '../../../redux/actions';

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
  onChangeFunction,
  hasValidationErrors,
  shouldLetLogOut = true,
}: Props): React.Node => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOutButtonClick = () => {
    // TODO: when the BE is done make call to the service
    if (shouldLetLogOut) {
      dispatch(setIsUserLoggedIn(false));
      history.push(BASE_ROUTE);
    } else {
      onChangeFunction();
    }
  };

  return (
    <>
      <StyledLogo>
        <ButtonContainer>
          <Button onClick={handleLogOutButtonClick}>{LOG_OUT_LABEL}</Button>
        </ButtonContainer>
      </StyledLogo>
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
