import { Link, Route, Routes } from "react-router-dom";
import Special from "./screens/Special";
import Receipes from "./screens/Receipes";
import Home from "./screens/home/Home";
import BakingOven from "./screens/BakingOven";

import smallLogo2 from '../images/smallLogo2.jpg'; 

export default function Nav ()
{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
         <Link className="navbar-brand" to="/">
         <img src={smallLogo2} alt="לוגו" height="90" />
       </Link>

{/* <button 
  className="navbar-toggler" 
  type="button" 
  data-bs-toggle="collapse" 
  data-bs-target="#navbarNav" 
  aria-controls="navbarNav" 
  aria-expanded="false" 
  aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button> */}

<div className="collapse navbar-collapse" id="navbarNav">
  
         <ul className="navbar-nav ms-auto">
         <li className="nav-item">
                <Link className="nav-link" to="/Home">{'home 🏠'}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Receipes">{'receipes 🧾'}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Special">{'special 🎂'}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/BakingOven">{'bakingOven 🧁'}</Link>
              </li>
              </ul>
              </div>
          </div>
        </nav>
        
        </>
    )
}