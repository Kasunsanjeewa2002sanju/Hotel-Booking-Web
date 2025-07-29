import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

import authorImg from '../../assets/faces-4.jpg';
import signatureImg from '../../assets/signature.png';
import heroImg from '../../assets/about-2.png';
import sectionElement from '../../assets/section-element.png';

import element1 from '../../assets/element-1.png';
import element2 from '../../assets/element-2.png';
import element3 from '../../assets/element-3.png';

function About() {
  return (
    <>
      <div className='section-banner mt-5 pt-6 relative flex items-center justify-center'>
        <img src={sectionElement} className='w-full h-full section-banner-element1 absolute' alt="" />
        <img src={sectionElement} className='w-full h-full section-banner-element2 absolute' alt="" />
        <img src={element1} className='w-full h-full section-banner-element3 absolute' alt="" />
        <img src={element2} className='w-full h-full section-banner-element4 absolute' alt="" />
        <img src={element3} className='w-full h-full section-banner-element5 absolute' alt="" />
        
        <div className="section-banner-content flex items-center flex-col text-center z-[55]">
            <h1 className='text-7xl font-semibold'>We are the largest <br />central Hotel</h1>
            <div className='mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded'>
                <Link to='/'>Home</Link> &nbsp; / &nbsp;
                <span className='text-gray-500'>About</span>
            </div>
        </div>
      </div>

      <div className='bg-[#f9fefe] py-[80px] px-[5%] w-full pb-0'>
        <div className='w-full p-[40px] lg:p-[100px] bg-white rounded-[20px] shadow-2xl relative z-[10]'>
          <div className="mx-auto">
            <div className="mb-12">
              <span className='bg-[#d5f1f1] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-gray-600'>About Us </span>
              <h2 className='text-3xl sm:text-4xl font-semibold mt-4 text-[#1d2b3a]'>Story About Us </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[#1d2b3a] leading-relaxed text-[15px]">
              <div>
                <p className='mb-5 text-gray-700'>
                  At HotelLux, we believe the ocean has a way of bringing people together. Set on a pristine beachfront, our hotel was created to offer a peaceful hideaway where guests can unwind, reconnect, and enjoy the charm of coastal living. Whether you're here for a romantic getaway, a family vacation, or a solo retreat, we're committed to making your stay special with personalized service, breathtaking views, and the soothing rhythm of the sea.
                </p>
                <p className='mb-5 text-gray-700'>
                  Graceful movement and structure bring life to beautiful spaces. I seek comfort and strength even through challenges. Now is the time to focus on balance and well-being. Well-designed spaces and thoughtful decisions create harmony. With confidence and support, we grow. A strong foundation and clean layout bring both style and function.
                </p>
                <p className='mb-5 text-gray-700'>
                  Our space is designed to be smooth, elegant, and easy to navigate. We combine strength with comfort, creating a calm and welcoming atmosphere. Everything is intentionally placed to feel soft and peaceful. We focus on modern design that brings balance and ease to every detail.
                </p>
              </div>

              <div>
                <p className='mb-5 text-gray-700'>
                  At our core, we believe in blending elegance with comfort to create meaningful experiences. Every detail from design to service is built on simplicity, support, and thoughtful care. We aim to provide a smooth, relaxing environment where challenges turn into beauty, and every moment feels well-crafted and calm.
                </p>
                <p className='mb-5 text-gray-700'>
                  We focus on clean, effective design and thoughtful structure that adds beauty and liveliness to any space or experience.
                </p>
                <p className='mb-8 text-gray-700'>
                  We focus on careful attention and excellence built through collaboration. Innovation and dedication guide us as we craft balanced, comfortable, and lively environments.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
                  <div className="flex items-center gap-4">
                    <img src={authorImg} alt="Emma Millar" className='w-12 h-12 rounded-full object-cover'/>
                    <div>
                      <h4 className='font-semibold text-[#1d2b3a]'>Emma Millar</h4>
                      <span className='text-sm text-gray-500'>Hotel Administrator</span>
                    </div>
                  </div>
                  <img src={signatureImg} alt="signature" className='w-32 object-contain' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f3fdfd] w-full px-[8%] lg:px-[12%] py-[100px] overflow-hidden pb-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center lg:justify-start relative">
            <img src={heroImg} alt="" className='w-full max-w-md object-contain'/>
          </div>
          <div className="text-[#1d2b3a] text-center lg:text-left ">
            <span className='bg-[#d5f1f1] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-gray-600 inline-block mb-4'>
              About Us
            </span>

            <h2 className='text-3xl sm:text-4xl font-semibold mb-6 '>Discover the <br /> <span className='text-[#1d2b3a]'>Touh of Nature</span></h2>
            <p className='text-gray-600 text-[15px] mb-4'>
              We acknowledge both the struggles and the beauty of life, uncovering the full story and explaining it clearly. True rewards come only through genuine effort.
            </p>

            <p className='text-gray-600 text-[15px] mb-8'>
              We believe that meaningful results come from dedication and effort. Comfort and reward are not achieved by chance but through intentional work and thoughtful design. Our focus is on delivering value that feels effortless built on a foundation of purpose and care.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <button className='bg-[#ecb934] hover:bg-[#d6a523] text-white font-semibold px-6 py-3 rounded-full transition flex items-center gap-2'>
                <i className='ri-mail-line'></i> READ MORE
              </button>
              <a href="#" className='font-semibold text-[#1d2b3a] inline-flex items-center group'>
                BOOK NOW 
                <span className='ml-1 group-hover:translate-x-1 transition-transform'>➜</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className='bg-[#f9fefe] py-[50px] w-full pt-0'>
        <div className="w-full  lg:w-[95%] mx-auto py-16 px-6 bg-white rounded-[20px] shadow-2xl relative z-[10]">
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-10 text-center'>
           {/* Card 1 */}
          <div>
            <h3 className='text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2'>
              <CountUp end={1244} duration={2.5} /> <span className='text-[#ecb934]'>+</span>
            </h3>
            <p className='uppercase text-sm font-bold tracking-widest text-gray-600 '>Visitors Monthly</p>
          </div>

          {/* Card 2 */}
          <div>
            <h3 className='text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2'>
              <CountUp end={24} duration={2.5} /> <span className='text-[#ecb934]'>+</span>
            </h3>
            <p className='uppercase text-sm font-bold tracking-widest text-gray-600 '>Luxury Rooms</p>
          </div>

          {/* Card 3 */}
          <div>
            <h3 className='text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2'>
              <CountUp end={44} duration={2.5} /> <span className='text-[#ecb934]'>+</span>
            </h3>
            <p className='uppercase text-sm font-bold tracking-widest text-gray-600 '>Staff Members</p>
          </div>

          {/* Card 4 */}
          <div>
            <h3 className='text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2'>
              <CountUp end={12} duration={2.5} /><span className='text-[#ecb934]'>+</span>
            </h3>
            <p className='uppercase text-sm font-bold tracking-widest text-gray-600 '>Years Experience</p>
          </div>
        </div>


        </div>
      </div>
 
    </>
  );
}

export default About;