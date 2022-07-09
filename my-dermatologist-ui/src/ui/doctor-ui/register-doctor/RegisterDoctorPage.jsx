// @flow
import * as React from 'react';

import _isEqual from 'lodash/isEqual';
import moment from 'moment';
import { Form } from 'react-final-form';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PersonalDataComponent from '../../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';
import Header from '../../basic-ui/header/Header';
import { PageWrapper } from '../../basic-ui/header/styles';
import { FormContainer } from '../../common/styles';
import { FIELD_WIDTH_MAX } from '../../common/constants';
import { SUBMIT_FIELD_LABEL } from '../../labels';
import { pages } from './constants';
import { useSavePersonalData } from '../../../hooks/useSavePersonalData';
import { preparePersonalData } from '../../common/utils';
import { getDoctorPersonalData } from '../../../redux/selectors';
import { PAGES_FULL_ROUTES } from '../../../routing/pages';

const RegisterDoctorPage = (): React.Node => {
  const saveDoctor = useSavePersonalData();
  const history = useHistory();

  // TODO: REPLACE THIS WITH FETCHED DATA
  const initialData = useSelector(getDoctorPersonalData);

  const prepareInitialData = React.useCallback((): Object => {
    const { personalData } = initialData;
    const { dateOfBirth, ...rest } = personalData;

    return {
      personalData: { dateOfBirth: moment(dateOfBirth), ...rest },
    };
  }, [initialData]);

  const handlingSubmit = React.useCallback(
    (values: Object) => {
      const preparedValues = preparePersonalData(values);

      saveDoctor(preparedValues);
    },
    [saveDoctor],
  );

  const handlingSubmitForButton = React.useCallback(
    (values: Object, handleSubmit: Function, hasValidationErrors: boolean) => {
      handleSubmit(values);

      if (!hasValidationErrors) {
        history.push(PAGES_FULL_ROUTES.REGISTER_DOCTOR_PROFESSIONAL_DATA);
      }
    },
    [history],
  );

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        initialValuesEqual={_isEqual}
        initialValues={Object.keys(initialData).length !== 0 && prepareInitialData()}
        subscription={{ values: true, hasValidationErrors: true }}
        render={({ handleSubmit, hasValidationErrors, values }) => (
          <>
            <Header pages={pages} onChangeFunction={handleSubmit} hasValidationErrors={hasValidationErrors} />
            <FormContainer>
              <PersonalDataComponent />
              <SubmitAndCancelFooter
                width={FIELD_WIDTH_MAX}
                handleSubmit={() => handlingSubmitForButton(values, handleSubmit, hasValidationErrors)}
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
