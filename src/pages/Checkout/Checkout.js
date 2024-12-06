import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Checkout.css";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    fetch("https://book-house-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("book-worm")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
          navigate("/orders");
          // navigate('/orders')
        }
      })
      .catch((error) => console.error(error));
    navigate("/home");
  };

  return (
    <div className="m-5 checkout-design">
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl">You are about to order: {title}</h2>
        <h4 className="text-3xl">Price: {price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
          <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
          <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-ghost w-full  input-bordered"
            readOnly
          />
        </div>
        <textarea name="message" className="textarea  input-ghost my-2 h-24 w-full" placeholder="Your Message" required></textarea>

        <input className="btn btn-block mb-2" type="submit" value="Place Your Order" />
      </form>
    </div>
  );
};

export default Checkout;
