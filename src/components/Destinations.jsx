import Container from './Container';

export default function Destinations() {
  return (
    <Container>
      <div className="md:h-screen mb-18 relative">
        <div className="text-center mb-12">
          <h4 className="">Top Selling</h4>
          <h1 className="text-4xl font-bold">Top Destinations</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-32 place-items-center">
          <div className="w-64 bg-white rounded-lg shadow-lg p-8 flex flex-col text-center transform transition duration-300 hover:scale-110">
            <img
              src="/assets/Rectangle-14.png"
              alt=""
              className="object-contain"
            />
            <div className="flex flex-grow justify-between mt-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Rome, Italy
              </h4>
              <p className="text-sm text-gray-500">$5,42k</p>
            </div>
            <p className="flex justify-center mt-2">
              <img
                src="/assets/Navigation-1.png"
                alt="navicon"
                className="mr-2"
              />
              10 days trip
            </p>
          </div>

          <div className="w-64 bg-white rounded-lg shadow-md p-8 flex flex-col text-center transform transition duration-300 hover:scale-110">
            <img
              src="/assets/Rectangle-14.jpg"
              alt=""
              className="object-contain"
            />
            <div className="flex flex-grow justify-between mt-4">
              <h4 className="text-lg font-semibold text-gray-800">
                London, UK
              </h4>
              <p className="text-sm text-gray-500">$4,2k</p>
            </div>
            <p className="flex justify-center mt-2">
              <img
                src="/assets/Navigation-1.png"
                alt="navicon"
                className="mr-2"
              />
              12 days trip
            </p>
          </div>

          <div className="w-64 bg-white rounded-lg shadow-lg p-8 flex flex-col text-center transform transition duration-300 hover:scale-110">
            <img
              src="/assets/Rectangle 14-(1).png"
              alt=""
              className="object-contain"
            />
            <div className="flex flex-grow justify-between mt-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Full Europe
              </h4>
              <p className="text-sm text-gray-500">$15k</p>
            </div>
            <p className="flex justify-center mt-2">
              <img
                src="/assets/Navigation-1.png"
                alt="navicon"
                className="mr-2"
              />
              28 days trip
            </p>
          </div>
        </div>

        <div className="absolute right-6 top-48  md:-right-8 md:top-48 -z-10 lg:block">
          <img src="/assets/Decore-(2).png" alt="decore" />
        </div>
      </div>
    </Container>
  );
}
