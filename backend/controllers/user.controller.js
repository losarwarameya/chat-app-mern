import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    // $ne: not equal, remove the logged in user from the list, if you want to show all users including logged in user, remove this filter

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in get users for sidebar controller: " + error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
