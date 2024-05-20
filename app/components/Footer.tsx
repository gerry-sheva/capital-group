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
				<div>
					<p>Instagram</p>
					<p>LinkedIn</p>
				</div>
				<div>
					<p>Twitter</p>
					<p>Indeed</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
