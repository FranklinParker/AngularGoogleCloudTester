import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private http: HttpClient) { }

  async testGoogleFunction(url: string){
    try {

      return await this.http.get<any>(url).toPromise();

    } catch (e) {
      console.log('error getting contacts', e);
    }

  }
}
