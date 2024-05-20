import { PrimaryButton } from '../Buttons'

const CTA: React.FC = () => {
	return (
		<section className="grid lg:grid-cols-7 py-20 gap-12">
			<div className="hidden col-span-3 lg:flex flex-col items-center justify-center text-9xl">
				<p>10</p>
				<p>YRS</p>
			</div>
			<div className="col-span-4">
				<p className="text-lg font-bold">Our Story</p>
				<p className="text-3xl lg:text-5xl my-6">
					Celebrating a decade of thought leadership, innovation and client
					partnerships.
				</p>
				<PrimaryButton link="/aboutus">Learn More</PrimaryButton>
			</div>
		</section>
	)
}

export default CTA
