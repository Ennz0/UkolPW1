import React from 'react';
import Navbar from '@/components/Navbar';

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
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-[#c59f61] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Pork"
                  className="w-full px-4 py-2 rounded-lg bg-[#261b25] border border-[#c59f61] focus:outline-none focus:ring-2 focus:ring-[#db924c] focus:border-[#db924c] text-[#c59f61]"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-[#c59f61] mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john.pork@skibidi.com"
                  className="w-full px-4 py-2 rounded-lg bg-[#261b25] border border-[#c59f61] focus:outline-none focus:ring-2 focus:ring-[#db924c] focus:border-[#db924c] text-[#c59f61]"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-[#c59f61] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Regarding our sneaker gallery..."
                  className="w-full px-4 py-2 rounded-lg bg-[#261b25] border border-[#c59f61] focus:outline-none focus:ring-2 focus:ring-[#db924c] focus:border-[#db924c] text-[#c59f61]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#c59f61] mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 rounded-lg bg-[#261b25] border border-[#c59f61] focus:outline-none focus:ring-2 focus:ring-[#db924c] focus:border-[#db924c] h-32 text-[#c59f61] resize-y"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

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
              <p className="text-[#c59f61]">123 Sneaker St.</p>
              <p className="text-[#c59f61]">Sneaker City, SC 12345</p>
              <p className="text-[#c59f61]">Country</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Phone:</h3>
              <p className="text-[#c59f61]">+1 (555) 123-4567</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Email:</h3>
              <p>
                <a href="mailto:info@example.com" className="text-[#db924c] hover:underline">info@example.com</a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Business Hours:</h3>
              <p className="text-[#c59f61]">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-[#c59f61]">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-[#c59f61]">Sunday: Closed</p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Find Us on the Map:</h3>
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5064.271306930894!2d165.96307429607987!3d-50.60601681204794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9b37960d3cdddd7%3A0xbd1bca4ab10f2187!2sDisappointment%20Island!5e0!3m2!1sen!2scz!4v1749138291349!5m2!1sen!2scz"
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
    </>
  );
};

export default Contact;