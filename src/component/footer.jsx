import React from "react";
import { Truck } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const stayConnected = ["Our Twitter", "Join Us", "Get Updates", "Support Us", "Latest News"];

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:flex md:flex-row md:justify-center md:items-start gap-10 md:gap-24 lg:gap-32 text-center md:text-left md:w-fit md:mx-auto">
          {/* Logo + newsletter blurb */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-xl md:-mt-14 flex items-center justify-center">
              <img src="truck.png" alt="truck" />
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs -mt-6 mx-auto md:mx-0">
              Subscribe to our newsletter for the latest features and updates
              delivered to you.
            </p>
          </div>

          {/* Stay connected links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-neutral-900 mb-4">Stay Connected</p>
            <ul className="space-y-3">
              {stayConnected.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links + store badges */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-neutral-900 mb-4">Social Links</p>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black py-4 px-4">
        <p className="text-[11px] sm:text-sm text-neutral-400 text-center mx-auto leading-relaxed max-w-4xl">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. 2008-2026 © Apna
          Crusher™ Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};



export default Footer;