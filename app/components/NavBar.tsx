'use client'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const NavBar: React.FC = () => {
	const [show, setShow] = useState<boolean>(true)
	const [showMenu, setShowMenu] = useState<boolean>(false)
	const [lastScrollY, setLastScrollY] = useState<number>(0)
	const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })
	const [isClient, setIsClient] = useState(false)

	const controlNavbar = () => {
		if (window.scrollY > lastScrollY) {
			setShow(false)
		} else {
			setShow(true)
		}
		setLastScrollY(window.scrollY)
	}

	useEffect(() => {
		setIsClient(true)
		window.addEventListener('scroll', controlNavbar)

		return () => {
			window.removeEventListener('scroll', controlNavbar)
		}
	}, [])

	const handleShowMenu = (): void => {
		setShowMenu((prev) => !prev)
	}

	if (!isClient) {
		return null
	}

	if (!isDesktop) {
		return (
			<nav className={`max-h-screen ${!show && 'hidden'} max-w-screen`}>
				<div className="h-[15vh] flex items-center gap-6 mx-[5vw] border-b-2 border-b-white">
					<Menu onClick={handleShowMenu} />
					<Image
						src="/logo.svg"
						alt="logo"
						width={200}
						height={100}
						className="text-white"
					/>
				</div>
				{/* dropdown */}
				{showMenu && (
					<div className="h-[85vh] z-10">
						<div className="text-2xl h-full flex flex-col gap-10 mx-[5vw] justify-center">
							<Link
								onClick={handleShowMenu}
								href={'/aboutus'}
							>
								About Us
							</Link>
							<Link
								onClick={handleShowMenu}
								href={'/services'}
							>
								Services
							</Link>
							<Link
								onClick={handleShowMenu}
								href={'/consultant'}
							>
								Consultant
							</Link>
						</div>
					</div>
				)}
			</nav>
		)
	}
	return (
		<nav className="flex justify-between items-center h-[10vh] mx-[5vw] border-b-2 border-b-white">
			<Link href={'/'}>
				<Image
					src="/logo.svg"
					alt="logo"
					width={200}
					height={100}
				/>
			</Link>
			<div className="flex gap-4">
				<Link href={'/aboutus'}>About Us</Link>
				<Link href={'/services'}>Services</Link>
				<Link href={'/consultant'}>Consultant</Link>
			</div>
		</nav>
	)
}

export default NavBar
