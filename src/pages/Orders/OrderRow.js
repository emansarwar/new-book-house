import React, { useEffect, useState } from "react";
import "./OrderRow.css";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, serviceName, phone, customer, price, service, status } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`https://book-house-server.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr className="">
      <td>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          {/* <div className="avatar">
            <div className="rounded w-24 h-24">{orderService?.img && <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}</div>
          </div> */}

          <div className="font-bold">{customer}</div>
          <div className="text-sm opacity-50">{phone}</div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      {/* <td>Purple</td> */}
      <th>
        <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
