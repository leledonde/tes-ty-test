import * as Icon from 'react-feather'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const signin = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-light text-gray-800 mb-2">Welcome Back</h1>
                <p className="text-gray-600">ลงชื่อเข้าใช้พูลวิลล่า</p>
            </div>
            
            <form className="space-y-6">
                <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</Label>
                    <Input type="email" id="email" name="email" required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition" />
                </div>
                
                <div>
                    <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</Label>
                    <Input type="password" id="password" name="password" required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition" />
                    <div className="flex justify-end mt-2">
                        <a href="#" className="text-sm text-sky-500 hover:text-sky-600">Forgot password?</a>
                    </div>
                </div>
                
                <button type="submit" 
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-medium transition shadow-md">
                    Sign In
                </button>
                
                <div className="text-center text-sm text-gray-600">
                    Dont have an account? 
                    <a href="/signup" className="text-sky-500 hover:text-sky-600 font-medium">  Sign up</a>
                </div>
                
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <button type="button" 
                        className="flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition">
                        <Icon.GitHub data-feather="github" className="w-5 h-5" />
                        <span>GitHub</span>
                    </button>
                    <button type="button" 
                        className="flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition">
                        <Icon.Facebook className="w-5 h-5" />
                        <span>Facebook</span>
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}
export default signin