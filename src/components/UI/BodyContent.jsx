export default function CardContent({ children, bgColor, rounded }) {
  return (
    <div
      className={`mx-auto max-w-7xl sm:pt-2 lg:pt-8 lg:py-2 ${rounded} ${bgColor}`}
    >
      <div className="lg:grid lg:grid-cols-12 gap-4">{children}</div>
    </div>
  );
}
