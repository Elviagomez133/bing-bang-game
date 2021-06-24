import './pentagon.css'
import bg from '../images/bg-pentagon.svg';

function Pentagon() {
    return(
        <div className="graph">
             <img src={bg} className="pentagon" alt="pentagon"/>
        </div>
    );
}

export default Pentagon;