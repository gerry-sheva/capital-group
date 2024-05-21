'use client'
import Hero from '../../components/Hero'
import { motion } from 'framer-motion'

const HeroServices: React.FC = () => {
	return (
		<Hero>
			<motion.h1
				className="text-5xl lg:text-7xl"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				RESULTS DRIVEN. MAKING THE
				<br />
				UNACHIEVABLE, ACHIEVABLE.
			</motion.h1>
			<motion.h2
				className="text-lg lg:text-xl"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				Transforming ambitious goals into
				<br />
				real-world achievements.
			</motion.h2>
		</Hero>
	)
}

export default HeroServices
