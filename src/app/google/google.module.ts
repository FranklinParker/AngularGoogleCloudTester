import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { GoogleFunctionsComponent } from './components/google-functions/google-functions.component';
import { GoogleMainComponent } from './components/google-main/google-main.component';
import { GoogleAppEngineComponent } from './components/google-app-engine/google-app-engine.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    GoogleFunctionsComponent,
    GoogleMainComponent,
    GoogleAppEngineComponent
  ],
  exports:[
    GoogleMainComponent
  ]

})
export class GoogleModule { }
