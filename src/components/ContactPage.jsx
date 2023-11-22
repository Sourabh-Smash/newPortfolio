import React from "react";
import ContactHandleLeftBox from "./ContactHandleLeftBox";
import ContactHandleRightBox from "./ContactHandleRightBox";

const ContactPage = () => {
  return (
    <section className="contact">
      <h1 className="section_heading">Contact US</h1>
      <div className="wrapper">
        <ContactHandleLeftBox />
        <ContactHandleRightBox/>
      </div>
    </section>
  );
};

export default ContactPage;
