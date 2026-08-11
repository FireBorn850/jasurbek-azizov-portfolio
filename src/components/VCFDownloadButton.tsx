import React from 'react';
import { Download, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface VCFDownloadButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  label?: string;
}

export const VCFDownloadButton: React.FC<VCFDownloadButtonProps> = ({
  className = '',
  variant = 'primary',
  label = 'Save Contact (.vcf Card)',
}) => {
  const [downloaded, setDownloaded] = React.useState(false);

  const generateVCF = () => {
    const vcfData = `BEGIN:VCARD
VERSION:3.0
N:Azizov;Jasurbek;;;
FN:Jasurbek Azizov
TITLE:${PERSONAL_INFO.title}
ORG:Webster University Geneva / Freelance
TEL;TYPE=CELL,VOICE:${PERSONAL_INFO.phonePrimary}
TEL;TYPE=WORK,VOICE:${PERSONAL_INFO.phoneSecondary}
EMAIL;TYPE=INTERNET,PREF:${PERSONAL_INFO.emailPrimary}
EMAIL;TYPE=INTERNET:${PERSONAL_INFO.emailSecondary}
URL:https://jasurbekazizov.com
NOTE:Full-Stack Developer & Global Business Student based in Geneva, Switzerland.
X-SOCIALPROFILE;type=linkedin:${PERSONAL_INFO.linkedinUrl}
X-SOCIALPROFILE;type=telegram:${PERSONAL_INFO.telegramUrl}
X-SOCIALPROFILE;type=instagram:${PERSONAL_INFO.instagramUrl}
END:VCARD`;

    const blob = new Blob([vcfData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Jasurbek_Azizov.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20';
      case 'secondary':
        return 'bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700';
      case 'outline':
        return 'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 dark:border-cyan-400/40';
      default:
        return 'bg-cyan-500 text-slate-950 font-semibold';
    }
  };

  return (
    <button
      onClick={generateVCF}
      className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform active:scale-95 cursor-pointer ${getVariantStyles()} ${className}`}
      title="Download Jasurbek Azizov's Contact Card for phone address book"
    >
      {downloaded ? (
        <>
          <UserCheck className="w-4 h-4 text-emerald-400 animate-bounce" />
          <span>Contact Card Downloaded!</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
