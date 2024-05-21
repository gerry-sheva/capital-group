'use client'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

const useIsomorphicLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect

gsap.registerPlugin(ScrollTrigger)

const History: React.FC = () => {
	const isDesktop = useMediaQuery({ query: '(min-width: 720px)' })
	const horizontalSection = useRef<HTMLDivElement>(null)

	useIsomorphicLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const slides = gsap.utils.toArray('.panel')
			gsap.to(slides, {
				xPercent: -100 * (slides.length - 1),
				ease: 'none',
				scrollTrigger: {
					trigger: horizontalSection.current,
					pin: true,
					start: 'top top',
					end: '+=300%',
					scrub: 0.5,
				},
			})
		}, horizontalSection)
		return () => ctx.revert()
	}, [])

	if (!isDesktop) {
		return (
			<section className="w-full flex flex-col gap-20 py-10">
				<div className="h-full w-full flex flex-col gap-6">
					<div className="flex flex-col justify-between gap-2">
						<div className="text-5xl">
							<h2>Humble Beginnings.</h2>
							<h2>2018</h2>
						</div>
						<p>Capital Group was founded on one rainy day in November 2018</p>
					</div>
					<div>
						<Image
							src={'/history_1.webp'}
							width={600}
							height={400}
							alt="founding"
						/>
					</div>
				</div>
				<div className="h-full w-full flex flex-col items-center gap-6">
					<div>
						<Image
							src={'/history_2.webp'}
							width={600}
							height={400}
							alt="founding"
						/>
					</div>
					<div className="flex flex-col justify-between gap-2">
						<p>Capital Group secured 6 new commercial clients</p>
						<div className="text-5xl">
							<h2>Unprecedented Luck.</h2>
							<h2>2019</h2>
						</div>
					</div>
				</div>
				<div className="h-full w-full flex flex-col items-end gap-6">
					<div>
						<Image
							src={'/history_4.webp'}
							width={600}
							height={400}
							alt="founding"
						/>
					</div>
					<div className="flex flex-col justify-between gap-2">
						<p>
							Despite economic slowdown from the global pandemy, our resilience
							still came up on top
						</p>
						<div className="text-5xl">
							<h2>Dubs After Dubs...</h2>
							<h2>2020 - 2022</h2>
						</div>
					</div>
				</div>
				<div className="h-full w-full flex flex-col items-center gap-6">
					<div className="flex flex-col justify-center gap-2">
						<p>
							With more than $3B saved, Capital Group had established itself as
							THE management consultancy firm
						</p>
						<div className="text-5xl">
							<h2>... Fat Ws after Fat Ws</h2>
							<h2>2023 - beyond</h2>
						</div>
					</div>
					<div>
						<Image
							src={'/history_5.webp'}
							width={600}
							height={400}
							alt="founding"
						/>
					</div>
				</div>
			</section>
		)
	}

	return (
		<section
			className="container h-screen w-screen mx-[-5vw] mt-20 flex overflow-hidden"
			ref={horizontalSection}
		>
			<div className="panel h-full w-full flex-grow flex-shrink-0 basis-full grid grid-cols-2 place-content-center">
				<div className="col-span-1 flex flex-col text-8xl justify-between">
					<div>
						<h2>Humble Beginnings.</h2>
						<h2>2018</h2>
					</div>
					<p className="text-xl">
						Capital Group was founded on one rainy day in November 2018
					</p>
				</div>
				<div className="col-span-1">
					<Image
						src={'/history_1.webp'}
						width={600}
						height={400}
						alt="founding"
					/>
				</div>
			</div>
			<div className="panel h-full w-full flex-grow flex-shrink-0 basis-full grid grid-cols-2 place-content-center">
				<div className="col-span-1">
					<Image
						src={'/history_2.webp'}
						width={600}
						height={400}
						alt="founding"
					/>
				</div>
				<div className="col-span-1 flex flex-col text-8xl justify-between">
					<p className="text-xl">
						Capital Group secured 6 new commercial clients
					</p>
					<div>
						<h2>Unprecedented Luck.</h2>
						<h2>2019</h2>
					</div>
				</div>
			</div>
			<div className="panel h-full w-full flex-grow flex-shrink-0 basis-full place-content-center flex flex-col items-center">
				<div>
					<Image
						src={'/history_4.webp'}
						width={600}
						height={400}
						alt="founding"
					/>
				</div>
				<div className="flex flex-col text-8xl justify-between py-10">
					<p className="text-xl">
						Despite economic slowdown from the global pandemy, our resilience
						still came up on top
					</p>
					<div>
						<h2>Dubs After Dubs...</h2>
						<h2>2020 - 2022</h2>
					</div>
				</div>
			</div>
			<div className="panel h-full w-full flex-grow flex-shrink-0 basis-full grid grid-cols-2 place-content-center">
				<div className="col-span-1 flex flex-col text-8xl justify-center">
					<p className="text-xl">
						With more than $3B saved, Capital Group had established itself as
						THE management consultancy firm
					</p>
					<div>
						<h2>... Fat Ws after Fat Ws</h2>
						<h2>2023 - beyond</h2>
					</div>
				</div>
				<div className="col-span-1">
					<Image
						src={'/history_5.webp'}
						width={600}
						height={400}
						alt="founding"
					/>
				</div>
			</div>
		</section>
	)
}
export default History
