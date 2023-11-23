import React from "react";
import ProfileLeftSection from "./ProfileLeftSection";
import ProfileRightSection from "./ProfileRightSection";
import PersonalDetails from "./PersonalDetails";
import PersonalSkillsExperience from "./PersonalSkillsExperience";
import CowndownSection from "./CowndownSection";
import ProjectWork from "./ProjectWork";
import Partners from "./Partners";
import ContactPage from "./ContactPage";
import Footer from "./Footer";

const PersonalInformation = () => {
  return (
    <>
      <main className="container">
        <section className="profile">
          <ProfileLeftSection />
          <ProfileRightSection />
        </section>
        <PersonalDetails />
        <PersonalSkillsExperience />
        {/* <CowndownSection /> */}
        <ProjectWork />
        {/* <Partners /> */}
        <ContactPage />
      </main>
      <Footer />
    </>
  );
};

export default PersonalInformation;
