'use client'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'

const useIsomorphicLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect

gsap.registerPlugin(ScrollTrigger)

const History: React.FC = () => {
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

	return (
		<section
			className="container h-screen w-screen mx-[-5vw] mt-20 bg-red-900 flex overflow-hidden"
			ref={horizontalSection}
		>
			<div className="panel bg-slate-600 h-screen w-full flex-grow flex-shrink-0 basis-full" />
			<div className="panel bg-red-600 h-screen w-full flex-grow flex-shrink-0 basis-full" />
			<div className="panel bg-white h-screen w-full flex-grow flex-shrink-0 basis-full"></div>
		</section>
	)
}
export default History
