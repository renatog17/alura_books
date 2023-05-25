import logo from'../../images/logo.svg'
import style from 'styled-components'

const LogoContainer = style.div`
  display: flex;
  font-size: 30px;
`
const LogoImg = style.img`
  margin-right: 10px;
`
function Logo(){
    return(
        <LogoContainer>
          <LogoImg src={logo} alt='Logo do Alura Books'/>
          <p>Alura Books</p>
        </LogoContainer>
    )
}

export default Logo