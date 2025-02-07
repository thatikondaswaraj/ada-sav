import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Hourglass, XCircle } from "lucide-react";


const getStatusIcon = (progress: number) => {
  const commonProps = { size: 24, className: "transition-all" };

  if (progress === 100)
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <CheckCircle {...commonProps} className="text-green-500" />
      </motion.div>
    );

  if (progress > 0)
    return (
      <motion.div
        animate={{ rotate: [ 180, -180  ] }}
        transition={{ repeat: Infinity,damping: 300, type: 'spring', duration: 1, ease: "easeInOut" }}
      >
        <Hourglass {...commonProps} fill="0.7" className="text-yellow-500" />
      </motion.div>
    );

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <XCircle {...commonProps} className="text-red-500" />
    </motion.div>
  );
};

const ProcessUrlList: React.FC = (props: any) => {

  return (
    <div className="max-w-2xl mx-auto p-1 bg-gray-900 rounded-2xl shadow-xl text-white">
      <h2 className="text-xl font-semibold p-4">Processing URLs</h2>
      <ul className="space-y-4 p-4 overflow-y-auto h-[300px] scrollbar-thin">
        {props.urlsList.map(({ id, url, progress }: any) => (
          <li key={id} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg shadow-md">
            {getStatusIcon(progress)}
            <div className="flex-grow">
              <p className="text-sm truncate max-w-xs">{url}</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <motion.div
                  className="h-2 bg-blue-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                ></motion.div>
              </div>
            </div>
            <span className="text-sm">{progress}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProcessUrlList;
