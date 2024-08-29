import React from "react";
import AppBarMain from "./AppBar";
import AppDrawer from "./AppDrawer";

function Dashboard() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const closeDrawer = () => {
    if (openDrawer === true) {
      setOpenDrawer(false);
    }
  }; 

  return (
    <div>
      <div>
        <AppBarMain setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      </div>
      <div>
        <AppDrawer
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      </div>
    </div>
  );
}

export default Dashboard;
