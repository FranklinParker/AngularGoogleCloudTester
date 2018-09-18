import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap} from "rxjs/operators";
import {ContactActionTypes, ContactsLoaded, ContactsWaitingTobeLoaded, LoadAllContacts} from './contact.actions';
import {container} from "@angular/core/src/render3/instructions";
import {filter, map, mergeMap, withLatestFrom} from "rxjs/internal/operators";
import {select, Store} from "@ngrx/store";
import {isLoggedOut} from "../auth/auth.selector";
import {AppState} from "../reducers";
import {isContactsLoaded} from "./contact.selector";
import {ContactService} from "./service/contact.service";


@Injectable()
export class ContactEffects {
  @Effect()
  contactLoad$ = this.actions$.pipe(
    ofType<LoadAllContacts>(ContactActionTypes.LoadAllContactsAction),
    withLatestFrom(this.store.pipe(select(isContactsLoaded))),
    filter(([action, isContactsLoaded]) => {
      console.log('isContactsLoaded:'+ isContactsLoaded);
      return !isContactsLoaded;
    }),
    mergeMap(async () => {
     this.contactService.getContacts();
     return new ContactsWaitingTobeLoaded();

    })
  );
  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private contactService: ContactService) {}
}
