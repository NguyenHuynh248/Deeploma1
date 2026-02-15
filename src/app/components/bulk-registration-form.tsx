import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Upload } from "lucide-react";

export function BulkRegistrationForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file to upload");
      return;
    }
    console.log("File uploaded:", selectedFile);
    // Handle bulk registration logic here
    alert(`File "${selectedFile.name}" uploaded successfully!`);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Bulk Registration</CardTitle>
        <CardDescription>Upload a file for bulk registration</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="file-upload">Upload File</Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <div className="space-y-2">
                <Label
                  htmlFor="file-upload"
                  className="cursor-pointer text-primary hover:underline"
                >
                  Click to upload
                </Label>
                <p className="text-sm text-muted-foreground">
                  or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  CSV, XLSX, or JSON files (MAX. 10MB)
                </p>
              </div>
              <input
                id="file-upload"
                type="file"
                accept=".csv,.xlsx,.xls,.json"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {selectedFile && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm">
                  <span className="font-medium">Selected file:</span> {selectedFile.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Size: {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              The uploaded file should contain the following columns:
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-2">
              <li>First Name</li>
              <li>Last Name</li>
              <li>Date of Birth</li>
              <li>Degree Type</li>
              <li>Major</li>
              <li>University</li>
              <li>Faculty/Department</li>
            </ul>
          </div>

          <Button type="submit" className="w-full" disabled={!selectedFile}>
            Upload and Process
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
