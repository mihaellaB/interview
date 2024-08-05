import { Injectable } from '@angular/core';
import { Observable, delay, map, of, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  getMainData(): Observable<{id: number, name: string, type?: string, pic?: string}[]> {
    return zip([this.getUserNames(), this.getUserTypes(), this.getUserPics()]).pipe(
      map((data) => data[0].map((user, index) => ({...user, type: data[1][index].type, pic: data[2][index].pic})))
    );
  }

  private getUserNames(): Observable<{id: number, name: string}[]> {
    return of([
      {id: 1, name: 'User A'},
      {id: 2, name: 'User B'},
      {id: 3, name: 'User C'},
      {id: 4, name: 'User D'},
      {id: 5, name: 'User E'},
      {id: 6, name: 'User F'},
    ]).pipe(delay(1000));
  }

  private getUserTypes(): Observable<{id: number, type: string}[]> {
    return of([
      {id: 1, type: 'Admin'},
      {id: 2, type: 'User'},
      {id: 3, type: 'Guest'},
      {id: 4, type: 'Guest'},
      {id: 5, type: 'Guest'},
      {id: 6, type: 'Admin'},
    ]).pipe(delay(3000));
  }

  private getUserPics(): Observable<{id: number, pic: string}[]> {
    return of([
      {id: 1, pic: 'https://randomuser.me/api/portraits/women/1.jpg'},
      {id: 2, pic: 'https://randomuser.me/api/portraits/women/2.jpg'},
      {id: 3, pic: 'https://randomuser.me/api/portraits/women/3.jpg'},
      {id: 4, pic: 'https://randomuser.me/api/portraits/men/4.jpg'},
      {id: 5, pic: 'https://randomuser.me/api/portraits/women/5.jpg'},
      {id: 6, pic: 'https://randomuser.me/api/portraits/men/6.jpg'},
    ]).pipe(delay(2000));
  }
}
