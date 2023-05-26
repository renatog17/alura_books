import Header from './components/Header'
import styled from 'styled-components'
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos'

const AppContainer = styled.div`
  
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  
`
//eu posso fazer um export default para o AppContainer
function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
