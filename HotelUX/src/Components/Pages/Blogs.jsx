import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

import blog6 from "../../assets/blog-12.jpg";
import blog1 from "../../assets/blog-2.jpg";
import blog2 from "../../assets/blog-3.jpg";
import blog3 from "../../assets/blog-4.jpg";
import blog4 from "../../assets/blog-5.jpg";
import blog5 from "../../assets/blog-6.jpg";
import avatar from "../../assets/review-7.jpg";

function Blogs() {
  return (
    <>
      {/* Section Banner */}
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
          <h1 className="text-7xl font-semibold">Our Blogs</h1>
          <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Blogs</span>
          </div>
        </div>
      </div>

      <section className="bg-[#f9fefe] py-[60px] w-full pb-0">
        <div className="w-full lg:w-[95%] mx-auto py-16 px-8 md:px-14 bg-whiterounded-[20px] shadow-xl relative z-[10]">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="bg-[#d5f1f1] text-xs px-4 py-1 rounded-full uppercase tracking-widesttext-gray-600">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-4 text-[#1d2b3a]">
              Popular Publications
            </h2>
          </div>
          {/* Blog grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                image: blog1,
                date: "15-02-2025",
                title:
                  "The best travel insurance company for your holiday trip.",
              },
              {
                image: blog2,
                date: "12-03-2025",
                title: "Ultimate guide to Travelling when you have no money.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration 300 group border border-gray-100"
              >
                <div className="overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt="Blog"
                    className="w-full h-[320px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-[#f4fcfc] rounded-b-3xl">
                  <div className="flex items-center text-sm text-gray-500 gap-2 mb-4 ">
                    <img
                      src={avatar}
                      alt="Athour"
                      className="w-7 h-7 rounded-full onject-cover"
                    />
                    <span className="font-medium text-gray-700 ">Paul.T</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-line text-base"></i>
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[20px] text-[#1d2b3a] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[15px mb-6]">
                    We praise those who have endured pain, revealing the whole
                    truth and explaining the noble values of a blessed life.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group"
                  >
                    <span className="border-b border-[#1d2b3a]">READ MORE</span>
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      ➜
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Desc */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-[#2a4b5e] text-smmd:text-base max-w-3xl">
              We honor those who endure hardship, revealing the full truth as
              told by the one who discovered it almost like the architect of a
              happy life.
            </p>
            <button className="bg-[#ecb934] hover:bg-[#d6a523] text-white font-semibold px-8 py-4 rounded-full transition duration-300 whitespace-nowrap">
              View All
            </button>
          </div>
        </div>
      </section>

      <div className="w-full lg:px-[12%] px-[8%] py-[100px] flex flex-col items-center justify-center gap-10 relative overflow-hidden bg-transparent">
        {/* Section Heading */}
        <span className="bg-[#d5f1f1] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-gray-600">
          Our Blog
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d2b3a] text-center">
          Latest Blog Publications
        </h2>
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* card 1 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden ">
            <div className="overflow-hidden">
              <img
                src={blog3}
                className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#f2fbfb]">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={blog3} className="w-6 h-6 rounded-full object-cover" alt="" />
                    <span>Sarah W.</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span>18-10-2025</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    Why your next amazing adventure should be on a beach
                </h3>
                <p className="text-gray-600 text-sm mb-4"> A comprehensive comparision of top travel insuarance providers tailored for older travelers.</p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">
                    READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">➜</span>
                </a>
            </div>
          </div>
          {/* card 2 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden ">
            <div className="overflow-hidden">
              <img
                src={blog4}
                className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#f2fbfb]">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={blog4} className="w-6 h-6 rounded-full object-cover" alt="" />
                    <span>John D.</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span>18-10-2024</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    The best travel insuarance companiew for seniors
                </h3>
                <p className="text-gray-600 text-sm mb-4"> Essential travel hockes for saving space avoiding airline fees and keeping everything organized.</p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">
                    READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">➜</span>
                </a>
            </div>
          </div>
          {/* card 3 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden ">
            <div className="overflow-hidden">
              <img
                src={blog2}
                className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#f2fbfb]">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={blog2} className="w-6 h-6 rounded-full object-cover" alt="" />
                    <span>Sarah W.</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span>18-10-2025</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    18 Easy steps to planning next trip
                </h3>
                <p className="text-gray-600 text-sm mb-4"> A comprehensive comparision of top travel insuarance providers tailored for older travelers.</p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">
                    READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">➜</span>
                </a>
            </div>
          </div>
          {/* card 4 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden ">
            <div className="overflow-hidden">
              <img
                src={blog1}
                className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#f2fbfb]">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={blog1} className="w-6 h-6 rounded-full object-cover" alt="" />
                    <span>Leo K.</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span>18-07-2023</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    10 Easy steps and tips for planning your next journey
                </h3>
                <p className="text-gray-600 text-sm mb-4">Discover lesser-known destinations, practical tips, and how to make every trip unforgettable. </p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">
                    READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">➜</span>
                </a>
            </div>
          </div>
          {/* card 5 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden ">
            <div className="overflow-hidden">
              <img
                src={blog5}
                className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#f2fbfb]">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={blog5} className="w-6 h-6 rounded-full object-cover" alt="" />
                    <span>Ava M.</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span>18-06-2023</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    Unlock the Secrets to Effortless Travel Planning
                </h3>
                <p className="text-gray-600 text-sm mb-4"> Step off the beaten path and explore hidden gems with smart tips that make every journey unforgettable.</p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">
                    READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">➜</span>
                </a>
            </div>
          </div>
          {/* card 6 */}
          <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden ">
            <div className="overflow-hidden">
              <img
                src={blog6}
                className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#f2fbfb]">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={blog6} className="w-6 h-6 rounded-full object-cover" alt="" />
                    <span>Maya W.</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span>18-10-2024</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    Plan Less. Travel More.
                </h3>
                <p className="text-gray-600 text-sm mb-4"> Learn how to plan smarter, save more, and enjoy every moment of your next journey.</p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">
                    READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">➜</span>
                </a>
            </div>
          </div>
        </div>
        {/* Bottom Paragraph */}
        <div className="mt-12 text-center text-m text-[#2a4b5e] max-w-3xl">
            Every great adventure begins with a single step and a well-packed bag. <br /> Ready to explore? 
        </div>
      </div>

      <section className="bg-[#f9fefe] py-[150px] w-full">
        <div className="w-full lg:w-[95%] mx-auto px-8 md:px-14 bg-white rounded-[20px] shadow-xl relative z-[10] text-center py-20">
            <span className="bg-[#d5f1f1] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-gray-600 inline-block mb-6">Newsletter</span>
            <h2 className="text-3xl sm:text-6xl font-semibold text-[#1d2b3a]">Subscribe our Newsletter</h2>
            <form className="max-w-xl mx-auto flex items-center justify-between bg-[#ecfafb] rounded-full overflow-hidden p-2 mt-5">
                <input 
                    type="email"
                    name="Email"
                    placeholder="Enter your Email"
                    className="flex-grow px-6 py-4 bg-transparent text-[#1d2b3a] outline-none placeholder:text-[#1d2b3a]/70"
                    required
                />
                <button
                    type="submit"
                    className="bg-[#f2c94c] text-white transition-transform hover:scake-105 h-[50px] w-[50px] rounded-full flex items-center justify-center text-2xl"
                ><i className="ri-arrow-right-line"></i></button>
            </form>
        </div>
      </section>



    </>
  );
}

export default Blogs;
