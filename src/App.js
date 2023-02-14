import './App.css';
import SquaresBG from 'react-animated-squares';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';

SwiperCore.use([Autoplay])

function App() {
  return (
    <div className='App'>
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
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            DisableOnInteraction: false
          }}
        >
          <SwiperSlide>
            <div className='slideRow'>
             <div className='slide'>
              <img src='slide1.jpg' alt='related visual' />
              </div>
              <div className='textbox'>
                <h2>Programming Languages</h2>
                <p>A paragraph talking about it</p>
              </div>          
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src='slide2.jpg' alt='related visual' />
                <div className='textbox'>
                <h2>React and React Native</h2>
                <p>A paragraph talking about it</p>
              </div>          
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src='slide2.jpg' alt='related visual' />
                <div className='textbox'>
                <h2>Database Training</h2>
                <p>A paragraph talking about it</p>
              </div>          
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src='slide2.jpg' alt='related visual' />
                <div className='textbox'>
                <h2>Skill 4</h2>
                <p>A paragraph talking about it</p>
              </div>          
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
         
            
      </div>
          <div className='textbox'>
          <h2>Experience</h2>
          <p>A paragraph or two talking about it.</p>
        </div>
       </div>

     
  );
}

export default App;
