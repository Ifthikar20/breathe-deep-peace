import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface BreathingPlayerProps {
  onPlay?: () => void;
  onPause?: () => void;
  onProgressChange?: (progress: number) => void;
}

export const BreathingPlayer = ({ onPlay, onPause, onProgressChange }: BreathingPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([25]); // 25% progress as example
  const duration = 300; // 5 minutes in seconds

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      onPause?.();
    } else {
      setIsPlaying(true);
      onPlay?.();
    }
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value);
    onProgressChange?.(value[0]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTime = (progress[0] / 100) * duration;

  return (
    <div className="p-8 bg-transparent">
      <div className="flex flex-col items-center space-y-8">
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
            hover:scale-105
          `}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8 ml-1" />
          )}
        </Button>

        {/* Audio Timeline */}
        <div className="w-full max-w-md space-y-3">
          <Slider
            value={progress}
            onValueChange={handleProgressChange}
            max={100}
            step={1}
            className="w-full"
          />
          
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};