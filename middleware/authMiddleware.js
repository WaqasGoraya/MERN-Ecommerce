import Jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

export const requireSigIn = (req, res, next) => {
  try {
    const decode = Jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).send({ succcess: false, message: error });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findOne(req.user._id);
    if (user.role != 1) {
      return res
        .status(401)
        .send({ succcess: false, message: "Unauthorized Access" });
    } else {
      next();
    }
  } catch (error) {
    return res
      .status(401)
      .send({ succcess: false, message: "Not a admin", error });
  }
};
