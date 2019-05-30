import { Rol } from '../rol.enum';

export interface IUser { 
    id: string  
    email: string  
    name: { 
        first: string   
        middle: string    
        last: string 
    }  
    picture: string  
    role: Rol  
    userStatus: boolean  
    dateOfBirth: Date  
    address: { 
        line1: string    
        line2: string   
        city: string    
        state: string    
        zip: string 
    }  
    phones: IPhone[] 
}

export interface IPhone { 
    type: string  
    number: string  
    id: number 
}

export class Usuario implements IUser {
    constructor(    
        public id = '',    
        public email = '',    
        public name = { 
            first: '', 
            middle: '', 
            last: '' 
        },    
        public picture = '',    
        public role = Rol.Ninguno,    
        public dateOfBirth = null,    
        public userStatus = false,    
        public address = {      
            line1: '',      
            line2: '',      
            city: '',      
            state: '',      
            zip: '',    
        },    
        public phones = []  ) {}

  static BuildUser(user: IUser) {    
      return new Usuario(      
          user.id,      
          user.email,      
          user.name,      
          user.picture,      
          user.role,      
          user.dateOfBirth,      
          user.userStatus,      
          user.address,      
          user.phones    
          )  
    } 
}
