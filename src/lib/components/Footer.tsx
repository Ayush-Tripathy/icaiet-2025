const Footer = () => {
  return (
    <footer className="grid grid-cols-5 gap-10 px-20 py-10 border-t border-[#2e2e2e] font-[SatoshiRegular]">
      <div className="col-span-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.4227708308176!2d85.75987517511702!3d20.15811538128217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19af103360ec8f%3A0x734b96dc8afdf0ef!2sXIM%20University!5e0!3m2!1sen!2sin!4v1732373764228!5m2!1sen!2sin"
          className="border border-[#2e2e2e] rounded-lg w-full h-full"
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
            <a href="" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Committee
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              For Authors
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Registration
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Call For Papers
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Speakers
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Contact
            </a>
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
          <a href="tel:+917008014054">+917008014054</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
