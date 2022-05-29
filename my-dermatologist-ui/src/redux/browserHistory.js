import { createBrowserHistory } from 'history';
import { BASE_ROUTE } from '../routing/pages';

const browserHistory = createBrowserHistory({
  basename: String(`${process.env.REACT_APP_PUBLIC_URL}${BASE_ROUTE}`),
});

export default browserHistory;
