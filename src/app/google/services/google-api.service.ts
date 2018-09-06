import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  public testGoogleFunctionAsync(url:string): Observable<any> {
    return this.http.get<any>(url);


  }
}
