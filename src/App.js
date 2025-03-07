

import React from 'react';
import MainHeader from './MainHeader';
import Movies from './Movies';
import Footer from './Footer';
import Body from './components/Body';


function App() {

  return (
    <div className='m-2 p-2'>
      {/* <Body />  */}
      <MainHeader />
      <Movies />
      <Footer />
   
    </div>
  );
}

export default App;
