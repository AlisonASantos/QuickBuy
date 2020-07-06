using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int NumeroEndereco { get; set; }

        public int FormapagamentoId { get; set; }
        public FormaPagamento FormaPagamento { get; set; }

        /// <summary>
        /// Pedido deve ter pelo menos um itens pedido
        /// ou muitos itens pedidos
        /// </summary>
        public ICollection<ItemPedido> ItemPedidos { get; set; }

        public override void Validate()
        {
            if (!ItemPedidos.Any())
                AdicionarCritica("Nenhum item de pedido encontrado !");

            if (string.IsNullOrEmpty(CEP))
                AdicionarCritica("O CEP não foi preenchido !");
        }
    }
}
