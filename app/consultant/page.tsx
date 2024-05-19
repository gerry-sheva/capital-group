import Consultants from './components/Consultants'
import HeroConsultant from './components/Hero'

const Consultant: React.FC = () => {
	return (
		<main className="min-h-screen mx-[5vw]">
			<HeroConsultant />
			<Consultants />
		</main>
	)
}

export default Consultant
