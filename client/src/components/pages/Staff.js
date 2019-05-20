import React, { Component } from "react";
import API from "../../utils/API";
class Staff extends Component {
    state = {
        reports: [],
        currentUserName: "",
        currentUserEmail: "",

    }
    componentDidMount() {
        this.loadReports();
        const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        });
    }
    loadReports = () => {
        API.getReports()
            .then(res => {
                this.setState({ reports: res.data })
            })
            .catch(err => console.log(err));
    };
    render() {
        const { currentUserEmail, currentUserName } = this.state;
        return (
            <div className="container">
                <h1>Welcome   {currentUserName}</h1>
                <p>You are now logged in</p>
                <div className="container">
                    <div className="row"></div>
                    <div className="row">
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th className="col s4">Report ID</th>
                                    <th className="col s4">User Email</th>
                                    <th className="col s4">Problem</th>
                                </tr>
                            </thead>
                            {this.state.reports ? (
                                this.state.reports.map(report => {
                                    console.log(report)
                                    return (
                                        <tbody>
                                            <tr>
                                                <td className="col s4 cartText">{report._id}</td>
                                                <td className="col s4 cartText">{report.email}</td>
                                                <td className="col s4 cartText">{report.problem}</td>

                                            </tr>
                                        </tbody>
                                    )
                                })
                            ) : (
                                    <h1>No Results to Display</h1>
                                )}
                        </table>
                    </div>

                </div>
            </div>
        )
    }
}
export default Staff;