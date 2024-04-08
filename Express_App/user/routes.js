const express = require( 'express' );

const router = express.Router();

router.get('/', (req, res)=>{
res.send("get all")
});

router.post('/', (req, res)=>{
res.send("post data")
});

router.get('/:id', (req, res)=>{
res.send("get user by id")
});

router.put('/:id', (req, res)=>{
res.send("update user")
});

router.delete('/:id', (req, res)=>{
res.send("update user")
});


module.exports = router