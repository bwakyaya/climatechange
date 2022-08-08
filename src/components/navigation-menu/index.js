import React from "react";
// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navigation() {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const open4 = Boolean(anchorEl4);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const open5 = Boolean(anchorEl5);
  const handleClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClose5 = () => {
    setAnchorEl5(null);
  };

  const [anchorEl6, setAnchorEl6] = React.useState(null);
  const open6 = Boolean(anchorEl6);
  const handleClick6 = (event) => {
    setAnchorEl6(event.currentTarget);
  };
  const handleClose6 = () => {
    setAnchorEl6(null);
  };

  const [anchorEl7, setAnchorEl7] = React.useState(null);
  const open7 = Boolean(anchorEl7);
  const handleClick7 = (event) => {
    setAnchorEl7(event.currentTarget);
  };
  const handleClose7 = () => {
    setAnchorEl7(null);
  };
  return (
    <div className="nav-menu">
      <button
        className="nav-button"
        id="basic-button1"
        aria-controls={open1 ? "basic-menu1" : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? "true" : undefined}
        // onClick={handleClick1}
      >
        About
      </button>
      <button
        className="nav-button"
        id="basic-button2"
        aria-controls={open2 ? "basic-menu2" : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? "true" : undefined}
        onClick={handleClick2}
      >
        Frameworks
      </button>
      <button
        className="nav-button"
        id="basic-button3"
        aria-controls={open3 ? "basic-menu3" : undefined}
        aria-haspopup="true"
        aria-expanded={open3 ? "true" : undefined}
        onClick={handleClick3}
      >
        Financing
      </button>
      <button
        className="nav-button"
        id="basic-button4"
        aria-controls={open4 ? "basic-menu4" : undefined}
        aria-haspopup="true"
        aria-expanded={open4 ? "true" : undefined}
        onClick={handleClick4}
      >
        Mitigation
      </button>
      <button
        className="nav-button"
        id="basic-button7"
        aria-controls={open4 ? "basic-menu7" : undefined}
        aria-haspopup="true"
        aria-expanded={open4 ? "true" : undefined}
        onClick={handleClick7}
      >
        Adaptation
      </button>
      <button
        className="nav-button"
        id="basic-button5"
        aria-controls={open5 ? "basic-menu5" : undefined}
        aria-haspopup="true"
        aria-expanded={open5 ? "true" : undefined}
        onClick={handleClick5}
      >
        Statistics
      </button>
      <button
        className="nav-button"
        id="basic-button6"
        aria-controls={open6 ? "basic-menu6" : undefined}
        aria-haspopup="true"
        aria-expanded={open6 ? "true" : undefined}
        onClick={handleClick6}
      >
        Archive
      </button>
      {/* <Menu
        id="basic-menu1"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        MenuListProps={{
          "aria-labelledby": "basic-button1",
        }}
      >
        <MenuItem onClick={handleClose1}>Profile1</MenuItem>
        <MenuItem onClick={handleClose1}>My account</MenuItem>
        <MenuItem onClick={handleClose1}>Logout</MenuItem>
      </Menu> */}
      <Menu
        id="basic-menu2"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          "aria-labelledby": "basic-button2",
        }}
      >
        <MenuItem onClick={handleClose2}>
          United Nations Framework Convention on Climate Change (UNFCCC)
        </MenuItem>
        <MenuItem onClick={handleClose2}>Paris Agreement</MenuItem>
        <MenuItem onClick={handleClose2}>Kyoto Agreement</MenuItem>
        <MenuItem onClick={handleClose2}>Conference of the Parties</MenuItem>
        <MenuItem onClick={handleClose2}>
          African Union Climate Change and Resilient Development Strategy
        </MenuItem>
        <MenuItem onClick={handleClose2}>Uganda's Vision 2040</MenuItem>
        <MenuItem onClick={handleClose2}>National Development Plans</MenuItem>
      </Menu>
      <Menu
        id="basic-menu3"
        anchorEl={anchorEl3}
        open={open3}
        onClose={handleClose3}
        MenuListProps={{
          "aria-labelledby": "basic-button3",
        }}
      >
        <MenuItem onClick={handleClose3}>
          Government Development Partners
        </MenuItem>
        <MenuItem onClick={handleClose3}>Private Sector</MenuItem>
        <MenuItem onClick={handleClose3}>Civil Society</MenuItem>
        <MenuItem onClick={handleClose3}>Philanthropy</MenuItem>
        <MenuItem onClick={handleClose3}>Climate Financed Projects</MenuItem>
      </Menu>
      <Menu
        id="basic-menu4"
        anchorEl={anchorEl4}
        open={open4}
        onClose={handleClose4}
        MenuListProps={{
          "aria-labelledby": "basic-button4",
        }}
      >
        <MenuItem onClick={handleClose4}>Forestry</MenuItem>
        <MenuItem onClick={handleClose4}>Agriculture</MenuItem>
        <MenuItem onClick={handleClose4}>Water and Environment</MenuItem>
        <MenuItem onClick={handleClose4}>Energy</MenuItem>
        <MenuItem onClick={handleClose4}>Fisheries</MenuItem>
        <MenuItem onClick={handleClose4}>Transport</MenuItem>
        <MenuItem onClick={handleClose4}>
          Manufacturing, Industrial Processing an Mining
        </MenuItem>
        <MenuItem onClick={handleClose4}>
          Cities and the Build Enviroment
        </MenuItem>
        <MenuItem onClick={handleClose4}>Biodiversity</MenuItem>
        <MenuItem onClick={handleClose4}>Gender and Youth</MenuItem>
      </Menu>
      <Menu
        id="basic-menu5"
        anchorEl={anchorEl5}
        open={open5}
        onClose={handleClose5}
        MenuListProps={{
          "aria-labelledby": "basic-button5",
        }}
      >
        <MenuItem onClick={handleClose5}>Data</MenuItem>
        <MenuItem onClick={handleClose5}>Facts and Figures</MenuItem>
      </Menu>
      <Menu
        id="basic-menu6"
        anchorEl={anchorEl6}
        open={open6}
        onClose={handleClose6}
        MenuListProps={{
          "aria-labelledby": "basic-button6",
        }}
      >
        <MenuItem onClick={handleClose6}>Policy Briefs</MenuItem>
        <MenuItem onClick={handleClose6}>Climate Change Reports</MenuItem>
        <MenuItem onClick={handleClose6}>IPCC Reports</MenuItem>
        <MenuItem onClick={handleClose6}>Legal Documents</MenuItem>
        <MenuItem onClick={handleClose6}>NDCs</MenuItem>
        <MenuItem onClick={handleClose6}>SDGs</MenuItem>
        <MenuItem onClick={handleClose6}>Climate Change Innovations</MenuItem>
        <MenuItem onClick={handleClose6}>
          Climate Change Information Updates
        </MenuItem>
        <MenuItem onClick={handleClose6}>Weather Updates</MenuItem>
      </Menu>
      <Menu
        id="basic-menu7"
        anchorEl={anchorEl7}
        open={open7}
        onClose={handleClose7}
        MenuListProps={{
          "aria-labelledby": "basic-button6",
        }}
      >
        <MenuItem onClick={handleClose7}>Water and Sanitation</MenuItem>
        <MenuItem onClick={handleClose7}>Environment and Ecosystem</MenuItem>
        <MenuItem onClick={handleClose7}>Agriculture</MenuItem>
        <MenuItem onClick={handleClose7}>Disaster Risk Management</MenuItem>
        <MenuItem onClick={handleClose7}>Health</MenuItem>
        <MenuItem onClick={handleClose7}>Transport</MenuItem>
        <MenuItem onClick={handleClose7}>Energy</MenuItem>
      </Menu>
    </div>
  );
}
