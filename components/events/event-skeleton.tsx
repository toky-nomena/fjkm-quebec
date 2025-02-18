export const EventItemSkeleton = () => {
  return (
    <div
      className="py-4 bg-white rounded-lg border border-gray-200 shadow-sm animate-pulse dark:bg-gray-900 dark:border-gray-700"
      role="status"
      aria-label="Loading event details"
    >
      <div className="flex gap-4 items-center px-2">
        <div
          className="flex flex-col items-center justify-center min-w-[60px] text-center"
          aria-hidden="true"
        >
          <div className="mb-2 w-8 h-4 bg-gray-300 rounded dark:bg-gray-700"></div>
          <div className="w-10 h-6 bg-gray-300 rounded dark:bg-gray-700"></div>
        </div>
        <div className="flex-1 space-y-2 min-w-0">
          <div className="w-3/4 h-4 bg-gray-300 rounded dark:bg-gray-700"></div>
          <div className="w-1/2 h-3 bg-gray-300 rounded dark:bg-gray-700"></div>
        </div>
        <div className="w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

interface EventItemSkeletonListProps {
  count?: number;
}

export function EventItemSkeletonList({
  count = 6,
}: EventItemSkeletonListProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <EventItemSkeleton key={index} />
      ))}
    </>
  );
}
