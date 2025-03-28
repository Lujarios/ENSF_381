
import React, {useContext} from 'react';
import { AuthContext } from './AuthMessage';



function DisplayStatus() {

    const {type, message}= useContext(AuthContext);


    return (
        <div>
            <div style = {{border: '2px black solid', textAlign: 'center'}}>
                <p>
                    {type}: {message}
                </p>

            </div>
        </div>
        
    );
}

export default DisplayStatus;

// import React from 'react';

// function DisplayStatus({ type, message }) {
//   return (
//     <div style={{ border: '2px black solid', textAlign: 'center' }}>
//       <p>{type}: {message}</p>
//     </div>
//   );
// }

// export default DisplayStatus;
