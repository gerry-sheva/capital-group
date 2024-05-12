import Image from 'next/image'
import Hero from '../Hero'

const HeroHome: React.FC = () => {
	return (
		<Hero>
			<h1 className="text-7xl my-16">
				BIG GOALS?
				<br />
				COMPLEX PROJECTS?
				<br />
				WHEN RESULTS MATTER,
				<br />
				CAPITAL GROUP DELIVERS.
			</h1>
			<div className="flex gap-12 items-center ">
				<div className="text-sm border-[.06vw] border-lightWhite flex items-center justify-evenly w-44 h-14 hover:bg-white hover:text-black">
					<Image
						src={'/play.svg'}
						width={15}
						height={15}
						alt="play icon"
					/>
					<a>Watch Our Video</a>
				</div>
				<h2 className="text-xl">
					Analyze. Plan. Execute.
					<br />
					Combining innovation and ingenuity
					<br />
					to achieve stellar results.
				</h2>
			</div>
		</Hero>
	)
}

export default HeroHome
