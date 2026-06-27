type Props = {
  name: string;
  description: string;
  lowHours: number;
  highHours: number;
  index: number;
};

export function AgentRecommendation(props: Props) {
  return (
    <div className="card" style={{ padding: 22 }}>
      <p style={{ marginTop: 0, color: '#0f766e', fontWeight: 700 }}>Priorité {props.index + 1}</p>
      <h3 style={{ marginBottom: 8 }}>{props.name}</h3>
      <p style={{ color: '#5d6b7a' }}>{props.description}</p>
      <p style={{ marginBottom: 0 }}>
        Gain estimé : <strong>{props.lowHours} à {props.highHours} h/mois</strong>
      </p>
    </div>
  );
}
