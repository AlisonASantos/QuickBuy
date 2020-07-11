import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { state } from "@angular/animations";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
import { error } from "protractor";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  public usuario;
  public returnUrl: string;
  public mensagem: string;
  private ativar_spinner: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
      private usuarioServico: UsuarioServico)
  {   
  }

  ngOnInit(): void
  {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar()
  {
    this.ativar_spinner = true;
    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        usuario_json => {
          //sessionStorage.setItem("usuario.autenticado", "1");

          this.usuarioServico.usuario = usuario_json;
          if (this.returnUrl == null) {
            this.router.navigate(['/'])
          } else {
            this.router.navigate([this.returnUrl]);
          }        
        },
        err => {
          this.mensagem = err.error;
          this.ativar_spinner = false;
        }
      );

    //if (this.usuario.email == "alison@teste.com" && this.usuario.senha == "1234") {
    //  sessionStorage.setItem("usuario-autenticado", "1");
    //  this.router.navigate([this.returnUrl]);
    //}
  }

}
