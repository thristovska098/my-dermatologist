import * as React from 'react';

// Utils
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/reducers';
import browserHistory from './redux/browserHistory';

// Components
import Bootstrapper from './Bootstrapper';
import BasicPage from './ui/basic-ui/basic-page/BasicPage';

const App = () => {
  const store = createStore(rootReducer(browserHistory), composeWithDevTools(applyMiddleware()));

  return (
    <Provider store={store}>
      <Bootstrapper>
        <BasicPage />
      </Bootstrapper>
    </Provider>
  );
};

export default App;
