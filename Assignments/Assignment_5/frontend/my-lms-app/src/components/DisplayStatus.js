
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
