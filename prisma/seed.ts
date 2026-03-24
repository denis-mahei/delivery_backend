import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	console.log('🌱 Seeding database...')

	// ── 1. CLEAN UP (порядок важливий через foreign keys) ──
	await prisma.orderItem.deleteMany()
	await prisma.order.deleteMany()
	await prisma.coupon.deleteMany()
	await prisma.product.deleteMany()
	await prisma.category.deleteMany()
	await prisma.shop.deleteMany()

	// ── 2. CATEGORIES ──
	const [salads, bowls, wraps, juices, smoothies, desserts] = await Promise.all([
		prisma.category.create({ data: { name: 'Salads' } }),
		prisma.category.create({ data: { name: 'Bowls' } }),
		prisma.category.create({ data: { name: 'Wraps' } }),
		prisma.category.create({ data: { name: 'Juices' } }),
		prisma.category.create({ data: { name: 'Smoothies' } }),
		prisma.category.create({ data: { name: 'Desserts' } }),
	])

	console.log('✅ Categories created')

	// ── 3. SHOPS + PRODUCTS ──

	// SWEETGREEN
	await prisma.shop.create({
		data: {
			name: 'Sweetgreen',
			rating: 4.8,
			imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
			products: {
				create: [
					{
						name: 'Harvest Bowl',
						price: 185,
						imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
						categoryId: bowls.id,
					},
					{
						name: 'Guacamole Greens',
						price: 165,
						imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400',
						categoryId: salads.id,
					},
					{
						name: 'Shroomami Bowl',
						price: 175,
						imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
						categoryId: bowls.id,
					},
					{
						name: 'Kale Caesar',
						price: 155,
						imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400',
						categoryId: salads.id,
					},
					{
						name: 'Chicken Pesto Parm',
						price: 195,
						imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400',
						categoryId: bowls.id,
					},
					{
						name: 'Green Goddess Wrap',
						price: 145,
						imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400',
						categoryId: wraps.id,
					},
					{
						name: 'Cold Pressed Lemonade',
						price: 85,
						imageUrl: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400',
						categoryId: juices.id,
					},
					{
						name: 'Mango Tango Smoothie',
						price: 110,
						imageUrl: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400',
						categoryId: smoothies.id,
					},
					{
						name: 'Acai Bliss Bowl',
						price: 160,
						imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400',
						categoryId: desserts.id,
					},
				],
			},
		},
	})

	// POKE HOUSE
	await prisma.shop.create({
		data: {
			name: 'Poke House',
			rating: 4.6,
			imageUrl: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=400',
			products: {
				create: [
					{
						name: 'Classic Tuna Poke Bowl',
						price: 210,
						imageUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400',
						categoryId: bowls.id,
					},
					{
						name: 'Salmon Avocado Bowl',
						price: 225,
						imageUrl: 'https://images.unsplash.com/photo-1590301157284-5f85fcb894f8?w=400',
						categoryId: bowls.id,
					},
					{
						name: 'Shrimp Mango Bowl',
						price: 200,
						imageUrl: 'https://images.unsplash.com/photo-1599021456807-4a8e4f1cf7e6?w=400',
						categoryId: bowls.id,
					},
					{
						name: 'Vegan Tofu Bowl',
						price: 180,
						imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
						categoryId: bowls.id,
					},
					{
						name: 'Seaweed Salad',
						price: 120,
						imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400',
						categoryId: salads.id,
					},
					{
						name: 'Edamame & Greens',
						price: 110,
						imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
						categoryId: salads.id,
					},
					{
						name: 'Green Tea',
						price: 65,
						imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
						categoryId: juices.id,
					},
					{
						name: 'Coconut Water',
						price: 90,
						imageUrl: 'https://images.unsplash.com/photo-1622597467836-f3e5c4c9b39e?w=400',
						categoryId: juices.id,
					},
					{
						name: 'Mochi Ice Cream',
						price: 95,
						imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
						categoryId: desserts.id,
					},
				],
			},
		},
	})

	// FRESHII
	await prisma.shop.create({
		data: {
			name: 'Freshii',
			rating: 4.3,
			imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400',
			products: {
				create: [
					{
						name: 'Pangoa Bowl',
						price: 170,
						imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
						categoryId: bowls.id,
					},
					{
						name: 'Smoky BBQ Wrap',
						price: 155,
						imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400',
						categoryId: wraps.id,
					},
					{
						name: 'Mediterranean Wrap',
						price: 145,
						imageUrl: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400',
						categoryId: wraps.id,
					},
					{
						name: 'Quinoa Power Salad',
						price: 160,
						imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
						categoryId: salads.id,
					},
					{
						name: 'Spicy Thai Salad',
						price: 150,
						imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400',
						categoryId: salads.id,
					},
					{
						name: 'Green Detox Juice',
						price: 95,
						imageUrl: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400',
						categoryId: juices.id,
					},
					{
						name: 'Berry Blast Smoothie',
						price: 115,
						imageUrl: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400',
						categoryId: smoothies.id,
					},
					{
						name: 'Protein Shake',
						price: 125,
						imageUrl: 'https://images.unsplash.com/photo-1579722820903-b64d6a01e5e1?w=400',
						categoryId: smoothies.id,
					},
					{
						name: 'Chia Pudding',
						price: 105,
						imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400',
						categoryId: desserts.id,
					},
					{
						name: 'Energy Balls (3pc)',
						price: 80,
						imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
						categoryId: desserts.id,
					},
				],
			},
		},
	})

	console.log('✅ Shops & products created')

	// ── 4. COUPONS ──
	await prisma.coupon.createMany({
		data: [
			{
				name: 'Welcome Offer',
				code: 'WELCOME10',
				discount: 10,
				imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400',
			},
			{
				name: 'Summer Vibes',
				code: 'SUMMER20',
				discount: 20,
				imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
			},
			{
				name: 'Health Freak',
				code: 'HEALTHY15',
				discount: 15,
				imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400',
			},
		],
	})

	console.log('✅ Coupons created')
	console.log('🎉 Seed completed!')
}

main()
	.catch(( e ) => {
		console.error('❌ Seed failed:', e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})