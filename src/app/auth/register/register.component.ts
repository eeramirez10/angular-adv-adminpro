import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  

  public registerForm = this.fb.group({
    nombre:['Erick', [Validators.required, Validators.minLength(3)]],
    email:['eeee@eric.com', [Validators.required, Validators.email]],
    password:['912522', [Validators.required]],
    password2:['912522', [Validators.required]],
    terminos: [false, [Validators.required]]
  },{
    validators: this.passwordsIguales('password','password2')
  })

  constructor(private fb: FormBuilder, private _us: UsuarioService){ }

  ngOnInit(): void {



  }

  crearUsuario(){
    this.formSubmitted = true;



    if(this.registerForm.invalid) return

    this._us.crearUsuario(this.registerForm.value).subscribe( console.log , err =>{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${err.error.message}`
      })
    })
    
  }



  campoNoValido = (campo:string):boolean => this.registerForm.get(campo).invalid && this.formSubmitted ?  true : false

  aceptaTerminos = ():boolean => !this.registerForm.get('terminos').value && this.formSubmitted

  contrasenaNoValida = ():boolean => this.registerForm.get('password').value !== this.registerForm.get('password2').value && this.formSubmitted ? true : false
  
  passwordsIguales (pass1:string, pass2:string){

    return (formGroup:FormGroup)=>{
      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if ( pass1Control.value === pass2Control.value ){
        pass2Control.setErrors(null)
      
      }else{
        pass2Control.setErrors({ noEsIgual: true })
      }
    }
  }

}
