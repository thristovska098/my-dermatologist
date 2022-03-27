import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory({
  basename: String(process.env.REACT_APP_PUBLIC_URL),
});

export default browserHistory;
