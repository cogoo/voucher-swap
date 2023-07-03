import { json } from '@sveltejs/kit';
import { Keypair } from '@solana/web3.js';

/**
 * @type {import('./$types').RequestHandler}
 * @description Confirm a payment intent
 *
 */
export async function POST({ request, fetch }) {
	const payload = await request.json();
	console.log('🚀 ~ file: +server.js:11 ~ POST ~ payload:', payload);

	// issue voucher

	// const response = await fetch('/api/orders', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(payload)
	// });

	// update payment intent

	// send email?
	return json({});
}
