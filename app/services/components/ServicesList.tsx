'use client'
import Lottie from 'lottie-react'
import { Service } from '@/app/type'
import services from '@/app/data/services'

const ServicesList: React.FC = () => {
	const DATA: Service[] = services
	return (
		<section className="grid grid-cols-3 gap-16">
			{DATA.map((service, index) => (
				<div
					key={index}
					className="col-span-1 flex flex-col gap-8"
				>
					<div className="w-64 aspect-square flex items-center">
						<Lottie
							animationData={service.lottie}
							loop
						/>
					</div>
					<p className="text-3xl">{service.num}</p>
					<h3 className="text-3xl">{service.service}</h3>
					<p>{service.desc}</p>
					<div className="flex flex-col gap-2">
						{service.bullets.map((point, index) => (
							<p key={index}>{point}</p>
						))}
					</div>
				</div>
			))}
		</section>
	)
}

export default ServicesList
