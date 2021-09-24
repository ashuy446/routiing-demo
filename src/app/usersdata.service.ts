import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { dataType } from './user/interface';


@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http:HttpClient) { }
  getData() {
    return {
      name: 'ashu',
      age: 26,
      id: 10
    }
  };
  getApiData()
  {
    let url="https://jsonplaceholder.typicode.com/todos/"
    return this.http.get(url);
  }
  get() {
    const data: dataType = {
      name: 'ashu',
      id: 100,
      indian: "yes",
      address: "42,kota Raj"
    }
    return data;
  }
}
