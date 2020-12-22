import {Provider} from 'react-redux';
import Counter from './src/Counter';
import {store} from './src/store/store';
import React from 'react';

const App = () => {
  return(
    <Provider store = {store}>
      <Counter />
    </Provider>
  );
}

export default App;