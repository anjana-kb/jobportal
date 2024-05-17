import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  appliedjobSubject = new Subject<any>();
  constructor( private httpClient: HttpClient,) { }

  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.httpClient.post('http://localhost:3000/uploadFile', formParams)
  }
}
