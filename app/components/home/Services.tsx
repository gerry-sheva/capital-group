'use client'

import services from '@/app/data/services'
import { Service } from '@/app/type'
import Lottie from 'lottie-react'
import { useState } from 'react'
import { PrimaryButton } from '../Buttons'
import { motion } from 'framer-motion'

const DATA: Service[] = services

const Services = () => {
	const [mainAnimation, setMainAnimation] = useState<any>(null)

	const handleSetMainAnimation = (animation: any) => {
		setMainAnimation(animation)
	}
	return (
		<section className="grid lg:grid-cols-7 py-10 lg:py-20 gap-12">
			<div className="col-span-3">
				<div>
					<h3 className="text-4xl lg:text-5xl">Service Pillars</h3>
					<p className="my-5 lg:my-10">
						Success comes from building true partnerships with our clients, so
						we work as an extension of your team.
					</p>
					<PrimaryButton link="/services">Learn More</PrimaryButton>
				</div>
				{/* Lottie container */}
				{mainAnimation && (
					<motion.div
						className="hidden lg:block lg:mt-20"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
					>
						<Lottie
							animationData={mainAnimation}
							loop
						/>
					</motion.div>
				)}
			</div>
			<div className="col-span-4 flex flex-col gap-2">
				{DATA.map((service, index) => (
					<motion.div
						key={index}
						className="flex items-center justify-between h-24 lg:h-32 text-3xl border-b-[1px] first:border-t-[1px]"
						onMouseEnter={() => handleSetMainAnimation(service.lottie)}
						onMouseLeave={() => handleSetMainAnimation(null)}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
					>
						<div className="flex gap-4 items-center">
							<p>{service.num}</p>
							<p className="text-xl lg:text-3xl">{service.service}</p>
						</div>
						<div className="w-16 h-16 flex items-center">
							<Lottie
								animationData={service.lottie}
								loop
							/>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	)
}

export default Services
