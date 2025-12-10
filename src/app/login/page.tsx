"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowRight, CheckCircle2, Sparkles, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [phone, setPhone] = useState("+1 ");
  const [showPassword, setShowPassword] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value.startsWith("+1 ")) {
      return;
    }
    const numericPart = value.slice(3).replace(/\D/g, "");
    if (numericPart.length <= 10) {
      setPhone("+1 " + numericPart);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Left Side - Feature/Brand Showcase */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900 text-white p-12 flex-col justify-between">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-950 z-0 opacity-80" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] z-0" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] z-0" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-400 to-blue-500 flex items-center justify-center">
              <span className="font-bold text-white text-lg">X</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">Xecute</span>
          </div>

          <div className="space-y-6 max-w-lg mt-12">
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              Automate your workflow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">AI-powered</span> precision.
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Join thousands of service professionals who are saving 20+ hours a week by letting Xecute handle the busy work.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              {[
                "Instant AI customer responses",
                "Automated scheduling & dispatch",
                "Seamless CRM integration (ServiceTitan, Markate)",
                "24/7 Availability"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative z-10 mt-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-1 text-yellow-400 mb-3">
            {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <p className="text-lg font-medium text-slate-200 leading-relaxed mb-4">
            &ldquo;Since switching to Xecute, we&apos;ve booked 40% more jobs without hiring extra staff. It&apos;s a game changer.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300">
              RM
            </div>
            <div>
              <div className="font-bold text-white">Ryan Mitchell</div>
              <div className="text-sm text-slate-400">Owner, Mitchell Electric</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        {/* Mobile Bg Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-emerald-50/50 -z-10 lg:hidden" />

        <div className="w-full max-w-sm space-y-8">
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
            <p className="text-muted-foreground">
              Enter your credentials to access your dashboard.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">
                Phone Number
              </label>
              <Input
                id="phone"
                placeholder="+1 (555) 000-0000"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                className="h-11 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                  Password
                </label>
                <Link href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-500">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="h-11 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Link href="/dashboard" className="block w-full">
              <Button className="w-full h-11 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>



          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-bold text-emerald-600 hover:text-emerald-500 hover:underline">
              Sign up for free
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 text-xs text-muted-foreground text-center w-full">
          &copy; 2025 Xecute Technologies Inc.
        </div>
      </div>
    </div>
  );
}
