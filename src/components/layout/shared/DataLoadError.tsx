type DataLoadErrorProps = {
  dataType?: string;
  message?: string;
};

export default function DataLoadError({
  dataType = "",
  message = "লোড করা যাচ্ছে না",
}: DataLoadErrorProps) {
  return (
    <div className="py-4 text-center text-red-500">
      {dataType} {message}
    </div>
  );
}
