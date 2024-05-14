const President: React.FC = () => {
	return (
		<section className="grid grid-cols-9 py-20 border-b-[1px]">
			<div className="col-span-4">IMAGE</div>
			<div className="col-span-5 flex flex-col justify-center pb-8 pt-16 gap-8">
				<div className="text-3xl">
					<p>Curtis Porter</p>
					<p>Founder & President</p>
				</div>
				<p className="text-xl">
					Mr. Porter established the Capital Group in 2011, with the goal of
					assisting public and private sector clients to solve complex business
					and policy challenges better and faster. His aim is to consistently
					provide innovation, quality, and value to all clients. &quot;Our core
					values,&quot; he says, &quot;are integrity, accountability, and mutual
					respect. I&apos;m thrilled that we&apos;ve been able to assemble a
					team of thought leaders, technology experts, and program management
					professionals to assist Capital Group clients in achieving their
					strategic and tactical objectives.&quot;
				</p>
				<p className="text-4xl">
					&quot;We embrace the impossible, because solving the impossible has
					become one of our greatest assets.&quot;
				</p>
			</div>
		</section>
	)
}

export default President