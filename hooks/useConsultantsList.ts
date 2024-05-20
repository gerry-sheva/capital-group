import { ConsultantOverview } from '@/types/consultant'
import { useEffect, useState, useCallback } from 'react'

const useConsultantsList = () => {
	const [consultantsList, setConsultantsList] = useState<ConsultantOverview[]>(
		[]
	)

	const fetchData = useCallback(async () => {
		const res = await fetch(
			'https://cdn.contentful.com/spaces/bslnslt80lth/environments/master/entries?access_token=gs_ZhuHqkokZyQERMzeGux9pSrramoZFtUxxArM81Kg&content_type=consultantProfiles'
		)
		const data = await res.json()
		const consultants = data.items.map((item: any) => ({
			name: item.fields.name,
			id: item.fields.consultant.sys.id,
			img: item.fields.img,
		}))
		setConsultantsList(consultants)
	}, [])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return consultantsList
}

export default useConsultantsList

// const useConsultantsList = () => {
// 	const [consultantsList, setConsultantsList] = useState<ConsultantOverview[]>(
// 		[]
// 	)

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const res = await fetch(
// 				'https://cdn.contentful.com/spaces/bslnslt80lth/environments/master/entries?access_token=gs_ZhuHqkokZyQERMzeGux9pSrramoZFtUxxArM81Kg&content_type=consultantProfiles'
// 			)
// 			const data = await res.json()
// 			data.items.map((item: any) => {
// 				const consultant: ConsultantOverview = {
// 					name: item.fields.name,
// 					id: item.fields.consultant.sys.id,
// 				}
// 				setConsultantsList((prev) => [...prev, consultant])
// 			})
// 		}
// 		fetchData()
// 	}, [])

// 	return consultantsList
// }

// export default useConsultantsList
