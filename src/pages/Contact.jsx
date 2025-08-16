import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="relative grid md:grid-cols-2 gap-8 mb-72 sm:mb-6">
        <div className="relative flex justify-center items-center order-2 md:order-1">
          <div className="absolute sm:left-84 bg-white/60 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg w-[90%] max-w-lg z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-br from-[#FF0080] to-[#7928CA] bg-clip-text text-transparent">
                Contact us
              </h1>
              <p className="mb-6">
                For further instructions, including partnership opportunities,
                please email hello@creative-tim.com or contact us using our
                contact form.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col">
                <h1>Full Name</h1>
                <input
                  type="text"
                  placeholder="Full name"
                  className="border border-gray-300 rounded-md w-full p-2"
                />
              </div>
              <div className="flex flex-col">
                <h1>Email</h1>
                <input
                  type="email"
                  placeholder="hello@creative-tim.com"
                  className="border border-gray-300 rounded-md w-full p-2"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <h1>How can we help you?</h1>
              <input
                type="text"
                placeholder="Describe your problem in at least 250 characters"
                className="border border-gray-300 rounded-md w-full p-2"
              />
            </div>

            <div className="flex justify-center">
              <button className="bg-gradient-to-br from-[#FF0080] to-[#7928CA] hover:from-[#7928CA] hover:to-[#FF0080] text-white px-4 py-2 rounded-lg transition-all duration-300">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <img
            src="assets/contact/Mask Group.png"
            alt="Contact Us"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
