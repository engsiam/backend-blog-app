let secureAPi=(req,res,next)=>{
    console.log(req.headers.authorization);
    if(req.headers.authorization=="nodejs"){
        next()
    }
    res.send("Authorization Required")
}

module.exports=secureAPi