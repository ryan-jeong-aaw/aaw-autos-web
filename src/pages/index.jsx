import App from "../components/App";
import Image from "next/image";

import logo from "../images/aaw.logo.svg";
import name from "../images/aaw.name.svg";

export default function Home() {
  return (
    <App>
      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1-5"></div>
        <div class="pure-u-1 pure-u-md-3-5 flex-center full-page">
          <div class="pure-u-1 pure-u-md-1">
            <div class="flex-center flex-vertical-align padding-horizontal-18">
              <Image
                src={logo}
                // layout="fixed"
                width={488}
                height={300}
                priority
              />
              <Image
                src={name}
                // layout="fixed"
                width={488}
                height={120}
                priority
              />
              <div class="padding-vertical-24">
                <a class="pure-button button-book-now outline yellow-white">
                  <div class="book-now-button-content">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="book-now-button-text">Check Availability</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="pure-u-1 pure-u-md-1-5"></div>
      </div>
    </App>
  );
}
