// FontAwesome
import { faHome, faCog, faUserGroup, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const sidebarData = [
    {
        routeLink: "dashboard",
        icon: faHome,
        label: "Dashboard",
    },
    {
        routeLink: "users",
        icon: faUserGroup,
        label: "Users",
    },
    {
        routeLink: "settings",
        icon: faCog,
        label: "Settings",
    },
    {
        routeLink: "logout",
        icon: faRightFromBracket,
        label: "Logout",
    }
]