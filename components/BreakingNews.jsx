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
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const defaultImage = "/placeholder.svg?height=400&width=600";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

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
        <div className="mt-10 w-full max-w-4xl bg-black shadow-lg overflow-hidden relative">
          <div className="relative aspect-video">
            {/* Image */}
            <img
              src={image || defaultImage}
              alt="Breaking News"
              className="w-full h-full object-cover"
            />
            {/* Website Watermark */}
            <span className="absolute top-4 right-4 text-gray-300 opacity-70 text-sm">
              breakyourownnews.com
            </span>
            {/* Live Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-red-600 text-white font-bold px-6 py-2 text-xl inline-block">
                LIVE
              </span>
            </div>
            {/* Breaking News Banner */}
            <div className="absolute bottom-0 left-0 w-full mt-30px">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-2xl font-bold px-4 py-2">
                BREAKING NEWS
              </div>
              <div className="bg-white text-black py-4 px-4">
                <h2 className="text-4xl font-black">
                  {headline || "HEADLINE GOES HERE"}
                </h2>
              </div>
              {/* Lower Third */}
              <div className="flex">
                <div className="bg-black text-white px-4 py-2 text-xl">
                  {currentTime.split(":").slice(0, 2).join(":")}
                </div>
                <div className="bg-yellow-400 text-black font-bold text-xl px-4 py-2 flex-1">
                  {description || "Breaking news description here"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
