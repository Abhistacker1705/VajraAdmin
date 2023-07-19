import {
  HomeRounded,
  LocalHospital,
  SettingsSuggest,
  Message,
  Group,
  CardMembership,
} from "@mui/icons-material";

export const DashboardMenuList = [
  {
    name: "Home",
    path: "/home",
    icon: <HomeRounded />,
  },
  {
    name: "Hospitals",
    path: "/home/hosp",
    icon: <LocalHospital />,
  },
  {
    name: "Service Request",
    path: "/home/servicereq",
    icon: <SettingsSuggest />,
  },
  {
    name: "Users",
    path: "/home/users",
    icon: <Group />,
  },
  {
    name: "Messages",
    path: "/home/messages",
    icon: <Message />,
  },
  {
    name: "Warranty",
    path: "/home/messages",
    icon: <CardMembership />,
  },
  {
    name: "All Assets",
    path: "/home/hosp/assets",
    icon: <CardMembership />,
  },
];
