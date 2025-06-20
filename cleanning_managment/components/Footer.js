import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="max-w-screen h-screen bg-[#303B36] text-[#FDFBF1] px-5 py-15 text-sm ">
      <div>
        <h1 className="text-3xl md:text-8xl font-semibold leading-tight mb-4 px-22 py-12 ">
          WE WOULD LOVE <br /> TO HEAR FROM YOU.
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-30 pb-20">

        {/* Left section - Contact message */}
        <div className="md:col-span-1">
          <p className="mb-4 text-gray-300">
            Feel free to reach out if you want to collaborate with us, or simply have a chat.
          </p>
          <a
            href="mailto:contact@monopo.london"
            className="underline hover:text-gray-400 transition"
          >
            manit@ac.in →
          </a>
        </div>

        {/* Our Address */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-400">OUR ADDRESS</h4>
          <p>
            MANIT BHOPAl<br />
            Madhya Pradesh, India <br />
            </p>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-400">FOLLOW US</h4>
          <p className="mb-1">Fb &nbsp; Tw &nbsp; Ig &nbsp; Li</p>
          <ul className="space-y-1">
            <li>↗ MONOPO TKY</li>
            <li>↗ MONOPO NYC</li>
            <li>↗ POWERED BY TOKYO</li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-400">Navigation</h4>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Report</li>
            <li>Contac :</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>

      <div className=" border-t bg-[#303B36] border-[#FDFBF1] pt-6 text-center text-[#FDFBF1] text-xs">
        &copy; {new Date().getFullYear()} Cleaning Management
      </div>
    </footer>
  );
};

export default Footer;
