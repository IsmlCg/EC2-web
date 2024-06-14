export default function CardContent({ children }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-2 sm:pt-2 lg:px-8 lg:py-2">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">{children}</div>
      </div>
    </div>
  );
}
// bg-orange-200 bg-sky-200
