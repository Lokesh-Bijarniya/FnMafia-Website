import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className=" conatin bg-gray-800 ">
        <div className="footer">
          <div className="footer1">
            {/* <div className="logofn">

          </div> */}

            <div className="profile">
              <div className="logofn"></div>
              <br />
              <div className="list">
                <li>
                  <a href="https://www.linkedin.com/company/fnmafia-technologies/posts/?feedView=all">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/home?lang=en">
                    <i class="fa-brands fa-square-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </div>
            </div>

            <div className="solut">
              <h3>Solutions</h3>
              <p>
                <li>Ai solution</li>
                <li>Customer Experience</li>
                <li>Digital Experience (DX)</li>
                <li>IT Lifecycle</li>
                <li>Trust, Safety & Security</li>
              </p>
            </div>
            <div className="indus">
              <h3>Industries</h3>
              <p>
                <li>Technology</li>
                <li>Communication and media</li>
                <li>Fintech & Financial Services</li>
                <li>Games</li>
                <li>Development</li>
              </p>
            </div>
            <div className="abot">
              <h3>About us</h3>
              <p>
                <li>Our Team</li>
                <li>Social impact</li>
                <li>Location</li>
                <li>our Awards</li>
                <li>Twchnology partners</li>
              </p>
            </div>
          </div>
          <p className="last">©️ 2024 FnMafia International</p>
        </div>
      </div>
      {/* <Div/> */}
    </>
  );
}
