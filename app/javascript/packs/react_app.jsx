// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom'

const mainDiv = document.createElement('div');

const mainDivClasses = ['main-div', 'w-full', 'flex', 'flex-col', 'justify-start', 'items-center'];

mainDivClasses.forEach(cl =>
    mainDiv.classList.add(cl)
)

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <BrowserRouter><App /></BrowserRouter>,
        document.body.appendChild(mainDiv),
    )
})