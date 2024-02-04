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
          ? "border-black text-black"
          : "border-neutral-300 text-neutral-500 hover:border-neutral-400 hover:text-neutral-600"
      } m-2 -mb-0.5 min-w-36 border-b-2 px-8 py-3 text-lg`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
