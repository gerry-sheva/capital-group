'use client'

import { useEffect, useState } from 'react'

const Consultants: React.FC = () => {
	const [cons, setCons] = useState({ name: '', telephone: '', overview: '' })

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				'https://cdn.contentful.com/spaces/bslnslt80lth/environments/master/entries/2HMb60BQzDmND7aNEufWnK?access_token=gs_ZhuHqkokZyQERMzeGux9pSrramoZFtUxxArM81Kg'
			)
			res.json().then((data) => setCons(data.fields))
		}
		fetchData()
	}, [])

	return (
		<section>
			<p>{cons.name}</p>
			<p>{cons.telephone}</p>
			<p>{cons.overview}</p>
		</section>
	)
}

export default Consultants
