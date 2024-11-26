import { createAsset, dashboard, logout, profile, offer } from "../assets";

export const navlinks = [
    {
        name: "Dashboard",
        imgUrl: dashboard,
        link: "/",
    },

    {
        name: "Offers",
        imgUrl: offer,
        link: "/offers",
        disabled: false,
    },
    {
        name: "Profile",
        imgUrl: profile,
        link: "/profile",
    },
    {
        name: "Logout",
        imgUrl: logout,
        link: "/",
        disabled: false,
    },
];
