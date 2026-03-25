import express from "express";
import {
	createOrder,
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
router.post("/orders", createOrder)

export default router;