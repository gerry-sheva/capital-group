'use client'

import useConsultantsList from '@/hooks/useConsultantsList'
import ConsultantCard from './ConsultantCard'

const Consultants: React.FC = () => {
	const consultantsList = useConsultantsList()
	console.log(consultantsList)
	return (
		<section className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center max-w-screen my-6">
			{consultantsList.map((consultant) => (
				<ConsultantCard
					key={consultant.id}
					name={consultant.name}
					id={consultant.id}
					img={consultant.img}
				/>
			))}
		</section>
	)
}

export default Consultants
