import React,{Component} from 'react';
import{Link} from 'react-router-dom';
 export default class Navbar extends Component{
    render()
    {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
  <Link to ="/" className="navbar-brand" >Exercise-Tracker</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li class="nav-item active">
        <Link to ="/" className="nav-link" >Exercises <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/create" className="nav-link" >Create Exercises Log</Link>
      </li>
      <li className="nav-item">
        <Link to="/user" className="nav-link" >Create User</Link>
      </li>
    </ul>
  </div>
</nav>
        );
        }
    }
