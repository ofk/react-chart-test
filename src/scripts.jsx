import React from 'react';
import ReactDOM from 'react-dom';
// import Page from './RechartsPage';
// import Page from './ReactVisPage';
// import Page from './NivoPage';
// import Page from './GoogleChartsPage';
import RechartsPage from './RechartsPage';
import ReactVisPage from './ReactVisPage';
import NivoPage from './NivoPage';
import GoogleChartsPage from './GoogleChartsPage';

const rootElem = document.querySelector('#root');
// ReactDOM.render(<Page/>, rootElem);
ReactDOM.render((
  <div>
    <RechartsPage/>
    <ReactVisPage/>
    <NivoPage/>
    <GoogleChartsPage/>
  </div>
), rootElem);
