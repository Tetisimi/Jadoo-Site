import Container from './Container';

export default function Footer() {
  return (
    <footer className="py-14">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-14 max-w-6xl mx-auto">
          {/* Logo + Description */}
          <div className="flex flex-col md:col-span-2 space-y-4">
            <h1 className="font-bold text-4xl">Jadoo.</h1>
            <p className="text-sm text-gray-600 max-w-xs">
              Book your trip in minutes, get full control for much longer.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="font-bold">Company</h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="font-bold">Contact</h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>
                <a href="#">Help / FAQ</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="font-bold">More</h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>
                <a href="#">Airline fees</a>
              </li>
              <li>
                <a href="#">Airline</a>
              </li>
              <li>
                <a href="#">Low fare tips</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="flex space-x-4">
              <a href="#">
                <img src="/public/assets/FB.png" alt="Facebook" className="" />
              </a>
              <a href="#">
                <img src="/public/assets/IG.png" alt="Twitter" className="" />
              </a>
              <a href="#">
                <img src="/public/assets/X.png" alt="Instagram" className="" />
              </a>
            </div>
            <div>
              <h2 className="font-semibold mb-3">Discover our app</h2>
              <div className="flex space-x-3">
                <img
                  src="/public/assets/Google Play.png"
                  alt="Google Play"
                  className=""
                />
                <img
                  src="/public/assets/Play Store.png"
                  alt="App Store"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
