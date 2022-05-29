// @flow
import * as React from 'react';

// Utils
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { CardContainer, CardItemsContainer } from '../styles';
import SignInSignUpModal from '../sign-in-sign-up-modal/SignInSignUpModal';

// Images
/* $FlowIgnore */
import patient from '../../../assets/icons/patient-photo.jpeg';
/* $FlowIgnore */
import doctor from '../../../assets/icons/doctor.png';

// Constants
import { USER_TYPE } from '../../constants';
import { DOCTOR_ENTRY_CONTENT, PATIENT_ENTRY_CONTENT } from '../../labels';

// Actions
import { setIsSignInSignUpModalOpen, setUserType } from '../../../redux/actions';
import { getIsSignInSignUpModalOpen } from '../../../redux/selectors';

type Props = {
  isPatient?: boolean,
};

const CardComponent = ({ isPatient = false }: Props): React.Node => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(getIsSignInSignUpModalOpen);

  const { firstLine, content, buttonText, alternativeText } = isPatient ? PATIENT_ENTRY_CONTENT : DOCTOR_ENTRY_CONTENT;
  const image = isPatient ? patient : doctor;
  const userType = isPatient ? USER_TYPE.PATIENT : USER_TYPE.DOCTOR;

  const handleButtonClick = () => {
    dispatch(setUserType(userType));
    dispatch(setIsSignInSignUpModalOpen(true));
  };

  return (
    <>
      {isModalOpen && <SignInSignUpModal />}
      <CardContainer>
        <Card style={{ height: '520px' }} onClick={handleButtonClick}>
          <CardContent>
            <CardItemsContainer isPatient={isPatient}>
              <Typography sx={{ fontSize: 18 }} color="text.primary">
                <b>{firstLine}</b>
                <br />
                {content}
              </Typography>
              <CardMedia component="img" width="150" image={image} alt={alternativeText} />
            </CardItemsContainer>
          </CardContent>
          <CardActions>
            <Button size="large">{buttonText}</Button>
          </CardActions>
        </Card>
      </CardContainer>
    </>
  );
};

export default CardComponent;
