import './header.css'
import Card from './Card';

function Header() {
    return(
       <div className="container">
           <div className="header-names">
                <p>ROCK</p>
                <p>PAPER</p>
                <p>SCISSORS</p>
                <p>LIZARD</p>
                <p>SPOCK</p>
           </div>
          <Card />
       </div>
    );
}

export default Header;