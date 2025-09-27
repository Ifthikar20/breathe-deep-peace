import { Card } from "@/components/ui/card";
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
      <Card className="p-6 bg-wellness-soft/30 border-wellness-light/50">
        <div className="text-center text-muted-foreground">
          <p>Transcript will appear here when audio is playing</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-wellness-soft/30 border-wellness-light shadow-[var(--shadow-gentle)]">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-foreground">
          Audio Transcript
        </h3>
        <ScrollArea className="h-48 w-full rounded-md border border-wellness-light/50 p-4 bg-background/50">
          <div className="text-sm text-foreground leading-relaxed whitespace-pre-line">
            {sampleTranscript}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
};