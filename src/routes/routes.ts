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
router.get("/shops/:id", listProductsByShop)
router.get("/products/categoryId", listProductsByCategory)
router.get("/products", sortByParams)
router.get("/shops/filter-by-rating", filteringByRating)


export default router;