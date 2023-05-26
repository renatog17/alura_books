import { livros } from './dadosUltimosLancamentos'
import style from 'styled-components'
import { Titulo } from '../Titulo'
import CardRecomendacao from '../CardRecomendacao'
import imagemLivro from '../../images/livro2.png'

const UltimosLancamentosContainer = style.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = style.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
        <Titulo 
            cor='#EB9B00' 
            tamanhoFonte = '36px'
        >   
            ÚLTIMOS LANÇAMENTOS
        </Titulo>
        <NovosLivrosContainer>
            {livros.map( livro => (
                <img src={livro.src} alt='Capa do livro'/>
            ))}
        </NovosLivrosContainer>
        <CardRecomendacao 
            titulo = 'Talvez você se interesse por'
            subtitulo = 'Angular 11'
            descricao = 'Aprenda Angular'
            img ={imagemLivro}>
        </CardRecomendacao>
        <CardRecomendacao 
            titulo = 'Talvez você se interesse por'
            subtitulo = 'Angular 12'
            descricao = 'Aprenda Angular'
            img ={imagemLivro}>
        </CardRecomendacao>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos