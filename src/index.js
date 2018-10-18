import React from "react";
import ReactDOM from "react-dom";
import Hero from './HeroComponent/Hero.js';
import Form from './BodyComponent/form.js';
import Footer from './FooterComponent/footer.js';
function App(props){
	return(
		<React.Fragment>
		<Hero title="React Form" />
		<Form />
		<Footer />
		</React.Fragment>
	);
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
