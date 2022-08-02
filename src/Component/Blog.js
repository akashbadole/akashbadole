import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {    
        this.setState({value: event.target.value}); 
     }

      handleSubmit(event) {
        alert('submitted Name: ' + this.state.value);
        event.preventDefault();
      }

    
  render() {
    return (
      <>
        <Header />
        <div className="container py-4">
          <h3 className="heading py-3">Blog</h3>
          <div className="container py-4">
            <p>Coming Soon</p>
          </div>
        </div>
        <div className="container py-4">
            <h4>Assingment 1</h4>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>

     


        <Footer />
      </>
    );
  }
}

export default Blog;
