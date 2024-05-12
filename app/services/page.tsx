import HeroServices from './components/Hero'
import ServicesList from './components/ServicesList'

const Services: React.FC = () => {
	return (
		<main className="min-h-screen mx-[5vw]">
			<HeroServices />
			<ServicesList />
		</main>
	)
}

export default Services
