import React, { useState, useEffect } from 'react'
import axios from 'axios'


const AllStudent = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    const getStudents = () => {
      axios.get('http://localhost:8079/student/')
        .then((res) => {
          setStudents(res.data)
        }).catch((err) => {
          alert('error', err.message)
        })
    }
    getStudents()
  }, []) //[ ] wala danne options
  return (
    <div>
      <h1>All Students</h1>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Age: {student.age}</p>
          <p>Gender: {student.gender}</p>
          <p>Address: {student.address}</p>
          <hr />
        </div>
      ))}

    </div>
  )
}

export default AllStudent