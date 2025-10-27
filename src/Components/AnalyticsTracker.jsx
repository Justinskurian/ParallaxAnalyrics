import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Fires every time route changes
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
    console.log("Pageview tracked:", location.pathname);
  }, [location]);

  return null; // This component doesn’t render anything
};

export default AnalyticsTracker;
