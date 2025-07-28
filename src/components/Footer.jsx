import PlaystoreImage from "../assets/play Store.png"
import   GoogleplayImage from "../assets/Google Play.png" 


const Footer = () => {
  return (
    <footer className="bg-white py-6 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-indigo-900">Jadoo.</h3>
          <p className="text-gray-600 mt-2">
            Book your trip in minute, get full <br /> control for much longer.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
          <div>
            <h4 className="font-semibold text-gray-800">Company</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Contact</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">More</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-4 mt-4 md:mt-0">
          <div className="flex space-x-8 justify-between">
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6 text-gray-600 hover:text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-6 h-6 text-gray-600 hover:text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.974.974 1.248 2.242 1.31 3.608.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.974.974-2.242 1.248-3.608 1.31-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.974-.974-1.248-2.242-1.31-3.608-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.974-.974 2.242-1.248 3.608-1.31 1.266-.057 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.325.058-2.603.277-3.636 1.31C2.462 2.65 2.236 3.914 2.178 5.053c-.059 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.325.277 2.603 1.31 3.636.974.974 2.311 1.252 3.636 1.31 1.28.059 1.688.072 4.947.072s3.667-.014 4.947-.072c1.325-.058 2.603-.277 3.636-1.31.974-.974 1.252-2.311 1.31-3.636.059-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.325-.277-2.603-1.31-3.636-.974-.974-2.311-1.252-3.636-1.31-1.28-.059-1.688-.072-4.947-.072z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-6 h-6 text-gray-600 hover:text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.01-7.496 14.01-13.986 0-.209 0-.42-.015-.63.961-.695 1.8-1.562 2.46-2.549l-.001-.011z"/>
              </svg>
            </a>
          </div>
          <div className="flex space-x-2 mt-2">
            <a href="#" aria-label="Google Play">
              <img src={GoogleplayImage} alt="Get it on Google Play" className="w-24 h-auto" />
            </a>
            <a href="#" aria-label="App Store">
              <img src={PlaystoreImage} alt="Download on the App Store" className="w-24 h-auto" />
            </a>
            
          </div>
        </div>
      </div>
      <br />
      <br />
          <p className="text-gray-600 mt-2 flex justify-center  ">All rights reserved @jadoo.co</p>
    </footer>
  );
};

export default Footer;