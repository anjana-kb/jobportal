import { Component, OnInit } from '@angular/core';
// import * as FileSaver from 'file-saver';
// import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // downloadSampleFile() {
  //   FileSaver.saveAs(
  //     "./assets/files/AgentLoadSample.xlsx",
  //     "AgentLoadSample.xlsx"
  //   );
  // }
}
