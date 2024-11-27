const Footer = () => {
  return (
    <footer className="flex flex-row gap-32 px-20 py-10 border-t border-[#2e2e2e]">
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.4227708308176!2d85.75987517511702!3d20.15811538128217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19af103360ec8f%3A0x734b96dc8afdf0ef!2sXIM%20University!5e0!3m2!1sen!2sin!4v1732373764228!5m2!1sen!2sin"
          width=""
          height=""
          className="border border-[#2e2e2e] rounded-lg"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="">
        <h3 className="">Quick Links</h3>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Committee</a>
          </li>
          <li>
            <a href="">For Authors</a>
          </li>
          <li>
            <a href="">Registration</a>
          </li>
          <li>
            <a href="">Call For Papers</a>
          </li>
          <li>
            <a href="">Speakers</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className="">Contact Us</h3>
        <p>
          <strong>Address:</strong> International Center, XIM University
          Bhubaneswar (New Campus), Harirajpur-752050, Odisha, India.
        </p>
        <p>
          <strong>Email: </strong>
          <a href="mailto:deanxcse_office@xim.edu.in">
            deanxcse_office@xim.edu.in
          </a>
        </p>
        <p>
          <strong>Phone: </strong> <a href="tel:+917008014054">+917008014054</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
