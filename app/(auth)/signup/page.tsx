"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DebugClerkEnv from "./DebugClerkEnv"; // optional, for env debug

const Signup = () => {
  function getCircularReplacer() {
    const seen = new WeakSet();
    return (key: string, value: unknown) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) return "[Circular]";
        seen.add(value);
      }
      return value;
    };
  }

  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [info, setInfo] = useState<string | null>(null);
  const [rawResult, setRawResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo(null);
    setRawResult(null);
    if (!isLoaded) {
      setError("Auth not loaded yet. Try again in a moment.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const result = await signUp.create({
        firstName: form.firstName,
        lastName: form.lastName,
        emailAddress: form.email,
        password: form.password,
      });

      setRawResult(result);
      console.log("signUp.create result:", result);

      if (result.status === "complete") {
        // Successful — set active session and redirect
        if (result.createdSessionId) {
          await setActive({ session: result.createdSessionId });
          router.push("/");
        } else {
          setInfo(
            "Signup completed but no session was returned. Check Clerk dashboard."
          );
        }
      } else {
        setInfo(
          `Signup not complete (status=${result.status}). Check email for verification or see console for details.`
        );
      }
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(
        err?.errors?.[0]?.message ||
          err?.message ||
          "Sign up failed. Check console/network for details."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <section className="min-h-screen flex items-center justify-center pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light text-gray-800 mb-2">
              Create Account
            </h1>
            <p className="text-gray-600">สร้างแอคเค้าเพื่อเริ่มต้นจองบ้าน</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {info && <p className="text-sky-600 text-sm">{info}</p>}
          {rawResult && (
            <pre className="text-xs bg-gray-100 p-2 rounded mt-2 overflow-auto max-h-64">
              {JSON.stringify(rawResult, getCircularReplacer(), 2)}
            </pre>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-medium transition shadow-md mt-4"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </Button>
        </div>
      </section>
    </form>
  );
};

export default Signup;
