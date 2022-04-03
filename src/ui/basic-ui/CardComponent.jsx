// @flow
import * as React from 'react';

// Utils
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { CardContainer, CardItemsContainer } from './styles';
import SignInSignUpModal from './sign-in/SignInSignUpModal';

// Images
import patient from '../../assets/icons/patient-photo.jpeg';
import doctor from '../../assets/icons/doctor.png';

// Constants
import { PAGES_FULL_ROUTES } from '../../routing/pages';
import { DOCTOR_ENTRY_CONTENT, PATIENT_ENTRY_CONTENT, USER_TYPE } from './constants';

// Actions
import { setUserType } from '../../redux/actions';
import { getUserType } from '../../redux/selectors';

type Props = {
  isPatient?: boolean,
};

const CardComponent = ({ isPatient = false }: Props): React.Node => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { firstLine, content, buttonText, alternativeText } = isPatient ? PATIENT_ENTRY_CONTENT : DOCTOR_ENTRY_CONTENT;
  const image = isPatient ? patient : doctor;
  const userType = isPatient ? USER_TYPE.PATIENT : USER_TYPE.DOCTOR;
  const redirectToProfile = isPatient
    ? PAGES_FULL_ROUTES.REGISTER_CLIENT
    : PAGES_FULL_ROUTES.REGISTER_DOCTOR_PERSONAL_DATA;

  const history = useHistory();
  const previousUserType = useSelector(getUserType);

  const handleButtonClick = () => {
    console.log(previousUserType !== userType);
    if (previousUserType === undefined || previousUserType !== userType) {
      dispatch(setUserType(userType));
      setIsModalOpen(true);
    } else {
      dispatch(setUserType(userType));
      history.push(redirectToProfile);
    }
  };

  return (
    <>
      {isModalOpen && <SignInSignUpModal setIsModalOpen={setIsModalOpen} />}
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
