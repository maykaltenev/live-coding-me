const express = require('express');
const router = express.Router();

const postController = require('../controllers/postsController');

router.get('/lust', postController.handleList);

router.post('/add', () => {
    res.send('hello from add');
})

router.put('/edit', postController.handleList);
router.delete('/delete', postController.handleList);

module.exports = router;