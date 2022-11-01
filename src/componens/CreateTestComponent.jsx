import React, { Component } from 'react'
import TestService from '../services/TestService';

class CreateTestComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            Dimension: '',
            Metrics: '',
            Fields: '',
            Report: '',
            TestGroup: '',
            TestKey: ''
        }
        this.changeDimensionHandler = this.changeDimensionHandler.bind(this);
        this.changeMetricsHandler = this.changeMetricsHandler.bind(this);
        this.changeFieldsHandler = this.changeFieldsHandler.bind(this);
        this.changeReportHandler = this.changeReportHandler.bind(this);
        this.changeTestGroupHandler = this.changeTestGroupHandler.bind(this);
        this.changeTestKeyHandler = this.changeTestKeyHandler.bind(this);

        this.saveOrUpdateTest = this.saveOrUpdateTest.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TestService.getTestById(this.state.id).then( (res) =>{
                let Test = res.data;
                this.setState({
                    Dimension: Test.Dimension,
                    Metrics: Test.Metrics,
                    Fields: Test.Fields,
                    Report: Test.Report,
                    TestGroup: Test.TestGroup,
                    TestKey: Test.TestKey
                });
            });
        }        
    }
    saveOrUpdateTest = (e) => {
        e.preventDefault();
        let Test = {
            Dimension: this.state.Dimension, Metrics: this.state.Metrics, Fields: this.state.Fields, Report: this.state.Report, TestGroup: this.state.TestGroup, TestKey: this.state.TestKey};
        console.log('Test => ' + JSON.stringify(Test));

        // step 5
        if(this.state.id === '_add'){
            TestService.createTest(Test).then(res =>{
                this.props.history.push('/Test');
            });
        }else{
            TestService.updateTest(Test, this.state.id).then( res => {
                this.props.history.push('/Test');
            });
        }
    }
    
    changeDimensionHandler= (event) => {
        this.setState({ Dimension: event.target.value});
    }
    changeMetricsHandler= (event) => {
        this.setState({ Metrics: event.target.value});
    }
    changeFieldsHandler = (event) => {
        this.setState({ Fields: event.target.value });
    }
    changeReportHandler = (event) => {
        this.setState({ Report: event.target.value });
    }
    changeTestGroupHandler = (event) => {
        this.setState({ TestGroup: event.target.value });
    }
    changeTestKeyHandler = (event) => {
        this.setState({ TestKey: event.target.value });
    }

    }

    cancel(){
        this.props.history.push('/Test');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Test</h3>
        }else{
            return <h3 className="text-center">Update Test</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                        <label> Dimension: </label>
                                        <input Splaceholder="Dimension" name="Dimension" className="form-control"
                                                value={this.state.Dimension} onChange={this.changeDimensionHandler}/>
                                        </div>
                                        <div className="form-group">
                                        <label> Metrics: </label>
                                        <input Splaceholder="Metrics" name="Metrics" className="form-control"
                                            value={this.state.Metrics} onChange={this.changeMetricsHandler} />
                                        </div>
                                        <div className="form-group">
                                        <label> Fields: </label>
                                        <input Splaceholder="Fields" name="Fields" className="form-control"
                                            value={this.state.Fields} onChange={this.changeFieldsHandler} />
                                        </div>
                                        <div className="form-group">
                                        <label> Report: </label>
                                        <input Splaceholder="Report" name="Report" className="form-control"
                                            value={this.state.Report} onChange={this.changeReportHandler} />
                                        </div>
                                        <div className = "form-group">
                                        <label> Test Group: </label>
                                        <input placeholder="Test Group" name="TestGroup" className="form-control"
                                            value={this.state.TestGroup} onChange={this.changeTestGroupHandler}/>
                                        </div>
                                        <div className = "form-group">
                                        <label> Test Key: </label>
                                        <input placeholder="Test Key" name="TestKey" className="form-control"
                                            value={this.state.TestKey} onChange={this.changeTestKeyHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTest}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTestComponent
