const root = document.documentElement;

/* =========================
   TEMA CLARO / ESCURO
========================= */
const themeButtons = document.querySelectorAll('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
root.dataset.theme = savedTheme || 'light';

function updateThemeButtons() {
  const isDark = root.dataset.theme === 'dark';
  const isEnglish = (localStorage.getItem('portfolio-language') || 'pt') === 'en';
  themeButtons.forEach((button) => {
    const label = isDark
      ? (isEnglish ? 'Switch to light mode' : 'Ativar modo claro')
      : (isEnglish ? 'Switch to dark mode' : 'Ativar modo escuro');
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  });
}

updateThemeButtons();

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', root.dataset.theme);
    updateThemeButtons();
  });
});

/* =========================
   PORTUGUÊS / INGLÊS
========================= */
const translations = new Map([
  ['Estudante de BC&T e Computação', 'BC&T and Computer Science Student'],
  ['Tecnologia', 'Technology'],
  ['Desenvolvimento', 'Development'],
  ['Soluções Digitais', 'Digital Solutions'],
  ['Estudante da UNIFESP com interesse em tecnologia, desenvolvimento e resolução de problemas. Gosto de aprender, me adaptar a novos contextos e colaborar com pessoas para transformar ideias em soluções úteis e aplicáveis.', 'UNIFESP student interested in technology, development and problem solving. I enjoy learning, adapting to new contexts and collaborating with people to turn ideas into useful, practical solutions.'],
  ['Vamos conversar?', 'Let’s connect'],
  ['E-mail', 'Email'],
  ['Início', 'Home'],
  ['Tecnologias', 'Technologies'],
  ['Experiências', 'Experience'],
  ['Projetos', 'Projects'],
  ['Formação', 'Education'],
  ['Baixar CV', 'Download CV'],
  ['OLÁ, EU SOU A ISABELA', 'HI, I’M ISABELA'],
  ['Tecnologia para transformar desafios em', 'Technology to turn challenges into'],
  ['soluções reais.', 'real solutions.'],
  ['Tenho interesse em entender problemas, explorar possibilidades e desenvolver soluções que façam sentido na prática. Busco aprender constantemente, enfrentar novos desafios e transformar conhecimento em resultados reais por meio da tecnologia.', 'I am interested in understanding problems, exploring possibilities and developing solutions that make sense in practice. I constantly seek to learn, face new challenges and turn knowledge into real results through technology.'],
  ['Ferramentas e tecnologias com as quais já tive contato em estudos, projetos e experiências profissionais.', 'Tools and technologies I have worked with through studies, projects and professional experience.'],
  ['Soluções & Automação', 'Solutions & Automation'],
  ['Dados & Ferramentas', 'Data & Tools'],
  ['Figma, Wireframes, Prototipação, Design de Interfaces', 'Figma, Wireframes, Prototyping, Interface Design'],
  ['Experiências que contribuíram para meu desenvolvimento técnico, trabalho em equipe e construção de soluções reais.', 'Experiences that contributed to my technical growth, teamwork and development of real solutions.'],
  ['Estagiária de Tecnologia', 'Technology Intern'],
  ['Gerente de Gente e Assessora de Design e Concepção', 'People Manager and Design & Concept Advisor'],
  ['Membro de Projeto | Ativamente', 'Project Member | Ativamente'],
  ['mar 2025 – ago 2026', 'Mar 2025 – Aug 2026'],
  ['jun 2024 – atual', 'Jun 2024 – Present'],
  ['2024 – jun 2025', '2024 – Jun 2025'],
  ['Atuação no desenvolvimento de soluções com Microsoft Power Platform e Dynamics 365, com foco em automação, integrações e resolução de demandas reais.', 'Worked on solutions using Microsoft Power Platform and Dynamics 365, focusing on automation, integrations and real business needs.'],
  ['Atuação em liderança, desenvolvimento de membros e participação em projetos com clientes reais, unindo organização, tecnologia e colaboração.', 'Worked with leadership, member development and real client projects, combining organization, technology and collaboration.'],
  ['Participei do projeto Ativamente, iniciativa da Enactus voltada à neuroplasticidade e ao bem-estar de pessoas idosas, por meio da realização de oficinas presenciais em instituições de longa permanência.', 'Participated in Ativamente, an Enactus initiative focused on neuroplasticity and well-being for older adults through in-person workshops in long-term care institutions.'],
  ['Ver mais', 'View more'],
  ['Ver menos', 'View less'],
  ['Contexto', 'Context'],
  ['O que eu fiz', 'What I did'],
  ['Como trabalhei', 'How I worked'],
  ['O que desenvolvi', 'What I developed'],
  ['Projetos e tecnologia', 'Projects and technology'],
  ['Prospecção', 'Prospecting'],
  ['Planejamento', 'Planning'],
  ['Execução', 'Execution'],
  ['Uma seleção de projetos acadêmicos, de desenvolvimento e prototipagem.', 'A selection of academic, development and prototyping projects.'],
  ['Ver portfólio completo', 'View full portfolio'],
  ['Projeto acadêmico', 'Academic project'],
  ['Sistema desenvolvido em TypeScript para a disciplina de Programação Orientada a Objetos.', 'System developed in TypeScript for an Object-Oriented Programming course.'],
  ['Protótipo de site responsivo para uma clínica de ginecologia, desenvolvido em versões desktop e mobile.', 'Responsive website prototype for a gynecology clinic, developed in desktop and mobile versions.'],
  ['Protótipo inicial para uma startup da área da saúde, desenvolvido em versões desktop e mobile.', 'Initial prototype for a healthcare startup, developed in desktop and mobile versions.'],
  ['Protótipo de site para um escritório de advocacia, desenvolvido em versões desktop e mobile.', 'Website prototype for a law firm, developed in desktop and mobile versions.'],
  ['out/2025 – dez/2025', 'Oct/2025 – Dec/2025'],
  ['set/2025 – nov/2025', 'Sep/2025 – Nov/2025'],
  ['ago/2024 – nov/2024', 'Aug/2024 – Nov/2024'],
  ['mar/2026 – mai/2026', 'Mar/2026 – May/2026'],
  ['Scitec Júnior · mar/2026 – mai/2026', 'Scitec Júnior · Mar/2026 – May/2026'],
  ['Protótipo de site para uma empresa de engenharia civil, desenvolvido no Figma.', 'Website prototype for a civil engineering company, developed in Figma.'],
  ['Desenvolvi individualmente todo o protótipo desktop e sua interatividade.', 'I independently developed the entire desktop prototype and its interactivity.'],
  ['Uma seleção das principais telas desenvolvidas no protótipo desktop.', 'A selection of the main screens developed for the desktop prototype.'],
  ['Nossa Equipe — desktop', 'Our Team — desktop'],
  ['Residencial Mercúrio — desktop', 'Residencial Mercúrio — desktop'],
  ['Demonstrações das principais interações do protótipo desktop.', 'Demonstrations of the main interactions of the desktop prototype.'],
  ['Navegação geral', 'General navigation'],
  ['Visão geral da navegação e das principais seções do protótipo.', 'Overview of the navigation and main sections of the prototype.'],
  ['Serviços', 'Services'],
  ['Interação com a seção de Serviços.', 'Interaction with the Services section.'],
  ['Quem somos', 'About us'],
  ['Interação com a seção Quem Somos.', 'Interaction with the About Us section.'],
  ['Imóveis à venda', 'Properties for sale'],
  ['Interação com a seção de Imóveis à Venda.', 'Interaction with the Properties for Sale section.'],
  ['abr/2026 – mai/2026', 'Apr/2026 – May/2026'],
  ['Scitec Júnior · abr/2026 – mai/2026', 'Scitec Júnior · Apr/2026 – May/2026'],
  ['Protótipo de site para um escritório de arquitetura, desenvolvido no Figma.', 'Website prototype for an architecture firm, developed in Figma.'],
  ['Participei coletivamente da elaboração do projeto e da construção da interatividade do protótipo.', 'I collaborated on the project development and on building the prototype interactions.'],
  ['Uma seleção das principais telas desenvolvidas no protótipo.', 'A selection of the main screens developed for the prototype.'],
  ['Sobre — desktop', 'About — desktop'],
  ['Portfólio — desktop', 'Portfolio — desktop'],
  ['Visualização de projeto', 'Project view'],
  ['Contato — desktop', 'Contact — desktop'],
  ['Demonstração da navegação e das interações do protótipo.', 'Demonstration of the prototype navigation and interactions.'],
  ['Interatividade geral', 'Overall interactivity'],
  ['Navegação pelas principais seções do protótipo.', 'Navigation through the main sections of the prototype.'],
  ['Desktop', 'Desktop'],
  ['Bacharelado em Ciência e Tecnologia (BC&T)', 'Bachelor of Science and Technology (BC&T)'],
  ['Bacharelado em Ciência da Computação', 'Bachelor of Computer Science'],
  ['Conclusão prevista: dez/2027', 'Expected graduation: Dec/2027'],
  ['Conclusão prevista: dez/2028', 'Expected graduation: Dec/2028'],
  ['Formação interdisciplinar que integra tecnologia, computação e diferentes áreas do conhecimento, com foco em desenvolvimento, análise e resolução de problemas.', 'Interdisciplinary education integrating technology, computing and different fields of knowledge, with a focus on development, analysis and problem solving.'],

  ['Voltar para o currículo', 'Back to résumé'],
  ['PORTFÓLIO', 'PORTFOLIO'],
  ['Projetos acadêmicos, de desenvolvimento, inteligência artificial e prototipagem que fizeram parte da minha trajetória.', 'Academic, development, artificial intelligence and prototyping projects that have been part of my journey.'],
  ['Todos', 'All'],
  ['Acadêmicos', 'Academic'],
  ['Pessoais', 'Personal'],
  ['Sistema de Compra de Passagens de Avião', 'Airline Ticket Purchase System'],
  ['Projeto acadêmico | Programação Orientada a Objetos', 'Academic project | Object-Oriented Programming'],
  ['Sistema desenvolvido em TypeScript para a disciplina de POO, simulando o fluxo de compra de passagens aéreas.', 'System developed in TypeScript for an OOP course, simulating an airline ticket purchasing flow.'],
  ['Classificação Inteligente de Resíduos', 'Intelligent Waste Classification'],
  ['Projeto acadêmico | Inteligência Artificial', 'Academic project | Artificial Intelligence'],
  ['Projeto em Python voltado à classificação de resíduos e aplicação de Inteligência Artificial em um problema real.', 'Python project focused on waste classification and applying Artificial Intelligence to a real-world problem.'],
  ['Ver projeto', 'View project'],
  ['Prototipagem no Figma', 'Figma Prototyping'],
  ['Projeto de prototipagem para um site de arquitetura desenvolvido na Scitec Júnior.', 'Website prototyping project for an architecture company developed at Scitec Júnior.'],
  ['Projeto pessoal | Prototipagem no Figma', 'Personal project | Figma Prototyping'],
  ['Ver no GitHub', 'View on GitHub'],
  ['Objetivo', 'Goal'],
  ['Link', 'Link'],
  ['Detalhes', 'Details'],

  ['Voltar para projetos', 'Back to projects'],
  ['Voltar ao currículo', 'Back to résumé'],
  ['PROJETO', 'PROJECT'],
  ['Sobre o projeto', 'About the project'],
  ['Minha participação', 'My contribution'],
  ['Atuei coletivamente no desenvolvimento da home e da versão mobile do projeto. Individualmente, fui responsável pelas páginas de agendamento e sobre os médicos, além de contribuir ativamente para a interatividade dos protótipos desktop e mobile.', 'I collaborated on the home page and the mobile version of the project. Individually, I was responsible for the scheduling and doctors pages, while also actively contributing to the interactivity of both desktop and mobile prototypes.'],
  ['Atuei coletivamente no desenvolvimento da versão desktop e participei ativamente da construção da interatividade dos protótipos desktop e mobile.', 'I collaborated on the desktop version and actively contributed to building the interactivity of both desktop and mobile prototypes.'],
  ['Participei coletivamente da elaboração do protótipo e das interfaces do projeto.', 'I collaborated on the development of the prototype and the project interfaces.'],
  ['Scitec Júnior | Prototipagem no Figma', 'Scitec Júnior | Figma Prototyping'],
  ['Scitec Júnior · out/2025 – dez/2025', 'Scitec Júnior · Oct/2025 – Dec/2025'],
  ['Scitec Júnior · set/2025 – nov/2025', 'Scitec Júnior · Sep/2025 – Nov/2025'],
  ['Scitec Júnior · ago/2024 – nov/2024', 'Scitec Júnior · Aug/2024 – Nov/2024'],
  ['Atuei coletivamente no desenvolvimento da home e da versão mobile do projeto. Individualmente, fui responsável pelas páginas de', 'I collaborated on the home page and the mobile version of the project. Individually, I was responsible for the'],
  ['agendamento', 'scheduling'],
  ['sobre os médicos', 'doctors'],
  ['além de contribuir ativamente para a', 'while also actively contributing to the'],
  ['interatividade dos protótipos desktop e mobile', 'interactivity of the desktop and mobile prototypes'],
  ['Atuei coletivamente no desenvolvimento da versão desktop e participei ativamente da construção da', 'I collaborated on the desktop version and actively contributed to building the'],
  ['Protótipo inicial desenvolvido no Figma para uma startup da área da saúde, com o objetivo de estruturar visualmente a proposta do sistema e suas principais funcionalidades.', 'Initial Figma prototype for a healthcare startup, created to visually structure the system concept and its main features.'],
  ['Visitar site da clínica', 'Visit clinic website'],
  ['Visitar site final', 'Visit live website'],
  ['Ver em tamanho maior', 'View larger'],
  ['Principais telas', 'Key screens'],
  ['Uma seleção das telas desenvolvidas nas versões desktop e mobile.', 'A selection of screens developed for desktop and mobile versions.'],
  ['Home — desktop', 'Home — desktop'],
  ['Home — mobile', 'Home — mobile'],
  ['Menu — mobile', 'Menu — mobile'],
  ['Agendamento — desktop', 'Scheduling — desktop'],
  ['Agendamento — mobile', 'Scheduling — mobile'],
  ['Sobre os médicos — desktop', 'Doctors — desktop'],
  ['Sobre os médicos — mobile', 'Doctors — mobile'],
  ['Área logada — desktop', 'Logged-in area — desktop'],
  ['Conta — desktop', 'Account — desktop'],
  ['Tela inicial — mobile', 'Start screen — mobile'],
  ['Conta — mobile', 'Account — mobile'],
  ['Modelos — desktop', 'Templates — desktop'],
  ['Modelos — mobile', 'Templates — mobile'],
  ['Legislações — desktop', 'Legislation — desktop'],
  ['Legislações — mobile', 'Legislation — mobile'],
  ['Protótipo em ação', 'Prototype in action'],
  ['Demonstrações da interatividade geral do site nas duas versões.', 'Demonstrations of the website’s overall interactivity in both versions.'],
  ['Demonstrações da interatividade geral do sistema nas duas versões.', 'Demonstrations of the system’s overall interactivity in both versions.'],
  ['Interatividade geral — desktop', 'Overall interactivity — desktop'],
  ['Interatividade geral — mobile', 'Overall interactivity — mobile'],
  ['Navegação e principais interações da versão desktop do protótipo.', 'Navigation and main interactions of the desktop prototype.'],
  ['Navegação e principais interações da versão mobile do protótipo.', 'Navigation and main interactions of the mobile prototype.'],
  ['Ver todos os projetos', 'View all projects'],
  ['Voltar para a home', 'Back to home'],

  ['Atuei em um ambiente de tecnologia voltado à criação e evolução de soluções utilizando Microsoft Power Platform e Dynamics 365, lidando com demandas reais de clientes e diferentes necessidades de negócio.', 'I worked in a technology environment focused on creating and improving solutions using Microsoft Power Platform and Dynamics 365, dealing with real client requests and different business needs.'],
  ['Desenvolvi e ajustei soluções em Power Apps, Power Automate, Power Pages e Dynamics 365, além de utilizar JavaScript em customizações. Também trabalhei com integrações via API, automações e validações de dados.', 'I developed and improved solutions in Power Apps, Power Automate, Power Pages and Dynamics 365, and used JavaScript for customizations. I also worked with API integrations, automations and data validation.'],
  ['Minha rotina envolvia entender a necessidade, investigar caminhos possíveis, testar soluções e ajustar implementações. Em algumas demandas, também tive contato direto com clientes e com o suporte da Microsoft.', 'My routine involved understanding needs, exploring possible approaches, testing solutions and refining implementations. In some cases, I also interacted directly with clients and Microsoft support.'],
  ['A experiência fortaleceu minha capacidade de aprender novas ferramentas rapidamente, analisar problemas de forma prática e buscar soluções aplicáveis, além de ampliar minha experiência com trabalho em equipe e comunicação técnica.', 'The experience strengthened my ability to learn new tools quickly, analyze problems practically and find applicable solutions, while expanding my experience with teamwork and technical communication.'],
  ['Na Scitec Júnior, participo de um ambiente multidisciplinar que combina gestão, desenvolvimento de pessoas e projetos reais para clientes.', 'At Scitec Júnior, I work in a multidisciplinary environment that combines management, people development and real client projects.'],
  ['Como Gerente de Gente, atuo no acompanhamento e desenvolvimento de membros, integração de novos integrantes e organização de processos internos. Também conduzi o processo seletivo de 2026, com mais de 100 inscritos, 31 trainees e 21 membros efetivados.', 'As People Manager, I support member development, onboarding and internal processes. I also led the 2026 recruitment process, with over 100 applicants, 31 trainees and 21 members selected.'],
  ['Além da atuação em gestão, participei de projetos para clientes reais, principalmente na construção de interfaces e protótipos no Figma, passando pelo entendimento da demanda, organização da solução e desenvolvimento visual.', 'Alongside management responsibilities, I participated in real client projects, mainly creating interfaces and Figma prototypes, from understanding requirements to organizing the solution and developing the visual interface.'],
  ['A experiência ampliou minha capacidade de liderança, organização e comunicação, além de reforçar minha habilidade de trabalhar com problemas abertos, colaborar com diferentes pessoas e transformar demandas em soluções estruturadas.', 'The experience expanded my leadership, organization and communication skills, while strengthening my ability to work with open-ended problems, collaborate with different people and turn requirements into structured solutions.'],
  ['Fui responsável por prospectar possíveis instituições parceiras, realizando contatos por telefone, apresentando a proposta do projeto e organizando o agendamento de oficinas.', 'I was responsible for prospecting potential partner institutions, making phone calls, presenting the project proposal and organizing workshop scheduling.'],
  ['Também fui responsável pelo planejamento e criação de uma oficina, definindo atividades e estruturando a dinâmica que seria aplicada com os participantes.', 'I was also responsible for planning and creating a workshop, defining activities and structuring the session dynamics.'],
  ['Como membro do projeto, participei presencialmente de oficinas em instituições de longa permanência, conduzindo atividades junto aos idosos residentes.', 'As a project member, I took part in in-person workshops at long-term care institutions, conducting activities with older residents.'],
  ['A experiência fortaleceu minha comunicação, organização, iniciativa e capacidade de lidar diretamente com pessoas, além de proporcionar vivência prática em planejamento e execução de atividades com impacto social.', 'The experience strengthened my communication, organization, initiative and ability to work directly with people, while providing practical experience in planning and delivering social-impact activities.'],

  ['mar/2026 – jul/2026', 'Mar/2026 – Jul/2026'],
  ['Projeto acadêmico · mar/2026 – jul/2026', 'Academic project · Mar/2026 – Jul/2026'],
  ['Projeto pessoal · mar/2026 – mai/2026', 'Personal project · Mar/2026 – May/2026'],
  ['Sistema de passagens', 'Airline ticket system'],
  ['Classificação de resíduos', 'Waste classification'],
  ['Projeto em Python para classificação automática de resíduos utilizando redes neurais convolucionais.', 'Python project for automatic waste classification using convolutional neural networks.'],
  ['Projeto pessoal | Prototipagem no Figma', 'Personal project | Figma Prototyping'],
  ['Desenvolvi individualmente todo o protótipo desktop e sua interatividade. A implementação em código foi realizada posteriormente pela Scitec Júnior.', 'I independently developed the entire desktop prototype and its interactivity. The code implementation was later carried out by Scitec Júnior.'],
  ['Projeto desenvolvido para a disciplina de Programação Orientada a Objetos, com foco na aplicação prática dos conceitos vistos em aula.', 'Project developed for the Object-Oriented Programming course, focused on the practical application of concepts covered in class.'],
  ['Simular o fluxo de compra de passagens aéreas e organizar as responsabilidades do sistema por meio dos conceitos de orientação a objetos.', 'Simulate the airline ticket purchasing flow and organize system responsibilities using object-oriented concepts.'],
  ['Participei da construção da lógica do projeto, aplicando conceitos de POO na organização das classes e no funcionamento do sistema.', 'I contributed to the project logic, applying OOP concepts to class organization and system behavior.'],
  ['Algumas telas do fluxo de compra e gerenciamento do sistema.', 'Some screens from the purchasing and system management flow.'],
  ['Busca de voos', 'Flight search'],
  ['Seleção de assento', 'Seat selection'],
  ['Minhas reservas', 'My bookings'],
  ['Notificações', 'Notifications'],
  ['Administração', 'Administration'],
  ['Sistema em ação', 'System in action'],
  ['Demonstração do fluxo principal de compra.', 'Demonstration of the main purchasing flow.'],
  ['Compra de passagens', 'Ticket purchase'],
  ['Demonstração do fluxo de compra utilizando os três perfis de usuário do sistema.', 'Demonstration of the purchasing flow using the system’s three user profiles.'],
  ['Atuei ativamente no treinamento e ajuste da ResNet50, além de participar coletivamente da análise dos resultados, comparação entre os modelos e elaboração do relatório final.', 'I actively worked on training and tuning ResNet50, while also collaborating on result analysis, model comparison and the final report.'],
  ['Ver apresentação do projeto', 'View project presentation'],
  ['Resultados', 'Results'],
  ['Comparação dos modelos e exemplos do teste prático.', 'Model comparison and examples from the practical test.'],
  ['Comparação dos modelos', 'Model comparison'],
  ['Teste prático', 'Practical test'],
  ['Acadêmico', 'Academic'],
]);

