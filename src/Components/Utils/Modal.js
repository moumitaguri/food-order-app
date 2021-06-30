import { Fragment } from 'react';
import ReactDOM from 'react-dom';

export const Backdrop = (props) => {
  return <div></div>;
};
export const Overlay = (props) => {
  return (
    <div>
      <div>{props.childern}</div>
    </div>
  );
};

const portal = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(<Overlay>{props.childern}</Overlay>, portal)}
    </Fragment>
  );
};

export default Modal;
