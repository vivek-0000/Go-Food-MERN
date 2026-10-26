const express = require("express");
const router = express.Router();

router.post ('/fooddata', (req, res)=>{
    try{
        console.log(global.food)
        res.send(global.food)
    } catch(error){
        console.error(error.message);
        res.send("Server error")
    }
})

module.exports = router;