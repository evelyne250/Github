// import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {
//   private username:string;
//  private access_token:"0229d801c1bba53175f7eae60ff1b80e540063c5";
//   constructor(private http:HttpClient) { 
//     console.log("service is now ready");
//     this.username='evelyne250'; 
// }
// getProfileInfo(){
//   return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + 
//   this.access_token);
// }
// } 

// import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';

//  @Injectable()
// export class ProfileService {
// private username:string;
// private access_token:"0229d801c1bba53175f7eae60ff1b80e540063c5";
// constructor(private http:HttpClient) { 
//     console.log("service is now ready");
//     this.username='evelyne250'; 
// }
// getProfileInfo(){
//   return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + 
//   this.access_token);
// }
// } 

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
//  import { map, catch, throw } from 'rxjs/operators';



// @Injectable()
// export class ProfileService {
//     private userName: string;
 
//     private access_token:"0229d801c1bba53175f7eae60ff1b80e540063c5";
//     constructor(private _http: HttpClient) {
//         console.log('Github Service Ready.');
//         this.userName = '';
//     }

//     getUser() {
//         if (this.userName) {
//             return this._http.get('http://api.github.com/users/' + this.userName
//                 + "?access_token=" + 
//                    this.access_token)
//                 .map(res => res.json())
//                 .catch(this.handleError);
//         }
    
//     }

//     getRepos() {
//         if (this.userName) {
//             return this._http.get('http://api.github.com/users/' + this.userName
//                 + "?access_token=" + 
//                 this.access_token)
//                 .map(res => res.json())
//                 .catch(this.handleError);
//         }

//     }

//     updateUser(userName: string) {
//         this.userName = userName;
//     }

//     private handleError(error: any) {

//         if (error.status === 401) {
//             return Observable.throw(error.status);
//         } else {
//             return Observable.throw(error.status || 'Server error');
//         }
//     }
// }

import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

 @Injectable()
export class ProfileService {
private username:any;
private access_token:"0229d801c1bba53175f7eae60ff1b80e540063c5";

  constructor(private http:HttpClient) { 
    console.log("service is now ready");
    this.username='evelyne250'; 
    this.access_token='0229d801c1bba53175f7eae60ff1b80e540063c5';
  
  }
getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + 
  this.access_token);
 
}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + 
  this.access_token);
  
}

// updateProfile(username:string){
//   this.username = username;
// }

}
