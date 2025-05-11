import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-white">SoftSell</span>
            </div>
            <p className="text-gray-400">
              The premier marketplace for buying and selling unused software
              licenses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm6.838 12.014c-.103.515-.519.938-1.034 1.043-3.018.565-5.24.44-7.365-.242-2.125-.681-4.012-2.12-5.512-5.01-.284-.545-.07-1.208.474-1.492.545-.284 1.208-.07 1.492.474 1.085 2.085 2.412 3.106 4.058 3.626 1.646.52 3.452.62 6.167.124.575-.107 1.127.272 1.234.848.056.298.014.596-.103.857a.98.98 0 01-.411.772z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.885 5.515c.892.893 1.332 1.704 1.719 2.912.38 1.192.396 2.783.396 4.602v.034c0 1.82-.015 3.41-.396 4.602-.387 1.208-.827 2.019-1.72 2.912-.892.893-1.704 1.333-2.911 1.72-1.192.38-2.783.395-4.603.395h-.034c-1.82 0-3.41-.015-4.602-.395-1.208-.387-2.019-.827-2.912-1.72-.893-.893-1.333-1.704-1.72-2.912-.38-1.192-.395-2.783-.395-4.602v-.034c0-1.82.015-3.41.395-4.602.387-1.208.827-2.019 1.72-2.912.893-.893 1.704-1.333 2.912-1.72 1.192-.38 2.782-.395 4.602-.395h.034c1.82 0 3.41.015 4.603.395 1.207.387 2.02.827 2.911 1.72zm-6.88 10.666v-8.363c0-.071-.044-.112-.077-.136-.092-.06-.198-.033-.282.034l-.05.045-4.853 4.853c-.066.066-.066.174 0 .24l4.85 4.85c.049.05.12.066.17.045h.03c.059-.024.103-.07.103-.136v-.034-1.398zm-4.235-3.568h-.266l4.853-4.853c.066-.066.066-.174 0-.24l-4.85-4.85c-.049-.05-.12-.066-.17-.045h-.03c-.059.024-.103.07-.103.136v.034 8.002 1.793c0 .071.044.112.077.136.092.06.198.033.282-.034l.05-.045.157-.14z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-400">hello@softsell.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
