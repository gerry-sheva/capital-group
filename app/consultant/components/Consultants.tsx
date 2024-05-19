'use client'

import useConsultantsList from '@/hooks/useConsultantsList'
import ConsultantCard from './ConsultantCard'

const Consultants: React.FC = () => {
	const consultantsList = useConsultantsList()
	console.log(consultantsList)
	return (
		<section className="grid grid-cols-4 place-items-center">
			{consultantsList.map((consultant) => (
				<ConsultantCard
					key={consultant.id}
					name={consultant.name}
					id={consultant.id}
				/>
			))}
		</section>
	)
}

export default Consultants