let currentLanguage = localStorage.getItem('portfolio-language') || 'pt';
const languageButtons = document.querySelectorAll('.language-toggle');
const originalTextNodes = new WeakMap();

function translateTextNode(node, lang) {
  if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
  const original = originalTextNodes.get(node);
  const trimmed = original.trim();
  if (!trimmed) return;

  const normalized = trimmed.replace(/\s+/g, ' ');
  const translated = lang === 'en' ? translations.get(normalized) : trimmed;
  if (!translated) return;

  const leading = original.match(/^\s*/)?.[0] || '';
  const trailing = original.match(/\s*$/)?.[0] || '';
  node.nodeValue = `${leading}${translated}${trailing}`;
}

function walkTextNodes(element, lang) {
  if (!element) return;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => translateTextNode(node, lang));
}

function updateLanguageUI() {
  root.lang = currentLanguage === 'en' ? 'en' : 'pt-BR';
  languageButtons.forEach((button) => {
    button.querySelector('.lang-pt')?.classList.toggle('active', currentLanguage === 'pt');
    button.querySelector('.lang-en')?.classList.toggle('active', currentLanguage === 'en');
    const label = currentLanguage === 'en' ? 'Switch to Portuguese' : 'Alterar para inglês';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  });
  walkTextNodes(document.body, currentLanguage);
  updateThemeButtons();

  const pageName = document.querySelector('.case-copy h1')?.textContent.trim();
  if (pageName) document.title = `${pageName} | Isabela Montandon`;
  else if (document.body.classList.contains('portfolio-page')) document.title = currentLanguage === 'en' ? 'Projects | Isabela Montandon' : 'Projetos | Isabela Montandon';
  else document.title = currentLanguage === 'en' ? 'Isabela Montandon | Portfolio' : 'Isabela Montandon | Portfólio';
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    localStorage.setItem('portfolio-language', currentLanguage);
    updateLanguageUI();
  });
});

