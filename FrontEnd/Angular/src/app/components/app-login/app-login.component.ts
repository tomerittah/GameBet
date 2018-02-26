import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './app-login.component.html'
})
export class AppLoginComponent {
    public userDetails: string;
    public userDetailsFromDB: any;
    public userFields: string[] = [
        'id',
        'name',
        'first_name',
        'middle_name',
        'last_name',
        'picture',
        'email',
    ];
    public fbApiPermission: string[] = [
        'email', 'user_about_me',
    ];

    constructor(private router: Router){
    }

    public onLoginClick(){
        FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                this.router.navigate(['./dashboard']);
            }
            else {
                FB.login((loginResponse)=>{
                    this.router.navigate(['./dashboard']);
                });
            }
        });
    }

    public getUserDetails(){
        FB.api('/me', {fields: this.userFields}, (details) => {
            console.log(details)});
    }

    //
    // public onLogOut(){
    //
    //     // this.router.navigate(['./home']);
    //     FB.getLoginStatus((response) => {
    //         if (response.status === 'connected') {
    //           FB.logout(function(response) {
    //           // user is now logged out
    //           });
    //             this.router.navigate(['./login']);
    //         }
    //         else {
    //             FB.login((loginResponse)=>{
    //                 this.router.navigate(['./login']);
    //             });
    //         }
    //     });
    // }
}
