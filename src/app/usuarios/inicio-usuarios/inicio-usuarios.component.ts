import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../autenticacion/autenticacion/autenticacion.service';
import { Rol } from '../../rol.enum';
import { $enum}  from 'ts-enum-util';
import { PhoneType, IUSState, USStateFilter } from '../../usuarios/inicio-usuarios/data';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../usuarios/usuario.service';
import { IUser, IPhone } from '../../usuarios/usuario';
import { EmailValidations, RequiredTextValidation, OneCharValidation, BirthDateValidation, OptionalTextValidation, USAZipCodeValidation, USAPhoneNumberValidation } from '../../common/validation';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio-usuarios',
  templateUrl: './inicio-usuarios.component.html',
  styleUrls: ['./inicio-usuarios.component.css']
})
export class InicioUsuariosComponent implements OnInit {
  Role = Rol  
  PhoneTypes = $enum(PhoneType).getKeys()  
  userForm: FormGroup  
  states: Observable<IUSState[]>  
  userError = ''  
  currentUserRole = this.Role.Ninguno
  constructor(    
    private formBuilder: FormBuilder,    
    private router: Router, 
    private userService: UserService,    
    private authService: AutenticacionService  ) {}

  ngOnInit() {    
    this.authService.authStatus.subscribe(      
      authStatus => (this.currentUserRole = authStatus.usuarioRol)    
    )
    this.userService.getCurrentUser().subscribe(user => {      
      this.buildUserForm(user)    
    })    
    this.buildUserForm()  
  }

  buildUserForm(user?: IUser) {    
    this.userForm = this.formBuilder.group({      
      email: [        
        {
          value: (user && user.email) || '',          
          disabled: this.currentUserRole !== this.Role.Administrador,        
        },        
        EmailValidations,      
      ],      
      name: this.formBuilder.group({
        first: [(user && user.name.first) || '', RequiredTextValidation],        
        middle: [(user && user.name.middle) || '', OneCharValidation],        
        last: [(user && user.name.last) || '', RequiredTextValidation],      
      }),      
      role: [        
        {          
          value: (user && user.role) || '',          
          disabled: this.currentUserRole !== this.Role.Administrador,        
        },        
        [Validators.required],      
      ],      
      dateOfBirth: [(user && user.dateOfBirth) || '', BirthDateValidation],
      address: this.formBuilder.group({        
        line1: [          
          (user && user.address && user.address.line1) || '',          
          RequiredTextValidation,        
        ],        
        line2: [          
          (user && user.address && user.address.line2) || '',          
          OptionalTextValidation,        
        ],        
        city: [
          (user && user.address && user.address.city) || '', RequiredTextValidation],        
        state: [          
          (user && user.address && user.address.state) || '', RequiredTextValidation,        ],        
          zip: [(user && user.address && user.address.zip) || '', USAZipCodeValidation],      
        }),
        phones: this.formBuilder.array(this.buildPhoneArray(user ? user.phones : [])),
    })
    this.states = this.userForm.get('address')  
                               .get('state')  
                               .valueChanges.pipe(startWith(''), map(value => USStateFilter(value)));
    
  }

  get dateOfBirth() {  return this.userForm.get('dateOfBirth').value || new Date() }

  get age() { 
    return new Date().getFullYear() - this.dateOfBirth.getFullYear() }   

  private buildPhoneArray(phones: IPhone[]) {
    const groups = []

    if (!phones || (phones && phones.length === 0)) {
      groups.push(this.buildPhoneFormControl(1))
    } else {
      phones.forEach(p => {
        groups.push(this.buildPhoneFormControl(p.id, p.type, p.number))
      })
    }
    return groups
  }

  private buildPhoneFormControl(id, type?: string, number?: string) {
    return this.formBuilder.group({
      id: [id],
      type: [type || '', Validators.required],
      number: [number || '', USAPhoneNumberValidation],
    })
  }

  addPhone() {    
    this.phonesArray.push(      
      this.buildPhoneFormControl(this.userForm.get('phones').value.length + 1)    
      )  
  }
  
  get phonesArray(): FormArray {    
    return <FormArray>this.userForm.get('phones')  
  }
  
  async save(form: FormGroup) {  
    this.userService    
        .updateUser(form.value)    
        .subscribe(res => this.buildUserForm(res), err => (this.userError = err)) 
  }
}
