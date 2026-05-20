import './Produtos.css'

import verdeAgua from '../../assets/verde-agua.webp'
import barevanilla from '../../assets/barevanilla.webp'
import pureseduction from '../../assets/pureseduction.webp'
import aguakiss from '../../assets/aguakiss.webp'
import coconutpasssion from '../../assets/coconutpassion.webp'
import velvetpetals from '../../assets/velvetpetals.webp'
import midnightbloom from '../../assets/midnightbloom.webp'
import lovespell from '../../assets/lovespell.webp'




export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>
                    O body splash da Victoria’s Secret (também chamado de fragrance mist) é um tipo de perfume leve, pensado para o uso no dia a dia. Diferente dos perfumes tradicionais, ele tem uma concentração menor de essência e mais água, o que faz com que o cheiro seja mais suave, refrescante e menos “forte”.
                </p>

                <div className='produtos_grid'>
                    
                    <div className='card'>
                        <div className='card-image'>
                            <img src={aguakiss} alt="Agua Kiss" />
                            <span className='badge-venda'>Mais vendido</span>
                        </div>
                        <div className='card-info'>
                            <h3>Agua Kiss</h3>
                            <p className='preco'>R$ 299,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>


                    <div className='card'>
                        <div className='card-image'>
                            <img src={barevanilla} alt="Rosa Amarelo" />
                        </div>
                        <div className='card-info'>
                            <h3>Bare Vanilla</h3>
                            <p className='preco'>R$ 199,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    
                    <div className='card'>
                        <div className='card-image'>
                            <img src={pureseduction} alt="Rosa Neon" />
                        </div>
                        <div className='card-info'>
                            <h3>Pure Seduction</h3>
                            <p className='preco'>R$ 289,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={coconutpasssion} alt="Rosa coconut passion" />
                        </div>
                        <div className='card-info'>
                            <h3>Coconut Passion</h3>
                            <p className='preco'>R$ 219,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={velvetpetals} alt="Velvet petals" />
                        </div>
                        <div className='card-info'>
                            <h3>Velvet Petals</h3>
                            <p className='preco'>R$ 189,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={midnightbloom} alt="Midnight Bloom" />
                        </div>
                        <div className='card-info'>
                            <h3>Midnight Bloom</h3>
                            <p className='preco'>R$ 209,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    
                    <div className='card'>
                        <div className='card-image'>
                            <img src={lovespell} alt="Love Spell" />
                        </div>
                        <div className='card-info'>
                            <h3>Love Spell</h3>
                            <p className='preco'>R$ 199,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}