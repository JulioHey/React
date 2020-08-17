import React, {Fragment} from 'react';
import Route from './router';
import GlobalStyle from './assets/theme/globalStyle'

function App() {
  return (
    <Fragment>  
      <GlobalStyle/>
      <Route/> 
    </Fragment>
  );
}

export default App;
