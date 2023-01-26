import React from 'react';
import { contactClass } from '../../models/contact.class';
import ComponentB from '../componentB';


const ComponentA = () => {
    const defaultContact = new contactClass('Orlando', 'Lujan', 'orlando@gmail.com', false);

    return (
        <div>
            <h2>About you:</h2>
            <ComponentB contact={defaultContact}></ComponentB>
        </div>
    );
};


export default ComponentA;
