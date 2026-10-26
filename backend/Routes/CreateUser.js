const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtsecrest = "maathapithamamitha";

router.post(
  "/Loginuser",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userlogin = await User.findOne({ email });
      if (!userlogin) {
        return res.status(400).json({
          success: false,
          message: "Try login with correct credentials",
        });
      }
      const pwdcompare = await bcrypt.compare(
        req.body.password,
        userlogin.password,
      );
      if (!pwdcompare) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect Password" });
      }
      const data = {
        user: {
          id: userlogin.id,
        },
      };
      const authToken = jwt.sign(data, jwtsecrest);
      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  },
);

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists. Please log in.",
      });
    }
    const salt = await bcrypt.genSalt(10);
    let secPass = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      // Handle duplicate email errors from MongoDB
      if (error.code === 11000) {
        return res.status(409).json({
          success: false,
          message: "User already exists. Please log in.",
        });
      }
      // Handle other errors
    return res.status(500).json({
        success: false,
        message: "Something went wrong during signup.",
    });
    }
  },
);
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
