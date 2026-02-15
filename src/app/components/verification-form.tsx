import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function VerificationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    degreeType: "",
    major: "",
    university: "",
    faculty: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verification submitted:", formData);
    // Handle verification logic here
    alert("Verification request submitted successfully!");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Verification</CardTitle>
        <CardDescription>Verify your academic credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="verify-firstName">First Name</Label>
              <Input
                id="verify-firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="verify-lastName">Last Name</Label>
              <Input
                id="verify-lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="verify-dateOfBirth">Date of Birth</Label>
            <Input
              id="verify-dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="verify-degreeType">Degree Type</Label>
            <Select
              value={formData.degreeType}
              onValueChange={(value) => setFormData({ ...formData, degreeType: value })}
            >
              <SelectTrigger id="verify-degreeType">
                <SelectValue placeholder="Select degree type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="associate">Associate Degree</SelectItem>
                <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                <SelectItem value="master">Master's Degree</SelectItem>
                <SelectItem value="doctoral">Doctoral Degree</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="verify-major">Major</Label>
            <Input
              id="verify-major"
              placeholder="Enter your major"
              value={formData.major}
              onChange={(e) => setFormData({ ...formData, major: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="verify-university">University</Label>
            <Input
              id="verify-university"
              placeholder="Enter university name"
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="verify-faculty">Faculty/Department</Label>
            <Input
              id="verify-faculty"
              placeholder="Enter faculty or department"
              value={formData.faculty}
              onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Verify Information
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
