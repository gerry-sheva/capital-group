const About: React.FC = () => {
	return (
		<section className="grid lg:grid-cols-2 py-10 lg:py-20 gap-6 lg:gap-12 border-b-[1px]">
			<div className="col-span-1 flex flex-col gap-4 lg:gap-8">
				<h2 className="text-3xl lg:text-5xl">
					We&apos;re not your average consulting firm
				</h2>
				<p className="text-xs lg:text-lg">
					Since 2011, Capital Group has assisted clients in achieving their
					business objectives. Our team’s diverse background and extensive
					experience in both the public and private sector brings our ingenuity
					and pragmatism together to deliver actionable strategies for clients.
				</p>
			</div>
			<div className="col-span-1 flex flex-col">
				<div className="mb-5 self-center text-center lg:mb-10">
					<p className="text-[8rem] lg:text-[12rem] leading-none">$1B+</p>
					<p className="text-sm">
						Supporting Government and Commercial Programs Ranging from $10M –
						$1B+
					</p>
				</div>
				<div className="flex justify-evenly md:justify-between gap-4 flex-wrap">
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
