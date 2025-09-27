import { useState } from "react";
import { BreathingPlayer } from "@/components/BreathingPlayer";
import { BreathingInfo } from "@/components/BreathingInfo";
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Plant Image and Player Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Plant Image - Larger and seamless */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={plantImage}
                  alt="Calming green plant for breathing exercises"
                  className="w-[28rem] h-[28rem] object-contain transition-transform duration-500 hover:scale-105 opacity-95"
                />
              </div>
            </div>
            
            {/* Player and Info Section */}
            <div className="space-y-8">
              <BreathingPlayer 
                onPlay={handlePlay} 
                onPause={handlePause}
                onProgressChange={handleProgressChange}
              />
              
              <BreathingInfo />
            </div>
          </div>
          
          {/* Transcript Section - Below player */}
          <div className="max-w-2xl mx-auto">
            <TranscriptArea isVisible={isPlaying} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
