import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle sign up logic here
    try {
    const response = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Account created successfully!");
      // Redirect to login or home page
    } else {
      alert(data.message || "Signup failed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred during signup");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-atlantis-blue-50 to-atlantis-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <Link to="/" className="text-3xl font-bold text-atlantis-blue-700 mb-4 inline-block">
              Atlantis
            </Link>
            <CardTitle className="text-2xl font-bold text-gray-900">Create account</CardTitle>
            <CardDescription className="text-gray-600">
              Join Atlantis and discover our premium products
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="h-12 border-gray-200 focus:border-atlantis-blue-500 focus:ring-atlantis-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="h-12 border-gray-200 focus:border-atlantis-blue-500 focus:ring-atlantis-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 border-gray-200 focus:border-atlantis-blue-500 focus:ring-atlantis-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="h-12 border-gray-200 focus:border-atlantis-blue-500 focus:ring-atlantis-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="h-12 border-gray-200 focus:border-atlantis-blue-500 focus:ring-atlantis-blue-500"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-atlantis-blue-600 hover:bg-atlantis-blue-700 text-white font-medium"
              >
                Create Account
              </Button>
            </form>
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-atlantis-blue-600 hover:text-atlantis-blue-800 font-medium">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
