import React from "react";

const Instructor = ({ name, email, dob, linkedin, gender, bio }) => {
  return (
    <div>
      <h3>{`${name.first} ${name.last}`}({ dob })</h3>
      <p>Gender: { gender }</p>
      <p>Email: <a href={`mailto:${email}`}>{ email }</a> | <a href={linkedin}>LinkedIn</a> </p>
      <p>{ bio }</p>
    </div>
  );
};
export default Instructor;
