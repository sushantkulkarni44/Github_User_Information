import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  myUrl = "http://api.github.com/users";
  data;

  mySubscription: any;
  constructor(private route: ActivatedRoute, private http:HttpClient, private router:Router) {
    this.route.paramMap
    .subscribe(params => {
      console.log(params);
      // let login = +params.get('login');
      console.log("The ID is :- " +params.get('login'));
      this.myUrl=`http://api.github.com/users/${params.get('login')}`

    });
    this.http.get(this.myUrl).subscribe(Response=>{
      this.data = Response;})

      
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      
      this.mySubscription = this.router.events.subscribe((event) => {
        this.router.navigated = false;
        
      });
   }

  ngOnInit() {
    
  }
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
