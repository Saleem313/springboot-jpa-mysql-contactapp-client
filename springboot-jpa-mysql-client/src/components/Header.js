import React,{Component} from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
              <header>
                  <nav className="navbar navbar-dark bg-dark">
                  <div class="container-fluid">
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span>ContactList</span>
                   </button>
                   </div>
                  </nav>
              </header>
            </div>
        )
    }
}

export default Header;