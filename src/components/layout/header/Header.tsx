import TopNav from "./TopNav";
import TopBar from "./TopBar";
import { Suspense } from "react";
import Loading from "../shared/Loading";
import TopMarquee from "./TopMarquee";

function Header() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <TopBar />
        <TopNav />
        <TopMarquee />
      </Suspense>
    </div>
  );
}

export default Header;
