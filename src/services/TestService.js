import axios from 'axios';

const TEST_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class TestService {

    getTest(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createTest(Test){
        return axios.post(TEST_API_BASE_URL, Test);
    }

    getTestById(TestiD){
        return axios.get(TEST_API_BASE_URL + '/' + TestId);
    }

    updateTest(Test, TestId){
        return axios.put(TEST_API_BASE_URL + '/' + TestId, Test);
    }

    deleteTest(TestId){
        return axios.delete(TEST_API_BASE_URL + '/' + TestId);
    }
}

export TestService new TestService()