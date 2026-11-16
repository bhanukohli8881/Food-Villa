import { CONTACT_URL } from "./utils/contants";

const Contact = () => {
  return (
    <div
      className="min-h-[600px] bg-cover bg-center flex items-center justify-center px-5 py-10"
      style={{
        backgroundImage: `url(${CONTACT_URL})`,
      }}
    >
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-3">
          Contact Us
        </h1>

        <p className="text-gray-500 text-center mb-6">
          We would love to hear from you!
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-orange-50 border border-orange-100 p-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-300"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-orange-50 border border-orange-100 p-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-300"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="bg-orange-50 border border-orange-100 p-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-300"
          />

          <button
            type="button"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
