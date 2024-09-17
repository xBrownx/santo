import Logo from "../../../assets/Small Log Dark.svg";
import Email from "../../../assets/Header-Email-Icon.svg"

export const headerConst = {
    titleTxt: ["1837 BUSINESS PARK", "8-18 SANTO PARADE, PORT ADELAIDE"],
    subtitleTxt: "8-18 SANTO PARADE, PORT ADELAIDE",
    navLinks: [
        {
            id: "about",
            label: "ABOUT",
            isButton: false,
        },
        {
            id: "location",
            label: "LOCATION",
            isButton: false,
        },
        {
            id: "site",
            label: "SITE",
            isButton: false,
        },
        {
            id: "agency",
            label: "AGENCY",
            isButton: false,
        },
        {
            id: "enquire",
            label: "ENQUIRE",
            isButton: true,
        }
    ],
    assets: {
        logo: Logo,
        email: Email
    }
}
