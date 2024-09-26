import React from 'react';

interface Badge {
  name: string;
  image: string;
  link: string;
}

interface CertificationBadgesProps {
  badges: Badge[];
}

const CertificationBadges: React.FC<CertificationBadgesProps> = ({ badges }) => {
  return (
    <div className="certification-badges">
      {badges.map((badge, index) => (
        <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badge-link" title={badge.name}>
          <img src={badge.image} alt={badge.name} className="badge-image" />
        </a>
      ))}
    </div>
  );
};

export default CertificationBadges;
