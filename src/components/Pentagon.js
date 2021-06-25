import './pentagon.css'
import bg from '../images/bg-pentagon.svg';
import Circle from './Circle';

function Pentagon() {
    return(
        <div className="graph">
             <img src={bg} className="pentagon" alt="pentagon"/>
             <div>
                 <Circle />
                 <Circle />
                 <Circle />
                 <Circle />
                 <Circle />
             </div>
        </div>
    );
}

export default Pentagon;