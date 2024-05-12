import Image from 'next/image'

const Services = () => {
	return (
		<section className="grid grid-cols-7 py-20 gap-12">
			<div className="col-span-3">
				<div>
					<h3 className="text-5xl">Service Pillars</h3>
					<p className="my-6">
						Success comes from building true partnerships with our clients, so
						we work as an extension of your team.
					</p>
					<a className="bg-red-900 py-2 px-8 text-xs rounded-sm">Learn More</a>
				</div>
				{/* Lottie container */}
				<div></div>
			</div>
			<div className="col-span-4 flex flex-col gap-2">
				<div className="flex items-center justify-between h-32 text-3xl border-b-[1px] border-t-[1px]">
					<div className="flex gap-4">
						<p>01</p>
						<p>Management Consulting</p>
					</div>
					<Image
						src={'/logo_consulting.svg'}
						width={75}
						height={75}
						alt="consulting logo"
					/>
				</div>
				<div className="flex items-center justify-between h-32 text-3xl border-b-[1px]">
					<div className="flex gap-4">
						<p>01</p>
						<p>Management Consulting</p>
					</div>
					<Image
						src={'/logo_consulting.svg'}
						width={75}
						height={75}
						alt="consulting logo"
					/>
				</div>
				<div className="flex items-center justify-between h-32 text-3xl border-b-[1px]">
					<div className="flex gap-4">
						<p>01</p>
						<p>Management Consulting</p>
					</div>
					<Image
						src={'/logo_consulting.svg'}
						width={75}
						height={75}
						alt="consulting logo"
					/>
				</div>
				<div className="flex items-center justify-between h-32 text-3xl border-b-[1px]">
					<div className="flex gap-4">
						<p>01</p>
						<p>Management Consulting</p>
					</div>
					<Image
						src={'/logo_consulting.svg'}
						width={75}
						height={75}
						alt="consulting logo"
					/>
				</div>
				<div className="flex items-center justify-between h-32 text-3xl border-b-[1px]">
					<div className="flex gap-4">
						<p>01</p>
						<p>Management Consulting</p>
					</div>
					<Image
						src={'/logo_consulting.svg'}
						width={75}
						height={75}
						alt="consulting logo"
					/>
				</div>
			</div>
		</section>
	)
}

export default Services
