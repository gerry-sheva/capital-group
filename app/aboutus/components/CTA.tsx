import { PrimaryButton } from '@/app/components/Buttons'

const CTA: React.FC = () => {
	return (
		<section className="py-16 lg:py-32 flex flex-col items-center justify-center gap-6 lg:gap-10">
			<h3 className="text-3xl lg:text-6xl text-center">
				Dynamic. Goal-oriented. Value-driven
			</h3>
			<p className="text-md lg:text-xl max-w-md text-center">
				These values define Capital Group consultants. If they apply to you and
				your needs, let&apos;s chat.
			</p>
			<PrimaryButton link="tel:+12027548500">Contact Us</PrimaryButton>
		</section>
	)
}

export default CTA
