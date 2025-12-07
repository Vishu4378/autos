"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { X, Upload } from "lucide-react";
import uploadApi from "@/api/upload.api";
import Loader from "../ui/loader";

interface ProfilePictureEditorProps {
  image?: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  onImageChange?: (image: string | null) => void;
  className?: string;
}

const sizeStyles = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

export function ProfilePictureEditor({
  image,
  name,
  size = "lg",
  onImageChange,
  className,
}: ProfilePictureEditorProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [uplaodLoading, setUploadLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const hasImage = !!image;

  const handleUpload = async (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => onImageChange?.(e.target?.result as string);
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("bucketName", "profiles");

      setUploadLoading(true);
      await uploadApi.uploadImage(formData);
      setUploadLoading(false);
    }
  };

  const handleRemove = () => {
    onImageChange?.(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <>
      {uplaodLoading && <Loader />}
      <div
        className={cn("relative group", className)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Main Avatar */}
        <Avatar
          className={cn(
            sizeStyles[size],
            "border-4 border-background/50 shadow-lg hover:scale-[1.02] transition-all duration-300"
          )}
        >
          <AvatarImage src={image} alt={`${name}'s profile`} />
          <AvatarFallback className="bg-linear-to-br from-primary/80 to-secondary/80 text-primary-foreground font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>

        {/* Controls Container - Smaller & Smooth */}
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-0 right-0 flex  p-0.5 bg-background/95 backdrop-blur-sm rounded-full border border-background/60 shadow-md"
          >
            {hasImage ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-destructive/20 hover:text-destructive shadow-sm border border-transparent"
                  onClick={handleRemove}
                >
                  <X className="h-3 w-3" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="button"
                  variant={hasImage ? "outline" : "default"}
                  size="sm"
                  className={cn(
                    "h-6 w-6 p-0 shadow-sm border",
                    hasImage
                      ? "border-ring/50 text-foreground/80 hover:bg-accent hover:border-ring"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  )}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-3 w-3" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}

        <Input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleUpload(file);
          }}
        />
      </div>
    </>
  );
}
