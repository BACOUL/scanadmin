'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AgentRecommendation } from '../../components/AgentRecommendation';
import { ResultCard } from '../../components/ResultCard';
import type { ScanResult } from '../../lib/calculations';
import { getAgentByKey } from '../../lib/agents';

export default function ResultPage() {
  const [result, setResult] = useState<ScanResult | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('scanadmin:lastResult');
    if (saved) setResult(JSON.parse(saved));
  }, []);

  if (!result) {
    return (
      <main className="container" style={{ padding: '56px 0' }}>
        <div className="card" style={{ padding: 28 }}>
          <h1>Aucun résultat disponible</h1>
          <p style={{ color: '#5d6b7a' }}>Lancez d'abord le scan pour obtenir votre estimation.</p>
          <Link className="button" href="/scan">Lancer le scan</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: '40px 0 64px' }}>
      <Link href="/scan" style={{ color: '#0f766e', fontWeight: 700 }}>← Modifier le scan</Link>
      <h1 style={{ fontSize: 42, marginBottom: 12 }}>Votre résultat ScanAdmin</h1>
      <p style={{ color: '#5d6b7a', maxWidth: 780 }}>
        Ces chiffres sont une première estimation. Une analyse personnalisée permet de confirmer les gains réels et les agents à mettre en place.
      </p>

      <div className="grid grid-3" style={{ marginTop: 24 }}>
        <ResultCard label="Temps administratif estimé" value={`${result.totalMonthlyHours} h/mois`} />
        <ResultCard label="Coût mensuel estimé" value={`${result.monthlyCost.toLocaleString('fr-FR')} €`} />
        <ResultCard label="Coût annuel estimé" value={`${result.annualCost.toLocaleString('fr-FR')} €`} />
      </div>

      <div className="card" style={{ padding: 28, marginTop: 24 }}>
        <h2>Temps potentiellement récupérable avec agents IA supervisés</h2>
        <p style={{ fontSize: 28, fontWeight: 700, color: '#0f766e' }}>
          {result.lowRecoverableHours} à {result.highRecoverableHours} h/mois
        </p>
        <p style={{ color: '#5d6b7a' }}>L'IA prépare les tâches répétitives. L'humain garde la validation finale.</p>
      </div>

      <h2 style={{ marginTop: 32 }}>Agents IA recommandés</h2>
      <div className="grid grid-3">
        {result.recommendedTasks.map((task, index) => {
          const agent = getAgentByKey(task.agentKey);
          return (
            <AgentRecommendation
              key={task.key}
              index={index}
              name={agent?.name ?? task.label}
              description={agent?.description ?? ''}
              lowHours={Math.round(task.monthlyHours * task.lowAutomationRate)}
              highHours={Math.round(task.monthlyHours * task.highAutomationRate)}
            />
          );
        })}
      </div>

      <div className="card" style={{ padding: 28, marginTop: 32 }}>
        <h2>Recevoir une analyse personnalisée</h2>
        <p style={{ color: '#5d6b7a' }}>
          L'étape suivante consiste à vérifier vos réponses, préciser les tâches et définir l'agent IA le plus rentable à tester.
        </p>
        <a className="button" href="mailto:contact@scanadmin.fr?subject=Analyse personnalisée ScanAdmin">Demander mon analyse</a>
      </div>
    </main>
  );
}
