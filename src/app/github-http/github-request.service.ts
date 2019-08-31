// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';
// // import { Github } from '../user';
// import { User } from '../user';

// @Injectable({
//   providedIn: 'root'
// })
// export class GithubRequestService {
//   user: User;
//   constructor(private http:HttpClient) { 
//     this.user = new userName("","");
//   }
//   githubRequest(){
//     interface ApiResponse{
//       user:any;
//       repos:number;
//     }

//     let promise = new Promise((resolve,reject)=>{
//       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
//         this.github.user = response.user
//         this.github.repos = response.repos

//         resolve()
//       },
//       error=>{
//         this.github.user = "evelyne250"
//         this.github.repos = "21"

//         reject(error)
//       })
//     })
//     return promise
//   }

// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';



// @Injectable()
// export class GithubService {
//     private userName: string;
 
//     private clientId: string = '60b9f23dedffbdfc476c';
//     private clientSecret: string = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';

//     constructor(private _http: Http) {
//         // console.log('Github Service Ready.');
//         this.userName = '';
//     }

//     getUser() {
//         if (this.userName) {
//             return this._http.get('http://api.github.com/users/' + this.userName
//                 + '?client_id=' + this.clientId
//                 + '&client_secret=' + this.clientSecret)
//                 .map(res => res.json())
//                 .catch(this.handleError);
//         }
    
//     }

//     getRepos() {
//         if (this.userName) {
//             return this._http.get('http://api.github.com/users/' + this.userName
//                 + '/repos?client_id=' + this.clientId
//                 + '&client_secret=' + this.clientSecret)
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
import {HttpClient} from '@angular/common/http';
import {User}from '../user';
// import{DateCountPipe} from '../date-count.pipe'

@Injectable()
export class UserRequestService {

    user:User;
   
    
  constructor(private http:HttpClient) { 
    this.user=new User("","","",0,0,0,"",new Date())
    
  }

  userRequest(userInput){
  
    var userName=userInput;
    
    interface ApiResponse{
      name:string;
      avatar_url:string;
      location:string;
      followers:number;
      following:number;
      public_repos:number;
      html_url:string;
     
    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>('https://api.github.com/users/' + userName).toPromise().then(response=>{
            
            this.user.name=response.name
            this.user.avatar_url=response.avatar_url
            this.user.location=response.location
            this.user.followers=response.followers
            this.user.following=response.following
            this.user.public_repos=response.public_repos
            this.user.html_url=response.html_url
          
            resolve()
        },
        error=>{
                this.user.name="never give up."
                this.user.avatar_url="winston"
                reject(error)
            }
        )
    })

    return promise
  }
}