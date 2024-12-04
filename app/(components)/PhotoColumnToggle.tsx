import { Columns3, Columns4 } from 'lucide-react';

export const PhotoColumnToggle = ({
  columns,
  onToggle,
}: {
  columns: number;
  onToggle: () => void;
}) => (
  <div className="hidden md:flex mb-4 ml-auto">
    <button
      className="p-1 bg-[#eee] rounded-md hover:bg-[#e2e2e2] transition"
      type="button"
      onClick={onToggle}
    >
      {columns === 3 ? <Columns4 /> : <Columns3 />}
    </button>
  </div>
);
