import { Component, OnInit } from '@angular/core';
import {GoogleApiService} from '../../services/google-api.service';

@Component({
  selector: 'app-google-functions',
  templateUrl: './google-functions.component.html',
  styleUrls: ['./google-functions.component.css']
})
export class GoogleFunctionsComponent implements OnInit {
  headerMessage: string = 'Test Url';
  url: string;
  result: string;
  constructor(private googleApiService: GoogleApiService) { }

  ngOnInit() {
  }

  /**
   *  this is not working
   *
   */
  async onTestUrlSync(){
    const result = await this.googleApiService.testGoogleFunction(this.url);
    alert('result:' + result );

  }

  /**
   * Working
   *
   *
   */

  onTestUrl(){
    const result =  this.googleApiService.testGoogleFunctionAsync(this.url)
      .subscribe((data)=>{
        alert('data:' + data);
        console.log('data', data);
      });
  }
}
