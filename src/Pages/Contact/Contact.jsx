import React from "react";
import shape1 from "../../assets/3stack.svg"
import shape2 from "../../assets/5stack.svg"
import shape3 from "../../assets/roundshape.svg"
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white py-20 bg-dark lg:py-[65px] mb-20 md:px-20 px-5
      ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                {/* <span className="mb-4 block text-base font-semibold text-primary">
                  Contact Us
                </span> */}
                <h2 className="mb-6 text-[28px] font-bold uppercase text-dark  sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color text-dark-6">
                Our experienced team is on hand to assist you with any questions or concerns you may have.
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <MdOutlineLocationOn className="text-4xl" />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark ">
                      Our Location
                    </h4>
                    <p className="text-base text-body-color text-dark-6">
                    Old Goa bypass road Tiswadi, Goa-403402
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <LuPhoneCall className="text-3xl" />
                  </div>
                  <div className="w-full ">
                    <h4 className="mb-1 text-xl font-bold text-dark ">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color text-dark-6">
                      +91-783-813-0140
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <MdOutlineEmail className="text-4xl" />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark ">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color text-dark-6">
                      support@antrorse.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg bg-dark-2 sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-primary p-3  transition hover:bg-opacity-90 bg-[#FF4800] text-white"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -right-9 -top-10 z-[-1]">
                    <img src={shape3} alt="" />
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <img src={shape1} alt="" />
                  </span>
                  <span className="absolute -bottom-7 -left-7 z-[-1]">
                    <img src={shape2} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary border-dark-3 bg-dark text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary border-dark-3 bg-dark text-dark-6"
        />
      </div>
    </>
  );
};