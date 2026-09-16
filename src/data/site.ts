// Typed bilingual content for the portfolio. English is the source copy and
// the Spanish arrays mirror its structure so the client-side language switch
// can update content by position.

import type {
  Bilingual,
  EducationEntry,
  ExperienceEntry,
  OtherLine,
  PublicationEntry,
  SkillGroup,
  StackItem,
  Str,
  WorkCase,
  WorkIntroEntry,
} from './types';

export const STR: Str = {
  en: {
    nav: { home: 'Home', work: 'Work', stack: 'Stack', experience: 'Experience', publication: 'Publication', education: 'Education', contact: 'Contact' },
    role: 'Data & AI Engineer',
    based: 'La Palma · Canary Islands / Remote',
    available: 'Open to new opportunities',
    heroLine1: 'Data engineering and AI systems',
    heroLine2: 'for privacy-sensitive operations.',
    manifest: 'Data engineering, generative and agentic AI, and local LLM infrastructure built for privacy-sensitive operations.',
    heroCta: 'Let’s talk',
    cta: { work: 'See past cases', cv: 'View CV', contact: 'Get in touch' },
    sections: { work: 'Selected work', otherLines: 'Other lines of work', experience: 'Experience', publication: 'Selected Publication', education: 'Education', stack: 'Stack', contact: 'Contact' },
    sectionSubs: {
      work: 'Recent selected works',
      otherLines: 'Transversal contributions',
      experience: 'Data, AI & teaching',
      publication: 'Research and operational practice',
      education: 'MSc Data Science · BSc Physics',
      stack: 'Overview',
    },
    crumbWork: 'Work',
    overview: 'Overview',
    stack: 'Stack',
    stackDisclosure: 'See more',
    stackCollapse: 'See less',
    notesLbl: 'Notes',
    yearLbl: 'Year',
    typeLbl: 'Domain',
    expSub: 'Selected experience and education',
    fmt: { present: 'Present' },
    privateNote: 'Recent work runs on private corporate infrastructure.',
  },
  es: {
    nav: { home: 'Inicio', work: 'Trabajo', stack: 'Stack', experience: 'Experiencia', publication: 'Publicación', education: 'Formación', contact: 'Contacto' },
    role: 'Data & AI Engineer',
    based: 'La Palma · Canarias / Remoto',
    available: 'Abierto a nuevas oportunidades',
    heroLine1: 'Ingeniería de datos y sistemas de IA',
    heroLine2: 'para operaciones con datos sensibles.',
    manifest: 'Ingeniería de datos, IA generativa y agéntica, e infraestructura local de LLMs para operaciones con requisitos de privacidad.',
    heroCta: 'Hablemos',
    cta: { work: 'Ver casos pasados', cv: 'Ver CV', contact: 'Contacto' },
    sections: { work: 'Trabajo destacado', otherLines: 'Otras líneas de trabajo', experience: 'Experiencia', publication: 'Publicación seleccionada', education: 'Formación', stack: 'Stack', contact: 'Contacto' },
    sectionSubs: {
      work: 'Trabajos destacados recientes',
      otherLines: 'Aportaciones transversales',
      experience: 'Datos, IA y docencia',
      publication: 'Investigación y práctica operacional',
      education: 'Máster en Ciencia de Datos · Grado en Física',
      stack: 'Overview',
    },
    crumbWork: 'Trabajo',
    overview: 'Resumen',
    stack: 'Stack',
    stackDisclosure: 'Ver más',
    stackCollapse: 'Ver menos',
    notesLbl: 'Notas',
    yearLbl: 'Año',
    typeLbl: 'Dominio',
    expSub: 'Experiencia y formación seleccionadas',
    fmt: { present: 'Actualidad' },
    privateNote: 'El trabajo reciente corre sobre infraestructura corporativa privada.',
  },
};

export const WORK_INTRO: Bilingual<WorkIntroEntry> = {
  en: {
    subtitle: 'Data and AI solutions in production, built inside a scientific organisation.',
  },
  es: {
    subtitle: 'Soluciones de datos e IA en producción, construidas dentro de una entidad científica.',
  },
};

