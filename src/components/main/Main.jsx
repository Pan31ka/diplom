import React from "react";
import './main.css';
import degods from "./degods.png";
const Main =() =>{
	return(
		<div className="main">
			<img src={degods} className="degods"/>
			<h3>Тепло в вашем доме всегда!!!</h3>
			<p>
			это продажа высококачественного угля, добытого на крупнейших месторождениях Сибири и Кузбасса. Отгрузка с шахт и разрезов, а также поставки на рынок угольной продукции осуществляется непосредственно нашей компанией. Весь товар обладает высоким качеством и пользуется огромным спросом не только в России, но и за рубежом.
			
			</p>	
		
			<p className="header__mini">Что такое каменный уголь?</p>	<p>
Это осадочная порода, которая является результатом гниения растений палеозойского периода, примерно 300 – 350 млн. лет назад. Этот процесс проходил без доступа кислорода, а растения накапливались быстрее, чем происходило их разложение. Если получившийся таким образом торф попадал под другие наносы, под их давлением он терял газы и влагу, спрессовывался и превращался в уголь. Обычная глубина залегания пластов каменного угля – более 3 км. В его состав входят высокомолекулярные соединения (в основном – углеводород), вода и летучие вещества с примесями. Чем выше в угле содержание углеводорода, тем он старше и ценнее. От качественного состава угля зависит количество выделяемого при сгорании тепла.
			</p>
			
		</div>
	)
}
export default Main;