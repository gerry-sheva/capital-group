const Testimonials: React.FC = () => {
	return (
		<section className="grid grid-cols-2 border-y-[1px]">
			<div className="col-span-1 border-r-[1px] flex flex-col gap-12 text-3xl py-8">
				<p>
					— &quot;During firm&apos;s first decade, Capital Group experienced
					rapid growth, by applying practical and innovative solutions to help
					our clients achieve their business objectives. Now, building on that
					experience, we are poised to expand to additional federal markets and
					continue its hallmark quality work in the decade ahead.&quot;
				</p>
				<p>Curtis Porter, President</p>
			</div>
			<div className="col-span-1 flex flex-col">
				<div className="border-b-[1px] py-8">
					<p className="pl-16">GSA (8)a STARS III</p>
				</div>
				<div className="pl-16 py-4 flex flex-col gap-1">
					<p>
						8(a) STARS III is a small business set-aside GWAC that provides
						access to customized IT solutions from a diverse pool of 8(a)
						industry partners.
					</p>
					<p>
						Services may include IT helpdesk, information assurance,
						cybersecurity, artificial intelligence, systems design, software
						development, data management, IT O&M, and more.
					</p>
					<p>
						This next-generation GWAC builds upon 8(a) STARS II and expands
						capabilities for emerging technologies and outside the continental
						United States (OCONUS) requirements.
					</p>
					<p>Visit www.GSA.gov/stars3 for more information.</p>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
