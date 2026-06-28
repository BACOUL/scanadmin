'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AgentRecommendation } from '../../components/AgentRecommendation';
import { ResultCard } from '../../components/ResultCard';
import type { ScanResult } from '../../lib/calculations';
import { getAgentByKey } from '../../lib/agents';
import styles from './ResultPage.module.css';

function isNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function isScanResult(value: unknown): value is ScanResult {
  if (!value || typeof value !== 'object') return false;

  const candidate = value as Partial<ScanResult>;

  return (
    isNumber(candidate.totalMonthlyHours) &&
    isNumber(candidate.monthlyCost) &&
    isNumber(candidate.annualCost) &&
    isNumber(candidate.lowRecoverableHours) &&
    isNumber(candidate.highRecoverableHours) &&
    Array.isArray(candidate.recommendedTasks)
  );
}

function readSavedResult() {
  const saved = localStorage.getItem('scanadmin:lastResult');
  if (!saved) return null;

  try {
    const parsed = JSON.parse(saved);
    if (isScanResult(parsed)) return parsed;
  } catch {
    // Invalid local data is ignored below.
  }

  localStorage.removeItem('scanadmin:lastResult');
  return null;
}

export default function ResultPage() {
  const [result, setResult] = useState<ScanResult | null>(null);

  useEffect(() => {
    setResult(readSavedResult());
  }, []);

  if (!result) {
    return (
      <main className={`container ${styles.page}`}>
        <div className={`card ${styles.empty}`}>
          <h1>Aucun résultat disponible</h1>
          <p>Lancez d’abord le scan pour obtenir votre estimation.</p>
          <Link className="button" href="/scan">Lancer le scan</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`container ${styles.page}`}>
      <Link href="/scan" className={styles.back}>← Modifier le scan</Link>
      <h1 className={styles.title}>Votre résultat ScanAdmin</h1>
      <p className={styles.lead}>Ces chiffres sont une première estimation. Une analyse personnalisée permet de confirmer les gains réels et les agents à mettre en place.</p>

      <div className={`grid grid-3 ${styles.cards}`}>
        <ResultCard label="Temps administratif estimé" value={`${result.totalMonthlyHours} h/mois`} />
        <ResultCard label="Coût mensuel estimé" value={`${result.monthlyCost.toLocaleString('fr-FR')} €`} />
        <ResultCard label="Coût annuel estimé" value={`${result.annualCost.toLocaleString('fr-FR')} €`} />
      </div>

      <div className={`card ${styles.panel}`}>
        <h2>Ce que cela signifie</h2>
        <p>Votre entreprise consacre environ <strong>{result.totalMonthlyHours} h/mois</strong> à des tâches administratives répétitives. Cela représente environ <strong>{result.monthlyCost.toLocaleString('fr-FR')} € / mois</strong> selon le coût horaire indiqué dans le scan.</p>
        <p>Ces résultats sont indicatifs : ils servent à identifier les tâches à analyser en priorité, pas à garantir un gain réel sans audit personnalisé.</p>
      </div>

      <div className={`card ${styles.panel}`}>
        <h2>Temps potentiellement récupérable</h2>
        <p className={styles.recoverable}>{result.lowRecoverableHours} à {result.highRecoverableHours} h/mois</p>
        <p>L’IA prépare les tâches répétitives. L’humain garde la validation finale.</p>
      </div>

      <h2 className={styles.agentsTitle}>Agents IA recommandés</h2>
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

      <div className={`card ${styles.cta}`}>
        <h2>Recevoir une analyse personnalisée</h2>
        <p>L’étape suivante consiste à vérifier vos réponses, préciser les tâches et définir l’agent IA le plus rentable à tester.</p>
        <Link className="button" href="/analyse">Recevoir mon analyse personnalisée</Link>
      </div>
    </main>
  );
}
