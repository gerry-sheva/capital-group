'use client'
import { ConsultantOverview } from '@/types/consultant'
import Image from 'next/image'
import { useState } from 'react'

const ConsultantCard: React.FC<ConsultantOverview> = ({ name, id }) => {
	const [isHovering, setIsHovering] = useState<boolean>(false)

	const handleMouse = () => [setIsHovering((prev) => !prev)]
	return (
		<div
			onMouseEnter={handleMouse}
			onMouseLeave={handleMouse}
			className="flex flex-col gap-10 w-64 h-96 overflow-hidden text-gray-400 hover:text-white hover:border-b-[1px]"
		>
			<Image
				src={isHovering ? '/jon.jpeg' : '/jon1.jpeg'}
				width={256}
				height={300}
				alt="consultant image"
				className="w-full h-4/5 object-cover rounded-lg"
			/>
			<p>{name}</p>
		</div>
	)
}

export default ConsultantCard
