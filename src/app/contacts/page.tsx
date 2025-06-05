// contacts/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar'; // Navbar will also be refactored

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 my-8">

        <div className="text-center mb-12 text-white"> {/* Added text-white */}
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-300"> {/* Replaced base-content/70 */}
            We&apos;d love to hear from you! Please fill out the form below or use our contact details.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Contact Form Section (DaisyUI 'bg-base-200 p-8 rounded-box shadow-xl') */}
          <div className="flex-1 w-full lg:w-1/2 bg-zinc-800 p-8 rounded-lg shadow-xl text-white"> {/* Replaced with Tailwind */}
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form>
              {/* Form Control 1 (DaisyUI 'form-control mb-4') */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1"> {/* Replaced 'label' */}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-md bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white" // Replaced 'input input-bordered'
                />
              </div>

              {/* Form Control 2 */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-2 rounded-md bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                />
              </div>

              {/* Form Control 3 */}
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Regarding your sneaker gallery..."
                  className="w-full px-4 py-2 rounded-md bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                />
              </div>

              {/* Form Control 4 */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 rounded-md bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 text-white resize-y" // Replaced 'textarea textarea-bordered'
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div className="mt-6">
                {/* Replaced 'btn btn-primary' with Tailwind */}
                <button type="submit" className="w-full px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Section (DaisyUI 'bg-base-200 p-8 rounded-box shadow-xl') */}
          <div className="flex-1 w-full lg:w-1/2 bg-zinc-800 p-8 rounded-lg shadow-xl text-white"> {/* Replaced with Tailwind */}
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Address:</h3>
              <p className="text-gray-300">123 Sneaker St.</p> {/* Replaced base-content/80 */}
              <p className="text-gray-300">Sneaker City, SC 12345</p>
              <p className="text-gray-300">Country</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Phone:</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Email:</h3>
              <p>
                <a href="mailto:info@example.com" className="text-blue-400 hover:underline">info@example.com</a> {/* Replaced 'link link-hover text-primary' */}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Business Hours:</h3>
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-300">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-300">Sunday: Closed</p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Find Us on the Map:</h3>
            <div className="bg-zinc-700 w-full h-64 rounded-lg flex items-center justify-center text-gray-400"> {/* Replaced gray-300 bg */}
              [Map Placeholder]
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;