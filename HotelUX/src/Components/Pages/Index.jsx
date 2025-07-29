import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../src/index.css';

import sercive1 from '../../assets/services-1.jpg';
import sercive2 from '../../assets/services-2.jpg';
import sercive3 from '../../assets/services-3.jpg';
import sercive4 from '../../assets/services-4.jpg';

import feature1 from '../../assets/feature-icon-1.svg';
import feature2 from '../../assets/feature-icon-2.svg';
import feature3 from '../../assets/feature-icon-3.svg';
import feature4 from '../../assets/feature-icon-4.svg';
import feature5 from '../../assets/feature-icon-5.svg';
import feature6 from '../../assets/feature-icon-6.svg';

import element1 from '../../assets/element-1.png';
import element2 from '../../assets/element-2.png';
import element3 from '../../assets/element-3.png';

import RoomsData from '../../Rooms.json';

import heroImg from '../../assets/about.png';

import avatar1 from '../../assets/review-1.jpg';
import avatar2 from '../../assets/review-2.jpg';
import avatar3 from '../../assets/review-3.jpg';
import avatar4 from '../../assets/review-4.jpg';
import avatar5 from '../../assets/review-5.jpg';
import avatar6 from '../../assets/review-6.jpg';

import blog1 from '../../assets/blog-2.jpg';
import blog2 from '../../assets/blog-3.jpg';
import blog3 from '../../assets/blog-4.jpg';

