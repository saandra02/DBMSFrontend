import React from 'react';
import { Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="HomePage">
        <br></br>
        <p className="HomeMessage"> Welcome! Choose a role to get started...</p>
        <table className="LoginOptions">
        <tbody>
            <tr className="LoginOption">
            <td className="LoginOption" width="250px"><Link to="/login/Prisoner">Prisoner Login</Link></td>
            <td className="LoginOption" width="250px"><Link to='/login/Relative'>Relative Login</Link></td>
            </tr>

            <tr className="LoginOption">
            <td className="LoginOption" width="250px"><Link to='/login/Employee'>Employee Login</Link></td>
            <td className="LoginOption" width="250px"><Link to='/login/Business'>Business Login</Link></td>
            </tr>
        </tbody>
        </table>
        </div>
      
    );
}

export default Home;