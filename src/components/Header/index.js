import React from 'react';
import Nav from '../Nav'
import '../../index.css';
function Header({setCurrentPage}) {

    return (
        <header className="header">
            <a href = "/" onClick={()=> setCurrentPage("")}/>
            <h1>Sindhu</h1>
           <Nav setCurrentPage={setCurrentPage}></Nav> 
        </header>
    )
}
export default Header;