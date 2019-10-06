import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.scss';
import logo from '../../app/img/logo.png';

export const Header = () => {
	return (
		<header className="header">
			<Link to="/" className="logo">
				MarkovJS
			</Link>

			<nav className="nav">
				<ul className="nav-list">
					<li>
						<NavLink exact activeClassName="nav-list__item_active" className="nav-list__item" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="nav-list__item_active" className="nav-list__item" to="/notes">
							Notes
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="nav-list__item_active" className="nav-list__item" to="/about">
							About
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
