<script>
	export let data;
	console.log('🚀 ~ file: +page.svelte:3 ~ data:', data);
</script>

<div class="bg-gray-50 h-screen">
	<div class="mx-auto max-w-2xl pt-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
		<div class="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0">
			<div class="flex sm:items-baseline sm:space-x-4">
				<h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Order #54879</h1>
				<a
					href="#"
					class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block"
				>
					View transaction
					<span aria-hidden="true"> &rarr;</span>
				</a>
			</div>
			<p class="text-sm text-gray-600">
				Order placed <time datetime="2021-03-22" class="font-medium text-gray-900"
					>March 22, 2021</time
				>
			</p>
			<a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:hidden">
				View invoice
				<span aria-hidden="true"> &rarr;</span>
			</a>
		</div>

		<!-- Products -->
		<div class="mt-6">
			<h2 class="sr-only">Products purchased</h2>

			<div class="space-y-8">
				<div class="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border">
					<div class="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
						<div class="sm:flex lg:col-span-7">
							<!-- 
                <-- product image --
                <div
								class="aspect-h-1 aspect-w-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg"
									alt="Insulated bottle with white base and black snap lid."
									class="h-full w-full object-cover object-center sm:h-full sm:w-full"
								/>
							</div> -->

							<div class="mt-6 sm:ml-6 sm:mt-0">
								<h3 class="text-base font-medium text-gray-900">
									<a href="#">Nomad Tumbler</a>
								</h3>
								<p class="mt-2 text-sm font-medium text-gray-900">$35.00</p>
								<p class="mt-3 text-sm text-gray-500">
									This durable and portable insulated tumbler will keep your beverage at the perfect
									temperature during your next adventure.
								</p>
							</div>
						</div>

						<div class="mt-6 lg:col-span-5 lg:mt-0">
							<dl class="grid grid-cols-2 gap-x-6 text-sm">
								<div>
									<dt class="font-medium text-gray-900">Delivery method</dt>
									<dd class="mt-3 text-gray-500">
										<span class="block">email</span>
									</dd>
								</div>
								<div>
									<dt class="font-medium text-gray-900">Voucher details</dt>
									<dd class="mt-3 space-y-3 text-gray-500">
										<p>email: f•••@example.com</p>
										<p>code: 1•••••••••40</p>
										<button type="button" class="font-medium text-indigo-600 hover:text-indigo-500"
											>View</button
										>
									</dd>
								</div>
							</dl>
						</div>
					</div>

					<div class="border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8">
						<h4 class="sr-only">Status</h4>
						<p class="text-sm font-medium text-gray-900">Processing order</p>
						<div class="mt-6" aria-hidden="true">
							<div class="overflow-hidden rounded-full bg-gray-200">
								<div
									class="h-2 rounded-full bg-indigo-600"
									style="width: calc((1 * 2 + 1) / 8 * 100%)"
								/>
							</div>
							<div class="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
								<div class="text-indigo-600">Order placed</div>
								<div class="text-center text-indigo-600">Processing</div>
								<div class="text-center">Voucher issued</div>
								<div class="text-right">Voucher sent</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
