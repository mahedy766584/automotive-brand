import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";

const SignUp = () => {

    const { createUser, googleLogin } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.image.value;
        const name = form.name.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const number = form.number.value;
        console.log(photo, name, userName, email, password, number)

        // const userData = {photo, name, userName, email, password, number}

        if (password.length < 6) {
            Swal.fire({ title: "Sorry!", text: "Your password must be six characters!", icon: "error" });
            return;
        } else if (!/[!@#$%^&*/]/.test(password)) {
            Swal.fire({ title: "Sorry!", text: "Your password must be any special characters!", icon: "error" });
            return;
        } else if (!/[0-1]/.test(password)) {
            Swal.fire({ title: "Sorry!", text: "Your password must be any number!", icon: "error" });
            return;
        } else if (!/[A-Z]/.test(password)) {
            Swal.fire({ title: "Sorry!", text: "Your password must be any capital letter!", icon: "error" });
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                //update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                    userName: userName,
                    phoneNumber: number
                })
                .then(() =>{
                    console.log('Update Profile')
                })
                .catch(error =>{
                    console.log(error.message)
                })

                Swal.fire({
                    title: "Good job!",
                    text: "You Sign Up successful!",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error.message)
                Swal.fire({
                    title: "Sorry!",
                    text: `${error.message}`,
                    icon: "error"
                });
            })
        form.reset("")
    }

    const [showPss, setShowPass] = useState(false)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Good job!",
                    text: "You Sign Up successful with google!",
                    icon: "success"
                });
            })
            .then(error => {
                console.log(error.message)
                Swal.fire({
                    title: "Sorry!",
                    text: `${error.message}`,
                    icon: "success"
                });
            })
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="mt-14 max-w-xl mx-auto">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                    <div
                        className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-[#000C21] to-[#000C21] bg-clip-border shadow-gray-900/20">
                        <h3 className="block font-goldman text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Sign Up Now
                        </h3>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div>
                            <div className="flex flex-col gap-4 p-6">
                                <div className="flex w-full items-center gap-4">
                                    <div className="space-y-4 w-full">
                                        <div className="relative h-11 w-full">
                                            <input
                                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                name="image"
                                                required
                                                placeholder=" " />
                                            <label
                                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Photo URL
                                            </label>
                                        </div>
                                        <div className="relative h-11 w-full ">
                                            <input
                                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                type="text"
                                                name="name"
                                                required
                                                placeholder=" " />
                                            <label
                                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Name
                                            </label>
                                        </div>
                                        <div className="relative h-11 w-full ">
                                            <input
                                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                type="text"
                                                name="userName"
                                                required
                                                placeholder=" " />
                                            <label
                                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                User Name
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full space-y-4">
                                        <div className="relative h-11 w-full ">
                                            <input
                                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder=" " />
                                            <label
                                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Email
                                            </label>
                                        </div>
                                        <div className="relative h-11 w-full ">
                                            <div className="relative flex justify-center items-center">
                                                <input
                                                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                    type={showPss ? "text" : "password"}
                                                    name="password"
                                                    required
                                                    placeholder=" " />
                                                <div onClick={() => setShowPass(!showPss)}
                                                    className="absolute  right-3 ">
                                                    <span>
                                                        {
                                                            showPss ? <FaRegEyeSlash /> :
                                                                <FaRegEye />
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            <label
                                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Password
                                            </label>
                                        </div>
                                        <div className="relative h-11 w-full">
                                            <input
                                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                type="text"
                                                name="number"
                                                required
                                                placeholder=" " />
                                            <babel
                                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Phone
                                            </babel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <input
                                className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#000C21] to-[#000C21] py-3 px-6 text-center align-middle font-poppins text-md cursor-pointer font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className="pb-4 pl-7">
                        <h1 className="text-gray-700 font-poppins font-medium">All ready have a account? <Link className="text-blue-600" to={'/signIn'}>Please Sign In</Link></h1>
                    </div>
                    <div className="pb-5 w-full px-8 justify-center items-center">
                        <div className="flex pb-5 w-full px-4 justify-center items-center gap-3">
                            <div className="w-full h-0.5 bg-black rounded-full" />
                            <h1 className="text-black font-medium font-poppins">Or</h1>
                            <div className="w-full h-0.5 bg-black rounded-full" />
                        </div>
                        <div className="text-center">
                            <button onClick={handleGoogleLogin}
                                className="border w-full py-1 flex justify-center items-center border-[#000C21] rounded-full"><FcGoogle className="text-4xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;