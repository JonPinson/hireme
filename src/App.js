import './App.css';
import SquaresBG from 'react-animated-squares';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';
import img1 from './images/code.jpg';
import img2 from './images/react.jpg';
import img3 from './images/MySQL.jpg';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";


SwiperCore.use([Autoplay])

function App() {
  return (
    <><div className='App'>
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
                <img src={img1} alt='related visual' />
              </div>
              <div className='textbox'>
                <h2>Programming Languages</h2>
                <p>JavaScript</p>
                <p>Python</p>
                <p>SQL</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src={img2} alt='related visual' />
              </div>
              <div className='textbox'>
                <h2>React and React Native</h2>
                <p>Build dynamic web applications with ReactJS.</p>
                <p>Build reusable web components with ReactJS.</p>
                <p>Expertly build React Native mobile applications.</p>
                <p>Style components in React Native Mobile applications.</p>
                <p>Write professional source code for above.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src={img3} alt='related visual' />
              </div>
              <div className='textbox'>
                <h2>Database Training</h2>
                <p>Design, create, and normalize databases.</p>
                <p>Use queries and procedures to access data.</p>
                <p>Index and optimize databases.</p>
                <p>Use server-side technologies such as PHP to utilize databases.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='workWrapper'>
        <div className='workColumn'>
          <h3>Work History</h3>
          <div id='jobList'>

            <div className='work' data-aos='fade-left' data-aos-duration="3000">
              <div className='years'>2011-2019</div>
              <div className='job'>US Air Force- Security Forces</div>
            </div>

            <div className='work' data-aos='fade-right' data-aos-duration="3000">
              <div className='years'>2019-2021</div>
              <div className='job'>US Air National Guard- Security Forces</div>
            </div>

            <div className='work' data-aos='fade-left' data-aos-duration="3000">
              <div className='years'>2019-2021</div>
              <div className='job'>Greene Respiratory-Warehouse Lead/Driver</div>
            </div>

            <div className='work' data-aos='fade-right' data-aos-duration="3000">
              <div className='years'>2021-2022</div>
              <div className='job'>Panakeia LLC- Delivery Driver</div>
            </div>
          </div>
        </div>
      </div>

      <div className='workWrapper'>
        <div className='workColumn'>
          <h3>Education</h3>
          <div id='edColumn'>

            <div className='work' data-aos='fade-right' data-aos-duration="3000">
              <div className='years'>2011-2012</div>
              <div className='job'>USAF Security Forces Technical School</div>
            </div>
            <div className='work' data-aos='fade-left' data-aos-duration="3000">
              <div className='years'>2016</div>
              <div className='job'>USAF Airman Leadership School</div>
            </div>
            <div className='work' data-aos='fade-right' data-aos-duration="3000">
              <div className='years'>2017</div>
              <div className='job'>USAF Security Forces Non-Commisioned Officer Academy</div>
            </div>
            <div className='work' data-aos='fade-left' data-aos-duration="3000">
              <div className='years'>2022-2023</div>
              <div className='job'>Mountwest Community and Technical College- Information Technology AAS- Mobile Application Developement</div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className='footer'>
      <div className='icons'>
      <a href="https://www.linkedin.com/in/jonathon-pinson/"><AiFillLinkedin />Linkedin</a>
      </div>
        <div>
        <a href="https://github.com/JonPinson"><AiFillGithub />Github</a>
         </div>
          <div>
        <a href="mailto:Jonathon.Pinson11@gmail.com"><AiFillMail />Email</a>
          </div>

      </div></>
  );
}

export default App;
