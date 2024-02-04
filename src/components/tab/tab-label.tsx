type Props = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function TabLabel({ label, isActive, onClick }: Props) {
  return (
    <button
      type="button"
      className={`${
        isActive
          ? "border-blue-600 text-blue-600"
          : "border-neutral-300 text-neutral-500 hover:border-neutral-400 hover:text-neutral-600"
      } -mb-0.5 border-b-2 p-2 font-bold`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
