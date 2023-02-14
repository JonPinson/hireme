import './App.css';
import SquaresBG from 'react-animated-squares';


function App() {
  return (
    <>
      <div className='top'>
        <SquaresBG count={20} speed={0.9} backgroundColor="#3333333" />
        <div className='namePlate'>
          <div className='nameDiv'>
            <h3>Jon Pinson</h3>
            <p>JavaScript Developer</p>
          </div>
        </div>
      </div>

      <div className='experience'>
        <div className='slideshow'>
          <div className='slide'>
         
            
          </div>
          <div className='textbox'>
          <h2>Experience</h2>
          <p>A paragraph or two talking about it.</p>
        </div>
       </div>

      </div>
       
    </>
  );
}

export default App;
