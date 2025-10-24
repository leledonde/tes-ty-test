"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Chromium, Facebook } from "lucide-react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        console.log("Sign in requires additional steps:", result);
        setError("Sign in requires extra verification (check email).");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.errors?.[0]?.message || "Sign in failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">ลงชื่อเข้าใช้พูลวิลล่า</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-medium transition shadow-md"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="text-center text-sm text-gray-600">
            Don’t have an account?
            <a
              href="/signup"
              className="text-sky-500 hover:text-sky-600 font-medium"
            >
              {" "}
              Sign up
            </a>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant={"outline"}>
              <Chromium className="w-5 h-5" />
              <span>Google</span>
            </Button>
            <Button variant={"outline"}>
              <Facebook className="w-5 h-5" />
              Facebook
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
