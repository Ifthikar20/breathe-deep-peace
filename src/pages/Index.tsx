import { useState } from "react";
import { BreathingPlayer } from "@/components/BreathingPlayer";
import { TranscriptArea } from "@/components/TranscriptArea";
import plantImage from "@/assets/plant-mental-health.png";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleProgressChange = (progress: number) => {
    console.log("Audio progress:", progress);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Plant Image and Player Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Plant Image - Seamless blend */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={plantImage}
                  alt="Calming green plant for breathing exercises"
                  className="w-96 h-96 object-contain transition-transform duration-500 hover:scale-105 opacity-95"
                />
              </div>
            </div>
            
            {/* Breathing Player */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md">
                <BreathingPlayer 
                  onPlay={handlePlay} 
                  onPause={handlePause}
                  onProgressChange={handleProgressChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Transcript - Bottom Right */}
      <div className="fixed bottom-6 right-6 w-80 max-h-60 z-10">
        <TranscriptArea isVisible={isPlaying} />
      </div>
    </div>
  );
};

export default Index;
