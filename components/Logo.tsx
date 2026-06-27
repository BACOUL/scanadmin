import Link from 'next/link';

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="/" className="logo" aria-label="Retour à l’accueil ScanAdmin">
      <img
        src="/brand/scanadmin-logo.svg"
        alt="ScanAdmin"
        width={compact ? 180 : 220}
        height={compact ? 48 : 60}
        className="logo-image"
      />
    </Link>
  );
}
