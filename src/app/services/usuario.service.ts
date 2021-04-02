import { HttpClient } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';

import { catchError, map, tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = environment.base_url;


  constructor(private http: HttpClient) { }


  validarToken(): Observable<boolean> {

    const token = localStorage.getItem('token') || '';

    return this.http.get(`${this.baseUrl}/login/renew`,{
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp:any) =>{
        localStorage.setItem('token', resp.token)
      }),
      map( resp => true),
      catchError( err=> of(false))
    )
  }

  


  crearUsuario = (formData: RegisterForm) => this.http.post(`${this.baseUrl}/usuarios`, formData)
                                                  .pipe(
                                                    tap( (resp:any) =>{
                                                      localStorage.setItem('token', resp.token);
                                                    })
                                                  )


  login = (formData: LoginForm) => this.http.post(`${this.baseUrl}/login`, formData)
                                      .pipe(
                                        tap( (resp:any) =>{
                                          localStorage.setItem('token', resp.token);
                                        })
                                      )
                                      
  logout = () => localStorage.removeItem('token');

                                       
  
}
