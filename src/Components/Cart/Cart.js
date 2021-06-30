import Modal from '../Utils/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul className='cart-items'>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>Rs.211</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
