import logo from './logo.svg';
import './App.css';
import { IoIosArrowDown } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import heroImg from "./Impact/assets/img/hero-img.svg";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { PiSquaresFour } from "react-icons/pi";

function App() {
  return (
    <>
      <header className='flex justify-around p-10 bg-greenMain text-white'>
        <h1 className='text-4xl font-bold'>Impact<span className='text-orangeMain'>.</span></h1>
        <ul className='flex justify-evenly text-xl'>
          <li className='mr-8 opacity-75 ease-out hover:opacity-100 hover:border-b-2 hover:border-orangeMain'>
            <a>Home</a>
          </li>
          <li className='mr-8 opacity-75 ease-out hover:opacity-100 hover:border-b-2 hover:border-orangeMain'>
            <a>About</a>
          </li>
          <li className='mr-8 opacity-75 ease-out hover:opacity-100 hover:border-b-2 hover:border-orangeMain'>
            <a>Service</a>
          </li>
          <li className='mr-8 opacity-75 ease-out hover:opacity-100 hover:border-b-2 hover:border-orangeMain'>
            <a>Portfolio</a>
          </li>
          <li className='group relative mr-8 opacity-75 ease-out hover:opacity-100 hover:border-b-2 hover:border-orangeMain'>
            <a className='flex'>Dropdown <span className='mt-1 ml-2'><IoIosArrowDown /></span></a>

            <ul className='hidden z-30 group-hover:flex flex-col absolute bg-white text-green-700 justify-evenly w-[200px] h-[250px] mt-4 rounded-lg p-4 shadow-lg'>
              <li>Dropdown 1</li>
              <li>Dropdown 2</li>  
              <li>Dropdown 3</li>  
              <li>Dropdown 4</li>  
              <li>Dropdown 5</li>  
            </ul>            
          </li>
          <li className='mr-8 opacity-75 ease-out hover:opacity-100 hover:border-b-2 hover:border-orangeMain'>
            <a>Contact</a>
          </li>
        </ul>
      </header>

      {/* --- Home --- */}

      <section className='relative flex w-full justify-center items-center h-[700px] bg-greenMain text-white pb-[10rem] pt-[3rem]'>
        <div className='mr-[3rem]'>
        <h1 className='text-7xl font-bold mb-8'>Welcome to Impact</h1>
        <p className='text-gray-300'>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas<br/> beatae cumque eum quaerat.
        </p>
        <div className='flex items-center'>
          <button className='p-3 border-[1px] border-gray-600 shadow-lg px-[2rem] mt-8 rounded-3xl hover:scale-[1.05]'>Get Started</button>
          <a className='flex p-5 py-[2rem] justify-between text-lg mt-6 ml-3 hover:scale-[1.05] border-solid border-1 border-gray-300'><span className='opacity-75 mr-2 mt-1 after:content-[""] after:w-10 after:h-3 after:rounded-full'><FaPlay/></span>Watch Video</a>
        </div>
        </div>
        <img src={heroImg}/>


        <div className='absolute bottom-[-5rem] flex justify-around'>
          <div className='w-[250px] h-[200px] bg-lightGreen rounded-lg z-30 left-1/3 mr-10 flex justify-center items-center flex-col hover:bg-lighterGreen hover:scale-105'>
            <span className='text-3xl'><PiTelevisionSimpleLight/></span>
            <h1 className='text-2xl mt-2'>Lorem Ipsum</h1>
          </div>

          <div className='w-[250px] h-[200px] bg-lightGreen rounded-lg z-30 left-1/3 mr-10 flex justify-center items-center flex-col hover:bg-lighterGreen hover:scale-105'>
            <span className='text-3xl'><IoDiamondOutline/></span>
            <h1 className='text-2xl mt-2'>Lorem Ipsum</h1>
          </div>

          <div className='w-[250px] h-[200px] bg-lightGreen rounded-lg z-30 left-1/3 mr-10 flex justify-center items-center flex-col hover:bg-lighterGreen hover:scale-105'>
            <span className='text-3xl'><IoLocationOutline/></span>
            <h1 className='text-2xl mt-2'>Lorem Ipsum</h1>
          </div>

          <div className='w-[250px] h-[200px] bg-lightGreen rounded-lg z-30 left-1/3 mr-10 flex justify-center items-center flex-col hover:bg-lighterGreen hover:scale-105'>
            <span className='text-3xl'><PiSquaresFour/></span>
            <h1 className='text-2xl mt-2'>Lorem Ipsum</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
