import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../../app/router';
import './Navbar.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Maximum number of nav options shown before it
 * gets transformed in burger menu
 */
const MAX_NAVBAR_ITEMS_ON_LINE: number = 5;
const FORCE_BURGER_MENU = true;

export default function Navbar() {
	const isRowMenu = routes.length <= MAX_NAVBAR_ITEMS_ON_LINE && !FORCE_BURGER_MENU;

	const { pathname } = useLocation();
	const [isMenuOpen, setMenuState] = useState(false);
	const toggleMenu = () => setMenuState((oldState) => !oldState);

	return (
		<div className="navbar-container">
			{/* Button to open the menu */}
			{!isRowMenu && !isMenuOpen ? (
				<i className="bi bi-list menu-btn" onClick={toggleMenu}></i>
			) : (
				<></>
			)}

			{/* Normal row menu */}
			{isRowMenu ? (
				<div className="nav-row">
					{routes.map((route) => {
						return (
							<Link
								key={route.id}
								to={route.path}
								className={`nav-link ${pathname === route.path ? 'active' : ''}`}>
								{route.label}
							</Link>
						);
					})}
				</div>
			) : (
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							key="burger-menu"
							className="nav-list"
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', duration: 0.2 }}>
							<div className="menu-header">
								<i className="bi bi-x menu-btn" onClick={toggleMenu}></i>
							</div>

							<div className="nav-list-items">
								{routes.map((route) => (
									<Link
										key={route.id}
										to={route.path}
										className={`nav-link ${pathname === route.path ? 'active' : ''}`}
										onClick={() => setMenuState(false)}>
										{route.label}
									</Link>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			)}
		</div>
	);
}
