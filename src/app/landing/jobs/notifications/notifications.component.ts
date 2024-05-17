import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../landing.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

jobnumber:number | undefined;
  constructor(private lansingservice:LandingService) { }

  ngOnInit(): void {
    console.log("calledddddddddddddddddd");
    var data:any=sessionStorage.getItem("numberofappliedjobs")
   this.jobnumber=data;
    console.log("data",data);
 
  }

}
