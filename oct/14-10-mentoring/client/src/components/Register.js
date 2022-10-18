import { useState } from 'react'
function Register() {

    const [data, setData] = useState({
        name: '',
        email: '',
        pass: ''
    })
    return (
        <div className='bg-sky-100
         flex
         justify-center
         item-center
         hover:text-red-500
         h-[100vh]'>
            Hello register

        </div>);
}

export default Register;