import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart } from "./slices/CustomerSlice";

export default function CartView() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function deleteHandler(index) {
    dispatch(deleteCart(index));
  }
  return (
    <>
      {" "}
      <h3>Customer list</h3>
      <ul style={{ listStyleType: "none" }}>
        {cart.map((cart, index) => (
          <li key={index}>
            {cart}
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
