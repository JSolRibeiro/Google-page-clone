import profile from '../profile.svg';
import menu from '../menu.svg';

function Header(){
    return(
        <div className="header">
        <div className="menu_all">
          <div className="menu">
            <a href="#">Gmail</a>
            <a href="#">Imagens</a>
          </div>
          <div className="lab">
            <a href="#">
              <img src={menu} alt="erro" />
            </a>
            <a href="#">
              <img src={profile} alt="erro" />
            </a>
          </div>
        </div>
      </div>
    )
}
export default Header;