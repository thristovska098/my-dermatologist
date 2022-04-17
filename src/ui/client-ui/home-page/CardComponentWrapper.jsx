// @flow
import * as React from 'react';

// Components
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { CardContainer, CardItemsWrapperContainer, StyledButtonContainerForCard } from '../../basic-ui/styles';

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
        <StyledButtonContainerForCard>
          <Button size="large">{buttonLabel}</Button>
        </StyledButtonContainerForCard>
      </CardActions>
    </Card>
  </CardContainer>
);

export default CardComponentWrapper;
