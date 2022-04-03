// @flow
import * as React from 'react';

// Components
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { CardContainer, CardItemsContainer } from './styles';

// Images
import patient from '../../assets/icons/patient-photo.jpeg';
import doctor from '../../assets/icons/doctor.png';

// Constants
import { DOCTOR_ENTRY_CONTENT, PATIENT_ENTRY_CONTENT } from './constants';

type Props = {
  isPatient?: boolean,
};

const CardComponent = ({ isPatient = false }: Props): React.Node => {
  const { firstLine, content, buttonText, alternativeText } = isPatient ? PATIENT_ENTRY_CONTENT : DOCTOR_ENTRY_CONTENT;
  const image = isPatient ? patient : doctor;

  const handleButtonClick = () => {
    // TODO: Implement this method.
    console.log('Clicked');
  };

  return (
    <CardContainer>
      <Card style={{ height: '520px' }} onClick={handleButtonClick}>
        <CardActionArea>
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
        </CardActionArea>
      </Card>
    </CardContainer>
  );
};

export default CardComponent;
