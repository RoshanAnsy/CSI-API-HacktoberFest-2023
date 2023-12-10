const Products=require("../data/Products.json")

exports.getAllProduct=async(req,res)=>{
  try{
      let {minPrice,maxPrice}=req.query
      const result=Products.filter((price)=>price>=minPrice && maxPrice<=price)
      res.status(200).json({
        message:`All product are here bt price ${minPrice}$ and ${maxPrice}$ `,
        success:true,
        result,
      })
    }
  catch(error){
    res.status(400).json({
      message:"something error in finding the product bt these price",
      success:false,
      error:error.message,
    })
  }
}