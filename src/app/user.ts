// export class User {
//     constructor(public id:number, public login:any, public company:string, public location:string, public bio:string, public public_repos: number, public followers: number, public following: number, public created_at: Date, public updated_at: Date ){}
// }

export class User{
   
    constructor(public name:string,public avatar_url:string,public location:string,public followers:number,public following:number,public public_repos:number,public html_url:string,public completeDate:Date){
       
    }
}