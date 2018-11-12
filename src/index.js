import React from "react";
import ReactDOM from "react-dom";
import Hero from './HeroComponent/Hero.js';
import Form from './BodyComponent/form.js';
import Footer from './FooterComponent/footer.js';
import Content from './BodyComponent/Content.js';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
        this.updateContent = this.updateContent.bind(this);
        //this.display = this.display.bind(this);
    }
    render(){
    	return(
    		<React.Fragment>
        		<Hero title="React Form" />
        		<Form obs={this.updateContent}/>
                <Content ref={(content) => {this.content = content}}/>
        		<Footer />
    		</React.Fragment>
    	);
    }
    updateContent(val){
        //console.log(val)
        this.setState((prev)=>{text: val});
        this.content.updateText(val);
    }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
