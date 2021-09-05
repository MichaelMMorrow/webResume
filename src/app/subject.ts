
export interface Skill {
    title: string;
    timeExp: string;
    detail: string;
}

export interface Subject {
    name : string;
    title: string;
    summary: {
        headline: string;
        points: {
            summary: string;
            detail: string;
        }[];
    };
    address : {
        city: string;
        province: string;
        country: string;
        phone: string;
        email: string;
        links: {
            url: string;
            name: string;
        }[];
    };
    skills: Skill[];
    education: {
        certTitle: string;
        schoolName: string;
        startDate: string;
        endDate: string;
        url: string;
    }[];
    workExp: {
        companyName: string;
        jobTitle: string;
        summary: string;
        startDate: string;
        endDate: string;
        url: string;
    }[];
}
