
import Header from "./header/Head";
import Hero from "./hero/Hero";
import Work from "./work-mangment/Work";
import WORK from "./Your-work/Work";
import Fotter from "./header/fotter";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Work/>
      <WORK/>
      <Fotter />
    </div>
  );
}
