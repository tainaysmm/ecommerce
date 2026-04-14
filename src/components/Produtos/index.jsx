import './Produtos.css'

import azulDourado from '../../assets/azul-dourado.png'
import kitCom4 from '../../assets/kit-com-4.webp'
import rosaAmarelo from '../../assets/rosa-amarelo.webp'
import rosaNeon from '../../assets/rosa-neon.webp'
import rosa from '../../assets/rosa.webp'
import roxoClaro from '../../assets/roxo-claro.webp'
import verdeAgua from '../../assets/verde-agua.webp'


export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>

                <div className='produtos_grid'>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={azulDourado} alt="Azul Dourado" />
                            <span className='badge-venda'>Mais vendido</span>
                        </div>
                        <div className='card-info'>
                            <h3>Azul Dourado</h3>
                            <p className='preco'>R$ 299,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={kitCom4} alt="Kit com 4" />
                        </div>
                        <div className='card-info'>
                            <h3>Kit com 4</h3>
                            <p className='preco'>R$ 499,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={rosaAmarelo} alt="Rosa Amarelo" />
                        </div>
                        <div className='card-info'>
                            <h3>Rosa Amarelo</h3>
                            <p className='preco'>R$ 199,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={rosaNeon} alt="Rosa Neon" />
                        </div>
                        <div className='card-info'>
                            <h3>Rosa Neon</h3>
                            <p className='preco'>R$ 219,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={rosa} alt="Rosa" />
                        </div>
                        <div className='card-info'>
                            <h3>Rosa</h3>
                            <p className='preco'>R$ 189,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={roxoClaro} alt="Roxo Claro" />
                        </div>
                        <div className='card-info'>
                            <h3>Roxo Claro</h3>
                            <p className='preco'>R$ 209,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    
                    <div className='card'>
                        <div className='card-image'>
                            <img src={verdeAgua} alt="Verde Água" />
                        </div>
                        <div className='card-info'>
                            <h3>Verde Água</h3>
                            <p className='preco'>R$ 199,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}