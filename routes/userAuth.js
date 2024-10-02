const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User sign-up routes
router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup);

// User login routes
router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);

// Admin and User UI routes
router.get('/user', userController.getUserUI);
router.get('/admin', userController.getAdminUI);
// Admin login post route
router.post('/admin/login', userController.postAdminLogin);


// Define root route
router.get('/', (req, res) => {
    res.render('index'); // Make sure index.ejs exists

});

router.get('/admin/login', (req, res) => {
    res.render('adminLogin'); // Render admin login page
});

module.exports = router;
