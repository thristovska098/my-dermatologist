// @flow
import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { CardContainer, CardItemsWrapperContainer } from '../../basic-ui/styles';

type Props = {
  onButtonClick: Function,
  buttonLabel: string,
  image: string,
  alternativeImageLabel: string,
};

const CardComponentWrapper = ({ onButtonClick, buttonLabel, image, alternativeImageLabel }: Props): React.Node => (
  <CardContainer>
    <Card onClick={onButtonClick}>
      <CardContent>
        <CardItemsWrapperContainer>
          <CardMedia component="img" width="150" image={image} alt={alternativeImageLabel} />
        </CardItemsWrapperContainer>
      </CardContent>
      <CardActions>
        <Button size="large">{buttonLabel}</Button>
      </CardActions>
    </Card>
  </CardContainer>
);

export default CardComponentWrapper;
