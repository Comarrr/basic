'use client'

import { Button } from "@/components/ui/button"
import { NavigationMenuItem } from "@/components/ui/navigation-menu"
import { NavigationMenu, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { XCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"




const Navbar = () => {

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}
	

	return (
		<nav className={`${isOpen ? 'bg-[#252422] h-full text-[#f9cdcd] text-bold xl:bg-transparent xl:text-black' : 'bg-transparent'}`}>
			<div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between mx-auto p-4  xl:flex-nowrap">
				<Link href="/">
					<span>BASIC/DEPT®</span>
				</Link>
				<Button
					data-collapse-toggle="navbar-default"
					aria-controls="navbar-default"
					aria-expanded={isOpen}
					className="inline-flex items-center bg-transparent p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100"
					onClick={toggleMenu}
					variant={"close"}
				>
					
					<span>{isOpen ? <XCircle color="white"/> : 'Menu'}</span>
				</Button>
				<div className={`w-full mt-8 xl:mt-0 xl:flex xl:justify-center ${isOpen ? '' : 'hidden'}`} id="navbar-default">
					<NavigationMenu>
						<NavigationMenuList className="flex flex-col gap-4 xl:flex-row">
							<NavigationMenuItem>
								<Link href="/">
									<span>WORK</span>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/">
									<span>ABOUT</span>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/">
									<span>NEWS</span>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/">
									<span>THINKING</span>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/">
									<span>CAREERS</span>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/">
									<span>CONTACT</span>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</nav>
	)
}

export default Navbar