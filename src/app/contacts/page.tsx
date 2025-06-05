import React from 'react';
import Navbar from '@/components/Navbar';
import TextBox from '@/components/TextBox';
import { contactInfoData } from '@/utils/data';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[64px] container mx-auto p-4 my-8">

        <div className="text-center mb-12 text-[#c59f61]">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-[#c59f61]">
            We&apos;d love to hear from you! Please fill out the form below or use our contact details.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 w-full lg:w-1/2 bg-[#1e151d] p-8 rounded-xl shadow-xl text-[#c59f61]">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form>
              <TextBox
                id="name"
                label="Your Name"
                type="text"
                placeholder="John Pork"
              />

              <TextBox
                id="email"
                label="Your Email"
                type="email"
                placeholder="john.pork@skibidi.com"
              />

              <TextBox
                id="subject"
                label="Subject"
                type="text"
                placeholder="Regarding our sneaker gallery..."
              />

              <TextBox
                id="message"
                label="Your Message"
                type="textarea"
                placeholder="Type your message here..."
              />

              <div className="mt-6">
                <button type="submit" className="w-full px-6 py-3 rounded-lg bg-[#db924c] text-black font-semibold hover:bg-[#c37d35] transition-colors duration-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="flex-1 w-full lg:w-1/2 bg-[#1e151d] p-8 rounded-xl shadow-xl text-[#c59f61]">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Address:</h3>
              <p className="text-[#c59f61]">{contactInfoData.address.street}</p>
              <p className="text-[#c59f61]">{contactInfoData.address.city}, {contactInfoData.address.zip}</p>
              <p className="text-[#c59f61]">{contactInfoData.address.country}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Phone:</h3>
              <p className="text-[#c59f61]">{contactInfoData.phone}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Email:</h3>
              <p>
                <a href={`mailto:${contactInfoData.email}`} className="text-[#db924c] hover:underline">{contactInfoData.email}</a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Business Hours:</h3>
              {contactInfoData.businessHours.map((hour, index) => (
                <p key={index} className="text-[#c59f61]">{hour.days}: {hour.time}</p>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Find Us on the Map:</h3>
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={contactInfoData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map showing our location"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Contact;