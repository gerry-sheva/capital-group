import Testimonials from '../components/Testimonials'
import HeroServices from './components/Hero'
import ServicesList from './components/ServicesList'

const Services: React.FC = () => {
	return (
		<main className="min-h-screen mx-[5vw]">
			<HeroServices />
			<ServicesList />
			<Testimonials />
		</main>
	)
}

export default Services