export const WORK: WorkCase[] = [
  {
    id: '01', slug: 'agentic-tender-assistant',
    title: { en: 'Agentic Tender Assistant', es: 'Asistente agéntico para licitaciones' },
    domain: { en: 'Agentic RAG', es: 'RAG agéntico' },
    oneLiner: { en: 'A local, traceable assistant that supports the review and drafting of technical and administrative tender specifications.', es: 'Un asistente local y trazable que facilita la revisión y redacción de especificaciones técnicas y administrativas de licitaciones.' },
    sections: {
      en: [
        { key: 'problem', title: 'Problem', paragraphs: ['Tender work required technical teams to inspect long, regulated documents and repeatedly reconcile requirements with internal knowledge.'] },
        { key: 'work', title: 'What I did', paragraphs: ['Developed an agentic RAG assistant over internal documentation to review incoming specifications and assist with drafting new technical and administrative tender documents.'] },
        { key: 'approach', title: 'Architecture / Technical approach', paragraphs: ['Combined local LLMs, embeddings and vector retrieval with an agent graph. Deterministic code handles retrieval, templates, tables and validations; the model is limited to bounded language tasks where ambiguity requires it.'] },
        { key: 'impact', title: 'Impact', paragraphs: ['Reduced manual effort by about 50% while grounding outputs in internal sources and preserving traceability.'] },
        { key: 'decisions', title: 'Design decisions', paragraphs: ['Runs fully on-premises, with no external LLM API dependency or exposure of sensitive documentation.', 'Human review remains part of the workflow; the assistant supports analysis and drafting rather than making procurement decisions.'] },
      ],
      es: [
        { key: 'problem', title: 'Problema', paragraphs: ['El trabajo con licitaciones exigía revisar documentación extensa y regulada, y contrastar repetidamente los requisitos con el conocimiento interno.'] },
        { key: 'work', title: 'Qué hice', paragraphs: ['Desarrollé un asistente RAG agéntico sobre documentación interna para revisar especificaciones recibidas y apoyar la redacción de nuevos documentos técnicos y administrativos de licitación.'] },
        { key: 'approach', title: 'Arquitectura / Enfoque técnico', paragraphs: ['Combiné LLMs locales, embeddings y recuperación vectorial con un grafo de agentes. El código determinista gestiona recuperación, plantillas, tablas y validaciones; el modelo se limita a tareas lingüísticas acotadas donde existe ambigüedad.'] },
        { key: 'impact', title: 'Impacto', paragraphs: ['Redujo aproximadamente un 50% el esfuerzo manual, fundamentando los resultados en fuentes internas y manteniendo la trazabilidad.'] },
        { key: 'decisions', title: 'Decisiones de diseño', paragraphs: ['Funciona completamente on-premises, sin depender de APIs externas de LLM ni exponer documentación sensible.', 'La revisión humana sigue formando parte del flujo: el asistente apoya el análisis y la redacción, pero no toma decisiones de contratación.'] },
      ],
    },
    stack: ['LangGraph', 'Local LLMs', 'Embeddings', 'Vector database', 'RAG', 'Python'],
  },
  {
    id: '02', slug: 'deltalake',
    title: { en: 'On-premises Data Lake Platform', es: 'Plataforma de data lake on-premises' },
    domain: { en: 'Data engineering', es: 'Ingeniería de datos' },
    oneLiner: { en: 'An on-premises analytical platform that consolidates operational data through governed batch and change-data-capture patterns.', es: 'Una plataforma analítica on-premises que consolida datos operacionales mediante patrones gobernados de procesamiento batch y captura de cambios.' },
    sections: {
      en: [
        { key: 'problem', title: 'Problem', paragraphs: ['Operational data was spread across systems and teams, making cross-source analysis slow and leaving gaps in the analytical record.'] },
        { key: 'work', title: 'What I did', paragraphs: ['Built and maintained PySpark ETL pipelines for the corporate on-premises data lake, filling gaps spanning several months and producing clean, normalized and aggregated datasets. Most supported source onboarding followed reusable pipeline patterns and configuration, with engineering work retained for exceptional integrations.'] },
        { key: 'approach', title: 'Architecture / Technical approach', paragraphs: ['Used a bronze, silver and gold medallion architecture over Apache Ozone, with Apache Iceberg tables, Kafka and Debezium for supported change-data-capture flows, Trino for querying, and OpenMetadata for governance and discovery.', '“Deltalake” was the platform’s internal name; it did not refer to Databricks Delta Lake.'] },
        { key: 'impact', title: 'Impact', paragraphs: ['Recovered several months of missing data and reduced the time needed to derive insights by about 40%.'] },
        { key: 'decisions', title: 'Design decisions', paragraphs: ['Kept compute, storage and metadata concerns separable so the platform could evolve on-premises without coupling the data model to a single processing engine.', 'Favoured repeatable ingestion patterns while treating unusual sources as explicit engineering work rather than claiming every source was configuration-only.'] },
      ],
      es: [
        { key: 'problem', title: 'Problema', paragraphs: ['Los datos operacionales estaban repartidos entre sistemas y equipos, lo que ralentizaba el análisis entre fuentes y dejaba lagunas en el histórico analítico.'] },
        { key: 'work', title: 'Qué hice', paragraphs: ['Construí y mantuve pipelines ETL con PySpark para el data lake corporativo on-premises, completando lagunas de varios meses y generando datasets limpios, normalizados y agregados. La mayoría de las fuentes compatibles se incorporaban mediante patrones reutilizables y configuración, reservando trabajo de ingeniería para integraciones excepcionales.'] },
        { key: 'approach', title: 'Arquitectura / Enfoque técnico', paragraphs: ['Utilicé una arquitectura medallion bronze, silver y gold sobre Apache Ozone, con tablas Apache Iceberg, Kafka y Debezium para flujos compatibles de captura de cambios, Trino para consulta y OpenMetadata para gobierno y descubrimiento.', '“Deltalake” era el nombre interno de la plataforma; no hacía referencia a Databricks Delta Lake.'] },
        { key: 'impact', title: 'Impacto', paragraphs: ['Recuperé varios meses de datos ausentes y reduje aproximadamente un 40% el tiempo necesario para obtener insights.'] },
        { key: 'decisions', title: 'Decisiones de diseño', paragraphs: ['Mantuve separados el cómputo, el almacenamiento y los metadatos para que la plataforma pudiera evolucionar on-premises sin ligar el modelo de datos a un único motor de procesamiento.', 'Priorizamos patrones repetibles de ingesta, tratando las fuentes inusuales como trabajo explícito de ingeniería en lugar de afirmar que cualquier fuente se añadía solo mediante configuración.'] },
      ],
    },
    stack: ['PySpark', 'Apache Iceberg', 'Apache Ozone', 'Kafka', 'Debezium', 'Trino', 'OpenMetadata', 'Medallion architecture'],
  },
  {
    id: '03', slug: 'operational-procedures',
    title: { en: 'COMET: Human-in-the-loop Operational Platform', es: 'COMET: plataforma operacional human-in-the-loop' },
    domain: { en: 'Operational intelligence', es: 'Inteligencia operacional' },
    oneLiner: { en: 'A controlled platform for digital SOPs and runbooks, combining guided execution, auditability and human-validated AI assistance.', es: 'Una plataforma controlada para SOPs y runbooks digitales que combina ejecución guiada, auditabilidad y asistencia de IA validada por personas.' },
    sections: {
      en: [
        { key: 'problem', title: 'Problem', paragraphs: ['Critical operating procedures were distributed across documents and tacit knowledge, increasing cognitive load and making consistent execution and review difficult.'] },
        { key: 'work', title: 'What I did', paragraphs: ['Led the development of COMET to model, publish and execute digital SOPs and runbooks through separate authoring and operator experiences.'] },
        { key: 'approach', title: 'Architecture / Technical approach', paragraphs: ['Combined versioned procedures, role-aware access, execution records and auditable state transitions with guardrailed AI-assisted workflows.'] },
        { key: 'impact', title: 'Impact', paragraphs: ['Unified procedure drafting, publication, guided execution and audit while reducing operator cognitive load and preserving an inspectable operational record.'] },
        { key: 'decisions', title: 'Design decisions', paragraphs: ['AI suggestions are constrained by guardrails and require human validation. The final operational decision remains under explicit human control.', 'Versioning and auditability are first-class properties so changes to instructions and each execution can be reviewed.'] },
      ],
      es: [
        { key: 'problem', title: 'Problema', paragraphs: ['Los procedimientos operacionales críticos estaban distribuidos entre documentos y conocimiento tácito, aumentando la carga cognitiva y dificultando su ejecución y revisión consistentes.'] },
        { key: 'work', title: 'Qué hice', paragraphs: ['Lideré el desarrollo de COMET para modelar, publicar y ejecutar SOPs y runbooks digitales mediante experiencias separadas de autoría y operación.'] },
        { key: 'approach', title: 'Arquitectura / Enfoque técnico', paragraphs: ['Combiné procedimientos versionados, acceso basado en roles, registros de ejecución y transiciones de estado auditables con workflows asistidos por IA y protegidos mediante guardrails.'] },
        { key: 'impact', title: 'Impacto', paragraphs: ['Unificó la redacción, publicación, ejecución guiada y auditoría de procedimientos, reduciendo la carga cognitiva del operador y conservando un registro operacional inspeccionable.'] },
        { key: 'decisions', title: 'Decisiones de diseño', paragraphs: ['Las sugerencias de IA están limitadas por guardrails y requieren validación humana. La decisión operacional final permanece bajo control humano explícito.', 'El versionado y la auditabilidad son propiedades de primer nivel para que los cambios en las instrucciones y cada ejecución puedan revisarse.'] },
      ],
    },
    stack: ['React', 'Node.js', 'TypeScript', 'SOPs', 'Runbooks', 'Human-in-the-loop AI'],
    relatedPublicationId: 'spie-2026-comet',
  },
];

