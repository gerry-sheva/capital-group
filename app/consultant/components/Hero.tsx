import Hero from '@/app/components/Hero'
import { motion } from 'framer-motion'

const HeroConsultant: React.FC = () => {
	return (
		<Hero>
			<motion.h1
				className="text-5xl max-w-screen lg:text-7xl"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				EMPOWERING DREAMS,
				<br />
				ONE BOLD IDEA
				<br />
				AT A TIME
			</motion.h1>
		</Hero>
	)
}

export default HeroConsultant
