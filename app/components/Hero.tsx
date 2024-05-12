import Image from 'next/image'
import { ReactNode } from 'react'
interface HeroProps {
	children: ReactNode
}
const Hero: React.FC<HeroProps> = ({ children }) => {
	return (
		<section className="py-8 border-b-[1px]">
			<div className="flex gap-32 text-[.75vw] mb-24">
				<div>
					<p>N 38°53&apos;2.40&quot;</p>
					<p>W 77°01&apos;15.24&quot;</p>
				</div>
				<div>
					<p>Washington, DC</p>
					<p>05:37</p>
				</div>
				<div>
					<p>+1 202-754-8500</p>
					<p>Info@capitalgroupdc.com</p>
				</div>
			</div>
			{children}
		</section>
	)
}

export default Hero
