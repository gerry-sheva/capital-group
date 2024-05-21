import Hero from '@/app/components/Hero'
import { motion } from 'framer-motion'

const HeroAboutUs: React.FC = () => {
	return (
		<Hero>
			<motion.h1
				className="text-5xl lg:text-7xl"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				COMMITTED TO EXCELLENCE.
				<br />
				TURNING VISIONS INTO REALITY.
			</motion.h1>
			<motion.h2
				className="text-lg lg:text-xl"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				A story of
				<br />
				aspirations, dedication, and accomplishments
			</motion.h2>
		</Hero>
	)
}

export default HeroAboutUs
