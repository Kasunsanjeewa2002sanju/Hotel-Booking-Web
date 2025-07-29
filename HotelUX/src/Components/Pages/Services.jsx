import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

import authorImg from "../../assets/faces-4.jpg";
import signatureImg from "../../assets/signature.png";
import heroImg from "../../assets/about-2.png";
import sectionElement from "../../assets/section-element.png";

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

import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

function Services() {
  return (
    <>
      <div className="section-banner mt-5 pt-6 relative flex items-center justify-center">
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element1 absolute"
          alt=""
        />
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element2 absolute"
          alt=""
        />
        <img
          src={element1}
          className="w-full h-full section-banner-element3 absolute"
          alt=""
        />
        <img
          src={element2}
          className="w-full h-full section-banner-element4 absolute"
          alt=""
        />
        <img
          src={element3}
          className="w-full h-full section-banner-element5 absolute"
          alt=""
        />

        <div className="section-banner-content flex items-center flex-col text-center z-[55]">
          <h1 className="text-7xl font-semibold">
            Our Services
          </h1>
          <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Services</span>
          </div>
        </div>
      </div>

      <div className="service w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20">
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
            Service
          </span>
          <h1 className="text-5xl font-semibold">
            Discover the touch of Nature
          </h1>
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
          <p className="lg:w-1/2">
            I will explain how this false belief condemning pleasure and
            praising pain originated, presenting the complete philosophy and
            teachings of the true master who discovered the path to human
            happiness.
          </p>
          <button className="w-[200px] tracking-[2px] h-[60px] bg-[#ecb934] transition hover:bg-[#ffca44] rounded-full text-white uppercase">
            {" "}
            Read More
          </button>
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
            style={{ boxShadow: "0 4px 20px rgba(32,79,94,.05)" }}
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
              Our hotel is situatd right on the beach, offering stunning ocen
              views and immediate access to the sandy shores.
            </p>
          </div>

          {/* item 2 */}
          <div
            className="features-item bg-white rounded-xl py-14 px-5"
            style={{ boxShadow: "0 4px 20px rgba(32,79,94,.05)" }}
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
              Experiance comfort and style in our well-appointed rooms and
              suites, designed for a relaxing stay.
            </p>
          </div>

          {/* item 3 */}
          <div
            className="features-item bg-white rounded-xl py-14 px-5"
            style={{ boxShadow: "0 4px 20px rgba(32,79,94,.05)" }}
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
            style={{ boxShadow: "0 4px 20px rgba(32,79,94,.05)" }}
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
              Our hotel offers a range of recreational activities, including
              water sports, swimming pools and fitness centers.
            </p>
          </div>

          {/* item 5 */}
          <div
            className="features-item bg-white rounded-xl py-14 px-5"
            style={{ boxShadow: "0 4px 20px rgba(32,79,94,.05)" }}
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
              Unwind and rejuvenate at our spa, where you can indulge in
              massages and tratments for ultimate relaxtion.
            </p>
          </div>

          {/* item 6 */}
          <div
            className="features-item bg-white rounded-xl py-14 px-5"
            style={{ boxShadow: "0 4px 20px rgba(32,79,94,.05)" }}
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
              Our hotel offers surfing lessons and equipment rentals, allowing
              guests of all levels to enjoy the thrill of riding waves.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f3fdfd] w-full px-[8%] lg:px-[12%] py-[100px] overflow-hidden pb-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start relative">
            <img
              src={heroImg}
              alt=""
              className="w-full max-w-md object-contain"
            />
          </div>
          <div className="text-[#1d2b3a] text-center lg:text-left ">
            <span className="bg-[#d5f1f1] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-gray-600 inline-block mb-4">
              Our Services
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 ">
              Discover the <br />{" "}
              <span className="text-[#1d2b3a]">Touh of Nature</span>
            </h2>
            <p className="text-gray-600 text-[15px] mb-4">
              We acknowledge both the struggles and the beauty of life,
              uncovering the full story and explaining it clearly. True rewards
              come only through genuine effort.
            </p>

            <p className="text-gray-600 text-[15px] mb-8">
              We believe that meaningful results come from dedication and
              effort. Comfort and reward are not achieved by chance but through
              intentional work and thoughtful design. Our focus is on delivering
              value that feels effortless built on a foundation of purpose and
              care.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <button className="bg-[#ecb934] hover:bg-[#d6a523] text-white font-semibold px-6 py-3 rounded-full transition flex items-center gap-2">
                <i className="ri-mail-line"></i> READ MORE
              </button>
              <a
                href="#"
                className="font-semibold text-[#1d2b3a] inline-flex items-center group"
              >
                BOOK NOW
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  ➜
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9fefe] py-[50px] w-full pt-0">
        <div className="w-full  lg:w-[95%] mx-auto py-16 px-6 bg-white rounded-[20px] shadow-2xl relative z-[10]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
            {/* Card 1 */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2">
                <CountUp end={1244} duration={2.5} />{" "}
                <span className="text-[#ecb934]">+</span>
              </h3>
              <p className="uppercase text-sm font-bold tracking-widest text-gray-600 ">
                Visitors Monthly
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2">
                <CountUp end={24} duration={2.5} />{" "}
                <span className="text-[#ecb934]">+</span>
              </h3>
              <p className="uppercase text-sm font-bold tracking-widest text-gray-600 ">
                Luxury Rooms
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2">
                <CountUp end={44} duration={2.5} />{" "}
                <span className="text-[#ecb934]">+</span>
              </h3>
              <p className="uppercase text-sm font-bold tracking-widest text-gray-600 ">
                Staff Members
              </p>
            </div>

            {/* Card 4 */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2">
                <CountUp end={12} duration={2.5} />
                <span className="text-[#ecb934]">+</span>
              </h3>
              <p className="uppercase text-sm font-bold tracking-widest text-gray-600 ">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
