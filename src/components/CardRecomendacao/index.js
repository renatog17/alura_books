import style from 'styled-components'
import { Titulo } from '../Titulo'

const Card = style.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Botao = style.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Descricao = style.p`
    max-width: 300px;
`

const Subtitulo = style.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = style.img`
    width: 150px;
`

function CardRecomendacao({titulo, subtitulo, descricao, img}){
    return(
        <Card>
            <div>
                <Titulo tamanhoFonte = '16px' cor='#EB9000' alinhamento='left'>{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomendacao