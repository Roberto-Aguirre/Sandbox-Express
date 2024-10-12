const notFound = (req,res)=>{
    res.status(404).json({code:404,message:'Element not found'})
};

module.exports={
    notFound
}