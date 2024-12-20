import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-950/20 py-2 text-gray-100">
      <div className="container">
        {/* Footer Link Section */}
        <div className="navLinks">
          <div className="flex justify-center gap-2 items-center">
            <p>Copyright @BearUp@2025 - AlL Rights Reaserved by </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
