import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../common/authContext/authcontext";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const userId = localStorage.getItem("userId");
  const auth = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/bookings/${auth.userId}`, {
      headers: { Authorization: `Bearer ${auth.token}` }
    })
    .then(res => setBookings(res.data))
    .catch(err => console.error(err));
  }, [auth.userId]);

  const cancelBooking = (id) => {
    axios.put(`http://localhost:8080/api/bookings/${id}/cancel`, {}, {
      headers: { Authorization: `Bearer ${auth.token}` }
    })
    .then(() => alert("❌ Booking cancelled"))
    .catch(err => console.error(err));
  };

  const rescheduleBooking = (id) => {
    const newDate = prompt("Enter new date (YYYY-MM-DD):");
    if (!newDate) return;
    axios.put(`http://localhost:8080/api/bookings/${id}/reschedule`, { travelDate: newDate }, {
      headers: { Authorization: `Bearer ${auth.token}` }
    })
    .then(() => alert("✅ Booking rescheduled"))
    .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings && bookings.map(b => (
        <div key={b._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <p>Package: {b.package.name}</p>
          <p>Travel Date: {b.travelDate}</p>
          <p>Status: {b.status}</p>
          <button onClick={() => cancelBooking(b._id)}>Cancel</button>
          <button onClick={() => rescheduleBooking(b._id)}>Reschedule</button>
        </div>
      ))}
    </div>
  );
}

export default Bookings;
