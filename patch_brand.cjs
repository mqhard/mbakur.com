const fs = require('fs');

let code = fs.readFileSync('src/pages/BrandIdentity.jsx', 'utf8');

// Replace the hardcoded paths with config and mapped definitions
const pathsConfigReplacement = `
const pathsConfig = [
  {
    id: 'personal',
    icon: User,
    color: '#ff007f',
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80',
    examples: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'business',
    icon: Briefcase,
    color: '#00ffff',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    examples: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'product',
    icon: Box,
    color: '#ffb800',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
    examples: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'community',
    icon: Users,
    color: '#9d00ff',
    img: 'https://images.unsplash.com/photo-1511632765486-a01c80cf2644?auto=format&fit=crop&q=80',
    examples: [
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'movement',
    icon: Globe,
    color: '#00ff66',
    img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80',
    examples: [
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=600'
    ]
  }
];

const journeyPhasesConfig = [
  { id: '01', icon: Search },
  { id: '02', icon: Crosshair },
  { id: '03', icon: Heart },
  { id: '04', icon: Droplet },
  { id: '05', icon: BookOpen },
  { id: '06', icon: Layers },
  { id: '07', icon: Zap },
  { id: '08', icon: TrendingUp }
];
`;

const replacePathsRegex = /const paths = \[[\s\S]*?\];\s*const journeyPhases = \[[\s\S]*?\];/;
code = code.replace(replacePathsRegex, pathsConfigReplacement);

const insideComponentInjection = `
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const translatedPaths = t('brandIdentity.paths', { returnObjects: true }) || [];
  const paths = pathsConfig.map((config, i) => ({
    ...config,
    ...(translatedPaths[i] || {})
  }));

  const translatedJourney = t('brandIdentity.journeyPhases', { returnObjects: true }) || [];
  const journeyPhases = journeyPhasesConfig.map((config, i) => ({
    ...config,
    ...(translatedJourney[i] || {})
  }));
`;

code = code.replace(/const navigate = useNavigate\(\);\s*const \{\s*t,\s*i18n\s*\} = useTranslation\(\);\s*const isRTL = i18n\.language === 'ar';/, insideComponentInjection);

// Fix untranslated text
code = code.replace(/>\s*What Are You Building\?\s*<\/h1>/, ">{t('brandIdentity.hub.title', 'What Are You Building?')}</h1\>");
code = code.replace(/>\s*Featured Example\s*<\/span>/, ">{t('brandIdentity.hub.featuredExample', 'Featured Example')}</span\>");
code = code.replace(/Start Journey/g, "{t('brandIdentity.hub.startJourney', 'Start Journey')}");
code = code.replace(/Change Path/g, "{t('brandIdentity.hub.changePath', 'Change Path')}");
code = code.replace(/STAGE/g, "{t('brandIdentity.journey.stage', 'STAGE')}");
code = code.replace(/Deliverables/g, "{t('brandIdentity.journey.deliverables', 'Deliverables')}");
code = code.replace(/Initiate Identity System/g, "{t('brandIdentity.journey.initiate', 'Initiate Identity System')}");

fs.writeFileSync('src/pages/BrandIdentity.jsx', code);
console.log('patched BrandIdentity');
