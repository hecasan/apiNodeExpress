const router = require('express').Router();

router.post('/', (req, res, next) => res.json({ success: true}))

module.exports = router;