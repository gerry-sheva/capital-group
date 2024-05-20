import Image from 'next/image'
import Hero from '../Hero'
import { Suspense } from 'react'
import { list } from '@vercel/blob'

const HeroHome: React.FC = () => {
	return (
		<Hero>
			<Suspense fallback={<p>Loading video...</p>}>
				<VideoComponent fileName="cg-dgaJih8v6LlJ5lktms3MUu3Q88aSGj.mp4" />
			</Suspense>
			{/* <h1 className="text-4xl lg:text-7xl my-8 lg:my-16">
				BIG GOALS?
				<br />
				WHEN RESULTS MATTER,
				<br />
				CAPITAL GROUP DELIVERS.
			</h1>
			<div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8 lg:gap-12">
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
			</div> */}
		</Hero>
	)
}

export default HeroHome

async function VideoComponent({ fileName }: { fileName: any }) {
	const { blobs } = await list({
		prefix: fileName,
		limit: 1,
	})
	// console.log(blobs)
	const { url } = blobs[0]

	return (
		<video
			controls
			preload="none"
			aria-label="Video player"
			autoPlay
		>
			<source
				src={url}
				type="video/mp4"
			/>
			Your browser does not support the video tag.
		</video>
	)
}
