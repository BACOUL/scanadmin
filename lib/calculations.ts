export type ScanInput = {
  sector: string;
  employees: number;
  hourlyCost: number;
  emailsPerDay: number;
  minutesPerEmail: number;
  quotesPerWeek: number;
  minutesPerQuote: number;
  followUpsPerWeek: number;
  minutesPerFollowUp: number;
  invoiceHoursPerWeek: number;
  documentHoursPerWeek: number;
  clientFilesPerMonth: number;
  minutesPerClientFile: number;
  planningHoursPerWeek: number;
  reportingHoursPerWeek: number;
};

export type TaskResult = {
  key: string;
  label: string;
  monthlyHours: number;
  lowAutomationRate: number;
  highAutomationRate: number;
  agentKey: string;
};

export type ScanResult = {
  totalMonthlyHours: number;
  monthlyCost: number;
  annualCost: number;
  lowRecoverableHours: number;
  highRecoverableHours: number;
  recommendedTasks: TaskResult[];
};

const WEEKS_PER_MONTH = 4.33;
const WORKDAYS_PER_MONTH = 20;

const round = (value: number) => Math.round(value * 10) / 10;

export function calculateScan(input: ScanInput): ScanResult {
  const tasks: TaskResult[] = [
    {
      key: 'emails',
      label: 'Mails',
      monthlyHours: (input.emailsPerDay * input.minutesPerEmail * WORKDAYS_PER_MONTH) / 60,
      lowAutomationRate: 0.3,
      highAutomationRate: 0.5,
      agentKey: 'mail-agent',
    },
    {
      key: 'quotes',
      label: 'Devis',
      monthlyHours: (input.quotesPerWeek * input.minutesPerQuote * WEEKS_PER_MONTH) / 60,
      lowAutomationRate: 0.35,
      highAutomationRate: 0.6,
      agentKey: 'quote-agent',
    },
    {
      key: 'followups',
      label: 'Relances',
      monthlyHours: (input.followUpsPerWeek * input.minutesPerFollowUp * WEEKS_PER_MONTH) / 60,
      lowAutomationRate: 0.5,
      highAutomationRate: 0.7,
      agentKey: 'followup-agent',
    },
    {
      key: 'invoices',
      label: 'Factures',
      monthlyHours: input.invoiceHoursPerWeek * WEEKS_PER_MONTH,
      lowAutomationRate: 0.25,
      highAutomationRate: 0.45,
      agentKey: 'invoice-agent',
    },
    {
      key: 'documents',
      label: 'Documents',
      monthlyHours: input.documentHoursPerWeek * WEEKS_PER_MONTH,
      lowAutomationRate: 0.4,
      highAutomationRate: 0.6,
      agentKey: 'document-agent',
    },
    {
      key: 'clientFiles',
      label: 'Dossiers clients',
      monthlyHours: (input.clientFilesPerMonth * input.minutesPerClientFile) / 60,
      lowAutomationRate: 0.3,
      highAutomationRate: 0.5,
      agentKey: 'client-file-agent',
    },
    {
      key: 'planning',
      label: 'Planning',
      monthlyHours: input.planningHoursPerWeek * WEEKS_PER_MONTH,
      lowAutomationRate: 0.25,
      highAutomationRate: 0.45,
      agentKey: 'planning-agent',
    },
    {
      key: 'reporting',
      label: 'Reporting',
      monthlyHours: input.reportingHoursPerWeek * WEEKS_PER_MONTH,
      lowAutomationRate: 0.4,
      highAutomationRate: 0.65,
      agentKey: 'reporting-agent',
    },
  ];

  const totalMonthlyHours = tasks.reduce((sum, task) => sum + task.monthlyHours, 0);
  const lowRecoverableHours = tasks.reduce((sum, task) => sum + task.monthlyHours * task.lowAutomationRate, 0);
  const highRecoverableHours = tasks.reduce((sum, task) => sum + task.monthlyHours * task.highAutomationRate, 0);

  const recommendedTasks = [...tasks]
    .sort((a, b) => b.monthlyHours * b.highAutomationRate - a.monthlyHours * a.highAutomationRate)
    .slice(0, 3);

  return {
    totalMonthlyHours: round(totalMonthlyHours),
    monthlyCost: Math.round(totalMonthlyHours * input.hourlyCost),
    annualCost: Math.round(totalMonthlyHours * input.hourlyCost * 12),
    lowRecoverableHours: round(lowRecoverableHours),
    highRecoverableHours: round(highRecoverableHours),
    recommendedTasks,
  };
}
