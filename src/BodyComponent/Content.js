import React from 'react';

export default class Content extends React.Component {
    //constructor sets up props (immutable)
    //and state (mutable)
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
        };
        //this.handleChange = this.handleChange.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    // handleChange(event){
    //     console.log(event.target.value);
    //     this.setState({text: event.target.value});
    // }
    updateText(val){
        console.log(val)
        this.setState((prev)=>{text: val});
    }

    render() {
        console.log("in render")
        return (
            <p className={this.state.style} >
                {this.state.text}
            </p>
        );
    }
}
