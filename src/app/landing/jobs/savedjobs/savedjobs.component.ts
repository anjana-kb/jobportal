import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../landing.service';
import { jobdetails } from '../../jobmodels/jobmodel';
// import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-savedjobs',
  templateUrl: './savedjobs.component.html',
  styleUrls: ['./savedjobs.component.css']
})
export class SavedjobsComponent implements OnInit {
  jobdetails:any;
  appliedJobs:jobdetails[] = [];
  constructor(private landingService:LandingService,private router: Router) { }

  ngOnInit(): void {
    // this.landingService.savedjobSubject.subscribe((resp)=>{
    //   this.jobdetails=resp;

    // }
    var data:any=sessionStorage.getItem("savedJobs")
    this.jobdetails=JSON.parse(data);
    console.log(this.jobdetails);

    
  }
  Applyjob(job:any)
  {
    this.appliedJobs.push(job);

    console.log("this.appliedJobs",this.appliedJobs);
     sessionStorage.setItem('appliedJobs', JSON.stringify(this.appliedJobs));
     const returnUrl = '/userform';
     this.router.navigateByUrl(returnUrl);
  }
};
