'use client'
import { Menu } from 'lucide-react'
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
					<h1 className="text-4xl">Capital Group</h1>
				</div>
				{/* dropdown */}
				{showMenu && (
					<div className="h-[85vh] z-10">
						<div className="text-2xl h-full flex flex-col gap-10 mx-[5vw] justify-center">
							<Link href={'/aboutus'}>About Us</Link>
							<Link href={'/services'}>Services</Link>
							<Link href={'/leadership'}>Leadership</Link>
							<Link href={'/consultant'}>Consultant</Link>
						</div>
					</div>
				)}
			</nav>
		)
	}
	return (
		<nav className="flex justify-between items-center h-[10vh] mx-[5vw] border-b-2 border-b-white">
			<h1>Capital Group</h1>
			<div className="flex gap-4">
				<Link href={'/aboutus'}>About Us</Link>
				<Link href={'/services'}>Services</Link>
				<Link href={'/leadership'}>Leadership</Link>
				<Link href={'/consultant'}>Consultant</Link>
			</div>
		</nav>
	)
}

export default NavBar
