import { 
  SiJavascript,
  SiPython,
  SiCsharp,
  SiCplusplus,
  SiDotnet,
  SiTypescript,
  SiHtml5,
  SiPhp,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiApollographql,
  SiLaravel,
  SiDjango,
  SiSymfony,
  SiNestjs,
  SiAmazonaws,
  SiVercel,
  SiGooglecloud,
  SiMicrosoftazure
} from 'react-icons/si';

const PROGRAMMING_LANGUAGE_ITEMS: Array<Skills> = [
  {
    icon: SiJavascript,
    name: 'Javascript',
    value: 100
  },
  {
    icon: SiPython,
    name: 'Python',
    value: 100
  },
  {
    icon: SiCsharp,
    name: 'C#',
    value: 100
  },
  {
    icon: SiCplusplus,
    name: 'C++',
    value: 60
  },
  {
    icon: SiDotnet,
    name: '.NET',
    value: 100
  },
  {
    icon: SiTypescript,
    name: 'Typescript',
    value: 60
  },
  {
    icon: SiHtml5,
    name: 'HTML5',
    value: 100
  },
  {
    icon: SiPhp,
    name: 'pHp',
    value: 100
  },
  {
    icon: SiCss3,
    name: 'CSS3',
    value: 80
  },
];

const FRAMEWORK_ITEMS: Array<Skills> = [
  {
    icon: SiReact,
    name: 'React',
    value: 100
  },
  {
    icon: SiNextdotjs,
    name: 'Next.js',
    value: 100
  },
  {
    icon: SiNodedotjs,
    name: 'Node.js',
    value: 60
  },
  {
    icon: SiExpress,
    name: 'Express',
    value: 60
  },
  {
    icon: SiGraphql,
    name: 'GraphQL',
    value: 90
  },
  {
    icon: SiApollographql,
    name: 'Apollo',
    value: 80
  },
  {
    icon: SiLaravel,
    name: 'Laravel',
    value: 90
  },
  {
    icon: SiDjango,
    name: 'Django',
    value: 30
  },
  {
    icon: SiSymfony,
    name: 'Symfony',
    value: 30
  },
  {
    icon: SiNestjs,
    name: 'Nest.js',
    value: 80     
  }
];

const CLOUD_TECHNOLOGIES: Array<Skills> = [
  {
    icon: SiAmazonaws,
    name: 'AWS',
    value: 100
  },
  {
    icon: SiVercel,
    name: 'Vercel',
    value: 100
  },
  {
    icon: SiGooglecloud,
    name: 'GCP',
    value: 50
  },
  {
    icon: SiMicrosoftazure,
    name: 'Microsoft Azure',
    value: 40
  },
];

export {
  PROGRAMMING_LANGUAGE_ITEMS,
  FRAMEWORK_ITEMS,
  CLOUD_TECHNOLOGIES
}