import HeroLeadership from './components/Hero'
import President from './components/President'
import WelcomeStatement from './components/WelcomeStatement'

const Leadership: React.FC = () => {
	return (
		<main className="min-w-screen mx-[5vw]">
			<HeroLeadership />
			<WelcomeStatement />
			<President />
		</main>
	)
}

export default Leadership
