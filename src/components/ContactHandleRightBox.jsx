import React from "react";
import FormFields from "./FormFields";

const ContactHandleRightBox = () => {
  return (
    <div className="right">
      <form action="">
        <div className="form_group">
          <FormFields name="Name" type="text" />
          <FormFields name="Email" type="email" />
        </div>
        <div className="form_group textarea_wrapper">
          <div>
            <label htmlFor="">Message </label>
            <textarea name="" id="" cols="30" rows="6"></textarea>
          </div>
        </div>
        <button type="submit" onClick={(e)=>e.preventDefault()}>Submit Now </button>
      </form>
    </div>
  );
};

export default ContactHandleRightBox;
