import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BreathingPlayerProps {
  onPlay?: () => void;
  onPause?: () => void;
}

export const BreathingPlayer = ({ onPlay, onPause }: BreathingPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      onPause?.();
    } else {
      setIsPlaying(true);
      onPlay?.();
    }
  };

  return (
    <Card className="p-8 bg-wellness-soft/50 border-wellness-light shadow-[var(--shadow-gentle)] backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            Guided Breathing Exercise
          </h2>
          <p className="text-muted-foreground">
            Find your calm with gentle breathing techniques
          </p>
        </div>
        
        <Button
          onClick={handleTogglePlay}
          size="lg"
          className={`
            w-20 h-20 rounded-full bg-wellness text-white 
            hover:bg-wellness/90 transition-all duration-300 
            shadow-[var(--shadow-gentle)] hover:shadow-[var(--shadow-breathing)]
            ${isPlaying ? 'animate-breathe' : 'hover:scale-105'}
          `}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8 ml-1" />
          )}
        </Button>
        
        <div className="text-center space-y-2">
          <div className="text-sm text-muted-foreground">
            Duration: 5 minutes
          </div>
          {isPlaying && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-wellness rounded-full animate-pulse-gentle"></div>
              <span className="text-sm text-wellness">Playing...</span>
              <div className="w-2 h-2 bg-wellness rounded-full animate-pulse-gentle"></div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};