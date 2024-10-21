import { useEffect } from "react";

const Settings = () => {
  useEffect(() => {
    document.title = "Dashboard - Settings";
  }, []);
  return <div>Settings</div>;
};

export default Settings;
