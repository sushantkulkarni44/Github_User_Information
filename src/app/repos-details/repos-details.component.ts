import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-repos-details',
  templateUrl: './repos-details.component.html',
  styleUrls: ['./repos-details.component.css']
})
export class ReposDetailsComponent implements OnInit {
  myUrl = "http://api.github.com/users";
  data;
  data2;
  constructor(private route: ActivatedRoute, private http:HttpClient) { 
    this.route.paramMap
    .subscribe(params => {
      console.log(params);
      // let login = +params.get('login');
      console.log("The ID is :- " +params.get('login'));
      this.myUrl=`http://api.github.com/users/${params.get('login')}/repos`
    });
    this.http.get(this.myUrl).subscribe(Response=>{
      this.data = Response;
    console.log(this.data)
      this.data2 = this.data["license"]
  })  
  }

  ngOnInit() {
  }

}
