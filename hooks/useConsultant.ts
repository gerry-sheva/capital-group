import { Consultant } from '@/types/consultant'
import { useEffect, useState } from 'react'

const useConsultant = (id: string): Consultant | undefined => {
	const [consultant, setConsultant] = useState<Consultant>()

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`https://cdn.contentful.com/spaces/bslnslt80lth/environments/master/entries/${id}?access_token=gs_ZhuHqkokZyQERMzeGux9pSrramoZFtUxxArM81Kg`
			)
			const data = await res.json()
			const fields = data.fields as Consultant
			setConsultant(fields)
		}
		fetchData()
	}, [])
	return consultant
}

export default useConsultant
