import App from "../components/App";
import Image from "next/image";

import logo from "../images/aaw.logo.svg";

export default function Home() {
  return (
    <App>
      <Image className="logo" src={logo} priority />
      <p>Index Paged</p>
    </App>
  );
}
