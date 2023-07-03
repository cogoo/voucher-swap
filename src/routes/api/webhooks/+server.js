import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, params }) {
	const data = await request.json();
	console.log('params', params);

	// data is an array
	console.log('data', data);

	// use the reference key to find the account in the database

	// confirm payment intent /api/payment-intents/{paymentIntentId}/confirm

	return json({ data });
}
