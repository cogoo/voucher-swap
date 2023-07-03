import { json, redirect } from '@sveltejs/kit';
import { Keypair } from '@solana/web3.js';
import { CandyPay } from '@candypay/checkout-sdk';
import { CANDYPAY_API_PRIVATE_KEY, CANDYPAY_API_PUBLIC_KEY, STATIC_URL } from '$env/static/private';

const candyPayClient = new CandyPay({
	api_keys: {
		private_api_key: CANDYPAY_API_PRIVATE_KEY,
		public_api_key: CANDYPAY_API_PUBLIC_KEY
	},
	network: 'devnet', // use 'mainnet' for prod and 'devnet' for dev environment
	config: {
		collect_shipping_address: false
	}
});

/**
 * @type {import('./$types').RequestHandler}
 * @description Create a payment intent
 *
 */
export async function POST({ request, params }) {
	const formData = await request.formData();
	const price = Number(formData.get('productPrice')) / 100;
	const name = String(formData.get('productFullName'));
	const productId = String(formData.get('productId'));
	const uuid = crypto.randomUUID();

	const response = await candyPayClient.session.create({
		success_url: `${STATIC_URL}/success/${uuid}`,
		cancel_url: `${STATIC_URL}`,
		tokens: ['usdt'],
		items: [
			{
				name,
				// price in USD
				price,
				image: 'https://imgur.com/M0l5SDh.png',
				quantity: 1
			}
		],
		metadata: {
			productId,
			uuid
		}
	});

	throw redirect(302, response.payment_url);
}
