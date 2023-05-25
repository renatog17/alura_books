import perfil from '../.././images/perfil.svg'
import sacola from '../.././images/sacola.svg'
import style from 'styled-components'

const icones = [perfil, sacola]

const Icone = style.li`
  margin-right: 40px;
  width: 25px;
`

const Icones = style.ul`
  display: flex;
  align-items: center;
`

function IconesHeader(){
    return(
        <Icones>
            {
              icones.map((icone) => (
                <Icone ><img src={icone} alt='icone' ></img></Icone>
              ))
            }
        </Icones>
    )
}

export default IconesHeader