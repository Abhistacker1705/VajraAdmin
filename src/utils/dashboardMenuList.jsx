import {
  HomeRounded,
  LocalHospital,
  SettingsSuggest,
  Message,
  Group,
  CardMembership,
  LibraryBooks,
  Queue,
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
    name: "Warranty Request",
    path: "/home/warrantyReq",
    icon: <CardMembership />,
  },

  {
    name: "Manuals",
    path: "/home/manuals",
    icon: <LibraryBooks />,
  },
];
