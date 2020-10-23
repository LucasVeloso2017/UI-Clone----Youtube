import { url } from 'inspector';
import React from 'react';
import { FiMenu,FiSearch,FiVideo,FiGrid,FiBell } from 'react-icons/fi'
import Logo from '../../assets/logo.png'
import "./styles.css"

const Navbar: React.FC = () => {
  return(
    <>
    <nav className="navbar">
      <div className="control-menu">
        <button>
          <FiMenu size={20} color="#000"/>
        </button>
        <img src={Logo} />
      </div>

      <div className="search-bar">
        <input type="text" name="search" id="search" placeholder="Pesquisar"/>
        <button>
          <FiSearch size={20} color="gray" />
        </button>
      </div>

      <div className="social">
        <button>
          <FiVideo size={22} color="#000" />
        </button>
        <button>
          <FiGrid size={22} color="#000" />
        </button>
        <button>
          <FiBell size={22} color="#000" />
        </button>
        <img src="https://avatars.abstractapi.com/v1/?api_key=83ed15b0f57643d083f46f1a67bee197&name=lucas.velloso2017@gmail.com"/>
       
      </div>

    </nav>
    </>
  );
}

export default Navbar;