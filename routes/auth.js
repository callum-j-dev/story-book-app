const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc        Authenticate with Google
// @route       GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile']}));

// @desc        Google auth callback
// @route       GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
});

// @desc        Logout user
// @route       /auth/logout
router.get('/logout', (req, res) => {   // had to update with err callback function because logout now requires a callback function
    req.logout(err => {
        if (err) {
            return next(err);
        }
    });
    res.redirect('/');
})

module.exports = router;