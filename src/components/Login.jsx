import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex h-screen items-center justify-center px-8 bg-orange-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md md:max-w-sm ">
        <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
        <h2 className="text-xl text-orange-400 mb-6 text-center">Login to your account</h2>
        <form className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <div className="text-right">
            <a href="#" className="text-orange-400 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-500 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          {"Don't have an account? "}
          <a href="#" className="text-orange-400 hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  )
}