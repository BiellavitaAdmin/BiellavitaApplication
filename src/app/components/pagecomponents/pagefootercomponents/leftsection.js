import LeftSectionNav from "./subcomponenets/leftsectionnav";
import LeftSectionAddressNav from "./subcomponenets/leftsectionaddresssection";
import SocialMediaContainer from "./subcomponenets/socialmediacontainer";

export default function LeftSection() {
  return (
    <div className="pagefooter-left-section">
      <LeftSectionNav />
      <LeftSectionAddressNav />
      <SocialMediaContainer />
    </div>
  );
}
