import { ScrollArea } from "@/components/ui/scroll-area";

interface TranscriptAreaProps {
  isVisible?: boolean;
}

export const TranscriptArea = ({ isVisible = false }: TranscriptAreaProps) => {
  const sampleTranscript = `
Welcome to your breathing exercise. Find a comfortable position and let your body relax.

Take a deep breath in through your nose... hold for a moment... and slowly exhale through your mouth.

Feel your chest rise and fall naturally. There's no rush, no pressure. Just breathe.

Inhale peace... exhale tension. Let each breath bring you deeper into this moment of calm.

Notice how your body feels with each breath. Allow any thoughts to drift by like clouds in the sky.

Continue breathing at your own pace. You are safe, you are present, you are enough.
  `;

  if (!isVisible) {
    return (
      <div className="p-4 bg-transparent">
        <div className="text-center text-muted-foreground/60">
          <p className="text-sm">Transcript will appear here when audio is playing</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-transparent">
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-foreground/80">
          Audio Transcript
        </h3>
        <ScrollArea className="h-40 w-full rounded-md p-3 bg-wellness-soft/20">
          <div className="text-xs text-foreground/70 leading-relaxed whitespace-pre-line">
            {sampleTranscript}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};