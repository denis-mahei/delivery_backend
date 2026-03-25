import express from "express";
import {
	createOrder,
	filteringByRating, getOrders,
	listProductsByCategory,
	listProductsByShop,
	listShops,
	sortByParams,
} from "../controllers/shops.controller";

const router = express.Router();

router.get("/shops", listShops)
router.get("/shops/filter-by-rating", filteringByRating)
router.get("/products", sortByParams)
router.get("/orders", getOrders)
router.post("/orders", createOrder)
router.get("/shops/:id", listProductsByShop)
router.get("/products/category/:id", listProductsByCategory)

export default router;