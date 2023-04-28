import { Injectable } from '@angular/core';
import {Firestore, addDoc, collection, collectionData, query, where} from "@angular/fire/firestore";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: Firestore) { }

  addUser(user: User) {
    const myCollection = collection(this.fs, 'Users');
    addDoc(myCollection, user);
  }

  // queryUser(username: string, password: string): boolean {
  //   const myCollection: any = query(collection(this.fs, 'Users'),where("Email","==", username),
  //     where("Password", "==", password)
  //   );
  //   return myCollection !== null;
  // }

  queryUser(username: string, password: string): Observable<User[]> {
    const myCollection: any = query(collection(this.fs, 'Users'),where("Email","==", username),
      where("Password", "==", password)
    );
    return collectionData(myCollection)
  }


}
