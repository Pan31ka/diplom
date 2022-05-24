import React from "react";
import { NavLink } from "react-router-dom";
import css from'./Navbar.module.css';

const Navbar = ({coals}) =>{
	
	return(
		
		<div className={css.nav1}>
			<div className={css.coals__nav__head}>Наш каталог продукции:</div>
			{coals.map( coals=>
					<div >
						<NavLink to={coals.href} className={css.coals__nav}>{coals.value}  </NavLink>
					</div>
				)}
				
		</div>
		
	)
}
export default Navbar;