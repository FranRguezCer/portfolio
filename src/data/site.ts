// Bilingual site content ported verbatim from the Claude Design handoff:
//   project/design_handoff_portfolio/mocks-shared.jsx  → STR, WORK_INTRO,
//                                                       WORK, OTHER_LINES,
//                                                       EXPERIENCE, EDUCATION
//   project/design_handoff_portfolio/prototype.jsx     → HOME_STACK
//
// All copy is final per the handoff README ("All copy in the bundle is the
// final copy as approved by the design owner. Do not paraphrase."). Any edit
// to the copy must go upstream to the design source first.

import type {
  Bilingual,
  EducationEntry,
  ExperienceEntry,
  OtherLine,
  StackItem,
  Str,
  WorkCase,
  WorkIntroEntry,
} from './types';

export const STR: Str = {
  en: {
    nav: { home: 'Home', work: 'Work', stack: 'Stack', experience: 'Experience', education: 'Education', contact: 'Contact' },
    role: 'Data & AI Engineer',
    based: 'La Palma · Canary Islands / Remote',
    available: 'Open to new opportunities',
    heroLine1: 'Data platforms',
    heroLine2: 'and AI systems, in real conditions.',
    manifest: 'Data-driven, AI-powered solutions.',
    heroCta: 'Let’s talk',
    cta: { work: 'See past cases', cv: 'View CV', contact: 'Get in touch' },
    sections: { work: 'A few success cases', otherLines: 'Other lines of work', experience: 'Experience', education: 'Education', stack: 'Stack', contact: 'Contact' },
    sectionSubs: {
      work: 'Recent selected works',
      otherLines: 'Transversal contributions',
      experience: 'Data, AI & teaching',
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
    nav: { home: 'Inicio', work: 'Trabajo', stack: 'Stack', experience: 'Experiencia', education: 'Formación', contact: 'Contacto' },
    role: 'Data & AI Engineer',
    based: 'La Palma · Canarias / Remoto',
    available: 'Abierto a nuevas oportunidades',
    heroLine1: 'Plataformas de datos',
    heroLine2: 'y sistemas con IA, en condiciones reales.',
    manifest: 'Soluciones basadas en datos e impulsadas por IA.',
    heroCta: 'Hablemos',
    cta: { work: 'Ver casos pasados', cv: 'Ver CV', contact: 'Contacto' },
    sections: { work: 'Algunos casos de éxito', otherLines: 'Otras líneas de trabajo', experience: 'Experiencia', education: 'Formación', stack: 'Stack', contact: 'Contacto' },
    sectionSubs: {
      work: 'Trabajos destacados recientes',
      otherLines: 'Aportaciones transversales',
      experience: 'Datos, IA y docencia',
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
    id: '01',
    slug: 'agentic-tender-assistant',
    title: {
      en: 'Agentic assistant for tender evaluation and drafting',
      es: 'Asistente agéntico para evaluación y redacción de pliegos',
    },
    domain: { en: 'AI agents', es: 'Agentes IA' },
    oneLiner: {
      en: 'AI pipeline that automated two ends of a heavy documentation cycle: evaluating incoming proposals and assisting the drafting of outgoing specifications.',
      es: 'Sistema impulsado por IA que agiliza la evaluación de pliegos técnicos así como la redacción de los mismos.',
    },
    body: {
      en: [
        'An assistant built on top of an agent graph, operating over a dense and highly regulated body of documents. Manual work by technical analysts on long legal documents went from days to hours, with results that are traceable rather than opaque.',
        'The design is deliberately hybrid: the language model only steps in where it actually adds value: reading ambiguous passages, rewriting free-form text. The heavy lifting (document retrieval, templates, tables, validations) stays in deterministic code, which is auditable, predictable and cheap to maintain.',
        'The whole system runs on-premise. No data leaves the organization, and there is no dependency on external LLM APIs.',
      ],
      es: [
        'Asistente construido sobre un grafo de agentes que opera sobre un dominio documental denso y altamente regulado. El trabajo manual de analistas técnicos sobre documentos legales largos pasó de días a horas, con resultados trazables en lugar de opacos.',
        'El diseño es deliberadamente híbrido: el modelo de lenguaje solo interviene donde aporta valor real: leer párrafos ambiguos, reescribir texto libre. El peso del sistema (recuperación documental, plantillas, tablas, validaciones) vive en código determinista, auditable, predecible y barato de mantener.',
        'Todo el sistema corre on-premise. Los datos no salen de la organización y no hay dependencia de APIs externas de LLM.',
      ],
    },
    notesLabel: { en: 'Design decisions worth highlighting', es: 'Decisiones de diseño destacables' },
    notes: {
      en: [
        'Predictability over flexibility: the LLM is used in bounded sub-steps, not as a black box that decides what to do.',
        'Natural language where it earns its place; classic code where it does not. Fewer surprises, controlled cost.',
        'Fully on-premise deployment from day one.',
      ],
      es: [
        'Predictibilidad sobre flexibilidad: el LLM se usa por pasos acotados, no como caja negra que decide qué hacer.',
        'Lenguaje natural donde aporta valor; código clásico donde no. Menos sorpresas, coste controlado.',
        'Despliegue totalmente on-premise desde el primer día.',
      ],
    },
    stack: ['LangGraph', 'Ollama / vLLM', 'Embedding + ChromaDB', 'RAG', 'MCP', 'Python'],
  },
  {
    id: '02',
    slug: 'deltalake',
    title: {
      en: 'Deltalake',
      es: 'Deltalake',
    },
    domain: { en: 'Data platform', es: 'Plataforma de datos' },
    oneLiner: {
      en: 'A unified data platform that broke departmental silos and centralised the organisation’s single source of analytical truth.',
      es: 'Plataforma de datos unificada que rompe los silos departamentales y centraliza la fuente de verdad analítica de la organización.',
    },
    body: {
      en: [
        'Maintenance and evolution of the corporate Deltalake, a medallion-structured platform (bronze/silver/gold) on replicated buckets with partitioned parquet files, using Apache Iceberg as the catalog layer and OpenMetadata for governance, lineage and data discovery.',
        'Batch pipelines on PySpark over Kubernetes. Real-time ingestion combined Debezium and Kafka to capture changes from heterogeneous operational systems. Bronze ingested raw data, silver handled aggregation, cleaning and normalisation, and gold was generated on demand to feed internal analytics, downstream AI processes and leadership reporting.',
      ],
      es: [
        'Mantenimiento y evolución del Deltalake corporativo, una plataforma con estructura medallion (bronze/silver/gold) sobre buckets con replicación y ficheros parquet particionados, usando Apache Iceberg como capa de catálogo y OpenMetadata para gobernanza, linaje y descubrimiento de datos.',
        'Pipelines batch sobre PySpark en Kubernetes. La ingesta en tiempo real combinó Debezium y Kafka para capturar cambios desde sistemas operacionales heterogéneos. La capa bronze ingesta los datos crudos, la silver se encarga de la agregación, limpieza y normalización, y la capa gold se genera bajo demanda para alimentar analítica interna, procesos de IA downstream y reporting de liderazgo.',
      ],
    },
    notesLabel: { en: 'Context notes', es: 'Notas de contexto' },
    notes: {
      en: [
        'Easily scalable on-premise infrastructure.',
        'Designed to evolve without rewrites: adding a new data source is a configuration operation, not an engineering one.',
      ],
      es: [
        'Infraestructura on-premise fácilmente escalable.',
        'Diseñado para evolucionar sin rewrites: agregar una nueva fuente de datos es una operación de configuración, no de ingeniería.',
      ],
    },
    stack: ['PySpark', 'Apache Iceberg', 'Apache Ozone', 'Debezium · Kafka', 'Kubernetes', 'Docker'],
  },
  {
    id: '03',
    slug: 'operational-procedures',
    title: {
      en: 'Operational procedures platform',
      es: 'Plataforma de procedimientos operativos',
    },
    domain: { en: 'Process digitalization', es: 'Digitalización de procesos' },
    oneLiner: {
      en: 'Web application that let non-technical users define, maintain, and execute complex operational procedures with full traceability.',
      es: 'Herramienta digital que permite a usuarios no técnicos definir y mantener procedimientos que se ejecutan contra sistemas industriales en un entorno web común a los operadores que ejecutan dichos procedimientos operativos complejos con guardrails y trazabilidad completa.',
    },
    body: {
      en: [
        'Initiative to digitalize and standardize the organization’s operational procedures, which historically lived in scattered documentation and the tacit knowledge of veteran operators.',
        'The platform separated two user profiles: the manager, who defines procedures through a visual composition interface; and the operator, who executes them on a guided view. The system turned tacit knowledge into a maintainable, versionable, and auditable asset.',
      ],
      es: [
        'Iniciativa de digitalización y estandarización de los procedimientos operativos de la organización, que históricamente vivían en documentación dispersa y conocimiento implícito de operadores veteranos.',
        'La plataforma diferencia dos perfiles de usuario: el responsable, que define los procedimientos mediante una interfaz visual de composición; y el operador, que los ejecuta sobre una vista guiada. El sistema convirtió conocimiento tácito en activo mantenible, versionable y auditable.',
      ],
    },
    notesLabel: { en: 'Why it matters', es: 'Por qué importa' },
    notes: {
      en: [
        'Designed under Triple-A principles: auditing, authentication, authorization.',
        'Full execution traceability over critical processes.',
        'Lowered the cost of onboarding new operational staff.',
      ],
      es: [
        'Diseño bajo principios Triple-A: auditoría, autenticación y autorización.',
        'Trazabilidad completa de ejecución sobre procesos críticos.',
        'Reducción del coste de incorporación de personal operativo nuevo.',
      ],
    },
    stack: ['React', 'Node.js', 'Vite'],
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
    id: '01',
    period: { en: '2025 - Present', es: '2025 - Actualidad' },
    role: { en: 'Data & AI Engineer', es: 'Data & AI Engineer' },
    org: { en: 'Gran Telescopio Canarias', es: 'Gran Telescopio Canarias' },
    loc: 'La Palma, ES',
    tag: { en: 'Scientific organisation', es: 'Entidad científica' },
    desc: {
      en: 'Contributions to the data platform and AI systems supporting the scientific and administrative operation of the Gran Telescopio Canarias. I work at the boundary between infrastructure, data engineering and on-premise agentic systems.',
      es: 'Contribuciones a la plataforma de datos y los sistemas de IA que dan soporte a la operación científica y administrativa del Gran Telescopio Canarias. Trabajo en la frontera entre infraestructura, ingeniería de datos y sistemas agénticos on-premise.',
    },
    bullets: {
      en: [
        'Built an agentic assistant for evaluation and assisted drafting of technical tender documents, based on RAG over embeddings stored in a vector database. Cuts the team’s manual workload by ~50% and delivers full traceability. The system runs 100% on-premise, with no dependency on external APIs and no exposure of sensitive data.',
        'Contributed to the corporate Deltalake with large real-time volumes of data, consolidating a single analytical source of truth that serves multiple domains and use cases across the organisation. This democratised access to that data and enabled on-demand cross-referencing of information from different sources.',
        'Designed a digital tool for operational procedures with role separation (manager / operator), version control and execution traceability. Reduces operators’ cognitive load and unifies drafting, publication, execution and audit of critical instructions.',
        'Built an asynchronous coordination platform for team leads to validate telescope usage and performance statistics by cross-referencing multiple operational sources. Removed the dependency on periodic meetings and Excel-based reporting, giving each lead an auditable view to review on their own schedule.',
        'Deployed LLMs as an internal service on a shared GPU cluster (SLURM), with on-premise observability. Opens up generative-AI capabilities to the rest of the teams with no per-token cost and no data leakage.',
      ],
      es: [
        'Construí un asistente agéntico para evaluación y redacción asistida de pliegos técnicos, basado en RAG sobre embeddings almacenados en una base de datos vectorial. Reduce ~50% la carga manual del equipo y entrega trazabilidad completa. Sistema 100% on-premise, sin dependencia de APIs externas ni exposición de datos sensibles.',
        'Contribuí al Deltalake corporativo con grandes volúmenes de datos en tiempo real, consolidando una fuente única de verdad analítica que sirve a múltiples dominios y casos de uso dentro de la organización. Esto democratizó el acceso a esos datos y facilitó el cruce de información de distintas fuentes bajo demanda.',
        'Diseñé una herramienta digital de procedimientos operativos con roles diferenciados (responsable / operador), control de versiones y trazabilidad de ejecución. Reduce la carga cognitiva de los operadores y unifica redacción, publicación, ejecución y auditoría de instrucciones críticas.',
        'Construí una plataforma de coordinación asíncrona para que responsables de equipos validen estadísticas de uso y rendimiento del telescopio cruzando varias fuentes operacionales. Eliminó la dependencia de reuniones periódicas y reporting en Excel, dándole a cada responsable una vista auditable que puede revisar a su propio ritmo.',
        'Desplegué LLMs como servicio interno sobre cluster GPU compartido (SLURM), con observabilidad on-premise. Habilita acceso a capacidades de IA generativa al resto de equipos sin coste por token ni fuga de datos.',
      ],
    },
  },
  {
    id: '02',
    period: { en: '2024 - 2025', es: '2024 - 2025' },
    role: { en: 'Data Scientist', es: 'Data Scientist' },
    org: { en: 'Cabildo Insular de La Palma', es: 'Cabildo Insular de La Palma' },
    loc: 'La Palma, ES',
    tag: { en: 'Public sector', es: 'Sector público' },
    desc: {
      en: 'Applied scientific analysis for municipal services in the aftermath of the 2021 Tajogaite volcano eruption on the island of La Palma. I built the data infrastructure that the emergencies department used for weekly decisions on the affected areas, and delivered findings that changed the post-eruption habitability protocol.',
      es: 'Análisis científico aplicado a servicios municipales tras la erupción volcánica del volcán Tajogaite de 2021 en la isla de La Palma. Construí la infraestructura de datos que el Departamento de emergencias usó para tomar decisiones semanales sobre las zonas afectadas, y entregué hallazgos que cambiaron el protocolo de evaluación de habitabilidad post-erupción.',
    },
    bullets: {
      en: [
        'Automated weekly reporting of air quality and CO₂ with Python + ArcGIS Online. Eliminated ~12 hours/week of manual work and turned volcanic monitoring at Puerto Naos into actionable data for 6+ non-technical stakeholders.',
        'Discovered through EDA a Pearson correlation of ~0.6 between coastal CO₂ and tidal cycles, a previously undocumented gas-accumulation mechanism. Led Emergencies to revise the safety protocol for inhabited coastal areas after the eruption.',
        'Designed interactive dashboards in Power BI and Tableau for emergencies, waste management and HR (1000+ employees). The CO₂ dashboard became the emergencies team’s go-to tool for their daily habitability decisions.',
        'Standardised a historical dataset of 3M+ records from the meteorological portal, recovering analytical continuity back to 2016 (first IoT rollout). Designed the proposed PostgreSQL schema to evolve the system.',
      ],
      es: [
        'Automaticé el reporting semanal de calidad del aire y CO₂ con Python + ArcGIS Online. Eliminé ~12 horas/semana de trabajo manual y convertí en datos accionables para 6+ responsables no técnicos la monitorización volcánica de Puerto Naos.',
        'Descubrí mediante EDA una correlación de Pearson ~0.6 entre CO₂ costero y ciclos de marea, un mecanismo de acumulación de gas no documentado previamente. Llevó a Emergencias a revisar el protocolo de seguridad en zonas costeras habitadas tras la erupción.',
        'Diseñé dashboards interactivos en Power BI y Tableau para emergencias, gestión de residuos y RR. HH. (1000+ empleados). El dashboard de CO₂ pasó a ser la herramienta de cabecera de emergencias para sus decisiones diarias de habitabilidad.',
        'Estandaricé un dataset histórico de 3M+ registros del portal meteorológico, recuperando continuidad analítica desde 2016 (primer despliegue IoT). Diseñé la propuesta de esquema PostgreSQL para evolucionar el sistema.',
      ],
    },
  },
  {
    id: '03',
    period: { en: '2022 - 2023', es: '2022 - 2023' },
    role: { en: 'Mathematics, Physics & Chemistry Tutor', es: 'Profesor particular de Matemáticas, Física y Química' },
    org: { en: 'Independent', es: 'Independiente' },
    loc: 'Tenerife, ES',
    tag: { en: 'Teaching', es: 'Docencia' },
    desc: {
      en: 'One-to-one tutoring for secondary-school (ESO) and pre-university (Bachillerato) students. In-person and online, with on-demand remote support during exam periods.',
      es: 'Clases particulares a estudiantes de ESO y bachillerato. Modalidad presencial y online, con apoyo telemático puntual durante periodos de examen.',
    },
    bullets: {
      en: [
        'Students across several academic years in mathematics, physics and chemistry, with personalised follow-up and consistent results in main exam sessions.',
        'Mixed in-person and online delivery, with on-demand remote availability during critical exam windows for quick questions outside regular hours.',
        'Self-authored sets of notes with step-by-step worked examples and additional problems for students to solve on their own, aligned with EBAU content.',
      ],
      es: [
        'Estudiantes de varios cursos académicos en matemáticas, física y química, con seguimiento personalizado y resultados consistentes en convocatorias ordinarias.',
        'Modalidad mixta presencial y online; disponibilidad telemática puntual durante periodos críticos de examen para resolver dudas concretas fuera del horario regular.',
        'Colecciones propias de apuntes con problemas tipo resueltos paso a paso de ejemplo y también propuestos para resolver por parte de los estudiantes alineados con el contenido de EBAU.',
      ],
    },
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    id: '01',
    period: { en: '2024', es: '2024' },
    title: { en: 'MSc · Data Science', es: 'Máster · Ciencia de Datos' },
    org: { en: 'Open University of Catalunya (UOC)', es: 'Universitat Oberta de Catalunya (UOC)' },
    loc: 'Remote, ES',
    tag: { en: 'MECES 3', es: 'MECES 3' },
    desc: {
      en: 'Machine learning, deep learning, neural networks, NLP, data storytelling and data visualisation. Applied projects across all of the above.',
      es: 'Machine learning, deep learning, redes neuronales, NLP, storytelling con datos y visualización de datos. Proyectos aplicados sobre todo lo anterior.',
    },
  },
  {
    id: '02',
    period: { en: '2021', es: '2021' },
    title: { en: 'BSc · Physics', es: 'Grado · Física' },
    org: { en: 'University of La Laguna', es: 'Universidad de La Laguna' },
    loc: 'Tenerife, ES',
    tag: { en: 'MECES 2', es: 'MECES 2' },
    desc: {
      en: 'A strong mathematical base wrapped around the habit of modelling problems and reasoning in the abstract. This was also my first contact with programming, through Python.',
      es: 'Una base matemática sólida alrededor del hábito de modelar problemas y razonar en abstracto. Aquí tuve mi primer contacto con la programación a través de Python.',
    },
  },
  {
    id: '03',
    period: { en: 'Ongoing', es: 'En curso' },
    title: { en: 'Continuous coursework', es: 'Formación continua' },
    org: { en: 'Coursera · Udacity · AWS · Udemy', es: 'Coursera · Udacity · AWS · Udemy' },
    tag: { en: 'Specialisation', es: 'Especialización' },
    desc: {
      en: 'Google Data Analytics (Coursera), AWS Cloud Practitioner 101 (AWS Skill Builder), Agentic AI (Udacity), Python and Kubernetes specialisations (Udemy), among others.',
      es: 'Google Data Analytics (Coursera), AWS Cloud Practitioner 101 (AWS Skill Builder), Agentic AI (Udacity), especializaciones de Python y Kubernetes (Udemy), entre otras.',
    },
  },
];

// Stack carousel: Simple Icons slugs render as CSS masks; null slug falls
// back to a mono-text tile. Order: languages/runtime → AI/ML → data → infra
// → frontend (verbatim from prototype.jsx HOME_STACK).
export const HOME_STACK: StackItem[] = [
  { label: 'Python',       slug: 'python',      iconPath: 'icons/python.svg' },
  { label: 'PyTorch',      slug: 'pytorch',     iconPath: 'icons/pytorch.svg' },
  { label: 'LangChain',    slug: 'langchain',   iconPath: 'icons/langchain.svg' },
  { label: 'LangGraph',    slug: null,          iconPath: 'icons/langgraph.svg' },
  { label: 'Ollama',       slug: 'ollama',      iconPath: 'icons/ollama.svg' },
  { label: 'vLLM',         slug: 'vllm',        iconPath: 'icons/vllm.svg' },
  { label: 'Linux',        slug: 'linux',       iconPath: 'icons/linux.svg' },
  { label: 'SQL',          slug: 'postgresql',  iconPath: 'icons/postgresql.svg' },
  { label: 'Apache Kafka', slug: 'apachekafka', iconPath: 'icons/apachekafka.svg' },
  { label: 'Apache Spark', slug: 'apachespark', iconPath: 'icons/apachespark.svg' },
  { label: 'Docker',       slug: 'docker',      iconPath: 'icons/docker.svg' },
  { label: 'Kubernetes',   slug: 'kubernetes',  iconPath: 'icons/kubernetes.svg' },
  { label: 'Git',          slug: 'git',         iconPath: 'icons/git.svg' },
  { label: 'Node.js',      slug: 'nodedotjs',   iconPath: 'icons/nodedotjs.svg' },
  { label: 'React',        slug: 'react',       iconPath: 'icons/react.svg' },
];
