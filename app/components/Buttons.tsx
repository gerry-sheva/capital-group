import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
	link: string
	children: ReactNode
}

export const PrimaryButton: React.FC<ButtonProps> = ({ link, children }) => {
	return (
		<Link
			href={`${link}`}
			className="bg-lightGold py-2 px-8 text-black rounded-sm"
		>
			{children}
		</Link>
	)
}
