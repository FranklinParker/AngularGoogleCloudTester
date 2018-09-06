import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-functions',
  templateUrl: './google-functions.component.html',
  styleUrls: ['./google-functions.component.css']
})
export class GoogleFunctionsComponent implements OnInit {
  headerMessage: string = 'Test Url';
  url: string;
  constructor() { }

  ngOnInit() {
  }

  onTestUrl(){
    alert(this.url);
  }

}
