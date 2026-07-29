import type { IconType } from "react-icons";
import { SiBlender, SiClaude, SiGooglegemini, SiUnrealengine } from "react-icons/si";
import { Bot, Sparkles, Scissors } from "lucide-react";

export type Tool = {
  name: string;
  /** Brand icon when available */
  Icon?: IconType | typeof Bot;
  /** Two-letter monogram used for Adobe-style marks */
  mark?: string;
};

export const tools: Tool[] = [
  { name: "Blender", Icon: SiBlender },
  { name: "Photoshop", mark: "Ps" },
  { name: "Illustrator", mark: "Ai" },
  { name: "Premiere Pro", mark: "Pr" },
  { name: "After Effects", mark: "Ae" },
  { name: "ChatGPT", Icon: Bot },
  { name: "Gemini", Icon: SiGooglegemini },
  { name: "Claude", Icon: SiClaude },
  { name: "Unreal Engine", Icon: SiUnrealengine },
  { name: "CapCut", Icon: Scissors },
  { name: "Higgsfield", Icon: Sparkles },
];
