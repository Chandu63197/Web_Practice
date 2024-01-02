//Classes and Objects
// class User{
//     constructor(firstName,lastname,email,password){
//         this.firstName=firstName
//         this.lastname=lastname
//         this.email=email
//         this.password=password
//     }
//     fullname(){
//         return this.firstName+this.lastname
//     }
// }
// let user1=new User("Chandu","Naidu","cj@gmail.com",123)
// let user2=new User("Laya","Naidu","lj@gmail.com",321)
// console.log(user1.firstName,user1.lastname);//Chandu Naidu
// console.log(user1.fullname()); //ChanduNaidu
// console.log("the fullname of the user is:",user2.fullname()); //the fullname of the user is:LayaNaidu
// console.table(user2)

class Instagram{
    constructor(userName,followers,following,posts,location,relationshipstatus){
        this.userName=userName
        this.followers=followers
        this.following=following
        this.posts=posts
        this.location=location
        this.relationshipstatus=relationshipstatus
    }
    fullDetails(){
        return "the username is "+this.userName+" who stays in "+this.location+" and has "+this.followers+
                          " followers who is following "+this.following+" members who is currently "+this.relationshipstatus
    }
    userActivity(){
        if(this.posts<=100){
            return "user is inactive"
        }
        else if(this.posts>500){
            return "addicted"
        }
        else{
            return "user is active"
        }
    }
    rs(){
        if(this.relationshipstatus=="single"){
            return this.fullDetails()
        }
        else{
            return "Never Mind"
        }
    }
}
let insta=new Instagram("Chandu",112,90,3,"Bangalore","single")
console.log(insta.fullDetails());
console.log(insta.userActivity());
console.log(insta.rs());