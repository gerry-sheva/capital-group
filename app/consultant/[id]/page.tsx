'use client'
import useConsultant from '@/hooks/useConsultant'
import { Consultant } from '@/types/consultant'
import Image from 'next/image'

interface ConsultantProps {
	params: ParamsProps
}

interface ParamsProps {
	id: string
}

const Page: React.FC<ConsultantProps> = ({ params }) => {
	const consultant: Consultant | undefined = useConsultant(params.id)
	return (
		<div>
			<div className="relative">
				<Image
					src={'/jon.jpeg'}
					width={1280}
					height={640}
					alt="Consultant Image"
					className=" h-[90vh] object-cover object-top"
				/>
				<div className="absolute bottom-0  px-[5vw]">
					<h1 className="text-6xl">{consultant?.name}</h1>
				</div>
			</div>
			<div className="grid lg:grid-cols-3 mx-[5vw] my-6 gap-6">
				<div className="flex flex-col gap-1 col-span-1">
					<h2 className="text-xl lg:text-3xl font-bold mb-1">Contact</h2>
					<a href={`tel:${consultant?.telephone}`}>
						T: {consultant?.telephone}
					</a>
					<a href={`mailto:${consultant?.email}`}>E: {consultant?.email}</a>
				</div>
				<div className="flex flex-col gap-1 col-span-2">
					<h2 className="text-xl lg:text-3xl font-bold mb-1">Overview</h2>
					<p>{consultant?.overview}</p>
				</div>
			</div>
		</div>
	)
}

export default Page
