using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Repositorio;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio
{
    public class Cliente
    {
        public Cliente()
        {
            Usuario usuario = new Usuario();

            var usuarioRepositorio = new UsuarioRepositorio();
            usuarioRepositorio.Adicionar(usuario);
        }
    }
}
