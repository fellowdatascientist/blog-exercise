const express = require('express');

const router = express.Router();

router.post('/comment',(req,res)=>{
    res.status(200).json('comment post request')
    console.log('comment post request');
})

module.exports = router;