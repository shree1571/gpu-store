import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const { state } = useLocation(); // product data

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handlePayment = async () => {
  const options = {
    key: "rzp_test_STUrXFDyDXIjAB", // replace with your Razorpay key
    amount: state.price * form.quantity * 100, // in paise
    currency: "INR",
    name: "My Store",
    description: state.name,
    image: state.image,
    handler: function (response) {
      alert("Payment Successful!");
      console.log(response);
    },
    prefill: {
      name: form.name,
      email: form.email,
      contact: form.phone,
    },
    notes: {
      address: form.address,
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
  if (!state) return <h2>No product selected</h2>;

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      {/* Product Info */}
      <div className="product-info">
        <img src={state.image} alt={state.name} />
        <h3>{state.name}</h3>
        <p>{state.price}</p>
      </div>

      {/* Form */}
      <div className="checkout-form">
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          min="1"
          onChange={handleChange}
        />

        <button className="pay-btn" onClick={handlePayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Checkout;