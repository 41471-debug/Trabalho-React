import lupa from "./assets/icones/lupa.png"
import carrinho from "./assets/icones/carrinho.png"
import home from "./assets/icones/home.png"
import more from "./assets/icones/mais.png"
import produtos from "./assets/icones/produtos.png"
import adicionar from "./assets/icones/adicionar.png"

import laranja from "./assets/laranja.webp"
import maca from "./assets/maca.webp"
import pimentao from "./assets/pimentao.webp"
import pitaya from "./assets/pitaya.webp"

import './App.css'

export default function App() {
  return (
    <>
      <main>
        <header className="header">
          <h1>Alimentos Frescos do Dia</h1>
          <div className="busca"><img src={lupa} alt="icone de busca" /></div>
        </header>
     
        <div className="filtros">
          <div className="filtro" style={{backgroundColor: "#19253D", color: "#fff"}}>
            <p>Frutas</p>
          </div>
          <div className="filtro">
            <p>Castanhas</p>
          </div>
          <div className="filtro">
            <p>Vegetais</p>
          </div>
          <div className="filtro">
            <p>Ôrganicos</p>
          </div>
        </div>
     
     
        <section className="categoria-produtos">
          <div className="categoria-head">
            <h2>Frutas Populares</h2>
            <a href="#">Ver todos</a>
          </div>
          <div className='lista-produtos'>


            <div className="produto">
              <img src={maca} alt="ilustração de uma Maçã" className="fruta" />
              <h2>Maçã</h2>
              <p>13 und.</p>
              <div className="produto-inf">
                <span>R$ 1,99</span>
                <div className="adicionar"><img src={adicionar} alt="Botão de adicionar" /></div>
              </div>
            </div>

            <div className="produto">
              <img src={laranja} alt="ilustração de uma Laranja" className="fruta" />
              <h2>Laranja</h2>
              <p>24 und.</p>
              <div className="produto-inf">
                <span>R$ 1,00</span>
                <div className="adicionar"><img src={adicionar} alt="Botão de adicionar" /></div>
              </div>
            </div>

            <div className="produto">
              <img src={pimentao} alt="ilustração de um Pimentão" className="fruta" />
              <h2>Pimentão</h2>
              <p>10 und.</p>
              <div className="produto-inf">
                <span>R$ 3,99</span>
                <div className="adicionar"><img src={adicionar} alt="Botão de adicionar" /></div>
              </div>
            </div>

            <div className="produto">
              <img src={pitaya} alt="ilustração de uma Pitaya" className="fruta" />
              <h2>Pitaya</h2>
              <p>6 und.</p>
              <div className="produto-inf">
                <span>R$ 9,99</span>
                <div className="adicionar"><img src={adicionar} alt="Botão de adicionar" /></div>
              </div>
            </div>


          </div>
        </section>
      </main>


      <footer>
        <div className="paginas">
          <img src={home} alt="página inicial" className="icones" />
          <p style={{color: "#fff"}}>Home</p>
        </div>
        <div className="paginas">
          <img src={produtos} alt="página de produtos" className="icones" />
          <p>Produtos</p>
        </div>
        <div className="paginas">
          <img src={carrinho} alt="página com os items adicionados" className="icones" />
          <p>Carrinho</p>
        </div>
        <div className="paginas">
          <img src={more} alt="página mais opções" className="icones" />
          <p>Menu</p>
        </div>
      </footer>
    </>
  )
}