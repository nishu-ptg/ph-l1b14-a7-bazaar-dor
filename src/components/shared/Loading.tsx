type LoadingProps = {
  text?: string;
};

export default function Loading({ text }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-6">
      <span className="loading loading-spinner loading-md text-green-700" />

      {text && <p className="text-sm text-base-content/70">{text}</p>}
    </div>
  );
}
