import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchValue;
  url="https://api.github.com/search/users?q=sushant+repos:%3E=0+followers:%3E=0";
  user1;
  user2;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  searchName()
  {
    return this.http.get(`https://api.github.com/search/users?q=${this.searchValue}+repos:%3E=0+followers:%3E=0`).subscribe(response => {console.log(response)
      this.user1 = response
      this.user2 = this.user1['items']})
  }
  
}
