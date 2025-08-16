import Container from './Container';

export default function Subscribe() {
  return (
    <Container>
      <div className="mb-28 relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] px-4">
        <img
          src="assets/Group-78.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10 rounded-4xl"
        />
        <img
          src="assets/Group-77.png"
          alt=""
          className="absolute top-4 right-4 sm:-right-8 hidden sm:block sm:-top-5 w-20 sm:w-auto"
        />

        <div className="flex flex-col items-center text-center space-y-6 z-10 max-w-2xl">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h1>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div className="flex items-center rounded px-2 py-3.5 w-full sm:w-auto bg-white">
              <img
                src="assets/Group-46.png"
                alt="search"
                className="w-5 h-5 mr-2"
              />
              <input
                type="text"
                placeholder="Your email"
                className="outline-none w-full sm:w-64"
              />
            </div>

            <a
              href="#"
              className="bg-orange-500 px-6 py-3.5 rounded-lg text-white text-center w-full sm:w-auto"
            >
              Subscribe
            </a>
          </div>
          <img
            src="assets/Group-5.png"
            alt=""
            className="absolute -bottom-6 -right-6 sm:-bottom-14 sm:-right-24 -z-30 pointer-events-none"
          />
        </div>
      </div>
    </Container>
  );
}
