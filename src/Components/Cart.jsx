
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, deleteCart } from './Slices/cartSlice';
import './Cart.css';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);

  const handleUpdateQuantity = (itemId, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id: itemId, quantity }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(deleteCart(itemId));
  };

  return (
    <div className="cart-wrapper">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-details">
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>₹{item.price} x {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-footer">
        <h2>Total: ₹{total.toFixed(2)}</h2>
        <div className="cart-buttons">
          <Link to="/">
            <button className="continue-btn">Continue Shopping</button>
          </Link>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
