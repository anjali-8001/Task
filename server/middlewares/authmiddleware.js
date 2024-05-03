const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

const requireSignIn = async (req, res, next) => {
  //verifying JWT token
  try {
    //decoding the encoded token in headers
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};

module.exports = { requireSignIn };