export const OTHER_LINES: OtherLine[] = [
  {
    id: '04',
    slug: 'llm-serving',
    title: {
      en: 'LLMs as a service on shared GPU cluster',
      es: 'LLMs como servicio sobre cluster GPU compartido',
    },
    summary: {
      en: 'Open-source models served internally on a multi-node GPU cluster. Generative AI capabilities available to other teams without leaving the organisation.',
      es: 'Modelos open-source servidos internamente sobre un cluster GPU multi-nodo. Capacidades de IA generativa al alcance de otros equipos sin salir de la organización.',
    },
    body: {
      en: 'Deployment of open-source models served with vLLM on a multi-node SLURM cluster, exposed over the internal network to other teams. Included auxiliary services like Marker-PDF on GPU. The organisation gained access to generative AI capabilities without depending on external APIs or exposing sensitive data.',
      es: 'Despliegue de modelos open-source en serving con vLLM sobre cluster SLURM multi-nodo, expuestos por red interna a otros equipos. Incluyó servicios auxiliares como Marker-PDF sobre GPU. La organización pasó a tener acceso a capacidades de IA generativa sin depender de APIs externas ni exponer datos sensibles.',
    },
    chips: ['vLLM', 'SLURM', 'RHEL'],
  },
  {
    id: '05',
    slug: 'internal-web-tools',
    title: {
      en: 'Internal web tooling for digital transformation',
      es: 'Herramientas web internas para transformación digital',
    },
    summary: {
      en: 'Asynchronous platform for telescope team leads to coordinate and validate usage and performance statistics across multiple operational sources, without periodic meetings or scattered spreadsheets.',
      es: 'Plataforma asíncrona para que responsables de equipos del telescopio coordinen y validen estadísticas de uso y rendimiento cruzando varias fuentes, sin reuniones periódicas ni hojas de cálculo dispersas.',
    },
    body: {
      en: 'Async platform that lets telescope team leads coordinate and validate usage and performance statistics by cross-referencing data from multiple operational sources. It replaced the dependency on periodic meetings and Excel-style spreadsheets to consolidate scattered metrics, giving each team lead an auditable view they can review on their own schedule.',
      es: 'Plataforma asíncrona para que los responsables de equipos del telescopio coordinen y validen las estadísticas de uso y rendimiento cruzando información de varias fuentes operacionales. Reemplaza la dependencia de reuniones periódicas y de hojas de cálculo tipo Excel para consolidar métricas dispersas, dándole a cada responsable una vista auditable que puede revisar a su propio ritmo.',
    },
    chips: ['Node.js', 'TypeScript', 'MySQL'],
  },
  {
    id: '06',
    slug: 'exploratory-prototyping',
    title: {
      en: 'Exploratory prototyping with the team',
      es: 'Prototipado exploratorio con el equipo',
    },
    summary: {
      en: 'Proofs of concept around emerging tech. Recent example: an agentic system to talk to your data via voice and get visualisations on demand.',
      es: 'Pruebas de concepto sobre tecnologías emergentes. Ejemplo reciente: un sistema agéntico para hablar con tus datos por voz y obtener visualizaciones bajo demanda.',
    },
    body: {
      en: 'Work on proofs of concept around emerging technologies. The most recent example: an agentic system that, using natural language and speech-to-text, queries the data it needs from the corporate lakehouse, takes context from a dedicated platform, and generates visualisations on demand that the user can iterate on by simply speaking. The intent is to keep the team in direct contact with what is coming, so adoption decisions are better-informed when the moment arrives.',
      es: 'Trabajo en pruebas de concepto sobre tecnologías emergentes. El ejemplo más reciente: un sistema agéntico que, mediante lenguaje natural y speech-to-text, consulta la información que necesita del deltalake corporativo, toma el contexto de una plataforma dedicada a ello y genera visualizaciones bajo demanda sobre las que se puede iterar en lengua verbal natural.',
    },
    chips: ['Langgraph', 'MQTT', 'vLLM', 'Trino'],
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: '01', period: { en: '2025 - 2026', es: '2025 - 2026' }, role: { en: 'Data & AI Engineer', es: 'Data & AI Engineer' }, org: { en: 'Gran Telescopio Canarias (GRANTECAN)', es: 'Gran Telescopio Canarias (GRANTECAN)' }, loc: 'La Palma, ES', tag: { en: 'Scientific organisation', es: 'Entidad científica' },
    desc: { en: 'Data engineering, generative AI and product development for scientific and administrative operations, with privacy-sensitive workloads kept on-premises.', es: 'Ingeniería de datos, IA generativa y desarrollo de producto para operaciones científicas y administrativas, manteniendo on-premises las cargas con datos sensibles.' },
    bullets: {
      en: ['Developed an agentic RAG assistant using local LLMs to review and draft technical and administrative tender specifications, reducing manual effort by ~50% and grounding outputs in internal documentation.', 'Developed a conversational data assistant with speech recognition, LangGraph and RAG, enabling non-technical employees to query data lake data in natural language and receive visual responses.', 'Built PySpark ETL pipelines for the on-premises data lake, recovering several months of missing data and delivering clean, normalized and aggregated datasets that reduced time to insight by ~40%.', 'Developed and maintained a React and Node.js application for telescope operating-time and value statistics, replacing Excel and synchronous onsite coordination with a shared asynchronous workflow; a monthly 4–5-hour process per contributor became about five minutes of daily upkeep.', 'Deployed local LLM inference infrastructure with vLLM, SLURM and RHEL, serving concurrent users at ~200 tokens/s while maintaining full data sovereignty.', 'Led COMET, a human-in-the-loop operational platform combining digital SOPs and runbooks with versioning, auditability, guardrails, human validation and controlled final decisions.', 'Co-authored the 2026 SPIE publication “Cognitive artificial intelligence ecosystem with intelligent agents for GTC operations”.'],
      es: ['Desarrollé un asistente RAG agéntico con LLMs locales para revisar y redactar especificaciones técnicas y administrativas de licitaciones, reduciendo ~50% el esfuerzo manual y fundamentando los resultados en documentación interna.', 'Desarrollé un asistente conversacional de datos con reconocimiento de voz, LangGraph y RAG, permitiendo a empleados no técnicos consultar datos del data lake en lenguaje natural y recibir respuestas visuales.', 'Construí pipelines ETL con PySpark para el data lake on-premises, recuperando varios meses de datos ausentes y entregando datasets limpios, normalizados y agregados que redujeron ~40% el tiempo necesario para obtener insights.', 'Desarrollé y mantuve una aplicación React y Node.js para estadísticas de tiempo de operación y valor del telescopio, sustituyendo Excel y la coordinación presencial síncrona por un workflow asíncrono compartido; un proceso mensual de 4–5 horas por participante pasó a unos cinco minutos de mantenimiento diario.', 'Desplegué infraestructura local de inferencia de LLMs con vLLM, SLURM y RHEL, atendiendo usuarios concurrentes a ~200 tokens/s y manteniendo soberanía total del dato.', 'Lideré COMET, una plataforma operacional human-in-the-loop que combina SOPs y runbooks digitales con versionado, auditabilidad, guardrails, validación humana y decisiones finales controladas.', 'Coautor de la publicación SPIE de 2026 “Cognitive artificial intelligence ecosystem with intelligent agents for GTC operations”.'],
    },
  },
  {
    id: '02', period: { en: '2024 - 2025', es: '2024 - 2025' }, role: { en: 'Data Scientist', es: 'Data Scientist' }, org: { en: 'Cabildo of La Palma', es: 'Cabildo de La Palma' }, loc: 'La Palma, ES', tag: { en: 'Public sector', es: 'Sector público' },
    desc: { en: 'Scientific data analysis and decision-support tooling for municipal services after the 2021 Tajogaite eruption.', es: 'Análisis científico de datos y herramientas de apoyo a decisiones para servicios públicos tras la erupción de Tajogaite de 2021.' },
    bullets: {
      en: ['Led EDA with Python and R across 5+ air-quality datasets, identifying a Pearson correlation of ~0.6 between coastal CO₂ levels and tidal cycles; the finding informed the Emergency Department’s review of the post-eruption habitability protocol.', 'Built Power BI, Tableau and ArcGIS Online dashboards and automated weekly Python workflows, saving ~12 hours per month for non-technical stakeholders.', 'Standardized and integrated 3M+ legacy records in PostgreSQL, extending the accessible meteorological archive from 2022 back to 2016.'],
      es: ['Lideré EDA con Python y R sobre más de 5 datasets de calidad del aire, identificando una correlación de Pearson de ~0.6 entre el CO₂ costero y los ciclos de marea; el hallazgo sirvió de base para la revisión del protocolo de habitabilidad post-erupción por parte de Emergencias.', 'Construí dashboards con Power BI, Tableau y ArcGIS Online y automaticé workflows semanales con Python, ahorrando ~12 horas al mes a usuarios no técnicos.', 'Estandaricé e integré más de 3 millones de registros legacy en PostgreSQL, ampliando el histórico meteorológico accesible desde 2022 hasta 2016.'],
    },
  },
  {
    id: '03', period: { en: '2022 - 2023', es: '2022 - 2023' }, role: { en: 'Mathematics, Physics & Chemistry Tutor', es: 'Profesor particular de Matemáticas, Física y Química' }, org: { en: 'Independent', es: 'Independiente' }, loc: 'Tenerife, ES', tag: { en: 'Teaching', es: 'Docencia' },
    desc: { en: 'One-to-one secondary-school and pre-university tutoring, delivered in person and online with personalised materials.', es: 'Clases individuales de secundaria y bachillerato, presenciales y online, con materiales personalizados.' }, bullets: { en: [], es: [] },
  },
];

