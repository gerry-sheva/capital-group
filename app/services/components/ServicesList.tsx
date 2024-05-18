'use client'
import Lottie from 'lottie-react'
import { Service } from '@/app/type'
import services from '@/app/data/services'

const ServicesList: React.FC = () => {
	const DATA: Service[] = services
	return (
		<section className="grid lg:grid-cols-3 gap-16 my-8 lg:my-16">
			{DATA.map((service, index) => (
				<div
					key={index}
					className="col-span-1 flex flex-col gap-4 lg:gap-8"
				>
					<div className="w-32 lg:w-64 aspect-square flex items-center">
						<Lottie
							animationData={service.lottie}
							loop
						/>
					</div>
					<p className="text-xl lg:text-3xl font-bold">{service.num}</p>
					<h3 className="text-2xl lg:text-3xl">{service.service}</h3>
					<p className="text-md">{service.desc}</p>
					<div className="flex flex-col gap-2">
						{service.bullets.map((point, index) => (
							<p
								key={index}
								className="text-md lg:text-xl font-bold"
							>
								{point}
							</p>
						))}
					</div>
				</div>
			))}
		</section>
	)
}

export default ServicesList
