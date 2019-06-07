import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IUser } from './usuario';
import { UserService } from './usuario.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ResolveUsuario implements Resolve<IUser> {
    constructor(private userService: UserService) {}
    resolve(route: ActivatedRouteSnapshot) {    
        return this.userService.getUser(route.paramMap.get('userId'))  
    } 
}

