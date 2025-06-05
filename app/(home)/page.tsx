import { TypingAnimation } from "~/components/magicui/typing-animation";
import { SparklesText } from "~/components/magicui/sparkles-text";
import { DotPattern } from "~/components/magicui/dot-pattern";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col justify-center text-center">
      <SparklesText className="mt-16" text="PicImpact" />
      <TypingAnimation>自部署的摄影作品网站，支持多种功能特性。PicImpact，分享你和世界！</TypingAnimation>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "flex-1"
        )}
      />
    </div>
  );
}
