import {HttpClient} from "./HttpClient";
import {AxiosPromise, AxiosResponse} from "axios";

export interface Employee {
    id: number
    employee_name: string
    employee_salary: number
    employee_age: number
    profile_image: string
}

export class ServerAPI extends HttpClient {

    public constructor() {
        super('http://dummy.restapiexample.com/api/v1');
    }

    public async getEmployees() :Promise<AxiosResponse<Employee[]>>{
        return await this.axios.get('/employees');
    }
}
