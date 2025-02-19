import { Branch } from "../branches/branches";

// components/Activity.tsx
export interface EventDetails {
  id: string;
  date: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location?: string;
  speakers?: string[];
  branch: Branch;
}
