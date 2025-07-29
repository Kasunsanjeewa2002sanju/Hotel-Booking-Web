import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

function Contact() {
  return (
    <>
      {/* Section Banner */}
      <div className="section-banner mt-5 pt-6 relative flex items-center justify-center overflow-hidden">
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
          <h1 className="text-7xl font-semibold">Get In Touch</h1>
          <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Contact US</span>
          </div>
        </div>
      </div>

      <section className="bg-[#f9fefe] py-[100px] w-full px-[5%] md:px-[100px]">
        <div className="w-full px-[5%] bg-white rounded-[20px] border border-gray-300 shadow-xl relative z-[10] py-20">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 ">
                <label className="text-sm font-semibold uppercase text-[#1d2b3a]">
                  First Name
                </label>
                <div className="flex items-center bg-[#f0fbfb] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 transition-all duration-200">
                  <input
                    type="text"
                    placeholder="Enter your first Name"
                    className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[1d2b3a]/60 "
                    required
                  />
                  <i className="ri-user-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-sm font-semibold uppercase text-[#1d2b3a]">
                  Last Name
                </label>
                <div className="flex items-center bg-[#f0fbfb] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 transition-all duration-200">
                  <input
                    type="text"
                    placeholder="Enter your last Name"
                    className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[1d2b3a]/60 "
                    required
                  />
                  <i className="ri-user-smile-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 ">
                <label className="text-sm font-semibold uppercase text-[#1d2b3a]">
                  E-mail
                </label>
                <div className="flex items-center bg-[#f0fbfb] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 transition-all duration-200">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[1d2b3a]/60 "
                    required
                  />
                  <i className="ri-mail-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-sm font-semibold uppercase text-[#1d2b3a]">
                  Phone-Number
                </label>
                <div className="flex items-center bg-[#f0fbfb] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 transition-all duration-200">
                  <input
                    type="tel"
                    placeholder="Enter your phone-number"
                    className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[1d2b3a]/60 "
                    required
                  />
                  <i className="ri-phone-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase text-[#1d2b3a]">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="Enter your message"
                className="w-full bg-[#f0fbfb] border border-[#d0e7ea] rounded-lg px-4 py-4 resize-none outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60 focus:ring-2 focus:ring-[#10b4d1] transition-all duration-200"
                required
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-4">
              <p className="text-sm text-[#1d2b3a]/80 italic mb-4 md:mb-0">
                We promise not to disclose your personal information to third
                parties.
              </p>
              <button
                type="submit"
                className="bg-[#f2c94c] hover:bg-[#e6b326] text-white px-10 py-3 rounded-full font-semibold tracking-widesthover:scale-105 transition-transform duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-[#e0f7fa] via-[#f3fcfd] to-[#e0f7fa] px-[8%] lg:px-[12%] py-[100px]">
        <div className="mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] p-8 flex flex-col items-start gap-4 transition-all">
              <div className="bg-[#e8fafc] text-[#10b4d1] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl">
                <i className="ri-phone-line"></i>
              </div>
              <h1 className="text-[#1d2b3a] font-bold text-xl">+94778063196</h1>
              <p className="text-base text-[#1d2b3a]/70">Call us any time. We are available in 24/7</p>
            </div>
            <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] p-8 flex flex-col items-start gap-4 transition-all">
              <div className="bg-[#e8fafc] text-[#10b4d1] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl">
                <i className="ri-mail-line"></i>
              </div>
              <h1 className="text-[#1d2b3a] font-bold text-xl">kasunsanjeewa2002@gmail.com</h1>
              <p className="text-base text-[#1d2b3a]/70">Write to us. We respond quikly.</p>
            </div>
            <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] p-8 flex flex-col items-start gap-4 transition-all">
              <div className="bg-[#e8fafc] text-[#10b4d1] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl">
                <i className="ri-map-pin-line"></i>
              </div>
              <h1 className="text-[#1d2b3a] font-bold text-xl">Kandy road, Hatharaliyadda</h1>
              <p className="text-base text-[#1d2b3a]/70">We invite to visit us.</p>
            </div>
          </div>
          {/* map */}
          <div className="rounded-[20px] overflow-hidden shadow-xl">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126264.47339565857!2d80.13820646917938!3d6.055891279241449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173c19decb3b7%3A0x1f67d51d4045e97f!2sGalle!5e0!3m2!1sen!2slk!4v1721315689816!5m2!1sen!2slk"
                width='100%'
                height='600'
                style={{border:0}} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
