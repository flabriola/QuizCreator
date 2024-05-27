import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import Vector from './Vector.svg';
// import { Link } from 'react-router-dom';
// import Intersect from './Intersect.svg';
// import CircleButton from './Components/CircleButton';
// import openai from './openai.png';
// import json from './json.png';
// import SecondaryButton from './Components/SecondaryButton';

function App() {

  return (
    <>
      <header>
        <a href='/quiz'><img src={Vector} alt="Vector" /></a>
        {/* <SecondaryButton
          src={openai}
          alt="openai logo"
          id='h-gpt'
        />
        <SecondaryButton
          src={json}
          alt="json logo"
          id='h-json'
        /> */}
      </header>
      <div className="App">
        <AppRoutes />
      </div>
      {/* <Link id='ht-b' to='/how-to'><div id='htd'>How To Use</div></Link> */}
    </>
  );





  // const [ page, setPage ] = useState('entrance');

  // function handleClick(newPage) {

  //   if(newPage === 'gpt'){
  //     setPage('input-gpt');
  //   }else if (newPage === 'json') {
  //     setPage('input-json');
  //   }

  // }

  // if(page === 'entrance'){

  //   return (
  //     <div id='createMenuContainer'>
  //       <CreateMenu onClick={handleClick}/>
  //     </div>
  //   );

  // }else if(page === 'input-gpt'){

  //   return (
  //     <>
  //       <InputGpt />
  //     </>
  //   );

  // }else if(page === 'input-json'){

  // }

}

export default App;