function Index() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('All');
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const tabs = ['All', 'Economy', 'Standard', 'Luxury'];
  const filteredRooms = activeTab === 'All'
    ? RoomsData
    : RoomsData.filter(room => room.type === activeTab);

  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  const testimonials = [
    {
      name: "Sarah Newman",
      company: "Envato Market",
      message: "An unforgettable stay at Aquarelle! The beachfront location provided breathtaking views, and the hotel's blend of luxury and a relaxed atmosphere was perfect. The attentive staff and excellent amenities, including a refreshing pool and superb dining options, made my experience truly exceptional. Aquarelle is a haven for those seeking relaxation with a touch of indulgence.",
    },
    {
      name: "Ethen Patel",
      company: "Creative Market",
      message: "From the friendly reception to the elegant rooms, Aquarelle exceeded my expectations. The beach access is ideal for morning walks, and the restaurant serves some of the freshest seafood I've had. This place blends sophistication with natural beauty effortlessly. Can't wait to return!",
    },
    {
      name: "Amelia Johnson",
      company: "CodeCanyon",
      message: "What a relaxing and enjoyable experience! Aquarelle delivered everything I needed - peace, luxury, and delicious food. The poolside area was perfect for spending a lazy afternoon. I appreciated how clean and well-maintained the entire property was. Truly a gem on the coast!",
    },
    {
      name: "Liam Carter",
      company: "ThemeForest",
      message: "Aqoarelle is a beautiful retreat! The views from the suite were stunning, and the attention to detail throughout the hotel was impressive. The staff made us feel welcome from the moment we arrived, and the spa treatments were top-notch. I'd recommend this place to anyone looking to unwind in style.",
    },
    {
      name: "Liam Carter",
      company: "ThemeForest",
      message: "Aqoarelle is a beautiful retreat! The views from the suite were stunning, and the attention to detail throughout the hotel was impressive. The staff made us feel welcome from the moment we arrived, and the spa treatments were top-notch. I'd recommend this place to anyone looking to unwind in style.",
    },
    {
      name: "Amelia Johnson",
      company: "CodeCanyon",
      message: "What a relaxing and enjoyable experience! Aquarelle delivered everything I needed - peace, luxury, and delicious food. The poolside area was perfect for spending a lazy afternoon. I appreciated how clean and well-maintained the entire property was. Truly a gem on the coast!",
    },
  ]

  return (
    <>
      {/* HERO ----------------------------------------------------------- */}
      <div className="hero w-full lg:px-[12%] px-[8%] py-[150px] flex items-center justify-center">
        <div className="hero-content w-full flex flex-col gap-4 z-[9] relative">
          <span className="text-[#204f5e] bg-[#d5f1f1] w-fit py-1 px-3 rounded-full text-sm lg:text-base">
            Hello! Welcome..
          </span>
          <h1 className="text-3xl sm:text-5xl xl:text-7xl font-[600] mb-5 text-black-600">
            Wondering the World <br /> is living a story untold.
          </h1>

          {/* FORM ------------------------------------------------------- */}
          <form className="w-full flex justify-between items-center gap-2 bg-white contact-form p-2">
            <div className="relative input-box">
              <label className="block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2">
                Check-in
              </label>
              <div className="relative">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Select Check-in Date"
                  className="w-auto xl:w-[350px] p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none pr-10"
                  dateFormat="dd/MM/yyyy"
                />
                <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="relative input-box">
              <label className="block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2">
                Check-out
              </label>
              <div className="relative">
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  placeholderText="Select Date"
                  className="w-auto xl:w-[350px] p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none pr-10"
                  dateFormat="dd/MM/yyyy"
                />
                <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="relative input-box">
              <label className="block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2">
                Adults
              </label>
              <input
                type="number"
                placeholder="0"
                min="1"
                className="w-auto xl:w-[350px] p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-sky-400 text-white rounded-full text-2xl xl:w-[100px] xl:h-[100px] w-[80px] h-[80px]"
            >
              <span className="bi bi-search" />
            </button>
          </form>

          <p className="text-[#5a8595] text-base ">
            The criticisms and praises, all that has become clear to us through these matters
          </p>
        </div>
      </div>

      {/* SERVICES ------------------------------------------------------- */}
      <div className="service w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20">
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
            Service
          </span>
          <h1 className="text-5xl font-semibold">Discover the touch of Nature</h1>
        </div>

        <div className="service-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full">
          {/* item 1 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px]">
            <img
              src={sercive1}
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Surfing
            </span>
          </div>

          {/* item 2 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px]">
            <img
              src={sercive2}
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Beach Vacation
            </span>
          </div>

          {/* item 3 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px]">
            <img
              src={sercive3}
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Beach Restaurant
            </span>
          </div>

          {/* item 4 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px]">
            <img
              src={sercive4}
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Swimming
            </span>
          </div>
        </div>

        <div className="service-bottom mt-20 w-full flex lg:flex-row flex-col justify-between items-center lg:text-start text-center gap-5">
          <p className='lg:w-1/2'>
            I will explain how this false belief condemning pleasure and praising pain originated, presenting the complete philosophy and teachings of the true master who discovered the path to human happiness.
          </p>
          <button className='w-[200px] tracking-[2px] h-[60px] bg-[#ecb934] transition hover:bg-[#ffca44] rounded-full text-white uppercase'> Read More</button>
        </div>
      </div>

      {/* FEATURES ------------------------------------------------------- */}
      <div className="features bg-[#f3fdfd] w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20 z-[999] relative overflow-hidden">
        {/* title */}
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
            Features
          </span>
          <h1 className="text-5xl font-semibold">
            Features that will make your vacation unforgettable
          </h1>
        </div>

        {/* unified grid wrapper */}
        <div className="features-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-[9]">
          {/* item 1 */}
          <div
            className="features-item bg-white rounded-xl py-14 px-5"
            style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}
          >
            <img
              src={feature1}
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg"
              alt="feature-image"
            />
            <h3 className="mt-12 xxl:text-3xl text-2xl mb-4 font-semibold ">
              Beachfront Location
            </h3>
            <p className="font-light">
              Our hotel is situatd right on the beach, offering stunning ocen views
              and immediate access to the sandy shores.
            </p>
          </div>

          {/* item 2 */}
          <div
            className="features-item bg-white rounded-xl py-14 px-5"
            style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}
          >
            <img
              src={feature2}
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg"
              alt="feature-image"
            />
            <h3 className="mt-12 xxl:text-3xl text-2xl mb-4 font-semibold ">
              Luxury Accomodations
            </h3>
            <p className="font-light">
              Experiance comfort and style in our well-appointed rooms and suites,
              designed for a relaxing stay.
            </p>
          </div>

          {/* item 3 */}
          <div
            className="features-item bg-white rounded-xl py-14 px-5"
            style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}
          >
            <img
              src={feature3}
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg"
              alt="feature-image"
            />
            <h3 className="mt-12 xxl:text-3xl text-2xl mb-4 font-semibold ">
              On-site Dining
            </h3>
            <p className="font-light">
              Enjoy a variety of culinary delights at our on-site restaurants,
              catering to differenttastes and preferences.
            </p>
          </div>

          {/* item 4 */}
          <div
            className="features-item bg-white rounded-xl py-14 px-5"
            style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}
          >
            <img
              src={feature4}
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg"
              alt="feature-image"
            />
            <h3 className="mt-12 xxl:text-3xl text-2xl mb-4 font-semibold ">
              Recreational Facilities
            </h3>
            <p className="font-light">
              Our hotel offers a range of recreational activities, including water
              sports, swimming pools and fitness centers.
            </p>
          </div>

          {/* item 5 */}
          <div
            className="features-item bg-white rounded-xl py-14 px-5"
            style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}
          >
            <img
              src={feature5}
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg"
              alt="feature-image"
            />
            <h3 className="mt-12 xxl:text-3xl text-2xl mb-4 font-semibold ">
              Spa and Wellness services
            </h3>
            <p className="font-light">
              Unwind and rejuvenate at our spa, where you can indulge in massages and
              tratments for ultimate relaxtion.
            </p>
          </div>

          {/* item 6 */}
          <div
            className="features-item bg-white rounded-xl py-14 px-5"
            style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}
          >
            <img
              src={feature6}
              className="bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg"
              alt="feature-image"
            />
            <h3 className="mt-12 xxl:text-3xl text-2xl mb-4 font-semibold ">
              Surfing Lessons
            </h3>
            <p className="font-light">
              Our hotel offers surfing lessons and equipment rentals, allowing guests
              of all levels to enjoy the thrill of riding waves.
            </p>
          </div>
        </div>
      </div>

      {/* ROOMS ------------------------------------------------------- */}
      <div className='py-[80px]'>
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
            Rooms
          </span>
          <h1 className="text-2xl sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight">
            Our Best Rooms
          </h1>
        </div>
      </div>

      <div className="w-full lg:px-[12%] px-[8%] pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRooms.map((room) => (
            <div key={room.id} className='bg-white rounded-2xl shadow-md overflow-hidden show-rooms'>
              <div className='relative'>
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className='w-full h-[280px] custom-swiper'
                >
                  {room.photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={photo}
                        alt={`${room.title} ${index + 1}`}
                        className="w-full h-[280px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className='bg-[#e8faff] flex gap-4 px-4 py-3 text-sm'>
                <span className='flex items-center gap-1'>
                  <i className='bg-white shadow rounded py-1 px-3 ri-user-line'></i>
                  Adults: {room.adults}
                </span>
                <span className='flex items-center gap-1'>
                  <i className='bg-white shadow rounded py-1 px-3 ri-aspect-ratio-line'></i>
                  Size: {room.size} m²
                </span>
              </div>

              <Link to={`/rooms/${room.id}`}>
                <div className='px-6 pt-4 pb-4'>
                  <div className="py-4">
                    <h3 className='text-2xl font-semibold mb-1'>{room.title}</h3>
                    <p className='text-md text-gray-500'>{room.description}</p>
                  </div>
                  <div className='border-t mt-4 pt-4 flex justify-between items-center'>
                    <p className='text-lg font-bold text-[#000]'>{room.price}</p>
                    <button className='w-12 h-12 bg-[#23bcec] rounded-full flex items-center justify-center text-white text-xl'>
                      <i className='ri-bookmark-line'></i>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT ------------------------------------------------------- */}
      <div className='about about-1 bg-[#f3fdfd] lg:px-[12%] px-[8%] pb-[150px] flex items-center flex-col lg:flex-row justify-between gap-10 relative overflow-hidden'>
        <div className='py-[80px]'>
          <div className="section-title text-start space-y-4 relative z-[9] lg:w-3/4 w-full">
            <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
              About Us
            </span>
            <h1 className='pb-5 text-2xl sm:text-5xl font-semibold w-full leading-tight'>
              Why more than a million people choose us
            </h1>

            <ul className='flex flex-col gap-10'>
              <li className='flex flex-col sm:flex-row items-start gap-5'>
                <span className='text-2xl font-bold text-[#ecb934]'>01.</span>
                <div>
                  <h4 className='md:text-2xl text-xl font-semibold mb-2'>Ocean Oasis</h4>
                  <p className='text-base md:text-lg'>
                    We reveal the complete experience, crafted by the true originator with thoughtful design and a vision of excellence.
                  </p>
                </div>
              </li>

              <li className='flex flex-col sm:flex-row items-start gap-5'>
                <span className='text-2xl font-bold text-[#ecb934]'>02.</span>
                <div>
                  <h4 className='md:text-2xl text-xl font-semibold mb-2'>Beach Heavan</h4>
                  <p className='text-base md:text-lg'>
                    We proudly unveil the full experience, thoughtfully crafted by the originator of truth and a visionary architect of bliss.
                  </p>
                </div>
              </li>

              <li className='flex flex-col sm:flex-row items-start gap-5'>
                <span className='text-2xl font-bold text-[#ecb934]'>03.</span>
                <div>
                  <h4 className='md:text-2xl text-xl font-semibold mb-2'>Sunset Bliss</h4>
                  <p className='text-base md:text-lg'>
                    We reveal the complete truth a creation shaped by the visionary who first imagined it, blending honesty with thoughtful design.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='lg:w-1/2 w-full'>
          <div className='about-images w-full h-full relative z-[9]'>
            <img src={sercive1} alt="service-image" className='about-image about-image1' />
            <img src={sercive2} alt="service-image" className='about-image about-image2' />
            <img src={sercive3} alt="service-image" className='about-image about-image3' />
            <img src={sercive4} alt="service-image" className='about-image about-image4' />

            <img src={element1} alt="elemant-image" className='about-elemant1' />
            <img src={element2} alt="elemant-image" className='about-elemant2' />
            <img src={element3} alt="elemant-image" className='about-elemant3' />
          </div>
        </div>
      </div>

        {/* ABOUT 2 ------------------------------------------------------- */}
      <div className='about-2 bg-[#f3fdfd] lg:px-[12%] px-[8%] pb-[150px] relative overflow-hidden'>
        <div className='about flex flex-col-reverse lg:flex-row items-center justify-between gap-20 relative z-[10]'>
          {/* Right Hero imge */}
          <div className="w-full lg:w-1/2 relative z-[9]">
            <img src={heroImg} alt="about" className='w-full h-full object-contain relative z-10' />
          </div>
          <div className="w-full lg:w-1/2 text-start">
            <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
              About Us
            </span>
            <h1 className=" py-6 text-2xl sm:text-4xl font-semibold leading-tight text-start">Our Goal and Philosophy</h1>

            <p className='text-gray-500 mb-4'>We honor those who endure and reveal the complete story sharing insights of a blessed life, for without effort, no true reward is possible</p>
            <p className='text-gray-500 mb-8'>In our pursuit of joy and fulfillment, we often face challenges and discomfort. True reward comes through effort and dedication. Pleasure is meaningful only when earned, and comfort follows commitment not convenience.</p>
            <div className='flex w-full flex-col sm:flex-row items-center gap-4'>
              <button className='bg-[#fdc335] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#e6ae00] transition duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5h2l3 9l3-6l4 10h4"></path>
                </svg>
                Get in Touch
              </button>

              <button className='text-[#1d2b3a] font-semibold flex items-center gap-2 hover:underline transition '>
                Book Now
                <i className="fa-solid fa-arrow-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* TESTIMONIALS ------------------------------------------------------- */}
      <div className='bg-[#f9fefe] w-full testimonials'>
        <div className="w-full lg:w-[95%] mx-auto py-12 bg-[#eafbfb] rounded-[20px] box-shadow-large relative z-[10]">
          <div className='text-center mb-12'>
            <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
              Reviews
            </span>
            <h1 className="text-2xl sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight">
              Customer Voices : <br /> Hear What They Say!
            </h1>
            <div className='flex h-[50px] items-center justify-center space-x-4 mb-6 mt-6'>
              {avatars.map((avatar, index) => (
                <img key={index} src={avatar} alt={`avatar${index}`} className={`cursor-pointer rounded-full object-cover ${activeIndex === index ? 'w-16 h-16' : 'w-12 h-12'} transition-all duration-300`}
                  onClick={() => {
                    setActiveIndex(index);
                    swiperRef.current?.slideToLoop(index);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className='flex flex-col items-center text-center justify-center px-6 h-[350px]'>
                    <div className='text-[#ecb934] text-4xl mb-4'>"</div>
                    <p className='text-gray-600 text-base italic max-w-2xl'>{testimonial.message}</p>
                    <div className='mt-4'>
                      <h4 className='font-bold text-lg text-[#1d2b3a]'>{testimonial.name}</h4>
                      <span className='text-sm uppercase tracking-wide text-gray-400'>{testimonial.company}</span></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button ref={prevRef} className='custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 transition'>
              <i className='ri-arrow-left-s-line text-xl'></i>
            </button>

            <button ref={nextRef} className='custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 transition'>
              <i className='ri-arrow-right-s-line text-xl'></i>
            </button>
          </div>
        </div>
      </div>

        {/* BLOGS ------------------------------------------------------- */}
      <div className='bg-[#f3fdfd] lg:px-[12%] px-[8%] pb-[150px] flex flex-col items-center justify-center gap-10 z-[9] relative overflow-hidden pt-[20px]'>
        <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
          Our Blogs
        </span>
        <h1 className="text-2xl sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight">
          Latest blog publications
        </h1>

        {/* Blog wrapper  ------------------------------------------------------- */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-left'>

          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group p-4">
            <div className='overflow-hidden rounded-t-[16px]'>
              <img src={blog1} alt="blog-image" className='w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105' />
            </div>
            <div className="p-4 bg-[#f2fbfb] rounded-b-[16px]">
              <div className='flex items-center text-sm text-gray-500 gap-2 mb-4'>
                <img src={blog1} alt="blog-image" className='w-6 h-6 rounded-full object-cover' />
                <span>paul T.</span>
                <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                <span>24.09.2025</span>
              </div>
              <h3 className='font-semibold xl:text-2xl text-xl text-[#1d2b3a] mb-2 leading-snug'>Why your next amaizing adventure should be on the beach</h3>
              <p className='text-gray-600 text-sm mb-4'>I will explain to you the entire story of how things are said to be from the blessed lives of those who are blamed and praised.</p>
              <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group'>
                Read More
                <span className='m1-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line'></span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group p-4">
            <div className='overflow-hidden rounded-t-[16px]'>
              <img src={blog2} alt="blog-image" className='w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105' />
            </div>
            <div className="p-4 bg-[#f2fbfb] rounded-b-[16px]">
              <div className='flex items-center text-sm text-gray-500 gap-2 mb-4'>
                <img src={blog2} alt="blog-image" className='w-6 h-6 rounded-full object-cover' />
                <span>paul T.</span>
                <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                <span>24.09.2025</span>
              </div>
              <h3 className='font-semibold xl:text-2xl text-xl text-[#1d2b3a] mb-2 leading-snug'>The Best Travel Insuarance Companies for Seniors</h3>
              <p className='text-gray-600 text-sm mb-4'>I will explain to you the entire story of how things are said to be from the blessed lives of those who are blamed and praised.</p>
              <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group'>
                Read More
                <span className='m1-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line'></span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group p-4">
            <div className='overflow-hidden rounded-t-[16px]'>
              <img src={blog3} alt="blog-image" className='w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105' />
            </div>
            <div className="p-4 bg-[#f2fbfb] rounded-b-[16px]">
              <div className='flex items-center text-sm text-gray-500 gap-2 mb-4'>
                <img src={blog3} alt="blog-image" className='w-6 h-6 rounded-full object-cover' />
                <span>paul T.</span>
                <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                <span>24.09.2025</span>
              </div>
              <h3 className='font-semibold xl:text-2xl text-xl text-[#1d2b3a] mb-2 leading-snug'>18 Easy steps for Planing your Next Trip</h3>
              <p className='text-gray-600 text-sm mb-4'>I will explain to you the entire story of how things are said to be from the blessed lives of those who are blamed and praised.</p>
              <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group'>
                Read More
                <span className='m1-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line'></span>
              </a>
            </div>
          </div>

        </div>
      </div>
      

    </>
  );
}

export default Index;