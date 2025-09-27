interface BreathingInfoProps {
  className?: string;
}

export const BreathingInfo = ({ className = "" }: BreathingInfoProps) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Main Description */}
      <div className="space-y-3">
        <p className="text-foreground/80 leading-relaxed">
          Slow, relaxed breaths can always serve as your anchor to the present moment. 
          Try this paced breathing exercise whenever emotions are running high.
        </p>
      </div>
      
      {/* Exercise Details */}
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Duration</h4>
          <p className="text-muted-foreground">5 minutes of guided breathing</p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Who Benefits</h4>
          <p className="text-muted-foreground">
            Anyone experiencing stress, anxiety, or needing a moment of calm
          </p>
        </div>
      </div>
      
      {/* Additional Benefits */}
      <div className="space-y-2">
        <h4 className="font-medium text-foreground text-sm">Benefits</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Reduces stress and anxiety</li>
          <li>• Improves focus and mental clarity</li>
          <li>• Promotes relaxation and emotional balance</li>
        </ul>
      </div>
    </div>
  );
};