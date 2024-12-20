//import React from 'react'

export default function EmpSal() {
    const empData = [
      { Studentname: "Ramu", Studentemail: "ramu@gmail.com", Subject: "PYTHON", marks: 45 },
      { Studentname: "Raju", Studentemail: "raju@gmail.com", Subject: "JAVA", marks: 35 },
      { Studentname: "Ramya", Studentemail: "ramya@gmail.com", Subject: "C++", marks: 25 },
      { Studentname: "John", Studentemail: "john@gmail.com", Subject: "ML", marks: 65 },
      { Studentname: "Abdul", Studentemail: "abdul@gmail.com", Subject: "CLOUD", marks: 55 },
    
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Studentname</th>
              <th scope="col">Studentemail</th>
              <th scope="col">Subject</th>
              <th scope="col">marks</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.Studentname}</td>
                    <td>{x.Studentemail}</td>
                    <td>{x.Subject}</td>
                    <td>{x.marks}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }