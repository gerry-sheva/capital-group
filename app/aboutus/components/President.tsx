import Image from 'next/image'

const President: React.FC = () => {
	return (
		<section className="lg:grid lg:grid-cols-9 gap-10 py-20 border-b-[1px]">
			<div className="col-span-4">
				<Image
					src={'/prez.webp'}
					width={600}
					height={1200}
					alt="President"
					className="h-full object-cover"
				/>
			</div>
			<div className="col-span-5 flex flex-col justify-center pb-8 pt-16 gap-8">
				<div className="text-3xl">
					<p>Brobson Brabanzon</p>
					<p>Founder & President</p>
				</div>
				<p className="text-xl">
					Mr. Brabanzon established the Capital Group in 2011, with the goal of
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
