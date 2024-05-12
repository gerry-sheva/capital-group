import About from './components/About'
import CTA from './components/CTA'
import HeroAboutUs from './components/Hero'

const AboutUs: React.FC = () => {
	return (
		<main className="min-h-screen mx-[5vw]">
			<HeroAboutUs />
			<About />
			<CTA />
		</main>
	)
}

export default AboutUs
