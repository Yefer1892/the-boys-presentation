import React from "react";
import '../stylesheets/student.css';

function Student(props) {
  return (
    <div className="container-student">
      <div className='container-text-student'>
        <strong><p className='name-student'>{props.name}</p></strong>
        <p className='age-student'>{props.age}</p>
        <p className='address-student'>{props.address}</p>
        <p className='description-student'>{props.description}</p>
      </div>
      <img 
      className='imagen-student' 
      src={require(`../Images/foto ${props.image}.jpeg`)}
      alt='foto de paula' />
    </div>
  );
}



export default Student;