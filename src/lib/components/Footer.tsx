import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-black flex flex-col gap-5 items-center px-3 sm:px-10 lg:px-20 pt-10 pb-3 border-t border-input font-[SatoshiRegular]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <iframe
            title="XIM University Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.4227708308176!2d85.75987517511702!3d20.15811538128217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19af103360ec8f%3A0x734b96dc8afdf0ef!2sXIM%20University!5e0!3m2!1sen!2sin!4v1732373764228!5m2!1sen!2sin"
            className="border border-input rounded-lg w-full h-full"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-span-1">
          <h3 className="text-2xl font-[SatoshiBold] whitespace-nowrap">
            Quick Links
          </h3>
          <ul>
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/committee" className="hover:underline">
                Committee
              </Link>
            </li>
            {/* <li>
            <a href="" className="hover:underline">
              For Authors
            </a>
          </li> */}
            <li>
              <Link to="/registration" className="hover:underline">
                Registration
              </Link>
            </li>
            <li>
              <Link to="/call-for-papers" className="hover:underline">
                Call For Papers
              </Link>
            </li>
            <li>
              <Link to="/speakers" className="hover:underline">
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <h3 className="text-2xl font-[SatoshiBold] whitespace-nowrap">
            Contact Us
          </h3>
          <p>
            <strong>Address:&nbsp;</strong>International Center, XIM University
            Bhubaneswar (New Campus), Harirajpur-752050, Odisha, India.
          </p>
          <p>
            <strong>Email:&nbsp;</strong>
            <a href="mailto:deanxcse_office@xim.edu.in">
              deanxcse_office@xim.edu.in
            </a>
          </p>
          <p>
            <strong>Phone:&nbsp;</strong>
            <a href="tel:+917008014054">+917008014054</a>,
            <a href="tel:+917978910321"> +917978910321</a>,
            <a href="tel:+916205015853"> +916205015853</a>
          </p>
        </div>
      </div>

      <p className="text-white text-center text-sm sm:text-base">
        Copyright © 2024 XIM University, Bhubaneswar, ICAIET&nbsp;-&nbsp;2025,
        All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
