import React from "react";
import { Mail, Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-3 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-10 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white">
                CC
              </div>
              <div>
                <h3 className="text-xl font-bold">CareerCode</h3>
                <p className="text-xs text-gray-400">
                  Find your next career move — fast, friendly, and free.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400">
              Leading job board delivering remote and local opportunities.
              Trusted by thousands of companies worldwide.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="facebook"
                className="p-2 rounded-md bg-gray-800 hover:bg-blue-700 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="twitter"
                className="p-2 rounded-md bg-gray-800 hover:bg-sky-500 transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="linkedin"
                className="p-2 rounded-md bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Links column 1 */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Companies
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Salaries
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Links column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest job alerts and career advice — delivered weekly.
            </p>
            <form className="flex gap-2">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="w-full rounded-md px-3 py-2 bg-gray-800 text-gray-200 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Mail size={16} /> Subscribe
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3">
              By subscribing you agree to our terms and privacy policy.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>© {new Date().getFullYear()} JobBox. All rights reserved.</div>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Support
            </a>
          </div>
        </div>
      </div>





      {/* Back to top */}
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="fixed right-6 bottom-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}
