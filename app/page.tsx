import Image from 'next/image'
import classNames from 'classnames'
import About from './components/home/About'
import Services from './components/home/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/home/CTA'
import HeroHome from './components/home/Hero'

export default function Home() {
	return (
		<main className={classNames('min-h-screen mx-[5vw]')}>
			<HeroHome />
			<About />
			<Services />
			<Testimonials />
			<CTA />
		</main>
	)
}
