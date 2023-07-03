import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, params, locals, fetch }) {
	const paymentData = await request.json();

	const supabase = locals.supabase;
	const uuid = paymentData.metadata.uuid;

	// save payment intent
	const { error } = await supabase
		.from('payment_intents')
		.insert([{ id: uuid, payment_metadata: paymentData }]);

	// check for error

	// confirm payment intent /api/payment-intents/{paymentIntentId}/confirm
	fetch(`/api/payment-intents/${uuid}/confirm`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: paymentData
	});

	return json({ uuid });
}
