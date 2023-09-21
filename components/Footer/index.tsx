import "./style.scss";

import { images } from "./imports";
import logo from "@/public/assets/qvc-logo-rebrand.webp";
import { stayInTouch, userOptions, footerLink } from "@/constants";

import Image from "next/image";

import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-usr-bg footer-bg">
        <div className="footer__user component-wrapper">
          <div className="stay-in-touch user-option-wrapper">
            <Image
              src={stayInTouch.icon}
              alt={stayInTouch.heading}
              width={30}
              height={30}
            />
            <h3 className="user-option__heading">{stayInTouch.heading}</h3>
            <p className="user-option__content">{stayInTouch.info}</p>
            <div className="user-option__email-wrapper">
              <input
                type="email"
                className="email__input"
                placeholder="Email"
              />
              <button className="email-button">Sign up</button>
            </div>
          </div>
          {userOptions.map((item) => (
            <div className="user-option user-option-wrapper">
              <Image
                src={item.icon}
                alt={item.heading}
                width={30}
                height={30}
              />
              <h3 className="user-option__heading">{item.heading}</h3>
              <p className="user-option__content">{item.info}</p>
              <div className="user-option__email-wrapper only-buttons-wrapper">
                <button>{item.button1}</button>
                <button>{item.button2}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-links-bg footer-bg">
        <div className="footer__links">
          <div className="footer-links-list">
            {footerLink.map((item) => {
              return (
                <div className="footer-links-single">
                  <h2>{item.heading}</h2>
                  {item.links.map((i) => (
                    <p>{i}</p>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="footer-links_socials">
            <div className="socials__stay-connected">
              <span>Stay Connected</span>
              <div className="socials__icons">
                {images.map((img) => (
                  <Image src={img} width={25} height={25} alt="socials links" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main-bg footer-bg">
        <div className="footer-main component-wrapper">
          <div className="footer__about-company">
            <Image src={logo} width={60} height={60} alt="company logo" />
            <p>This is hopping brought to life</p>
            <div className="footer-company_info-first">
              <span>QVC is part of Qurate Retail Group</span>
              <span>HSN</span>
              <span>Ballard Designs</span>
              <span>Frontgate</span>
              <span>Garnet Hill</span>
              <span>grandin road</span>
            </div>
            <span className="privacy">Privacy Statement</span>
            <span className="privacy">General Terms of Use</span>
            <div className="footer-company_info">
              <p>
                QVC is not responsible for the availability, content, security,
                policies, or practices of the above referenced third-party
                linked sites nor liable for statements, claims, opinions, or
                representations contained therein. QVC's Privacy Statement does
                not apply to these third-party web sites.
              </p>
              <p className="copyright">
                © 1995-2023 QVC, Inc. All rights reserved. | QVC, Q and the Q
                logo are registered service marks of ER Marks, Inc. 888-345-5788
              </p>
            </div>
          </div>
          <div className="footer-policy">
            <div className="info">
              <span>Policies & Information</span>
              <div>
                <div>
                  <span>Community Guidelines</span>
                  <span>Pricing & Retail Values</span>
                  <span>Online Closed Captioning</span>
                  <span>Product Recall Info</span>
                </div>
                <div>
                  <span>Additional Legal Info</span>
                  <span>Your Privacy Choices</span>
                  <span>CA Supply Chains Transparency</span>
                </div>
                <div>
                  <span>Electronic Waste Recycling Information</span>
                  <span>Vision Statement</span>
                  <span>Accessibility</span>
                </div>
              </div>
            </div>
            <div className="international">
              <span>QVC International</span>
              <div>
                <span>Germany</span>
                <span>Italy</span>
                <span>Japan</span>
                <span>United Kingdom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
