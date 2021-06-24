import './header.css'

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
           <div className="score-card">
                <h1 className="score-text">SCORE</h1>
                <p>Number</p>
           </div>
       </div>
    );
}

export default Header;