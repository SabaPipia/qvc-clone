import "./page.scss";

import Image from "next/image";
import React from "react";
import ChatIcon from "@/public/assets/icons8-chat-40.png";
import CallIcon from "@/public/assets/icons8-call-50.png";

export default function ContactUs() {
  return (
    <div className="container">
      <div className="contact-us-wrapper">
        <div className="contact-us-container">
          <div className="main-heading">
            <h2>Contact Us</h2>
          </div>
          <div className="m-container">
            <div className="contact-us__customer-service">
              <h3>Customer Service</h3>
              <span>Any time. Any way.</span>
              <p>
                Have a question? Search above for answers to just about
                everything. If you can't find what you need, our amazing
                customer service team is always here to help.
              </p>
              <hr />
            </div>
            <div className="contact-us__where-talk">
              <div className="where-talk__chat">
                <div className="chat__heading">
                  <Image
                    src={ChatIcon}
                    width={64}
                    height={64}
                    alt="chat icon"
                  />
                  <span>Chat Live</span>
                </div>
                <div className="chat__content">
                  <span>
                    Let's <a href="#">talk</a> about it. We're available to chat
                    daily from 7am-1am ET.
                  </span>
                  <span>
                    If social is more your style, find us on{" "}
                    <a href="#">Facebook Messenger</a>
                  </span>
                </div>
              </div>
              <div className="where-talk__call">
                <div className="call__heading">
                  <Image
                    src={CallIcon}
                    width={64}
                    height={64}
                    alt="chat icon"
                  />
                  <span>Call</span>
                </div>
                <span className="call__person-to-person">
                  Want to talk person-to-person? Give us a call any day of the
                  week from 7am-1am ET.
                </span>
                <div className="call__content">
                  <ul>
                    <li className="call__main-li">
                      Customer Service: 999-999-9999
                    </li>
                    <ul>
                      <li>For TTY: 999 (National TRS)</li>
                      <li>En Español: 999-999-999</li>
                      <li>QVC-clone Business Offices: 999-999-9999</li>
                      <li>Vendor Relations: 999-999-9999</li>
                    </ul>
                  </ul>
                </div>
                <span>
                  Would you like to place an order? Call us 24 hours a day, 7
                  days a week at 999-999-9999.
                </span>
              </div>
            </div>
            <div className="q-card-information">
              <div>
                <span className="q-card-info__heading">
                  QCard® Contact Information:
                </span>
                <h4>Call QCard Customer Service at:</h4>
                <span>999-999-9999</span>
                <span>1am-1am ET, 0 days a week</span>
                <span className="info_last">
                  Your call will be directed to Synchrony Bank
                </span>
              </div>
              <div>
                <h4>Mail your QCard payment to:</h4>
                <span>QCard/Synchrony Bank</span>
                <span>PO Box 999999</span>
                <span>Dallas, TX 99999-9999</span>
              </div>
            </div>
            <hr />
            <div className="useful-info">
              <div className="info__useful">
                <span>Was this article useful?</span>
                <button>YES</button>
                <button>NO</button>
              </div>
              <div className="info">SHARE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
