import Link from "next/link";
import footerStyles from "./footer.module.css";

function Footer() {
  return (
    <div className={`page-section ${footerStyles.footer}`}>
      <div className={`center-aligned ${footerStyles.footerWrap}`}>
        <p className={`${footerStyles.footerText} ${footerStyles.footerTextMax}`}>
          Copyright © All Rights Reserved 2024
        </p>
        <p className={`${footerStyles.footerText} text-center`}>501 W Williams St. P.O. Box 1012, Apex, NC 27502</p>
        <p className={`${footerStyles.footerText} ${footerStyles.footerTextMax} text-right`}>
          <Link href="/policy">Policy</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