export const PUBLICATIONS: PublicationEntry[] = [{ id: 'spie-2026-comet', title: 'Cognitive artificial intelligence ecosystem with intelligent agents for GTC operations', venue: 'Proceedings of SPIE', year: 2026, role: { en: 'Co-author', es: 'Coautor' }, doi: 'https://doi.org/10.1117/12.3104049' }];

export const EDUCATION: EducationEntry[] = [
  { id: '01', period: { en: '2025', es: '2025' }, title: { en: 'MSc in Data Science and Big Data', es: 'Máster en Ciencia de Datos y Big Data' }, org: { en: 'Open University of Catalonia (UOC)', es: 'Universitat Oberta de Catalunya (UOC)' }, loc: 'Remote, ES', tag: { en: 'Master’s degree', es: 'Máster universitario' }, desc: { en: 'Machine learning, deep learning, NLP, data visualisation and applied projects, including a thesis on sales forecasting and audience segmentation.', es: 'Machine learning, deep learning, NLP, visualización de datos y proyectos aplicados, incluido un TFM sobre previsión de ventas y segmentación de audiencias.' } },
  { id: '02', period: { en: '2021', es: '2021' }, title: { en: 'BSc in Physics', es: 'Grado en Física' }, org: { en: 'University of La Laguna (ULL)', es: 'Universidad de La Laguna (ULL)' }, loc: 'Tenerife, ES', tag: { en: 'Bachelor’s degree', es: 'Grado universitario' }, desc: { en: 'Scientific and mathematical foundations, with a thesis on photometric calibration of the EMIR instrument using Python.', es: 'Fundamentos científicos y matemáticos, con un TFG sobre la calibración fotométrica del instrumento EMIR mediante Python.' } },
  { id: '03', period: { en: 'Ongoing', es: 'En curso' }, title: { en: 'Continuous coursework', es: 'Formación continua' }, org: { en: 'Coursera · Udacity · AWS · Udemy', es: 'Coursera · Udacity · AWS · Udemy' }, tag: { en: 'Training & exposure', es: 'Formación y exposición' }, desc: { en: 'Coursework in data analytics, cloud fundamentals, agentic AI, Python and Kubernetes. Kubernetes is training exposure rather than a primary production competency.', es: 'Formación en data analytics, fundamentos cloud, IA agéntica, Python y Kubernetes. Kubernetes corresponde a formación y exposición, no a una competencia principal en producción.' } },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { id: 'programming', label: { en: 'Programming', es: 'Programación' }, items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'R', 'Jinja', 'LaTeX'] },
  { id: 'ai-ml', label: { en: 'Generative AI & ML', es: 'IA generativa y ML' }, items: ['LLMs', 'RAG', 'Agentic systems', 'LangGraph', 'LangChain', 'vLLM', 'Embeddings', 'Vector databases', 'NLP', 'PyTorch', 'TensorFlow', 'Scikit-learn'] },
  { id: 'data-engineering', label: { en: 'Data Engineering', es: 'Ingeniería de datos' }, items: ['PySpark', 'On-premises data lakes', 'Medallion architecture', 'ETL', 'Apache Kafka', 'Trino', 'PostgreSQL', 'MySQL'] },
  { id: 'infrastructure', label: { en: 'Infrastructure & Deployment', es: 'Infraestructura y despliegue' }, items: ['Linux', 'RHEL', 'SLURM', 'Docker', 'Git', 'Nginx', 'Apache HTTP Server'] },
  { id: 'web-visualization', label: { en: 'Web & Visualization', es: 'Web y visualización' }, items: ['React', 'Node.js', 'Power BI', 'Tableau', 'Grafana', 'ArcGIS Online', 'Matplotlib', 'Plotly'] },
  { id: 'ai-tools', label: { en: 'AI Development Tools', es: 'Herramientas de desarrollo con IA' }, items: ['Claude Code', 'Codex', 'Cursor', 'OpenCode', 'Agent configuration', 'Tool integration', 'Workflow automation'] },
];

// Representative technologies shown in the marquee. The complete stack is rendered by group below.
export const HOME_STACK: StackItem[] = [
  { label: 'Python', slug: 'python', iconPath: 'icons/python.svg' }, { label: 'LangGraph', slug: null, iconPath: 'icons/langgraph.svg' }, { label: 'vLLM', slug: 'vllm', iconPath: 'icons/vllm.svg' }, { label: 'PyTorch', slug: 'pytorch', iconPath: 'icons/pytorch.svg' }, { label: 'SQL', slug: 'postgresql', iconPath: 'icons/postgresql.svg' }, { label: 'Apache Kafka', slug: 'apachekafka', iconPath: 'icons/apachekafka.svg' }, { label: 'PySpark', slug: 'apachespark', iconPath: 'icons/apachespark.svg' }, { label: 'Linux', slug: 'linux', iconPath: 'icons/linux.svg' }, { label: 'Docker', slug: 'docker', iconPath: 'icons/docker.svg' }, { label: 'Git', slug: 'git', iconPath: 'icons/git.svg' }, { label: 'Node.js', slug: 'nodedotjs', iconPath: 'icons/nodedotjs.svg' }, { label: 'React', slug: 'react', iconPath: 'icons/react.svg' },
];
