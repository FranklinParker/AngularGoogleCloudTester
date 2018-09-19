import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/contact';
import {Observable, Subject} from 'rxjs/index';
import {getAllContacts} from '../contact.selector';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {ContactsLoaded} from '../contact.actions';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = environment.apiContactBase + '/contacts';

  contactList: Contact[] = [];
  private contactListSubject = new Subject<{ numberRecords: number, contacts: Contact[] }>();


  constructor(private http: HttpClient,
              private store: Store<AppState>) {
  }

  /**
   * get contact records and number of records
   *
   * @returns {Promise<any>}
   */
  public getContacts(currentPage?: number, pageSize?: number) {

    const queryParams = `?pageSize=${pageSize}&currentPage=${currentPage}`;
    console.log('queryParams', queryParams);
    const url = this.url + queryParams;

    this.http.get<{ success: boolean, records: any, numberRecords: number }>(url)
      .pipe(map(contactData => {
        console.log('contactData', contactData);
        this.store.dispatch(new ContactsLoaded({contacts: contactData.records}));
        return 'done';
      })).subscribe((result) => console.log(result));


  }


  /**
   * listens to changes in the contact list subject
   *
   * @returns {Observable<Contact[]>}
   */
  getContactListObservable() {
    return this.contactListSubject.asObservable();
  }

  /**
   *
   * @param contact
   */
  public saveNewContact(contact: Contact): Observable<{ success: boolean, message?: string, record?: Contact }> {

    return this.http.post<{ success: boolean, record?: any, numberRecords?: number, message?: string }>
    (this.url, contact).pipe(map(result => {
      return result;
    }));


  }


  /**
   *
   * updates an existing contact
   *
   * @param {Contact} contact
   * @returns {Observable<any>}
   */
  public updateExistingContact(contact: Contact): Observable<{ success: boolean, message?: string }> {

    return this.http.put<any>(this.url, contact)
      .pipe(map(result => {
        return result;
      }));

  }
}
