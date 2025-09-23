import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Wait for a while....";

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#ffc0cb] text-white flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-BLink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-white rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
