const CTA: React.FC = () => {
	return (
		<section className="grid grid-cols-7 py-20 gap-12">
			<div className="col-span-3 flex flex-col items-center justify-center text-9xl">
				<p>10</p>
				<p>YRS</p>
			</div>
			<div className="col-span-4">
				<p className="text-lg">Our Story</p>
				<p className="text-5xl my-6">
					Celebrating a decade of thought leadership, innovation and client
					partnerships.
				</p>
				<a className="bg-red-900 py-2 px-8 text-xs rounded-sm">Learn More</a>
			</div>
		</section>
	)
}

export default CTA
