import Link from "next/link";

const Footer = () => {
  return (
     <footer className="bg-gray-900 py-2 text-gray-100 relative z-10">
          <div className="container">
            <div className="navLinks">
              <div className="flex justify-center gap-2 items-center">
                <p>Copyright BearUp@2025 - ALL Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
  );
};

export default Footer;
