export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="fw-bold">{title}</h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </div>
  );
}