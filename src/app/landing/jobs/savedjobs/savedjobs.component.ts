import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../landing.service';
// import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-savedjobs',
  templateUrl: './savedjobs.component.html',
  styleUrls: ['./savedjobs.component.css']
})
export class SavedjobsComponent implements OnInit {
  jobdetails:any;
  constructor(private landingService:LandingService) { }

  ngOnInit(): void {
    // this.landingService.savedjobSubject.subscribe((resp)=>{
    //   this.jobdetails=resp;

    // }
    var data:any=sessionStorage.getItem("savedJobs")
    this.jobdetails=JSON.parse(data);
    console.log(this.jobdetails);

    
  }

};
