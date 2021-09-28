import react from 'react';
import About from '../src/components/About'
import Header from '../src/components/Header'
import Contact from '../src/components/Contact'
import Resume from '../src/components/Resume'
import Footer from '../src/components/Footer'
import Project from '../src/components/Project'
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
    else if (currentPage === 'project') {
      return <Project />;
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
