import Container from './Container';

export default function EaF() {
  return (
    <Container>
      <div className="h-screen mb-68 sm:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24 items-center">
          <div>
            <h3 className="text-orange-500 font-semibold mb-2">
              Easy and Fast
            </h3>
            <h1 className="text-4xl font-bold leading-snug mb-8">
              Book Your Next Trip In Three Easy Steps
            </h1>

            <div className="space-y-8">
              <div className="flex items-start">
                <img
                  src="/assets/Group 7.png"
                  alt=""
                  className="mr-4 w-12 h-12"
                />
                <div>
                  <h2 className="font-semibold text-lg">Choose Destination</h2>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src="/assets/Group 11.png"
                  alt=""
                  className="mr-4 w-12 h-12"
                />
                <div>
                  <h2 className="font-semibold text-lg">Make Payment</h2>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src="/assets/Group 12.png"
                  alt=""
                  className="mr-4 w-12 h-12"
                />
                <div>
                  <h2 className="font-semibold text-lg">
                    Reach Airport On Selected Day
                  </h2>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/assets/Image (1).png"
              alt="Trip Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
