import AccountLogo from "../assets/account.svg";
import ManageLogo from "../assets/manage.svg";
import PhotosnapLogo from "../assets/photosnap.svg";
import FaceitLogo from "../assets/faceit.svg";
import InsureLogo from "../assets/insure.svg";
import MyhomeLogo from "../assets/myhome.svg";

const JOB_DATA = {
    Account: {
        id: 1,
        companyLogo: AccountLogo,
        companyName: "Account",
        filters: ["NEW!", "FEATURED"],
        jobRole: "Junior Frontend Developer",
        jobInfo: ["1d ago", "Full Time", "IND only"],
        skills: ["Frontend", "Junior", "React", "Sass", "JavaScript"]
    },
    Manage: {
        id: 2,
        companyLogo: ManageLogo,
        companyName: "Manage",
        filters: ["NEW!"],
        jobRole: "Fullstack Developer",
        jobInfo: ["1d ago", "Part Time", "Remote"],
        skills: ["Fullstack", "Midweight", "Python", "React"]
    },
    photosnap:{
        id: 3,
        companyLogo: PhotosnapLogo,
        companyName: "Photosnap",
        filters: ["NEW!", "FEATURED"],
        jobRole: "Senior Frontend Developer",
        jobInfo: ["1d ago", "Full Time", "USA only"],
        skills: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"]
    },
    faceit:{
        id: 4,
        companyLogo: FaceitLogo,
        companyName: "Face It!",
        jobRole: "Junior Backend Developer",
        jobInfo: ["2w ago", "Full Time", "UK only"],
        skills: ["Backend", "Junior", "ROR"]
    },
    insure:{
        id: 5,
        companyLogo: InsureLogo,
        companyName: "Insure",
        jobRole: "Junior Frontend Developer",
        jobInfo: ["2w ago", "Full Time", "USA only"],
        skills: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"]
    },
    myhome:{
        id: 6,
        companyLogo: MyhomeLogo,
        companyName: "MyHome",
        jobRole: "Junior Frontend Developer",
        jobInfo: ["5d ago", "Contract", "USA only"],
        skills: ["Frontend", "Junior", "CSS", "JavaScript"]
    }
}

export default JOB_DATA;
