import * as React from 'react';

// Utils
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/reducers';
import browserHistory from './redux/browserHistory';

// Components
import RegisterDoctorPage from './ui/doctor-ui/RegisterDoctorPage';
import RegisterClientPage from './ui/client-ui/RegisterClientPage';
import Bootstrapper from './Bootstrapper';

const App = () => {
  const store = createStore(rootReducer(browserHistory), composeWithDevTools(applyMiddleware()));

  return (
    <Provider store={store}>
      <Bootstrapper>
        <RegisterDoctorPage />
        <RegisterClientPage />
      </Bootstrapper>
    </Provider>
  );
};

export default App;
