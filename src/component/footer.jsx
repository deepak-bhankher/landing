import React from "react";
import { Truck } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const stayConnected = ["Our Twitter", "Join Us", "Get Updates", "Support Us", "Latest News"];

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto  lg:px-14 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* Logo + newsletter blurb */} 
          <div>
            <div className=" w-60 h-60 rounded-xl  -mt-14 flex items-center justify-center ">
              <img src="truck.png" alt="truck"   />
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs -mt-6">
              Subscribe to our newsletter for the latest features and updates
              delivered to you.
            </p>
          </div>

          {/* Stay connected links */}
          
          <div className="ml-48  " >
            <p className="font-semibold  text-neutral-900 mb-4">Stay Connected</p>
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
          <div className="ml-40">
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

            <div className="flex flex-col gap-2.5 max-w-[160px]">
              <a
                href="#"
                className="flex items-center gap-2 bg-black rounded-lg px-3 py-2 hover:scale-105 transition-all duration-300"
              >
                <GooglePlayIcon className="w-5 h-5 shrink-0" />
                <span className="flex flex-col items-start leading-tight text-white">
                  <span className="text-[8px]">GET IT ON</span>
                  <span className="text-xs font-semibold -mt-0.5">Google Play</span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-black rounded-lg px-3 py-2 hover:scale-105 transition-all duration-300"
              >
                <AppleIcon className="w-5 h-5 shrink-0" />
                <span className="flex flex-col items-start leading-tight text-white">
                  <span className="text-[8px]">Download on the</span>
                  <span className="text-xs font-semibold -mt-0.5">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black py-4 ">
        <p className="  text-[11px] sm:text-sm text-neutral-400 text-center mx-auto leading-relaxed">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies.  2008-2026 © Apna
          Crusher™ Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const GooglePlayIcon = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M64 32 L64 480 L296 256 Z" fill="url(#gp-blue3)" />
    <path d="M64 32 L296 256 L376 176 Z" fill="url(#gp-green3)" />
    <path d="M64 480 L296 256 L376 336 Z" fill="url(#gp-red3)" />
    <path d="M376 176 L448 216 C468 227 468 285 448 296 L376 336 L296 256 Z" fill="url(#gp-yellow3)" />
    <defs>
      <linearGradient id="gp-blue3" x1="64" y1="32" x2="296" y2="256" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C3FF" /><stop offset="1" stopColor="#0A78FF" />
      </linearGradient>
      <linearGradient id="gp-green3" x1="64" y1="32" x2="376" y2="176" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3BE28A" /><stop offset="1" stopColor="#00D07A" />
      </linearGradient>
      <linearGradient id="gp-red3" x1="64" y1="480" x2="376" y2="336" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5B4E" /><stop offset="1" stopColor="#E5382E" />
      </linearGradient>
      <linearGradient id="gp-yellow3" x1="296" y1="216" x2="468" y2="256" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD24D" /><stop offset="1" stopColor="#FFB800" />
      </linearGradient>
    </defs>
  </svg>
);

const AppleIcon = ({ className }) => (
  <svg viewBox="0 0 384 512" className={className} fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M318.7 268.7c-.3-56.1 45.9-83 48-84.4-26.2-38.3-66.9-43.6-81.4-44.2-34.7-3.5-67.7 20.4-85.3 20.4-17.6 0-44.8-19.9-73.6-19.3-37.9.6-72.9 22-92.4 55.9-39.4 68.3-10.1 169.5 28.3 224.9 18.8 27.1 41.2 57.5 70.6 56.4 28.4-1.1 39.1-18.4 73.4-18.4 34.3 0 44 18.4 73.9 17.8 30.5-.5 49.8-27.6 68.5-54.8 21.6-31.4 30.5-61.8 30.9-63.3-.7-.3-59.2-22.7-59.9-90zM255.1 108.1c15.7-19 26.3-45.5 23.4-71.9-22.6.9-49.9 15.1-66.1 34-14.5 16.8-27.3 43.9-23.9 69.6 25 1.9 50.5-12.7 66.6-31.7z" />
  </svg>
);

export default Footer;