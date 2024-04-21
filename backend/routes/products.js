const router= require('express').Router();
const productCOntroller=require('../controllers/productsController');

router.get("/",productCOntroller.getAllProduct)
router.get("/:id",productCOntroller.getProduct)
router.get("/search/:key",productCOntroller.searchProduct)
router.get("/",productCOntroller.createProduct)

module.exports = router