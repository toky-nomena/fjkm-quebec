// components/Activity.tsx
export interface Activity {
  id: string;
  date: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location?: string;
  speakers?: string[];
}
