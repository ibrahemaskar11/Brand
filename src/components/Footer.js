import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer
      name="footer"
      className="w-full bg-slate-900 text-gray-300 py-8 px-4"
    >
      <div className="max-w-[1240px] mx-auto sm:text-start text-center grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h3 className="font-bold uppercase pt-2">SOLUTIONS</h3>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase pt-2">SUPPORT</h3>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase pt-2">COMPANY</h3>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase pt-2">LEGAL</h3>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <h3 className="font-bold uppercase">Subscribe to our newsletter</h3>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row mt-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-md w-full p-2 md:pt-2 mr-4"
            />
            <button className="p-2 mt-4 sm:mt-0">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row px-8 py-2 justify-center items-center text-center sm:justify-between text-gray-500">
        <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
        <div className="flex flex-row justify-center items-center space-x-4 py-0 sm:py-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaGithub />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
