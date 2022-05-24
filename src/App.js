import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import About from './components/about/about'
import Delivery from './components/delivery/delivery'
import StoneCoal from './components/navbar/stoneCoal/StoneCoal'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';

const App=(props)=> {
	const items =[
		{value:"Главная страница",href:"/"},
		{value:"О нас ",href:"/about"},
		{value:"Доставка",href:"/delivery"},
		{value:"Цены",href:"/price"},
		{value:"Контакты",href:"/contacts"},
	]
	const coals =[
		{value:'Каменный уголь',href:"/stone_coal"},
		{value:'Дрова',href:"/firewood"},
		{value:'Топливные брикеты',href:"/fuel_brick"},
		{value:'Уголь антрацит',href:"/anthracite_brick"},
		{value:'Торфбрикеты',href:"/peat_brick"},
]

  return (
	  <BrowserRouter>
	  <div className='flex'>
		  
			<div className="placement">
				<Header items={items} coals={coals}/>
				<Navbar coals={coals}/>
				<div>
				<Routes>
					<Route path="/" element={<Main/>}/>
					<Route path="/delivery" element={<Delivery/>}/>
					<Route path="/about"element={<About/>}/>
					<Route path="/stone_coal"element={<StoneCoal/>}/>
				</Routes>
				
				</div>
			</div>
			
	 </div>
	 </BrowserRouter>
  );
}

export default App;
