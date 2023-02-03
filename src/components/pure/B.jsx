import React from 'react';
import PropTypes from 'prop-types';
import { contact } from '../../models/contact.class';

const B = ({props}) => {
    return (
        <div>
            <h1>
                {props.name}
            </h1>
            <h2>
                {props.lastname}
            </h2>
            <h3>
                {props.email} 
            </h3>
            <h4>
                {props.conect ? 'Contacto en linea':'Contacto No Disponible'}
            </h4>
        </div>
        
    );
};


B.propTypes = {
    props: PropTypes.instanceOf(contact)
};


export default B;
