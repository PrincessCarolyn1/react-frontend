import React, { Component } from 'react'
import TestService from '../services/TestService'

class ViewTestComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Test: {}
        }
    }

    componentDidMount(){
        TestService.getTestById(this.state.id).then( res => {
            this.setState({ Test: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Test Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Test Dimension: </label>
                            <div> {this.state.Test.dimension }</div>
                        </div>
                        <div className = "row">
                            <label> Test Metrics: </label>
                            <div> {this.state.Test.Metrics }</div>
                        </div>
                        <div className="row">
                            <label> Test Fields: </label>
                            <div> {this.state.Test.Fields}</div>
                        </div>
                        <div className="row">
                            <label> Employee Report: </label>
                            <div> {this.state.Test.Report}</div>
                        </div>
                        <div className="row">
                            <label> Test Test Group: </label>
                            <div> {this.state.Test.TestGroup}</div>
                        </div>
                        <div className = "row">
                            <label> Test Test Key: </label>
                            <div> {this.state.Test.TestKey }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTestComponent
