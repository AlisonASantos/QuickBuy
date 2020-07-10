import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { state } from "@angular/animations";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  public usuario;
  public returnUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute)
  {   
  }

  ngOnInit(): void
  {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar()
  {
    if (this.usuario.email == "alison@teste.com" && this.usuario.senha == "1234") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUrl]);
    }
  }

}
