import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "fail to update",
      error: `${console.log(err)}`,
      data: updateUser,
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "fail to delete",
    });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "user found",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "No user found",
      error: `${console.log(err)}`,
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      message: "user found",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
      error: console.log(err),
    });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const { password, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "profile info is getting",
      data: { ...rest },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong can not get",
    });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    //step 1 retrieve appo. from bookings
    const booking = await Booking.find({ user: req.userId });

    //step 2 extracts doctor ids from  appo.  bookings
    const doctorIds = Booking.map((el) => el.doctor.id);
    //step 3 retrieve doctors using doctor ids bookings
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Appointments are getting",
        data: doctors,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong can not get",
    });
  }
};
