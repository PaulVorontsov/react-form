import React from 'react';
import { render } from 'react-dom'

import ExampleForm from './ExampleForm';

const formData = {
    id: 1,
    text: 'fafasdf',
    url: 'asdfvv',
    email: 'azazaz@ail.ru',
    short: 'assdvv232',
    password: 'sdffvc',
    number: 23,
    date: new Date()
};


render(
    <div className="col-md-4">
        <ExampleForm data={formData}/>
    </div>,
    document.getElementById('root')
);