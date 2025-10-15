import Title from "./Title";

const Contact = () => {
  const descprition =
    "Ready to get started? Feel free to reach out through the contact form, and let's embark on a journey of innovation and success.";

  return (
    <section className="parent parent2">
      <Title title1="" title2="get in touch" decscription={descprition} />
      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10 w-full h-fit shadow-xl rounded-lg p-4">
          <div className="bg-gray-900 h-96 w-full text-white px-3 py-5 rounded-lg">
            <h1 className="sm:text-2xl text-xl font-bold capitalize mb-2">
              contact information
            </h1>
            <p className="text-gray-400 mb-5 font-normal leading-normal sm:text-sm text-xs">
              Fill up the form and I will get back to you within 24 hours.
            </p>
            <div className="contactId">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="">
                <p className="text-gray-400 text-xs font-bold">Call Me Now:</p>
                <p className="">+234 814 5354 884</p>
              </div>
            </div>
            <div className="contactId">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="">
                <p className="text-gray-400 text-xs font-bold">My Email:</p>
                <p className="">oladimejiagbaje144@gmail.com</p>
              </div>
            </div>
            <div className="contactId">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="">
                <p className="text-gray-400 text-xs font-bold">Address:</p>
                <p className="">
                  02, Felix Ofiri Street, Igando Lagos State, Nigeria.
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center mt-8">
              <a
                href="https://web.facebook.com/gbolahan.agbaje.75"
                target="_blank"
                className="accountIcon"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/agbaje-oladimeji-672ba823a/"
                target="_blank"
                className="accountIcon"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/gbolahanagbaje?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
                className="accountIcon"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://github.com/ola144/"
                target="_blank"
                className="accountIcon"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="w-full h-[420px]">
            <form action="">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="my-2 w-full">
                  <label
                    htmlFor="firstName"
                    className="text-gray-500 font-normal text-sm"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full outline-none border-b-2 border-gray-400 text-gray-400 placeholder:text-gray-400 focus:border-black pb-2 pt-1"
                    placeholder="eg. Lucas"
                  />
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="lastName"
                    className="text-gray-500 font-normal text-sm"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full outline-none border-b-2 border-gray-400 text-gray-400 placeholder:text-gray-400 focus:border-black pb-2 pt-1"
                    placeholder="eg. Jones"
                  />
                </div>
              </div>
              <div className="my-2 w-full">
                <label
                  htmlFor="email"
                  className="text-gray-500 font-normal text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full outline-none border-b-2 border-gray-400 text-gray-400 placeholder:text-gray-400 focus:border-black pb-2 pt-1"
                  placeholder="eg. lucas@gmail.com"
                />
              </div>
              <div className="my-2 w-full">
                <label
                  htmlFor="message"
                  className="text-gray-500 font-normal text-sm"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full outline-none border-b-2 border-gray-400 text-gray-400 placeholder:text-gray-400 focus:border-black pb-1 pt-1 resize-none"
                ></textarea>
              </div>
              <div className="my-2 w-full flex justify-end">
                <button className="bg-black text-white uppercase w-fit px-4 py-2 font-bold text-sm rounded-lg">
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
