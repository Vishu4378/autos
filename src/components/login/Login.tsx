"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Shield, Workflow, Clock } from "lucide-react";
import { baseBEUrl, baseURL } from "@/api/client";

const features = [
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description: "Create complex automations with our drag-and-drop interface",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute thousands of workflows in milliseconds",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption for all your data",
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Your workflows run even while you sleep",
  },
];

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  const handleGoogleLogin = () => {
    window.location.href = baseURL + "/auth/google";
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-background ">
      <div className="container mx-auto px-4 py-12 lg:py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Automate Everything
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Build Workflows
                <span className="block text-primary">Without Limits</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Connect your favorite apps and automate repetitive tasks. Save
                hours every week with powerful, no-code automation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex gap-3 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <Card className="w-full max-w-md bg-card/50 backdrop-blur-xl border-border/50 shadow-2xl shadow-primary/5">
              {isLoggedIn && user ? (
                <>
                  <CardHeader className="text-center space-y-2">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-primary">
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-display text-foreground">
                      Welcome back!
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {user?.email}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      onClick={() => (window.location.href = "/")}
                      className="w-full h-12"
                    >
                      Go to Dashboard
                    </Button>
                    <Button
                      onClick={handleSignOut}
                      variant="outline"
                      className="w-full h-12"
                    >
                      Sign Out
                    </Button>
                  </CardContent>
                </>
              ) : (
                <>
                  <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-2xl font-display text-foreground">
                      Get Started
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Sign in to start automating your workflows
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button
                      onClick={handleGoogleLogin}
                      variant="outline"
                      className="w-full h-12 gap-3 text-base hover:bg-muted/50"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Continue with Google
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border/50"></div>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="bg-card px-2 text-muted-foreground">
                          More options coming soon
                        </span>
                      </div>
                    </div>

                    <p className="text-center text-xs text-muted-foreground">
                      By continuing, you agree to our{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </CardContent>
                </>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
