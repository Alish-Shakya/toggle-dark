import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-center p-5">
        <div className="flex flex-col md:flex-row md:px-20 py-10 gap-20 items-center">
          {/* jnformation */}
          <div className="px-8 w-full space-y-6">
            <h1 className="text:3xl font-bold text-red-500">
              Contact Information
            </h1>

            <p className="text-sm"> Address: kapan, Kathmandu</p>
            <p className="text-sm"> Email: alishshakya44@gmail.com</p>
            <p className="text-sm">
              Feel free to reach out to us with any queries or inqueries!
            </p>
          </div>

          {/* form  */}
          <div className="w-full px-4">
            <form className="space-y-4 border-2 rounded-2xl p-6 sm:p-10 border-red-600 w-full">
              <h1 className="text-2xl text-red-500 text-center sm:text-left">
                Get in Touch
              </h1>

              <div>
                <label htmlFor="name" className="block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="David Lal Tamang"
                  className="border p-2 w-full rounded"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="xyz@gmail.com"
                  className="border p-2 w-full rounded"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  className="border p-2 w-full rounded"
                  rows="4"
                />
              </div>

              <button
                className="border-2 p-3 w-full sm:w-auto block mx-auto mt-5 rounded-lg border-red-500
                 hover:scale-110 transition-all duration-300 cursor-pointer px-10
                hover:bg-red-500 hover:font-bold hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
