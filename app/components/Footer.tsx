import Link from 'next/link'

const Footer: React.FC = () => {
	return (
		<footer className="px-[5vw] py-12 flex flex-col lg:flex-row lg:justify-between gap-6 border-t-[1px]">
			<div>
				<p>info@capitalgroup.com</p>
				<a href="tel:+12027548500">+1-202-754-8500</a>
			</div>
			<div>
				<p>500 L&apos;Enfant Plaza SW, Suite 850</p>
				<p>Washington, DC 20024</p>
			</div>
			<div className="flex gap-6">
				<div className="flex flex-col">
					<Link href={'instagram.com'}>Instagram</Link>
					<Link href={'linkedin.com'}>LinkedIn</Link>
				</div>
				<div className="flex flex-col">
					<Link href={'x.com'}>Twitter</Link>
					<Link href={'indeed.com'}>Indeed</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
