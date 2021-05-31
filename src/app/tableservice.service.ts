import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {
  constructor(private httpClient:HttpClient){}

  getData(){
    return this.httpClient.get("assets/data/listdata.json")
      }

  listData1(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
  }
  listData2(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
  }
  getTableData(){
    return this.httpClient.get("http://localhost:3000/comments")
  }
}
