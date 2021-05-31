import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  tableDataFixed:any=[];
  listData1:any;
  listData2:any=[];
  dummyListData:any;
  queryString:any;
  tableData:any=[];
  constructor( private _baseServie:TableserviceService) { }
  
 
   ngOnInit(): void
 {
 this._baseServie.getData().subscribe(res=>{
   console.log(res)
   this.tableDataFixed=res
 })
 this._baseServie.listData1().subscribe(res=>{
  console.log(res)
  this.listData1=res;
  this.dummyListData = this.listData1;
})
this._baseServie.listData2().subscribe(res=>{
  console.log(res)
  this.listData2=res
})
this._baseServie.getTableData().subscribe(res=>{
  console.log(res)
  this.tableData=res
})
}

      }



