'use client'
import { ConsultantOverview } from '@/types/consultant'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const ConsultantCard: React.FC<ConsultantOverview> = ({ name, id, img }) => {
	const [isHovering, setIsHovering] = useState<boolean>(false)

	console.log(img)
	const handleMouse = () => [setIsHovering((prev) => !prev)]
	return (
		<Link href={`/consultant/${id}`}>
			<div
				onMouseEnter={handleMouse}
				onMouseLeave={handleMouse}
				className="flex flex-col gap-10 w-80 lg:w-60 h-[32rem] lg:h-96 overflow-hidden text-gray-400 hover:text-white hover:border-b-[1px]"
			>
				<Image
					src={isHovering ? `/${img}1.webp` : `/${img}.webp`}
					width={256}
					height={300}
					alt="consultant image"
					className="w-full h-4/5 object-cover rounded-lg"
				/>
				<p>{name}</p>
			</div>
		</Link>
	)
}

export default ConsultantCard
