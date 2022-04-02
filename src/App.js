import * as React from 'react';

// Utils
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/reducers';
import browserHistory from './redux/browserHistory';

// Components
import Bootstrapper from './Bootstrapper';
import UsernameAndPasswordComponent from './ui/common/username-and-password-component/UsernameAndPasswordComponent';

const App = () => {
  const store = createStore(rootReducer(browserHistory), composeWithDevTools(applyMiddleware()));

  return (
    <Provider store={store}>
      <Bootstrapper>
        <UsernameAndPasswordComponent creatingAccount />
      </Bootstrapper>
    </Provider>
  );
};

export default App;
