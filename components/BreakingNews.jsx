import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, Camera, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const BreakingNews = () => {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const defaultImage = "/placeholder.svg?height=400&width=600";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-12"
      >
        Breaking News Creator
      </motion.h1>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-200">
                Create Your News
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Headline
                </label>
                <Input
                  type="text"
                  placeholder="Enter the headline..."
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Description
                </label>
                <Textarea
                  placeholder="Enter the description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white h-32"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Upload Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  ref={fileInputRef}
                />
                <Button
                  onClick={() => fileInputRef.current.click()}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white"
                >
                  <Upload className="mr-2 h-4 w-4" /> Choose Image
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-2 rounded-lg hover:from-red-600 hover:to-yellow-600 transition-all duration-300">
                Generate Breaking News
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Breaking News Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-1/2"
        >
          <Card className="bg-black border-gray-700 overflow-hidden">
            <div className="relative">
              <img
                src={image || defaultImage}
                alt="Breaking News"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm animate-pulse">
                  LIVE
                </span>
                <span className="bg-gray-800 text-white opacity-75 px-2 py-1 rounded-full text-xs flex items-center">
                  <Camera className="w-3 h-3 mr-1" /> ON AIR
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xl font-bold px-4 py-2 rounded-t-lg inline-block">
                Breaking News
              </div>
              <h2 className="text-3xl font-extrabold text-white mt-4 leading-tight">
                {headline || "Headline Goes Here"}
              </h2>
              <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                {description ||
                  "Description goes here. Add some text to make it look realistic!"}
              </p>
            </CardContent>
            <CardFooter className="bg-yellow-400 text-black font-bold text-sm px-4 py-2 flex justify-between items-center">
              <span>
                {new Date().toLocaleTimeString()} - This is breaking news
              </span>
              <span className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-1" /> Developing Story
              </span>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BreakingNews;
