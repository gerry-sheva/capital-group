import { PrimaryButton } from '@/app/components/Buttons'

const CTA: React.FC = () => {
	return (
		<section className="py-32 flex flex-col items-center justify-center gap-10">
			<h3 className="text-6xl">Dynamic. Goal-oriented. Value-driven</h3>
			<p className="text-xl max-w-md text-center">
				These values define Capital Group consultants. If they apply to you and
				your needs, let&apos;s chat.
			</p>
			<PrimaryButton />
		</section>
	)
}

export default CTA
