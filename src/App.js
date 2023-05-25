import Header from './components/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
  
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  li {
    list-style: none;
  }
`
//eu posso fazer um export default para o AppContainer
function App() {
  return (
    <AppContainer>
      <Header></Header>
    </AppContainer>
  );
}

export default App;
