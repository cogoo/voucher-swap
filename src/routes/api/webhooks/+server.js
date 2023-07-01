import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, params }) {
	const data = await request.json();
	console.log('params', params);

	// data is an array
	console.log('data', data);

	// loop through data.0.accountData to find reference key

	// use the reference key to find the account in the database

	// validate the transfer and update the transaction record

	return json({ data });
}
