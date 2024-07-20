import profile from '../profile.svg';
import menu from '../menu.svg';

function Header(){
    return(
        <div className="header">
        <div className="menu_all">
          <div className="menu">
            <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">Gmail</a>
            <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">Imagens</a>
          </div>
          <div className="lab">
            <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">
              <img src={menu} alt="erro" />
            </a>
            <a href="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" target="_blank">
              <img src={profile} alt="erro" />
            </a>
          </div>
        </div>
      </div>
    )
}
export default Header;