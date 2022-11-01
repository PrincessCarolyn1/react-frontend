import React, { Component } from 'react'
import TestService from '../services/TestService'

class ListTestComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Test: []
        }
        this.addTest = this.addTest.bind(this);
        this.editTest = this.editTest.bind(this);
        this.deleteTest = this.deleteTest.bind(this);
    }

    deleteTest(id){
        TestService.deleteTest(id).then( res => {
            this.setState({ Test: this.state.Test.filter(Test => Test.id !== id)});
        });
    }
    viewTest(id){
        this.props.history.push(`/view-Test/${id}`);
    }
    editTest(id){
        this.props.history.push(`/add-Test/${id}`);
    }

    componentDidMount(){
        TestService.getTest().then((res) => {
            this.setState({ Test: res.data});
        });
    }

    addTest(){
        this.props.history.push('/add-Test/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Test List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTest}> Add Test</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> Test Dimension</th>
                                <th> Test Metrics</th>
                                <th> Test Fields</th>
                                <th> Test Report</th>
                                <th> Test Test Group</th>
                                <th> Test Test Key</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.Test.map(
                                        Test => 
                                        {
                                            return <tr key={Test.id}>
                                                <td> {Test.Dimension} </td>
                                                <td> {Test.Metrics}</td>
                                                <td> {Test.Fields}</td>
                                                <td> {Test.Report}</td>
                                                <td> {Test.Test} Group}</td>
                                                <td> {Test.Test} Key}</td>
                                                <td> {Test.emailId}</td>
                                                <td>
                                                    <button onClick={() => this.editTest(Test.id)} className="btn btn-info">Update </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteTest(Test.id)} className="btn btn-danger">Delete </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewTest(Test.id)} className="btn btn-info">View </button>
                                                </td>
                                            </tr>;
                                        }
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTestComponent
