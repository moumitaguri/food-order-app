import { Fragment } from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/HeaderLayout/Header';
import Menu from './Components/Menu/Menu';

const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Menu />
      </main>
    </Fragment>
  );
};

export default App;
