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

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Plant Image and Player Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Plant Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={plantImage}
                  alt="Calming green plant for breathing exercises"
                  className="w-80 h-80 object-contain filter drop-shadow-lg transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute -inset-4 bg-wellness-light/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
            
            {/* Breathing Player */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md">
                <BreathingPlayer onPlay={handlePlay} onPause={handlePause} />
              </div>
            </div>
          </div>
          
          {/* Transcript Section */}
          <div className="max-w-2xl mx-auto">
            <TranscriptArea isVisible={isPlaying} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
