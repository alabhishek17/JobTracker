const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const {username, password} = req.body;
  console.log(username,password)
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({username, password: hash});
  res.json({userId: user._id, message: 'User Created'});
};

const login = async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username});
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({error: 'Invalid credentials'});
  }
  const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

  res.json({token});
};

module.exports = {signup, login};
