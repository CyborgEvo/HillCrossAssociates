const whoWeAreArr = [{
    paragragh1: "Hillcross Associates legal practiocioners is a spin off of the law firm of Iroaganachi & co. established in 2019. We have within this time established a reputation for diligent and cost effective delivery of solutions to the legal challenges of our clients.",
    paragragh2: "Our firm is a two man partnership with associates. We work for public and private companies, trans-national companies, foreign law firms and ministries, departments & agencies of the Federal Republic of Nigeria."
}]

const whyUS = "We have a reputation for diligence, integrity and cost effectiveness";

const whatWeDo = ["Criminal Practice", "Corporate and Commercial Practice", "Intellectual Property and Trademarks", "Mergers and Acquisitions", "Transportation", "Property", "Dispute Resolution", "Regulatory and Advisory Services"];

const Partner1 = [{
    image : "images/Passport photo.png",
    Name: "Iroaganachi E.L esq.",
    about1: "LLB, University of Ife (now OAU) 1982; BL, 1983.",
    about2: partner1NewAge() + " years post call experience in all areas of legal practice in Nigeria."
}]
const Partner2 = [{
    image : "images/Passport photo.png",
    Name : "Iroaganachi C.R",
    about1 : "LLB, University of Lagos 2018; BL, 2019.",
    about2 : partner2NewAge() + " years Lorem ipsum dolor sit amet consectetur adipisicing elit"
}]

module.exports = {
    whoWeAreArr,
    whyUS,
    whatWeDo,
    Partner1,
    Partner2
}





function partner1NewAge() {
    const d = new Date().getFullYear();
    let yearsOfExperience = d - 1983;
    return yearsOfExperience;
}


function partner2NewAge(){
    const d = new Date().getFullYear();
    let yearsOfExperience = d - 2019;
    return yearsOfExperience;
}