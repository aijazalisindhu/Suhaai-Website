type IconBadgeProps = {
  label: string;
};

export default function IconBadge({ label }: IconBadgeProps) {
  const initial = label.trim().charAt(0);

  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-suhaai-cream text-lg font-black text-suhaai-green ring-1 ring-amber-200">
      {initial}
    </span>
  );
}
