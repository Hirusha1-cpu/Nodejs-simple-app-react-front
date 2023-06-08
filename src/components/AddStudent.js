import React, { useState } from 'react';
import axios from 'axios'

const AddStudent = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')

    function sendData(e) {
        e.preventDefault()
        const newStudent = {
            name,
            age,
            gender,
            address
        }

        //new student object eka frontend eke idan backend server ekata http request ekak widgata pass wenwa
        axios.post('http://localhost:8079/student/add', newStudent)
            .then(() => {
                alert('student added successfully')
                setName('')
                setAge('')
                setAddress('')
                setGender('')
            }).catch((err) => {
                alert(err)
            })

        // Clear the input fields
        e.target.reset();
    }





    return (
        <div className='container'>
            <form className="row g-3" onSubmit={sendData}>
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Student Name</label>
                    <input type="text" placeholder='enter name' className="form-control" id="inputEmail4"
                        onChange={(e) => {
                            setName(e.target.value)
                        }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAge" className="form-label">Student Age</label>
                    <input type="text" placeholder='enter age' className="form-control" id="inputAge"
                        onChange={(e) => {
                            setAge(e.target.value)
                        }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputGender" className="form-label">Student Gender</label>
                    <input type="text" placeholder='enter gender' className="form-control" id="inputGender"
                        onChange={(e) => {
                            setGender(e.target.value)
                        }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAddress" className="form-label">Student Address</label>
                    <input type="text" placeholder='enter Address' className="form-control" id="inputAddress"
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }} />
                </div>


                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;
