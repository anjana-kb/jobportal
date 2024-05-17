import { Component, OnInit, ViewChild } from '@angular/core';
import { LandingService } from '../../landing.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {


  file: File | undefined;
  userobj:any={
    firstname:'',
    email:'',
    phonenumber:'',
    experience:''

  }

  
  constructor(private landingservice:LandingService,  private router: Router,) { }

  ngOnInit(): void {
  
  }
  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
  
  upload() {
    if (this.file) {
      this.landingservice.uploadfile(this.file).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }

  onSubmit(userobj: any){
    // console.log("userobj",userobj);
    // this.landingservice.appliedjobSubject.subscribe((resp)=>{
    //   console.log("resp,",resp);
      
    //   sessionStorage.setItem('appliedJobs', JSON.stringify(resp));
    // })
    this.openModal();
    
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
      this.userobj={};
      const returnUrl = '/jobs';
     this.router.navigateByUrl(returnUrl);
    }
  }
}
