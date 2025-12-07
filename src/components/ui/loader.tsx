import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function Loader() {
  return (
    <>
      {createPortal(
        <div className="fixed backdrop:blur-2xl bg-black/40 h-dvh w-dvw flex justify-center items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-1 bg-white rounded-full w-fit"
          >
            <LoaderCircle className="animate-spin text-primary" />
          </motion.div>
        </div>,
        document.body
      )}
    </>
  );
}
