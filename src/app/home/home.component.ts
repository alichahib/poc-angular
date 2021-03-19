import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../api.service';
import { map, tap, takeUntil} from 'rxjs/operators';
import {  HttpResponse } from "@angular/common/http";
import { Subject } from 'rxjs';

@Component({  
	selector: 'app-home',  
	templateUrl: './home.component.html',  
	styleUrls: ['./home.component.css']  
})  
export class HomeComponent implements OnInit {
  products = [];
  destroy$ = new Subject();
	constructor(private apiService: ApiService) { }
	ngOnInit() {
    this.apiService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{  
      console.log(res);  
      this.products = res.body;  
    }) 
	}
}