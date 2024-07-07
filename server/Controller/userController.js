const User = require('../Model/userModell'); // Use require instead of import
const bcryptjs = require('bcryptjs');

// Signup function
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const createUser = new User({
      name,
      email,
      password: hashedPassword, // Ensure the correct field name is used
    });

    // Save the new user to the database
    await createUser.save();

    // Send a success response
    res.status(201).json({ message: 'User created successfully' ,user:{
      _id:createUser._id,
      name:createUser.name,
      email:createUser.email
    }});
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hashed password
    const isMatched = await bcryptjs.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Send a success response
    res.status(200).json({
      message: 'Login successful',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { signup, login }; // Export the signup and login functions
