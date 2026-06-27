/**
 * Team portrait wall — team imagery
 */

import {
  ScrollPortraitWall,
  type Speaker,
} from "@/components/ui/scroll-portrait-wall";
import { SplitSectionTitle } from "@/components/ui/section-chapter";
import { TEAM_WALL_IMAGES } from "@/data/hero-images";

const teamWall: Speaker[] = [
  {
    name: "Collaborate",
    role: "Cross-functional teams",
    src: TEAM_WALL_IMAGES.collaborate,
  },
  {
    name: "Strategize",
    role: "Workshops & planning",
    src: TEAM_WALL_IMAGES.strategy,
  },
  {
    name: "Deliver",
    role: "Hands-on execution",
    src: TEAM_WALL_IMAGES.craft,
  },
  {
    name: "Grow",
    role: "Scale together",
    src: TEAM_WALL_IMAGES.grow,
  },
];

export default function TeamPortraitWall() {
  return (
    <ScrollPortraitWall
      title={
        <SplitSectionTitle
          title="The team"
          accentHalf="second"
          className="text-5xl font-semibold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
        />
      }
      date="Marvelbytes · Business Solutions"
      speakers={teamWall}
      columns={4}
      showCaptions={false}
      className="border-y border-white/10"
    />
  );
}
