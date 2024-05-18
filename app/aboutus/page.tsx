import About from './components/About'
import CTA from './components/CTA'
import HeroAboutUs from './components/Hero'
import History from './components/History'

const AboutUs: React.FC = () => {
	return (
		<main className="min-h-screen mx-[5vw]">
			<HeroAboutUs />
			<About />
			{/* <History /> */}
			<CTA />
		</main>
	)
}

export default AboutUs
