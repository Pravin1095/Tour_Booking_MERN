import React, { useEffect, useState , useContext} from "react";
import axios from "axios";
import { AuthContext } from "../common/authContext/authcontext";

function UserDashboard() {
  const [packages, setPackages] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const auth = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:8000/api/admin/package",{
  headers:{
    Authorization : `Bearer ` + auth.token
  }})
      .then(res => setPackages(res?.data?.getPackage))
      .catch(err => console.error(err));
  }, []);

  const handleBooking = (pkgId) => {
    const userId = auth.userId;
    if (!selectedDate) return alert("Please select a travel date");

    axios.post("http://localhost:8000/api/user/bookings", {
      packageId: pkgId,
      userId,
      travelDate: selectedDate,
      status : 'Booked'
    }, {
      headers: { Authorization: `Bearer ${auth.token}` }
    })
    .then(() => alert("✅ Successfully booked!"))
    .catch(() => alert("❌ Booking failed! Already enrolled or invalid data"));
  };

  return (
    <div>
      <h2>Available Tour Packages</h2>
      {packages && packages.map(pkg => (
        <div key={pkg._id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
          <h3>{pkg.name}</h3>
          <p>{pkg.description}</p>
          <p>Price: ${pkg.price}</p>
          <p>Destinations: {pkg.destinations.join(", ")}</p>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          <button onClick={() => handleBooking(pkg._id)}>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default UserDashboard;
