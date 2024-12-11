import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg bg-dark"
				data-bs-theme="dark"
			>
				<NavLink className="navbar-brand" to="/">
					Game List
				</NavLink>

				<div className="ml-auto" id="collapseNavbar">
					<ul className="navbar-nav ">
						<li className="nav-item">
							<NavLink className="nav-link" to="/reviews">
								My Reviews
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/gamesList">
								My List
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
