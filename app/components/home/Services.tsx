'use client'

import services from '@/app/data/services'
import { Service } from '@/app/type'
import Lottie from 'lottie-react'
import { useState } from 'react'
import { PrimaryButton } from '../Buttons'

const DATA: Service[] = services

const Services = () => {
	const [mainAnimation, setMainAnimation] = useState<any>(null)

	const handleSetMainAnimation = (animation: any) => {
		setMainAnimation(animation)
	}
	return (
		<section className="grid grid-cols-7 py-20 gap-12">
			<div className="col-span-3">
				<div>
					<h3 className="text-5xl">Service Pillars</h3>
					<p className="my-10">
						Success comes from building true partnerships with our clients, so
						we work as an extension of your team.
					</p>
					<PrimaryButton />
				</div>
				{/* Lottie container */}
				{mainAnimation && (
					<div className="mt-20">
						<Lottie
							animationData={mainAnimation}
							loop
						/>
					</div>
				)}
			</div>
			<div className="col-span-4 flex flex-col gap-2">
				{DATA.map((service, index) => (
					<div
						key={index}
						className="flex items-center justify-between h-32 text-3xl border-b-[1px] first:border-t-[1px]"
						onMouseEnter={() => handleSetMainAnimation(service.lottie)}
						// onMouseLeave={() => handleSetMainAnimation(null)}
					>
						<div className="flex gap-4">
							<p>{service.num}</p>
							<p>{service.service}</p>
						</div>
						<div className="w-16 h-16 flex items-center">
							<Lottie
								animationData={service.lottie}
								loop
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Services
