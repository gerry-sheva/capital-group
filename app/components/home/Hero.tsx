'use client'
import Image from 'next/image'
import Hero from '../Hero'
import { Suspense, useState } from 'react'

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
					<div className="hidden lg:block absolute top-0 bg-black/40 w-full h-full">
						<h1 className="text-4xl lg:text-7xl my-8 lg:my-16">
							BIG GOALS?
							<br />
							WHEN RESULTS MATTER,
							<br />
							CAPITAL GROUP DELIVERS.
						</h1>
						<div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8 lg:gap-12">
							<h2 className="text-xl">
								Analyze. Plan. Execute.
								<br />
								Combining innovation and ingenuity
								<br />
								to achieve stellar results.
							</h2>
						</div>
					</div>
				)}
			</div>
		</Hero>
	)
}

export default HeroHome
