// @flow
import * as React from 'react';

// Components
import { FormFileUploadField } from 'mui-form-fields';

// Hooks
import { useField } from 'react-final-form';

// Utils
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { required } from '../../../components/validators';

// Constants
import { MIN_WIDTH } from './constants';
import { ADD_PHOTOS_LABEL, REQUIRED_IMAGES_MESSAGE } from '../../labels';

const StyledFileUpload = styled.div`
  li.MuiListItem-root.MuiListItem-gutters {
    padding-right: 0px !important;
    padding-left: 0px !important;
    color: ${ifProp('hasError', '#f44639')} !important;
    min-width: ${MIN_WIDTH}px;
    width: ${MIN_WIDTH}px;
  }

  div > span:first-child {
    font-size: 12px;
    color: ${ifProp('hasError', '#f44639')} !important;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }

  div.dropzone {
    min-height: 120px !important;
    height: 120px !important;
    border-color: ${ifProp('hasError', '#f44639')} !important;
  }
`;

const ErrorMessage: React.ComponentType<*> = styled.div`
  color: #f44639;
  font-size: 13px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  margin-top: 5px;
`;

const ImageAddingComponent = (): React.Node => {
  const { input, meta } = useField('images');
  const { touched } = meta;
  const images = input?.value;

  const requiredValidator = required(REQUIRED_IMAGES_MESSAGE);

  const hasError = images.length === 0 && touched;

  return (
    <div>
      <StyledFileUpload hasError={hasError}>
        <FormFileUploadField
          name="images"
          label={ADD_PHOTOS_LABEL}
          hasIcon={false}
          accept="image/*"
          multiple
          disabled={images.length === 5}
          validate={requiredValidator}
        />
      </StyledFileUpload>
      {hasError && <ErrorMessage>You must upload pictures of the skin problem.</ErrorMessage>}
    </div>
  );
};

export default ImageAddingComponent;
