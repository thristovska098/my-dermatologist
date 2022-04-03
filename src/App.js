import * as React from 'react';

// Utils
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { rootReducer } from './redux/reducers';
import browserHistory from './redux/browserHistory';
import { PAGES_FULL_ROUTES } from './routing/pages';

// Components
import Bootstrapper from './Bootstrapper';
import MainPage from './ui/basic-ui/MainPage';
import RegisterClientPage from './ui/client-ui/RegisterClientPage';
import RegisterDoctorPage from './ui/doctor-ui/RegisterDoctorPage';
import PageNotFound from './ui/common/page-not-found/PageNotFound';
import OfficeInformationPage from './ui/doctor-ui/OfficeInformationPage';
import DoctorHomePage from './ui/doctor-ui/home-page/HomePage';
import PatientHomePage from './ui/client-ui/home-page/HomePage';

const App = () => {
  const store = createStore(rootReducer(browserHistory), composeWithDevTools(applyMiddleware()));

  return (
    <Provider store={store}>
      <Bootstrapper>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path={PAGES_FULL_ROUTES.REGISTER_CLIENT} component={RegisterClientPage} />
            <Route path={PAGES_FULL_ROUTES.REGISTER_DOCTOR_PERSONAL_DATA} component={RegisterDoctorPage} />
            <Route path={PAGES_FULL_ROUTES.REGISTER_DOCTOR_PROFESSIONAL_DATA} component={OfficeInformationPage} />
            <Route path={PAGES_FULL_ROUTES.DOCTOR_HOME_PAGE} component={DoctorHomePage} />
            <Route path={PAGES_FULL_ROUTES.PATIENT_HOME_PAGE} component={PatientHomePage} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </Bootstrapper>
    </Provider>
  );
};

export default App;
