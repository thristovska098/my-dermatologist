import * as React from 'react';

import RegisterDoctorPage from './ui/doctor-ui/RegisterDoctorPage';
import RegisterClientPage from './ui/client-ui/RegisterClientPage';

const App = () => (
  <div className="App">
    <header className="App-header">
      <RegisterDoctorPage />
      <RegisterClientPage />
    </header>
  </div>
);

export default App;
