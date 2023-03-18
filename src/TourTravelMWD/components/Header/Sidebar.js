import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import * as React from "react";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "home",
          "book",
          "packages",
          "services",
          "gallery",
          "review",
          "contact",
        ].map((text, index) => (
          <a key={index} className="sidebarItem" href={`#${text}`}>
            {text}
          </a>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <Button onClick={toggleDrawer("left", true)}>
          <i className="fas fa-bars menu-bar"></i>
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </>
    </div>
  );
}
