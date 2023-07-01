import { json } from '@sveltejs/kit';
import { Keypair } from '@solana/web3.js';

/**
 * @type {import('./$types').RequestHandler}
 * @description Confirm a payment intent
 *
 */
export async function POST({ request, params }) {
	// fetch payment intent from database

	// update payment intent

	// return payment intent
	return json({});
}
