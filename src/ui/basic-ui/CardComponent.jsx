// @flow
import * as React from 'react';

// Utils
import { useDispatch } from 'react-redux';

// Components
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { CardContainer, CardItemsContainer } from './styles';

// Images
import patient from '../../assets/icons/patient-photo.jpeg';
import doctor from '../../assets/icons/doctor.png';

// Constants
import { DOCTOR_ENTRY_CONTENT, PATIENT_ENTRY_CONTENT, USER_TYPE } from './constants';

// Actions
import { setIsModalOpen, setUserType } from '../../redux/actions';

type Props = {
  isPatient?: boolean,
};

const CardComponent = ({ isPatient = false }: Props): React.Node => {
  const dispatch = useDispatch();
  const { firstLine, content, buttonText, alternativeText } = isPatient ? PATIENT_ENTRY_CONTENT : DOCTOR_ENTRY_CONTENT;
  const image = isPatient ? patient : doctor;
  const userType = isPatient ? USER_TYPE.PATIENT : USER_TYPE.DOCTOR;

  const handleButtonClick = () => {
    dispatch(setIsModalOpen(true));
    dispatch(setUserType(userType));
  };

  return (
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
  );
};

export default CardComponent;
