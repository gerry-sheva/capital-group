const About: React.FC = () => {
	return (
		<section className="grid grid-cols-2 py-20 gap-12 border-b-[1px]">
			<div className="col-span-1 flex flex-col gap-8">
				<h2 className="text-5xl">
					We&apos;re not your average consulting firm
				</h2>
				<p>
					Since 2011, Capital Group has assisted clients in achieving their
					business objectives. Our team’s diverse background and extensive
					experience in both the public and private sector brings our ingenuity
					and pragmatism together to deliver actionable strategies for clients.
				</p>
			</div>
			<div className="col-span-1 flex flex-col">
				<div className="mb-10">
					<p className="text-[12rem] leading-none">$1B+</p>
					<p className="text-sm">
						Supporting Government and Commercial Programs Ranging from $10M –
						$1B+
					</p>
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col items-center">
						<p className="text-6xl pb-3">98%</p>
						<p className="text-xs">Employee Retention Rate</p>
					</div>
					<div className="flex flex-col items-center">
						<p className="text-6xl pb-3">$3B</p>
						<p className="text-xs">Customer Cost Saved</p>
					</div>
					<div className="flex flex-col items-center">
						<p className="text-6xl pb-3">97%</p>
						<p className="text-xs">Customer Satisfaction Rating</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
