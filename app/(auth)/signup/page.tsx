import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const signup = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-light text-gray-800 mb-2">Create Account</h1>
                <p className="text-gray-600">สร้างแอคเค้าเพื่อจองบ้าน</p>
            </div>
            
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</Label>
                        <Input type="text" id="firstName" name="firstName" required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition"/>
                    </div>
                    <div>
                        <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</Label>
                        <Input type="text" id="lastName" name="lastName" required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition"/>
                    </div>
                </div>
                
                <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</Label>
                    <Input type="email" id="email" name="email" required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition"/>
                </div>
                
                <div>
                    <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</Label>
                    <Input type="password" id="password" name="password" required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition"/>
                    <p className="mt-1 text-xs text-gray-500">At least 8 characters with 1 uppercase and 1 number</p>
                </div>
                
                <div>
                    <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</Label>
                    <Input type="password" id="confirmPassword" name="confirmPassword" required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition"/>
                </div>
                
                <div className="flex items-center">
                    <Input id="terms" name="terms" type="checkbox" 
                        className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-gray-300 rounded"/>
                    <Label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the <a href="#" className="text-sky-500 hover:text-sky-600">Terms</a> and <a href="#" className="text-sky-500 hover:text-sky-600">Privacy Policy</a>
                    </Label>
                </div>
                    <button type="submit" 
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-medium transition shadow-md mt-4">
                        Create Account
                    </button>
                
                <div className="text-center text-sm text-gray-600">
                    Already have an account? 
                    <a href="/signin" className="text-sky-500 hover:text-sky-600 font-medium">Sign in</a>
                </div>
            </form>
        </div>
    </section>
  )
}
export default signup