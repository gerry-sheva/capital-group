import About from './components/About'
import CTA from './components/CTA'
import HeroAboutUs from './components/Hero'
import History from './components/History'
import President from './components/President'

const AboutUs: React.FC = () => {
	return (
		<main className="min-h-screen mx-[5vw] overflow-hidden">
			<HeroAboutUs />
			<About />
			<President />
			<History />
			<CTA />
		</main>
	)
}

export default AboutUs
