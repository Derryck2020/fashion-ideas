import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import { BsYoutube, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

export const links = [
	{
		id: 1,
		text: 'home',
		url: '/',
	},
	{
		id: 2,
		text: 'about',
		url: '/about',
	},
	{
		id: 3,
		text: 'products',
		url: '/products',
	},
];

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: 'mission',
		text: '"Elevating style with a curated collection. Empowering individuality. Embracing sustainability. Redefining fashion, one conscious choice at a time."',
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: 'vision',
		text: 'To be the global destination for fashion enthusiasts, uniting diverse styles with ethical choices, and inspiring confident self-expression.',
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: 'history',
		text: 'Founded with a passion for style in 2020. Evolved into a premier online fashion hub, blending trends, quality, and accessibility.',
	},
];

export const customer_service = [
	{
		id: 1,
		text: 'contact us',
	},
	{
		id: 2,
		text: 'track an order',
	},
	{
		id: 3,
		text: 'delivery',
	},
	{
		id: 4,
		text: 'exhange and return policy',
	},
	{
		id: 5,
		text: 'delivery',
	},
	{
		id: 6,
		text: 'create returns',
	},
	{
		id: 7,
		text: 'gifts cards',
	},
	{
		id: 8,
		text: 'FAQ',
	},
];
export const about_fashion_dial = [
	{
		id: 1,
		text: 'our story',
	},
	{
		id: 2,
		text: 'advertising',
	},
	{
		id: 3,
		text: 'affiliates',
	},
	{
		id: 4,
		text: 'careers',
	},
	{
		id: 5,
		text: 'partner boutique',
	},
	{
		id: 6,
		text: 'corporate social responsibility',
	},
	{
		id: 7,
		text: 'get email update',
	},
	{
		id: 8,
		text: 'fashion dial blog',
	},
];
export const social_icons = [
	{
		id: 1,
		icon: <BsYoutube />,
	},
	{
		id: 2,
		icon: <BsFacebook />,
	},
	{
		id: 3,
		icon: <BsInstagram />,
	},
	{
		id: 4,
		icon: <BsTwitter />,
	},
	{
		id: 5,
		icon: <FaTiktok />,
	},
];

export const products_url = '/.netlify/functions/products';

export const single_product_url = `/.netlify/functions/single-product?id=`;
