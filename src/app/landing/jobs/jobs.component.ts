import { Component, OnInit } from '@angular/core';
import { jobdetails } from '../jobmodels/jobmodel';
import { LandingService } from '../landing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobdetails:any;
  searchJob: string = '';
  searchLocation: string = '';
  savedJobs: jobdetails[] = [];
  appliedJobs:jobdetails[] = [];
  numberofappliedjobs:number | undefined;
  constructor(private landingService:LandingService,  private router: Router,) { }

  ngOnInit(): void {
    this.jobdetails=jobdetails;
    console.log("this.jobdetails",this.jobdetails);
    
 
  }

  filterJobDetails(): jobdetails[] {
let jobnew= this.jobdetails.filter((job:any) => 
      job.job_role.toLowerCase().includes(this.searchJob.toLowerCase()) &&
      job.location.toLowerCase().includes(this.searchLocation.toLowerCase())
    );
    return jobnew;
  }

  // Function to be called when search button is clicked
  onSearch(): void {
    // Call filterJobDetails() to update the filtered job details
    this.jobdetails=this.filterJobDetails();

  }

  saveJob(job:any){
   this.savedJobs.push(job);

   console.log("this.savedJobs",this.savedJobs);
    sessionStorage.setItem('savedJobs', JSON.stringify(this.savedJobs));
  // this.landingService.savedjobSubject.next(this.savedJobs);

  this.openModal();
  }
  Applyjob(job:any)
  {
    this.appliedJobs.push(job);
  this.numberofappliedjobs= this.appliedJobs.length;

    console.log("this.appliedJobs.length",this.appliedJobs.length);
   sessionStorage.setItem('appliedJobs', JSON.stringify(this.appliedJobs));
   sessionStorage.setItem("numberofappliedjobs", this.numberofappliedjobs.toString());

    //  this.landingService.appliedjobSubject.next(this.numberofappliedjobs);
    //  this.landingService.appliedjobSubject.next(JSON.stringify(this.appliedJobs))
     const returnUrl = '/userform';

     this.router.navigateByUrl(returnUrl);
  }
  clear(){
    this.searchJob="";
    this.searchLocation="";
    this.jobdetails=jobdetails;
  }


  openModal() {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
    }
  }

  closeModal() {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  }
}
