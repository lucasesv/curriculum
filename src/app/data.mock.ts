import * as Types from './types';

export const profile: Types.Profile = {
  description: 'Olá! Sou Lucas Vasconcelos, nascido, criado e residente em Natal/RN. Sou uma pessoa bem humorada, flexível e com fácil adaptação à novas situações. Em 2013, concluí a graduação em Engenharia de Computação pela UFRN e atuei em projetos de iniciação científica e também como Tutor EaD. Meu primeiro contato com o mundo do software foi desenvolvendo um sistema para controle de oficina e estoque (Delphi) e emissão de NF-e (Java). Também implementei um projeto piloto para gestão de restaurantes. Atualmente, sou Analista de Sistemas e trabalho com software acadêmico utilizado por diversas instituições de ensino federais e estaduais em todo o Brasil.'
};

export const experiences: Array<Types.Experience> = [
  {
    role: 'Analista de Sistemas',
    period: '2018 - Atual',
    company: 'ESIG Software & Consultoria',
    description: 'Manutenção Corretiva e Evolutiva em sistemas acadêmicos'
  },
  {
    role: 'Professor / Tutor',
    period: '2016 - 2017',
    company: 'CTGAS-ER',
    description: 'Atuação como Professor e Tutor em turmas do Curso Técnico de Automação Industrial'
  },
  {
    role: 'Tutor',
    period: '2015 - 2016',
    company: 'Instituto Metrópole Digital - UFRN',
    description: 'Atuação como Tutor em turmas do Curso Técnico em Tecnologia da Informação'
  },
  {
    role: 'Engenheiro Supervisor',
    period: '2015 - 2016',
    company: 'Universidade Federal do Rio Grande do Norte',
    description: 'Desenvolvimento de software para autocalibração de equipamentos de instrumentação para a indústria de Petróleo'
  }
];

export const education: Array<Types.Experience> = [
  {
    role: 'Full Cycle Developer',
    period: '(recém iniciado)',
    company: 'Code.education (School of Net)',
    description: 'Full Cycle Developer: da arquitetura de microserviços ao monitoramento em produção'
  },
  {
    role: 'Microsserviços com Springboot',
    period: '2020',
    company: 'Udemy | in28Minutes',
    description: 'Iniciando no mundo de microsserviços com Spring Boot e Spring Cloud.'
  },
  {
    role: 'Angular',
    period: '2019',
    company: 'Udemy | Maximilian Schwarzmüller',
    description: 'Master Angular 10 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js'
  },
  {
    role: 'Engenharia de Computação',
    period: '2013',
    company: 'Universidade Federal do Rio Grande do Norte',
    description: 'Graduação no curso de Engenharia de Computação'
  }
];

export const hardSkills: Array<Types.Skill> = [
  {
    name: 'HTML',
    knowledge: 70
  },
  {
    name: 'CSS',
    knowledge: 70
  },
  {
    name: 'JavaScript',
    knowledge: 40
  },
  {
    name: 'Java',
    knowledge: 60
  },
  {
    name: 'Angular',
    knowledge: 50
  },
  {
    name: 'React',
    knowledge: 20
  },
  {
    name: 'React Native',
    knowledge: 20
  },
  {
    name: 'PostgreSQL',
    knowledge: 60
  },
  {
    name: 'Git',
    knowledge: 80
  },
  {
    name: 'Jenkins',
    knowledge: 50
  }
];

export const softSkills: Array<Types.Skill> = [
  {
    name: 'Equipe',
    knowledge: 70
  },
  {
    name: 'Motivação',
    knowledge: 90
  },
  {
    name: 'Comunicação',
    knowledge: 70
  },
  {
    name: 'Liderança',
    knowledge: 50
  }
];

const hobbies: Array<Types.Hobby> = [
  {
    name: 'Patins',
    faIcon: 'fas fa-skating'
  },
  {
    name: 'Ping Pong',
    faIcon: 'fas fa-table-tennis'
  },
  {
    name: 'Futebol',
    faIcon: 'fas fa-futbol'
  },
  {
    name: 'Games',
    faIcon: 'fas fa-gamepad'
  }
];

const data = {
  profile,
  experiences,
  education,
  hardSkills,
  softSkills,
  hobbies
};

export default data;