import { json } from '@sveltejs/kit';
import { Keypair } from '@solana/web3.js';

/**
 * @type {import('./$types').RequestHandler}
 * @description Confirm a payment intent
 *
 */
export async function POST({ request, params }) {
	const payload = await json(request);
	console.log('🚀 ~ file: +server.js:11 ~ POST ~ payload:', payload);

	// issue voucher

	// update payment intent

	// send email?
	return json({});
}
