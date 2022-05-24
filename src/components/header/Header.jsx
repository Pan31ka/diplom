import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./header.module.css";
import Menu from "./menu/menu";
import CoalsImage from "./coals.svg"
const Header = (props) =>{
	const[menuActive, setMenuActive] = useState(false)


	return(
	<div>
		<div >
			<nav className={css.nav}>
				<div className={css.burger_btn} onClick={()=> setMenuActive(!menuActive)}>
					<span/>
				</div>
				<NavLink to="./" className={css.logo}><img src={CoalsImage} className={css.img}/> ООО ПЕТРОХИМ</NavLink>
				{props.items.map(item =>
							<div className={css.header}>
								
								<NavLink to={item.href}>{item.value}</NavLink>
								</div>
						)}
				
	
			</nav>
			
		</div>
		<Menu items={props.items} header={""} active={menuActive} setActive={setMenuActive} coals={props.coals}/>
			
			
	</div>
	)
}
export default Header;	