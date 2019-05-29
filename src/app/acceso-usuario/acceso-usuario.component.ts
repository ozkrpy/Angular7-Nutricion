import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AutenticacionService } from 'src/app/autenticacion/autenticacion/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailValidations, PasswordValidation } from '../common/validation';
import { UiService } from '../common/ui.service';

@Component({
  selector: 'app-acceso-usuario',
  templateUrl: './acceso-usuario.component.html',
  styleUrls: ['./acceso-usuario.component.css']
})
export class AccesoUsuarioComponent implements OnInit {

  loginForm: FormGroup;
  loginError = '';
  redirectUrl;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacionService,
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UiService
  ) {
    //route.paramMap.subscribe(params => (this.redirectUrl = params.get('redirectUrl')));
  }

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['admin', /*EmailValidations*/],
      password: ['password', /*PasswordValidation*/]
    });
  }

  async login(submittedForm: FormGroup) {
    this.authService
      .login(submittedForm.value.email, submittedForm.value.password)
      .subscribe(
        authStatus => {
          if (authStatus.isAuthenticated) {
            console.log(authStatus);
            
            this.uiService.showToast(`Bienvenido: ${authStatus.usuarioRol}`);
            this.router.navigate([this.redirectUrl || '/']);
          }
        },
        error => (this.loginError = error)
      );
  }


}
