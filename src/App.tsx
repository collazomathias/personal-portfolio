import { Fragment } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Header } from './components/Header.tsx';
import { Information } from './containers/Information.tsx';


function App() {

  return (
      <Fragment>
          <Navbar />
          <Header />
          <Information />
      </Fragment>
  )
}

export default App
