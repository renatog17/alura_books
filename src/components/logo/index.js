import logo from'../../images/logo.svg'
import './style.css';

function Logo(){
    return(
        <div className='logo'>
          <img src={logo} alt='Logo do Alura Books'></img>
          <p>Alura Books</p>
        </div>
    )
}

export default Logo