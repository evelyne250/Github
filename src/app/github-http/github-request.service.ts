import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User}from '../user';


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
                this.user.name="never give up"
                this.user.avatar_url="winston"
                reject(error)
            }
        )
    })

    return promise
  }
}