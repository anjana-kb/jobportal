import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  pathName:any
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(window.location.pathname);
    this.pathName=window.location.pathname;
  }

  logout(){
    const returnUrl = '/login';
     this.router.navigateByUrl(returnUrl);
  }

}
