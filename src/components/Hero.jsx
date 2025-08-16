import Container from './Container';

export default function Hero() {
  return (
    <section className="h-screen mb-70 w-full pt-80 md:pt-10 md:mb-24">
      <div className="inset-0"></div>

      <div className="relative z-10 h-full flex items-center">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-orange-400 font-semibold uppercase">
                Best Destinations Around the World
              </p>
              <h1 className="text-5xl font-bold leading-tight mt-4 text-black">
                <span className="w-full sm:flex ">
                  Travel,{' '}
                  <span className="flex flex-col">
                    enjoy
                    <img
                      src="/Jadoo-Site/assets/Decore.png"
                      alt="decore"
                      className=""
                    />
                  </span>
                </span>{' '}
                and live a new <br /> and full life
              </h1>
              <p className="text-black mt-6">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening.
              </p>
              <div className="mt-6 flex items-center space-x-8">
                <a
                  href="#"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg"
                >
                  Find out more
                </a>
                <button className="flex items-center space-x-2 text-gray-900">
                  <span className="bg-orange-100 text-orange-600 rounded-full p-3">
                    ▶
                  </span>
                  <span>Play Demo</span>
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/Jadoo-Site/assets/Image.png"
                alt="Traveler"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