/* =========================
   ACCORDIONS
========================= */
const accordionCards = document.querySelectorAll('.accordion-card');
accordionCards.forEach((card) => {
  const button = card.querySelector('.accordion-toggle');
  const content = card.querySelector('.accordion-content');
  if (!button || !content) return;

  button.addEventListener('click', () => {
    const isOpen = card.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : '0px';

    if (!button.classList.contains('icon-only')) {
      const label = currentLanguage === 'en'
        ? (isOpen ? 'View less ' : 'View more ')
        : (isOpen ? 'Ver menos ' : 'Ver mais ');
      button.childNodes[0].nodeValue = label;
    }
  });
});

/* =========================
   NAVEGAÇÃO DA HOME
========================= */
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];
const topbar = document.querySelector('.topbar');
let navigationLock = null;
let navigationLockTimer = null;

function setActiveNav(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${sectionId}`;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function updateActiveNav() {
  if (!sections.length || !navLinks.length) return;
  if (navigationLock) {
    setActiveNav(navigationLock);
    return;
  }

  const documentHeight = document.documentElement.scrollHeight;
  const viewportBottom = window.scrollY + window.innerHeight;
  if (viewportBottom >= documentHeight - 12) {
    setActiveNav(sections[sections.length - 1].id);
    return;
  }

  const headerBottom = topbar?.getBoundingClientRect().bottom ?? 0;
  const availableHeight = Math.max(window.innerHeight - headerBottom, 0);
  const activationLine = headerBottom + availableHeight * 0.32;
  let currentId = sections[0].id;

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= activationLine) currentId = section.id;
    else break;
  }
  setActiveNav(currentId);
}

function releaseNavigationLock() {
  navigationLock = null;
  if (navigationLockTimer) {
    clearTimeout(navigationLockTimer);
    navigationLockTimer = null;
  }
  updateActiveNav();
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href')?.replace('#', '');
    if (!targetId) return;
    navigationLock = targetId;
    setActiveNav(targetId);
    if (navigationLockTimer) clearTimeout(navigationLockTimer);
    navigationLockTimer = setTimeout(releaseNavigationLock, 1000);
  });
});

if ('onscrollend' in window) window.addEventListener('scrollend', releaseNavigationLock);
window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('resize', updateActiveNav);
window.addEventListener('load', updateActiveNav);
updateActiveNav();

/* =========================
   FILTROS DO PORTFÓLIO
========================= */
const filterButtons = document.querySelectorAll('.filter-button');
const portfolioProjects = document.querySelectorAll('.portfolio-project[data-categories]');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    portfolioProjects.forEach((project) => {
      const categories = project.dataset.categories.split(' ');
      project.hidden = filter !== 'todos' && !categories.includes(filter);
    });
  });
});

/* =========================
   LIGHTBOX
========================= */
const mediaModal = document.querySelector('#media-modal');
const mediaModalContent = mediaModal?.querySelector('.media-modal-content');
const mediaModalClose = mediaModal?.querySelector('.media-modal-close');
const mediaTriggers = document.querySelectorAll('.media-trigger');

function closeMediaModal() {
  if (!mediaModal || !mediaModalContent) return;
  mediaModal.classList.remove('open');
  mediaModal.setAttribute('aria-hidden', 'true');
  mediaModalContent.innerHTML = '';
  document.body.style.overflow = '';
}

mediaTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    if (!mediaModal || !mediaModalContent) return;
    const source = trigger.dataset.media;
    const type = trigger.dataset.mediaType;
    if (!source) return;

    if (type === 'video') {
      mediaModalContent.innerHTML = `<video controls autoplay><source src="${source}" type="video/mp4"></video>`;
    } else {
      const alt = trigger.querySelector('img')?.alt || (currentLanguage === 'en' ? 'Project image' : 'Imagem do projeto');
      mediaModalContent.innerHTML = `<img src="${source}" alt="${alt}">`;
    }

    mediaModal.classList.add('open');
    mediaModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

mediaModalClose?.addEventListener('click', closeMediaModal);
mediaModal?.addEventListener('click', (event) => {
  if (event.target === mediaModal) closeMediaModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMediaModal();
});

updateLanguageUI();
