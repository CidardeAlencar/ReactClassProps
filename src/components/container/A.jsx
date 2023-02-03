import React from 'react';
import { contact } from '../../models/contact.class';
// import PropTypes from 'prop-types';
import B from '../pure/B';

const A = () => {

    const defaultContact = new contact('Cidar','de Alencar','cidarandresdac@gmail.com',true);

    return (
        <div>
            <div>
            <B props={defaultContact}></B> 
            </div>
        </div>
    );
};

export default A;


