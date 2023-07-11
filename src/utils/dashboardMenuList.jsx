import {
  HomeRounded,
  LocalHospital,
  SettingsSuggest,
  Message,
} from "@mui/icons-material";

export const DashboardMenuList = [
  {
    name: "Home",
    path: "/dashboard",
    icon: <HomeRounded />,
  },
  {
    name: "Hospitals",
    path: "/dashboard/hosp",
    icon: <LocalHospital />,
  },
  {
    name: "Service Request",
    path: "/dashboard/servicereq",
    icon: <SettingsSuggest />,
  },
  {
    name: "Messages",
    path: "/dashboard/messages",
    icon: <Message />,
  },
];
