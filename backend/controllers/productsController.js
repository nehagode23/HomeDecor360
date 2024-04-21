const Product = require('../models/Products');

module.exports={
    createProduct: async(req,res)=>{
        const newProduct= new Product(req.body);
        try{
            await newProduct.save();
            res.status(200).json("Product created succesfully")
        }catch (error){
            res.status(500).jason("failed to create a product")
        }
    },

    getAllProduct: async(req,res)=>{
        try{
            const products = await Product.find().sort({createdAt: -1})
            res.status(200).json(products)
        }catch(error){
            res.status(500).jason("failed to get the products")
        }
    },

    getProduct:async(req,res)=>{
        try{
            const product=await Product.findByID(req.params.id)
            req.status(200).json(product)
        }catch(error){
            res.status(500).jason("failed to get the product")
        }
    },

    searchProduct: async(req,res)=>{
        try {
            
            const result= Product.aggregate(
                [
                    {
                      $search: {
                        index: "furniture",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            )
            req.status(200).json(result)
        } catch (error) {
            req.status(500).json("failed to get the products")
        }
    }
}