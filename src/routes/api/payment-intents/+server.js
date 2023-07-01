import { json } from '@sveltejs/kit';
import { Keypair } from '@solana/web3.js';

/**
 * @type {import('./$types').RequestHandler}
 * @description Create a payment intent
 *
 */
export async function POST({ request, params }) {
	// generate a new keypair

	// save the keypair to the database

	// return the payment intent with public key to the client
	return json({});
}
