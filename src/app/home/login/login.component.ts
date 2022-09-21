import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authservice: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authservice.autentica(this.usuario, this.senha).subscribe(
      () => {
        console.log('Autenticado com sucesso');
        this.router.navigate(['animais']);
      },
      (error) => {
        alert('Usuário ou senha inválidos');
        console.log(error);
      }
    );
  }
}
