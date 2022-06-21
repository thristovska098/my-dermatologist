// @flow
import * as React from 'react';

import _isEqual from 'lodash/isEqual';
import moment from 'moment';

// Components
import { Form } from 'react-final-form';
import { useSelector } from 'react-redux';
import PersonalDataComponent from '../../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';
import Header from '../../basic-ui/header/Header';
import { PageWrapper } from '../../basic-ui/header/styles';
import { FormContainer } from '../../common/styles';

// Constants
import { FIELD_WIDTH_MAX } from '../../common/constants';
import { SUBMIT_FIELD_LABEL } from '../../labels';
import { pages } from './constants';

// Hooks
import { useSavePersonalData } from '../../../hooks/useSavePersonalData';

// Utils
import { preparePersonalData } from '../../common/utils';
import { getDoctorPersonalData } from '../../../redux/selectors';

const RegisterDoctorPage = (): React.Node => {
  const saveDoctor = useSavePersonalData();
  const initialData = useSelector(getDoctorPersonalData);

  const prepareInitialData = React.useCallback((): Object => {
    const { personalData } = initialData;
    const { dateOfBirth, ...rest } = personalData;

    return {
      personalData: { dateOfBirth: moment(dateOfBirth), ...rest },
    };
  }, [initialData]);

  const handlingSubmit = (values: Object) => {
    const preparedValues = preparePersonalData(values);

    saveDoctor(preparedValues, true);
  };

  const handleNavigationSubmit = (values: Object) => {
    const preparedValues = preparePersonalData(values);

    saveDoctor(preparedValues, false);
  };

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        initialValuesEqual={_isEqual}
        initialValues={prepareInitialData()}
        subscription={{ values: true, hasValidationErrors: true }}
        render={({ handleSubmit, hasValidationErrors, values }) => (
          <>
            <Header
              pages={pages}
              onChangeFunction={() => handleNavigationSubmit(values)}
              hasValidationErrors={hasValidationErrors}
              shouldLetLogOut={false}
            />
            <FormContainer>
              <PersonalDataComponent />
              <SubmitAndCancelFooter
                width={FIELD_WIDTH_MAX}
                handleSubmit={handleSubmit}
                submitLabel={SUBMIT_FIELD_LABEL}
                hasMargin
              />
            </FormContainer>
          </>
        )}
      />
    </PageWrapper>
  );
};

export default RegisterDoctorPage;
