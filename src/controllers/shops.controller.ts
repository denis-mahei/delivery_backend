import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export const listShops = async ( req: Request, res: Response ) => {
	try {
		const shops = await prisma.shop.findMany()
		res.status(200).json(shops)
	} catch (e) {
		if (e instanceof Error) {
			return res.status(500).json({ error: e.message })
		}

		return res.status(500).json({ error: "Something went wrong" })
	}
}

export const listProductsByShop = async ( req: Request, res: Response ) => {
	try {
		const { id } = req.params

		const shop = await prisma.shop.findUnique({
			where: { id: Number(id) },
			include: {
				products: true,
			}
		})

		if (!shop) {
			return res.status(404).json({ error: "Shop not found" })
		}

		res.status(200).json(shop.products)

	} catch (e) {
		if (e instanceof Error) {
			return res.status(500).json({ error: e.message })
		}

		return res.status(500).json({ error: "Something went wrong" })
	}

}

export const listProductsByCategory = async ( req: Request, res: Response ) => {
	try {
		const { id } = req.params
		const products = await prisma.product.findMany({
			where: {
				categoryId: Number(id),
			}
		})

		res.status(200).json(products)
	} catch (e) {
		if (e instanceof Error) {
			return res.status(500).json({ error: "Something went wrong" })
		}
	}
}

export const sortByParams = async ( req: Request, res: Response ) => {
	const { sort = 'price', order = 'asc' } = req.query

	const sortedProducts = await prisma.product.findMany({
		orderBy: { [ sort as string ]: order as 'asc' | 'desc' }
	})

	res.status(200).json(sortedProducts)
}
export const filteringByRating = async ( req: Request, res: Response ) => {
	try {
		const min = Number(req.query.min) || 1.0;
		const max = Number(req.query.max) || 5.0;

		const filteredShops = await prisma.shop.findMany({
			where: {
				rating: { gte: min, lte: max }
			}
		})

		res.status(200).json(filteredShops)
	} catch (e) {
		if (e instanceof Error) {
			return res.status(500).json({ error: e.message });
		}
		return res.status(500).json({ error: "Something went wrong" });
	}
}