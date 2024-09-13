import andWil from '../../../assets/Andrew Wilson.png'
import marOno from '../../../assets/Marco Onorato.png'
import oliTot from '../../../assets/Oliver Totani.png'
import jacDys from '../../../assets/Jack Dyson.png'
export const agencyConst = {
    titleTxt: "AGENCY",
    paragraphTxt: "If you'd like to inspect this property in person, please contact an agent from McGees or RWC for further information or to arrange a private inspection.",
    agencies: [
        {
            id: "mcgees",
            agencyName: "MCGEES PROPERTY",
            agents: [
                {
                    id: "andWil",
                    name: "ANDREW WILSON",
                    phone: "+61 450 965 633",
                    photo: andWil
                },
                {
                    id: "marOno",
                    name: "MARCO ONORATO",
                    phone: "+61 481 157 645",
                    photo: marOno
                }
            ]
        },
        {
            id: "rwc",
            agencyName: "RWC ADELAIDE",
            agents: [
                {
                    id: "oliTot",
                    name: "OLIVER TOTANI",
                    phone: "+61 412 808 743",
                    photo: oliTot
                },
                {
                    id: "jacDys",
                    name: "JACK DYSON",
                    phone: "+61 448 685 593",
                    photo: jacDys
                }
            ]
        },
    ]
}
