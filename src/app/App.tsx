import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RegistrationForm } from "./components/registration-form";
import { VerificationForm } from "./components/verification-form";
import { BulkRegistrationForm } from "./components/bulk-registration-form";
import { LoginForm } from "./components/login-form";
import { ClipboardList, BadgeCheck, Upload, LogIn } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("registration");

  const categories = [
    { 
      id: "registration", 
      label: "Registration",
      icon: ClipboardList
    },
    { 
      id: "verification", 
      label: "Verification",
      icon: BadgeCheck
    },
    { 
      id: "bulk", 
      label: "Bulk Registration",
      icon: Upload
    },
    { 
      id: "login", 
      label: "Login",
      icon: LogIn
    },
  ];

  const activeCategory = categories.find(cat => cat.id === activeSection);
  const ActiveIcon = activeCategory?.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Category toolbar at the top center */}
      <div className="flex justify-center items-center py-6 border-b">
        <div className="flex gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveSection(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeSection === category.id
                  ? "bg-black text-white"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row min-h-[calc(100vh-85px)]">
        {/* Left section with category title and image with half circle */}
        <div className="w-full md:w-1/2 relative overflow-hidden flex items-center justify-center">
          {/* Half black circle covering half the page */}
          <div className="absolute left-0 top-0 w-[200%] h-full bg-black rounded-r-full"></div>
          
          {/* Content */}
          <div className="relative z-10 pl-12 pr-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h2 className="text-6xl font-bold text-white leading-tight">
                  {activeCategory?.label}
                </h2>
                
                <motion.div 
                  className="w-80 h-80 flex items-center justify-center"
                  initial={{ scale: 0.8, rotate: -5 }}
                  animate={{ 
                    scale: 1, 
                    rotate: 0,
                    y: [0, -10, 0]
                  }}
                  transition={{
                    scale: { duration: 0.5 },
                    rotate: { duration: 0.5 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {ActiveIcon && (
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <ActiveIcon className="w-64 h-64 text-white stroke-[1.5]" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right section with form */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center bg-background">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {activeSection === "registration" && <RegistrationForm />}
              {activeSection === "verification" && <VerificationForm />}
              {activeSection === "bulk" && <BulkRegistrationForm />}
              {activeSection === "login" && <LoginForm />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}