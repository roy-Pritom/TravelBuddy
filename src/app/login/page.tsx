"use client"
import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import { loginUser } from "@/services/actions/loginUser";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { TUser } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { FieldValues} from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// login validation schema
const loginValidationSchema=z.object({
    email:z.string().email('Please enter valid email address'),
    password:z.string().min(5,'Password must be 5 character')
})

const LoginPage = () => {



    const handleLogin=async(values:FieldValues)=>{

        const toastId = toast.loading('processing...')

        try{
         
         const res=await loginUser(values);
        //  console.log(res);
         if (res?.success === true) {
            toast.success('User login successfully!!!', { id: toastId, duration: 1000 })
            storeUserInfo(res?.data?.accessToken)
        }
        else{
            toast.error(res?.message, { id: toastId, duration: 1000 })

        }
        }
        catch(error:any){
            console.log(error?.message);
            toast.error(error?.message, { id: toastId, duration: 1000 })

        }
    }

    return (
           <div>
                   <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 max-w">
                Or
                <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                    create an account
                </Link>
            </p>
        </div>
    
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <MyForm onSubmit={handleLogin} resolver={zodResolver(loginValidationSchema)}
                defaultValues={{email:"pritom@example.com",password:"pritomABC123"}}
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <div className="mt-1">
                            <MYInput
                           fullWidth={true}
                           name="email" 
                           placeholder="Enter your email address"
                            />
                             
                        </div>
                    </div>
    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1">
                        <MYInput
                           fullWidth={true}
                           name="password" 
                           placeholder="Enter your password"
                            />
                    
                        </div>
                    </div>
    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label  className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
    
                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
    
                    <div>
                        <button type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    
                            Sign in
                        </button>
                    </div>
                </MyForm>
                <div className="mt-6">
    
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-100 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
    
                    <div className="mt-6 grid grid-cols-3 gap-3">
                        <div>
                            <a href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <Image className="h-5 w-5" width={20}
                                height={20} src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                    alt="facebook"/>
                            </a>
                        </div>
                        <div>
                            <a href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <Image className="h-5 w-5" width={20} height={20} src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                                    alt="twitter"/>
                            </a>
                        </div>
                        <div>
                            <a href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <Image className="h-6 w-6" width={24}
                                height={24} src="https://www.svgrepo.com/show/506498/google.svg"
                                    alt="google"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
           </div>
    );
};

export default LoginPage;