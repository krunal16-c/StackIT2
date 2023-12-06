const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/Users.model');

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      where: {
        username,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'Username already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
    });

    // Return a success message
    return res.status(201).json({
      message: 'User created successfully',
      success:true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

// Log in a user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({
        message: 'Invalid credentials',
      });
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: 'Invalid credentials',
      });
    }

    // Return the token
    return res.status(200).json({
      message: 'Logged in successfully',
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email'],
    });

    // Return the users
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

module.exports = router;
