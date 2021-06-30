import { Fragment } from 'react';
import AvailableMenu from './AvailableMenu';
import MenuSummary from './MenuSummary';

const Menu = (props) => {
  return (
    <Fragment>
      <MenuSummary />
      <AvailableMenu />
    </Fragment>
  );
};

export default Menu;
