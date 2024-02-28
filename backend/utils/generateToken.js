import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days in milliseconds
    httpOnly: true, // cookie cannot be accessed by client side script, to prevent XSS attacks-> Cross Site Scripting attacks
    sameSite: "Strict", // cookie will only be sent in a first-party context, CSRF attacks-> Cross Site Request Forgery attacks
    secure: process.env.NODE_ENV !== "development" ? true : false, // cookie will only be sent in https protocol, to prevent
  });
};

export default generateTokenAndSetCookie;
