import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [false]
  })

  constructor(private router: Router, private fb: FormBuilder, private _usuarioService: UsuarioService) { }





  ngOnInit(): void {

    this.estaLogeado()

    if (localStorage.getItem('email')) {
      this.loginForm.get('email').setValue(localStorage.getItem('email'))
      this.loginForm.get('remember').setValue(true)
    }
  }


  login() {

    this.formSubmitted = true;

    if (this.loginForm.invalid) return;

    Swal.showLoading()

    

    this._usuarioService.login(this.loginForm.value).subscribe(resp => {

      Swal.close()
      this.recuerdaEmail();

      this.router.navigateByUrl('/');

    }, err => {

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${err.error.message}`
      })

    })


    /* this.router.navigateByUrl('/'); */
  }

  campoInvalido = (campo): boolean => this.loginForm.get(campo).invalid && this.formSubmitted

  recuerdaEmail(){
    if (this.loginForm.get('remember').value) {

      localStorage.setItem('email', this.loginForm.get('email').value)
    } else {
      localStorage.removeItem('email')
    }
  }

  onChange(){
    this.loginForm.get('remember').setValue(false)
  }

  estaLogeado (){
    if(this._usuarioService.validarToken()){
      this.router.navigateByUrl('/');
    }
  }

}
