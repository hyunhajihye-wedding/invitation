import TitleComponent from "./TitleComponent";
import GreetingComponent from "./GreetingComponent";
import CalendarComponent from "./CalendarComponent";
import GalleryComponent from "./GalleryComponent";
import MapComponent from "./MapComponent";
import AccountComponent from "./AccountComponent";
import FooterComponent from "./FooterComponent";

function MobileInvitation() {
  return (
    <div className="mcard-view">
      <TitleComponent />
      <GreetingComponent />
      <CalendarComponent />
      <GalleryComponent />
      <MapComponent />
      <AccountComponent />
      <FooterComponent />
    </div>
  );
}

export default MobileInvitation;
