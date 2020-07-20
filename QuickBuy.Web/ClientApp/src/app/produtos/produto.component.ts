import { Component } from "@angular/core"
import { Produto } from "../modelo/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";

@Component({
  selector: "produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent
{
  public produto: Produto;

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public cadastrar() {
    //this.produtoServico.cadastrar(this.produto)
    //  .subscribe(
    //    usuarioJson => { },
    //    e => { }
    //  );
  }

}
