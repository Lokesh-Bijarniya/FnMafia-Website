import React from "react";
import "./Footer.css";
import Contact from "./Contact";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div>
      <footer className="h-full pt-12 pb-12 ">
        <div class="flex justify-evenly">
          {/* <div class="row"> */}
          <div>
            <div class="useful-link ">
              <h2>Useful Links</h2>
             
              <div class="use-links text-slate-400">
                <li>
                  <a href="/Home">
                     Home
                  </a>
                </li>
                <li>
                  <a href="/Program">
                    Program{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                     Plan
                  </a>
                </li>
                <li>
                  <a href="/Contact">
                    Contact me
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div >
            <div class="social-links ">
              <h2>Follow Us</h2>
              <div class="social-icons ">
                <li>
                 <a href="https://www.facebook.com" target="_blank">
                    <FacebookIcon/> Facebook
                </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                  >
                    <InstagramIcon/> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#https://www.linkedin.com"
                    target="_blank"
                  >
                    <LinkedInIcon/> Linkedin
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div>

            <Contact />
          </div>
        </div>
      </footer>

      <section id="copy-right">
        <div class="copy-right-sec">
          <i class="fa-solid fa-copyright"></i>
          Get Intership with My company  <a href="#"> Fnmafia</a>
        </div>
      </section>
    </div>
  );
}
