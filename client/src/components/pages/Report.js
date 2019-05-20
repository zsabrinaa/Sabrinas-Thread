import React, { Component } from "react";
import API from "../../utils/API";
import M from 'materialize-css';



class ReportPage extends Component {
    state = {
        email:"",
        problem: ""
    };
    componentDidMount() {
        M.FormSelect.init(document.getElementsByClassName('select'));
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.state.problem.length < 1 ? M.toast({ html: 'Please enter your report problem' }) :
        API.saveReport(this.state.email, this.state.problem)
        .then(M.toast({ html: 'Reported' }))
        .then(
            this.setState({
                email:"",
                problem: ""
            })
          ).catch(err => console.log(err));
        
    };

    render() {
        return (
            <div className="container">
                <form action="action_page.php" style={{ border: "1px solid #ccc" }}>
                    <div className="container">
                        <h1>Report Your Problem</h1>
                        <label htmlFor="email"><b>Email to contact</b></label>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            type="text"
                            placeholder="Enter Your Email"
                            name="email"
                            id="email"
                            required />

                        <label htmlFor="text"><b>Problem</b></label>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.problem}
                            type="text"
                            name="problem"
                            id="text"
                            required />
                             <div className="clearfix">
                            <a href="/"><button
                                type="button"
                                className="cancelbtn">Cancel</button></a>
                            <button
                                onClick={this.handleFormSubmit}
                                type="submit"
                                className="reportbtn">Report</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
export default ReportPage;