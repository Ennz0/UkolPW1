import React from 'react';
import Navbar from '@/components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 my-8">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-base-content mb-4">Get in Touch</h1>
          <p className="text-lg text-base-content/70">
            We&apos;d love to hear from you! Please fill out the form below or use our contact details.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 w-full lg:w-1/2 bg-base-200 p-8 rounded-box shadow-xl">
            <h2 className="text-3xl font-bold text-base-content mb-6">Send us a Message</h2>
            <form>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-base-content">Your Name</span>
                </label>
                <input type="text" placeholder="John Doe" className="input input-bordered w-full" />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-base-content">Your Email</span>
                </label>
                <input type="email" placeholder="john.doe@example.com" className="input input-bordered w-full" />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-base-content">Subject</span>
                </label>
                <input type="text" placeholder="Regarding your sneaker gallery..." className="input input-bordered w-full" />
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-base-content">Your Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-32 w-full" placeholder="Type your message here..."></textarea>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">Send Message</button>
              </div>
            </form>
          </div>

          <div className="flex-1 w-full lg:w-1/2 bg-base-200 p-8 rounded-box shadow-xl">
            <h2 className="text-3xl font-bold text-base-content mb-6">Contact Information</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-base-content">Address:</h3>
              <p className="text-base-content/80">123 Sneaker St.</p>
              <p className="text-base-content/80">Sneaker City, SC 12345</p>
              <p className="text-base-content/80">Country</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-base-content">Phone:</h3>
              <p className="text-base-content/80">+1 (555) 123-4567</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-base-content">Email:</h3>
              <p className="text-base-content/80">
                <a href="mailto:info@example.com" className="link link-hover text-primary">info@example.com</a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-base-content">Business Hours:</h3>
              <p className="text-base-content/80">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-base-content/80">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-base-content/80">Sunday: Closed</p>
            </div>

            <h3 className="text-xl font-semibold text-base-content mt-8 mb-4">Find Us on the Map:</h3>
            <div className="bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center text-gray-600">
              [Map Placeholder]
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;