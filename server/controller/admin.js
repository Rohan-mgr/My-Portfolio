const Admin = require("../Model/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../utils/mailer");
const mongoose = require("mongoose");

exports.adminLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      const error = new Error("User does not Exists!");
      error.statusCode = 401;
      throw error;
    }
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      const error = new Error("Incorrect Password! Try Again!");
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        email: email,
        adminId: admin._id.toString(),
      },
      process.env.JWT_TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).send({
      message: "Login Successfull",
      status: 200,
      token: token,
      adminId: admin._id.toString(),
    });
  } catch (error) {
    console.log(error.message);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.GetPasswordReset = async (req, res, next) => {
  const email = req.body.email;
  try {
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      const error = new Error("Email Address does not exists!");
      error.statusCode = 401;
      throw error;
    }
    const resetToken = jwt.sign(
      {
        email: admin.email,
        Id: admin._id.toString(),
      },
      process.env.JWT_TOKEN_SECRET,
      { expiresIn: "120s" }
    );
    admin.passwordResetToken = resetToken;
    const result = await admin.save();
    sendEmail({
      admin,
      resetToken,
    });
    res
      .status(200)
      .json({ message: "Password Reset mail send successfully", status: 200 });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.handlePasswordReset = async (req, res, next) => {
  const token = req.params.token;
  const adminId = req.params.id;
  const newPassword = req.body.newPassword;

  try {
    if (!mongoose.Types.ObjectId.isValid(adminId)) {
      const error = new Error("Invalid User Id");
      error.statusCode = 401;
      throw error;
    }
    const existingAdmin = await Admin.findOne({
      _id: adminId,
      passwordResetToken: token,
    });
    const verifyToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET);

    if (!existingAdmin || !verifyToken.Id) {
      const error = new Error("Token is not valid!");
      error.statusCode = 404;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    existingAdmin.password = hashedPassword;

    const result = existingAdmin.save();

    res
      .status(200)
      .json({ message: "Password Updated Successfully", status: 200 });
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      console.log("mongoose error");
      error.message = "mongoose error";
      // throw new Error("Invalid UserId!");
    }
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    if (error.name === "TokenExpiredError") {
      error.message = "Token is expired! Try Again";
    }
    if (error.name === "JsonWebTokenError") {
      error.message = "Token is not valid!";
    }
    next(error);
  }
};

exports.createAdmin = async (req, res, next) => {
  //   const errors = validationResult(req);
  console.log("admin hello", req.body.pass);
  const fullName = req.body.fullName;
  const email = req.body.email;
  const pass = req.body.password;
  let dupUser;
  //   if (!errors.isEmpty()) {
  //     const error = new Error("Validation failed!");
  //     error.statusCode = 422;
  //     throw error;
  //   }
  try {
    dupUser = await Admin.findOne({ email: email });
    if (dupUser) {
      const error = new Error("Email Address already exists!");
      error.statusCode = 409;
      throw error;
    }
    const hashedPassword = await bcrypt.hash(pass, 12);
    const admin = new Admin({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });
    const result = await admin.save();
    console.log(result, "result");
    res
      .status(200)
      .json({ message: "Admin created successfully", userId: result._id });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};