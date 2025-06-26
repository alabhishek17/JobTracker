const express = require('express');
const {createApp, getApps, updateApp, deleteApp} = require('../Controller/applicationCountroller');
const auth = require('../Middlewares/auth');
const router = express.Router();

router.use(auth);
router.post('/', createApp);
router.get('/', getApps);
router.put('/:id', updateApp);
router.delete('/:id', deleteApp);
module.exports = router;

