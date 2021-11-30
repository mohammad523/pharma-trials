/** @format */

import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";
import Page2 from "./components/Page2/Page2";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
	return (
		<div className='App'>
			<Main />
			<Page2 />
			<Services />
			<ContactUs />
		</div>
	);
}

export default App;
