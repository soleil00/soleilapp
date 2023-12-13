import {
  Api,
  CardMembership,
  Extension,
  Group,
  Rule,
  Send,
  Subscriptions,
  Support,
  Timeline,
  VerifiedUser,
} from "@mui/icons-material";

export const sidenav = [
  { name: "My Profile", icon: <VerifiedUser />, href: "/profile" },
  { name: "Membership", icon: <CardMembership />, href: "/membership" },
  { name: "Utilities", icon: <Extension />, href: "/utilities" },
  {
    name: "Privacy Policies",
    icon: <Rule />,
    href: "/policies",
    secondary: "Terms and Condictions",
  },
  { name: "Roadmap", icon: <Timeline />, href: "/roadmap" },
  { name: "Support", icon: <Support />, href: "/support" },
  { name: "Api", icon: <Api />, href: "/developer", secondary: "Developer" },
  { name: "Our Team", icon: <Group />, href: "/team" },
];
