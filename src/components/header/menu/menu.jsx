import React from "react";
import css from './menu.module.css';
import './menu.css';
import { NavLink } from "react-router-dom";
const Menu = ({items,header,active, setActive,coals}) => {
	return(
		<div className={active ? 'menu active':'menu'} onClick={()=> setActive(false)}>
			<div className={css.blur}/>
				<div className={css.menu__content} onClick={e => e.stopPropagation()}>
					<div className={css.menu__header}>{header}</div>
					<ul>
						{items.map(item =>
							<li>
								
								<NavLink to={item.href}>{item.value}</NavLink>
							</li>
						)}
						<div className={css.menu__header}>Каталог товаров</div>
						{coals.map(coal =>
							<li>
								
								<NavLink to={coal.href}>{coal.value}</NavLink>
							</li>
						)}
					</ul>
				</div>
			
		</div>
	)
}
export default Menu;