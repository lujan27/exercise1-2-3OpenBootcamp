import React from 'react';
import PropTypes from 'prop-types';
import { contactClass } from '../models/contact.class';


const ComponentB = ({contact}) => {
    return (
        <div>
            <h3>Name: {contact.name}</h3>
            <h3>Lastname: {contact.lastname}</h3>
            <h3>Email: {contact.email}</h3>
            <h3>Status: {contact.status ? 'Online':'Offline'}</h3>
        </div>
    );
};


ComponentB.propTypes = {
    contact: PropTypes.instanceOf(contactClass)
};


export default ComponentB;
