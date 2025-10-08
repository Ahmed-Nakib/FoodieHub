import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  // 🧮 একেকটা আইটেমের মোট দাম
  const getTotalPrice = (itemId, price) => {
    return (cartItems[itemId] || 0) * price;
  };

  // 🧾 মোট দাম
  const grandTotal = food_list.reduce(
    (acc, item) => acc + (cartItems[item._id] || 0) * item.price,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

      {/* Header */}
      <div className="hidden md:grid grid-cols-6 font-medium text-gray-600 border-b pb-2 mb-3 text-sm">
        <p className="col-span-2">Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-4">
        {food_list.map((item) => {
          if (!cartItems[item._id]) return null;

          return (
            <div
              key={item._id}
              className="grid grid-cols-2 md:grid-cols-6 items-center border rounded-lg p-3 md:p-4 hover:shadow-md transition bg-white"
            >
              {/* Item */}
              <div className="flex items-center gap-3 col-span-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <p className="font-semibold text-gray-800">{item.name}</p>
              </div>

              {/* Price */}
              <p className="text-gray-700 hidden md:block">
                ${item.price.toFixed(2)}
              </p>

              {/* Quantity */}
              <p className="text-gray-700 text-center">
                {cartItems[item._id]}
              </p>

              {/* Total */}
              <p className="text-gray-700 hidden md:block">
                ${getTotalPrice(item._id, item.price).toFixed(2)}
              </p>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item._id)}
                className="flex justify-end md:justify-center"
              >
                <AiOutlineClose
                  size={22}
                  className="text-red-500 hover:text-red-700 transition"
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Empty Cart */}
      {grandTotal === 0 && (
        <div className="text-center text-gray-500 mt-8">
          <p>Your cart is empty 😔</p>
        </div>
      )}

      {/* Footer Section */}
      {grandTotal > 0 && (
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6">
          <p className="text-lg font-semibold text-gray-800">
            Grand Total: <span className="text-indigo-600">${grandTotal.toFixed(2)}</span>
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              Continue Shopping
            </button>

            <button
              onClick={() => navigate("/place-order")}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
