import { Component, OnInit } from "@angular/core";
import { Produto } from "../../modelo/produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "pesquisa-produto",
  templateUrl: "./pesquisa.produto.component.html",
  styleUrls: ["./pesquisa.produto.component.css"]
})

export class PesquisaProdutoComponent implements OnInit {

  public produtos: Produto[];

  ngOnInit(): void {

  }

  constructor(private router: Router, private produtoServico: ProdutoServico) {
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos
        },
        e => {

        }
      )
  }

  public adicionarProduto() {
    this.router.navigate(['/produto']);
  }

  public deletarProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente excluir o produto ?");

    if (retorno == true) {
      this.produtoServico.delete(produto)
        .subscribe(
          produtos => {
            this.produtos = produtos;
        }, e => {

        }
        )
    }
  }

  public editarProduto(produto: Produto) {

    sessionStorage.setItem('produtoSession', JSON.stringify(produto  ))
    this.router.navigate(['/produto'])
  }
}
