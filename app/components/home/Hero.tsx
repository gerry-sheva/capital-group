'use client'
import Image from 'next/image'
import Hero from '../Hero'
import { Suspense, useState } from 'react'
import { motion, stagger } from 'framer-motion'
import { PrimaryButton } from '../Buttons'

const HeroHome: React.FC = () => {
	const [isHovering, setIsHovering] = useState<boolean>(false)

	const handleHover = () => {
		setIsHovering((prev) => !prev)
	}
	return (
		<Hero>
			<div
				onMouseEnter={handleHover}
				onMouseLeave={handleHover}
				className="relative"
			>
				<Suspense
					fallback={
						<Image
							src={'/hero.webp'}
							width={1280}
							height={720}
							alt="hero image"
						/>
					}
				>
					<video
						src={'/cg.mp4'}
						width={1280}
						height={720}
						autoPlay
						muted
						loop
						preload="auto"
					/>
				</Suspense>
				{isHovering && (
					<motion.div
						className="hidden lg:block absolute top-0 bg-black/40 w-full h-full"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.25 }}
					>
						<motion.h1
							className="text-4xl lg:text-7xl my-8 lg:my-16"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							BIG GOALS?
							<br />
							WHEN RESULTS MATTER,
							<br />
							CAPITAL GROUP DELIVERS.
						</motion.h1>
						<motion.div
							className="flex flex-col lg:items-start gap-8"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<h2 className="text-xl">
								Analyze. Plan. Execute.
								<br />
								Combining innovation and ingenuity
								<br />
								to achieve stellar results.
							</h2>
							<PrimaryButton link="/services">Learn More</PrimaryButton>
						</motion.div>
					</motion.div>
				)}
			</div>
		</Hero>
	)
}

export default HeroHome
