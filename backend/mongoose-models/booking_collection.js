const mongoose= require('mongoose')

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: "Package" }, // 👈
  travelDate: Date,
  status: { type: String, enum: ["Booked", "Cancelled", "Rescheduled"], default: "Booked" }
});

module.exports = mongoose.model('Booking', bookingSchema);