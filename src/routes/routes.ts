import express from "express";
import {
	filteringByRating,
	listProductsByCategory,
	listProductsByShop,
	listShops,
	sortByParams,
} from "../controllers/shops.controller";

const router = express.Router();

router.get("/shops", listShops)
router.get("/shops/filter-by-rating", filteringByRating)
router.get("/products", sortByParams)
router.get("/shops/:id", listProductsByShop)
router.get("/products/category/:id", listProductsByCategory)


export default router;