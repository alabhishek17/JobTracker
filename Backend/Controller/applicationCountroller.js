const Application = require('../models/Application');

const createApp = async (req, res) => {
  const app = await Application.create({userId: req.userId, ...req.body});
  res.json(app);
};



const getApps = async (req, res) => {
  const apps = await Application.find({userId: req.userId});
  res.json(apps);
};
const updateApp = async (req, res) => {
  const {id} = req.params;
  const updated = await Application.findOneAndUpdate(
    {_id: id, userId: req.userId},
    req.body,
    {new: true}
  );
  res.json(updated);
};
const deleteApp = async (req, res) => {
  await Application.findOneAndDelete({_id: req.params.id, userId: req.userId});
  res.json({message: 'Deleted'});
};

module.exports = {createApp, getApps, updateApp, deleteApp};
