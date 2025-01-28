import TitleComponent from "./TitleComponent";
import GreetingComponent from "./GreetingComponent";
import CalendarComponent from "./CalendarComponent";
import GalleryComponent from "./GalleryComponent";
import MapComponent from "./MapComponent";
import AccountComponent from "./AccountComponent";

function MobileInvitation() {
  return (
    <div className="mcard-view">
      <TitleComponent />
      <GreetingComponent />
      <CalendarComponent />
      <GalleryComponent />
      <MapComponent />
      <AccountComponent />
    </div>
  );
}

export default MobileInvitation;
