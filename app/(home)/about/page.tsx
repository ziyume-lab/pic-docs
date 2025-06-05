import { cn } from "~/lib/utils";
import { DotPattern } from "~/components/magicui/dot-pattern";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col justify-center text-center">
      还没想好写些啥。
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "flex-1"
        )}
      />
    </div>
  );
}
