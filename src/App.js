import './App.css';
import { Container } from 'react-bootstrap';

import AppBar from './components/AppBar';
import MovieContainer from './components/MovieContainer';

function App() {
  return (
    <>
      <AppBar title='Movie Archive' />
      <Container>

        <MovieContainer title='Explore' movietype='TRENDING' />
        <MovieContainer title='Latest Movies' movietype='LATESTMOVIES' />
        <MovieContainer title='Latest TV Shows' movietype='LATESTTVSHOW' />

      </Container>
    </>
  )
}

export default App;
