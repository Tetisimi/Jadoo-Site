import Container from './Container';

export default function Services() {
  return (
    <>
      <Container>
        <div className="mb-48 lg:mb-0 sm:h-screen">
          <div className="text-center mb-12 relative">
            <h4>CATEGORY</h4>
            <h1 className="text-4xl font-bold">We Offer Best Services</h1>
            <img
              src="/public/assets/Group 4.png"
              alt=""
              className="absolute -right-0 -top-7 -z-10"
            />
          </div>

          <div className="grid grid-cols-1 mb-16 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
            <div className="relative group w-64">
              <img
                src="/public/assets/Rectangle 157.png"
                alt="decore"
                aria-hidden="true"
                className="pointer-events-none absolute top-80 w-26 h-26 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
              />
              <div className="relative z-10 bg-white rounded-lg shadow-lg p-12 flex flex-col items-center text-center transform transition duration-300 group-hover:scale-110">
                <img
                  src="/public/assets/Group 48.png"
                  alt=""
                  className="w-24 h-24 object-contain mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  Calculated Weather
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Built Wicket longer admire do barton vanity itself do in it.
                </p>
              </div>
            </div>

            <div className="relative group w-64">
              <img
                src="//public/assets/Rectangle 157.png"
                alt="decore"
                aria-hidden="true"
                className="pointer-events-none absolute top-80 w-26 h-26 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
              />
              <div className="relative z-10 bg-white rounded-lg shadow-lg p-12 flex flex-col items-center text-center transform transition duration-300 group-hover:scale-110">
                <img
                  src="//public/assets/Group 51.png"
                  alt=""
                  className="w-24 h-24 object-contain mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  Best Flights
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Engrossed listening. Park gate sell they west hard for the.
                </p>
              </div>
            </div>

            <div className="relative group w-64">
              <img
                src="//public/assets/Rectangle 157.png"
                alt="decore"
                aria-hidden="true"
                className="pointer-events-none absolute top-80 w-26 h-26 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
              />
              <div className="relative z-10 bg-white rounded-lg shadow-lg p-12 flex flex-col items-center text-center transform transition duration-300 group-hover:scale-110">
                <img
                  src="//public/assets/Group 50.png"
                  alt=""
                  className="w-24 h-24 object-contain mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  Local Events
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Barton vanity itself do in it. Preferd to men it engrossed
                  listening.
                </p>
              </div>
            </div>

            <div className="relative group w-64">
              <img
                src="//public/assets/Rectangle 157.png"
                alt="decore"
                aria-hidden="true"
                className="pointer-events-none absolute top-80 w-26 h-26 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
              />
              <div className="relative z-10 bg-white rounded-lg shadow-lg p-12 flex flex-col items-center text-center transform transition duration-300 group-hover:scale-110">
                <img
                  src="/public/assets/Group 49.png"
                  alt=""
                  className="w-24 h-24 object-contain mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  Customization
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  We deliver outsourced aviation services for military customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
