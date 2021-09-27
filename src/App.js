import react from 'react';
import About from '../src/components/About'
import Header from '../src/components/Header'
// import Footer from '../src/components/Footer'
import Contact from '../src/components/Contact'
import Resume from '../src/components/Resume'
import Footer from '../src/components/Footer'
import './App.css';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] =react.useState('');
  const displayPage = () => {
    if (currentPage === 'about') {
      return <About />;
    }
    else if (currentPage === 'contact') {
      return <Contact />;
    }
    else if (currentPage === 'resume') {
      return <Resume />;
    }
    
  }
  return (
    <div>
      <Header setCurrentPage={setCurrentPage}/>
      <main>
        {displayPage()};
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
