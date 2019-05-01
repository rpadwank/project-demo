import { NgModule } from '@angular/core';
import { UserLoginComponent } from './user-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';

@NgModule({
    declarations:[UserLoginComponent],
    imports:[BrowserModule, RouterModule.forChild(userRoutes)],
    exports:[UserLoginComponent, RouterModule]
})
export class UserModule{

}