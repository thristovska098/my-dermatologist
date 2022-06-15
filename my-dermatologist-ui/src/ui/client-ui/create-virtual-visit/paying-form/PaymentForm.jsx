// @flow
/* eslint-disable */
import * as React from 'react';

// Hooks
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// Stripe utils
import {
    CardElement,
    useElements,
    useStripe
} from '@stripe/react-stripe-js';

// Axios
import axios from 'axios';

// Components
import {Form} from 'react-final-form';
import {Button, CircularProgress} from '@mui/material';
import {ButtonContainer, PageContentContainer, TotalPaymentContainer} from './styles';

// Constants
import {CANCEL_FIELD_LABEL, MAKE_PAYMENT_LABEL, TOTAL_COST_LABEL} from '../../../labels';
import {PAGES_FULL_ROUTES} from '../../../../routing/pages';

// Custom hooks
import {useDeleteAppointment} from '../../../../hooks/useDeleteAppointment';

// Utils
import {setIsPaymentModalOpen} from '../../../../redux/actions';

const style = {
    base: {
        iconColor: '#0b0b10',
        color: '#0b0b10',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',

    },
};

type Props = {
    appointmentId: number,
}

// TODO: Finish the implementation for this page
const PaymentForm = ({appointmentId}: Props) => {
    const dispatch = useDispatch();
    const [success, setSuccess] = React.useState(false);
    const [showLoader, setShowLoader] = React.useState(true)
    const stripe = useStripe();
    const elements = useElements();
    const totalAmount = 600;
    const currency = 'MKD';
    const totalLabel = `${TOTAL_COST_LABEL} ${totalAmount} ${currency}.`;
    const card = (<CardElement options={{hidePostalCode: true, style}}/>);
    const history = useHistory();
    const deleteAppointment = useDeleteAppointment();

    const handleCancel = () => {
        if (appointmentId !== undefined) {
            deleteAppointment(appointmentId);
        }

        dispatch(setIsPaymentModalOpen(false));
        history.push(PAGES_FULL_ROUTES.PATIENT_HOME_PAGE);
    };

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 5000);
        return () => {
            clearTimeout(timer)
        };
    }, []);

    const handleSubmit = async () => {

        if (!error) {
            try {
                const {id} = paymentMethod;
                const response = await axios.post('backend call url', {
                    amount: 600,
                    id
                });

                if (response?.data?.success) {
                    console.log('Successful payment');
                    setSuccess(true);
                }
            } catch (error) {
                console.log('Error', error);
            }
        } else {
            console.log('Error', error.message);
        }
    }

    return (
        <>
            {!showLoader?  <Form
                    onSubmit={handleSubmit}
                    subscription={{values: true, form: true}}
                    render={({handleSubmit}) => (
                        <PageContentContainer>
                            <TotalPaymentContainer>{totalLabel}</TotalPaymentContainer>
                            {card}
                            <ButtonContainer>
                                <Button variant="contained" onClick={handleSubmit}>
                                    {MAKE_PAYMENT_LABEL}
                                </Button>
                                <Button onClick={handleCancel}>{CANCEL_FIELD_LABEL}</Button>
                            </ButtonContainer>
                        </PageContentContainer>
                    )}
                />: <CircularProgress size={80} />}</>
    )
}

export default PaymentForm;