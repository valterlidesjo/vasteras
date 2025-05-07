import { FiPhone } from "react-icons/fi";
import FooterCard from "./FooterCard";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import "../styles/components/footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-upper">
          <p className="footer-header">HOTELL VÄSTERÅS</p>
        </div>
        <div className="footer-content">
          <FooterCard
            value="021-18 03 30"
            beforeLink="tel:"
            link="021-18-0330"
            icon={<FiPhone />}
          />
          <FooterCard
            value="Vasagatan 22, 722 15 Västerås"
            beforeLink=""
            link="https://www.google.com/maps/place/Hotell+V%C3%A4ster%C3%A5s/@59.6116703,16.5426159,17z/data=!3m1!4b1!4m9!3m8!1s0x465e6138d36a52f3:0x61bd7ff1a123fd09!5m2!4m1!1i2!8m2!3d59.6116676!4d16.5451908!16s%2Fg%2F1q5bmgwx_?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D"
            icon={<IoLocationOutline />}
          />
          <FooterCard
            value="info@hotellvasteras.se"
            beforeLink="mailto:"
            link="info@hotellvasteras.se"
            icon={<IoMailOutline />}
          />
        </div>
        <div className="footer-lower">
          <p>
            ©{new Date().getFullYear()} Hotell Västerås. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
