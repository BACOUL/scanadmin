type ResultCardProps = {
  label: string;
  value: string;
  helper?: string;
};

export function ResultCard({ label, value, helper }: ResultCardProps) {
  return (
    <div className="card" style={{ padding: 22 }}>
      <p style={{ margin: 0, color: '#5d6b7a', fontSize: 14 }}>{label}</p>
      <strong style={{ display: 'block', marginTop: 8, fontSize: 28 }}>{value}</strong>
      {helper ? <p style={{ marginBottom: 0, color: '#5d6b7a' }}>{helper}</p> : null}
    </div>
  );
}
