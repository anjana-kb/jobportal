import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css']
})
export class AppliedjobsComponent implements OnInit {
  jobdetails:any;
  constructor() { }

  ngOnInit(): void {

    var data:any=sessionStorage.getItem("appliedJobs")
    this.jobdetails=JSON.parse(data);
    console.log(this.jobdetails);

  }

}
