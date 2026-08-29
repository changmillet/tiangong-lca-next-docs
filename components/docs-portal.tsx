import Link from 'next/link';

type Language = 'zh' | 'en' | 'de' | 'fr';
type Boundary = 'method' | 'platform' | 'specification' | 'shared';

interface JourneyStep {
  code: string;
  title: string;
  description: string;
  href: string;
  boundary: Boundary;
}

interface Journey {
  code: string;
  title: string;
  description: string;
  ariaLabel: string;
  steps: [JourneyStep, JourneyStep, JourneyStep, JourneyStep, JourneyStep];
}

interface PortalLink {
  code: string;
  title: string;
  description: string;
  href: string;
}

interface PortalCopy {
  eyebrow: string;
  title: string;
  description: string;
  boundaryLabels: Record<Boundary, string>;
  journeys: [Journey, Journey];
  referenceEyebrow: string;
  referenceTitle: string;
  referenceDescription: string;
  references: [PortalLink, PortalLink, PortalLink, PortalLink];
}

const tidasHref = (language: Language, slug: string) =>
  `https://tidas.tiangong.earth/${language}/docs/${slug}/`;
const docsHref = (language: Language, slug: string) => `/${language}/docs/${slug}/`;

const copy: Record<Language, PortalCopy> = {
  zh: {
    eyebrow: '文档路线图',
    title: '先选旅程，再按阶段找证据',
    description:
      '这里是文档枢纽：两条旅程说明“接下来读什么”，快速开始负责第一次实操，用户指南负责具体界面。标签同时标明工作发生在平台内、平台外，还是属于方法背景。',
    boundaryLabels: {
      method: '方法背景',
      platform: '平台内',
      specification: 'TIDAS 规范',
      shared: '平台内 + 平台外',
    },
    journeys: [
      {
        code: 'JOURNEY 01',
        title: '开展一项 LCA 研究',
        description:
          '以研究问题为主线。平台承载数据、产品系统和计算证据；目标与范围、结果解释和报告仍由研究者依据适用方法与项目语境完成。',
        ariaLabel: 'LCA 研究旅程：目标与范围、清单与数据、产品系统、LCIA、解释与报告。',
        steps: [
          { code: '01', title: '目标与范围', description: '定义预期用途、功能单位、系统边界和质量要求。', href: docsHref('zh', 'data-collection/data-collection-instructions'), boundary: 'method' },
          { code: '02', title: '清单与数据', description: '检索数据空间，检查来源、代表性和可用范围。', href: docsHref('zh', 'user-guide/data'), boundary: 'platform' },
          { code: '03', title: '产品系统', description: '连接过程与交换，核对参考流和定量关系。', href: docsHref('zh', 'user-guide/create-my-data'), boundary: 'platform' },
          { code: '04', title: 'LCIA', description: '选择方法，查看因子证据、覆盖完整性与结果。', href: docsHref('zh', 'user-guide/lcia'), boundary: 'platform' },
          { code: '05', title: '解释与报告', description: '用平台证据分析贡献；结论、敏感性与报告由研究者负责。', href: docsHref('zh', 'user-guide/process-analysis'), boundary: 'shared' },
        ],
      },
      {
        code: 'JOURNEY 02',
        title: '生产可复用的 LCA 数据',
        description:
          '以可追溯数据资产为主线。从外部证据到 TIDAS 表达、校验和平台评审，最后形成可发布、复用与交换的数据包。',
        ariaLabel: 'LCA 数据生产旅程：证据、TIDAS 表达、校验、评审与发布、复用与交换。',
        steps: [
          { code: '01', title: '证据', description: '保留来源、边界、假设、代理依据和数据质量判断。', href: docsHref('zh', 'data-collection/data-collection-instructions'), boundary: 'method' },
          { code: '02', title: 'TIDAS 表达', description: '按 TIDAS 数据集结构表达字段、引用和定量关系。', href: tidasHref('zh', 'core-modules/schema/tidas-schema-intro'), boundary: 'specification' },
          { code: '03', title: '校验', description: '用 TIDAS Schema 检查结构与约束；修复后再提交。', href: tidasHref('zh', 'core-modules/schema/tidas-schema-validation'), boundary: 'specification' },
          { code: '04', title: '评审与发布', description: '平台内提交审核、处理建议，由审核管理员作最终决定。', href: docsHref('zh', 'user-guide/data-review'), boundary: 'platform' },
          { code: '05', title: '复用与交换', description: '通过 TIDAS ZIP 导入、导出并跟踪后台任务。', href: docsHref('zh', 'user-guide/tidas-zip-workflows'), boundary: 'platform' },
        ],
      },
    ],
    referenceEyebrow: '按需查阅',
    referenceTitle: '从路线进入具体参考',
    referenceDescription: '首次实操、界面操作、系统连接和部署说明各自保持独立职责。',
    references: [
      { code: 'START', title: '10–15 分钟快速开始', description: '用一条固定样例路线完成首次实操。', href: docsHref('zh', 'quick-start') },
      { code: 'GUIDE', title: '用户指南', description: '按数据、建模、分析、评审与权限查界面操作。', href: docsHref('zh', 'user-guide') },
      { code: 'CONNECT', title: '集成与扩展', description: 'MCP、CLI、OpenAPI 与外部工具入口。', href: docsHref('zh', 'integration') },
      { code: 'OPERATE', title: '部署与开发', description: '私有化部署、开发环境与文档同步。', href: docsHref('zh', 'deploy-and-dev') },
    ],
  },
  en: {
    eyebrow: 'Documentation map',
    title: 'Choose a journey, then follow the evidence',
    description:
      'This page is the documentation hub: the two journeys tell you what to read next, Quick Start owns the first hands-on session, and the User Guide owns interface detail. Labels show whether work happens in the platform, outside it, or in methodology guidance.',
    boundaryLabels: { method: 'Method context', platform: 'In platform', specification: 'TIDAS specification', shared: 'In + outside platform' },
    journeys: [
      {
        code: 'JOURNEY 01', title: 'Conduct an LCA study',
        description: 'Follow the study question. The platform holds data, product systems, and calculation evidence; practitioners remain responsible for goal and scope, interpretation, and reporting under the applicable method and study context.',
        ariaLabel: 'LCA study journey: goal and scope, inventory and data, product system, LCIA, interpretation and reporting.',
        steps: [
          { code: '01', title: 'Goal and scope', description: 'Define intended use, functional unit, system boundary, and quality needs.', href: docsHref('en', 'data-collection/data-collection-instructions'), boundary: 'method' },
          { code: '02', title: 'Inventory and data', description: 'Search data spaces and assess provenance, representativeness, and permitted use.', href: docsHref('en', 'user-guide/data'), boundary: 'platform' },
          { code: '03', title: 'Product system', description: 'Connect processes and exchanges; check reference flows and quantities.', href: docsHref('en', 'user-guide/create-my-data'), boundary: 'platform' },
          { code: '04', title: 'LCIA', description: 'Choose a method and inspect factor evidence, coverage, and results.', href: docsHref('en', 'user-guide/lcia'), boundary: 'platform' },
          { code: '05', title: 'Interpret and report', description: 'Use platform evidence for contribution analysis; own conclusions, sensitivity, and reporting.', href: docsHref('en', 'user-guide/process-analysis'), boundary: 'shared' },
        ],
      },
      {
        code: 'JOURNEY 02', title: 'Produce reusable LCA data',
        description: 'Follow the data asset from external evidence through TIDAS expression, validation, and platform review to publication, reuse, and exchange.',
        ariaLabel: 'LCA data-production journey: evidence, TIDAS expression, validation, review and publication, reuse and exchange.',
        steps: [
          { code: '01', title: 'Evidence', description: 'Retain sources, boundaries, assumptions, proxy rationale, and quality judgments.', href: docsHref('en', 'data-collection/data-collection-instructions'), boundary: 'method' },
          { code: '02', title: 'TIDAS expression', description: 'Express fields, references, and quantities using TIDAS dataset structures.', href: tidasHref('en', 'core-modules/schema/tidas-schema-intro'), boundary: 'specification' },
          { code: '03', title: 'Validate', description: 'Check structure and constraints with the TIDAS Schema; repair before submission.', href: tidasHref('en', 'core-modules/schema/tidas-schema-validation'), boundary: 'specification' },
          { code: '04', title: 'Review and publish', description: 'Submit in the platform, respond to advice, and await the review admin’s final decision.', href: docsHref('en', 'user-guide/data-review'), boundary: 'platform' },
          { code: '05', title: 'Reuse and exchange', description: 'Import and export TIDAS ZIP packages and follow background tasks.', href: docsHref('en', 'user-guide/tidas-zip-workflows'), boundary: 'platform' },
        ],
      },
    ],
    referenceEyebrow: 'Use as needed', referenceTitle: 'Open the detailed reference',
    referenceDescription: 'First use, interface operations, integrations, and deployment each have one clear home.',
    references: [
      { code: 'START', title: '10–15 minute Quick Start', description: 'Complete one fixed sample route in your first session.', href: docsHref('en', 'quick-start') },
      { code: 'GUIDE', title: 'User Guide', description: 'Find interface guidance by data, modelling, analysis, review, and access.', href: docsHref('en', 'user-guide') },
      { code: 'CONNECT', title: 'Integrations and extensions', description: 'MCP, CLI, OpenAPI, and external tool entry points.', href: docsHref('en', 'integration') },
      { code: 'OPERATE', title: 'Deployment and development', description: 'Self-hosting, development setup, and docs synchronisation.', href: docsHref('en', 'deploy-and-dev') },
    ],
  },
  de: {
    eyebrow: 'Dokumentationskarte', title: 'Reise wählen und den Nachweisen folgen',
    description: 'Diese Seite ist der Dokumentations-Hub: Zwei Reisen zeigen den nächsten Leseschritt, der Schnellstart führt durch die erste praktische Sitzung und das Benutzerhandbuch erklärt die Oberfläche. Kennzeichnungen trennen Plattform, externe Arbeit und Methodenhintergrund.',
    boundaryLabels: { method: 'Methodenkontext', platform: 'In der Plattform', specification: 'TIDAS-Spezifikation', shared: 'In + außerhalb der Plattform' },
    journeys: [
      {
        code: 'REISE 01', title: 'Eine Ökobilanz durchführen',
        description: 'Folgen Sie der Untersuchungsfrage. Die Plattform verwaltet Daten, Produktsysteme und Berechnungsnachweise; Ziel und Umfang, Interpretation und Bericht bleiben unter der anwendbaren Methode in Verantwortung der Fachperson.',
        ariaLabel: 'Ökobilanz-Reise: Ziel und Umfang, Sachbilanz und Daten, Produktsystem, LCIA, Interpretation und Bericht.',
        steps: [
          { code: '01', title: 'Ziel und Umfang', description: 'Zweck, funktionelle Einheit, Systemgrenze und Qualitätsbedarf festlegen.', href: docsHref('de', 'data-collection/data-collection-instructions'), boundary: 'method' },
          { code: '02', title: 'Sachbilanz und Daten', description: 'Datenräume durchsuchen; Herkunft, Repräsentativität und Nutzung prüfen.', href: docsHref('de', 'user-guide/data'), boundary: 'platform' },
          { code: '03', title: 'Produktsystem', description: 'Prozesse und Austausche verbinden; Referenzflüsse und Mengen prüfen.', href: docsHref('de', 'user-guide/create-my-data'), boundary: 'platform' },
          { code: '04', title: 'LCIA', description: 'Methode wählen und Faktornachweise, Abdeckung und Ergebnisse prüfen.', href: docsHref('de', 'user-guide/lcia'), boundary: 'platform' },
          { code: '05', title: 'Interpretieren und berichten', description: 'Plattformnachweise analysieren; Schlussfolgerung, Sensitivität und Bericht verantworten.', href: docsHref('de', 'user-guide/process-analysis'), boundary: 'shared' },
        ],
      },
      {
        code: 'REISE 02', title: 'Wiederverwendbare LCA-Daten erzeugen',
        description: 'Folgen Sie dem Datenobjekt von externen Nachweisen über TIDAS-Ausdruck, Validierung und Plattformprüfung bis zu Veröffentlichung, Wiederverwendung und Austausch.',
        ariaLabel: 'LCA-Datenproduktionsreise: Nachweise, TIDAS-Ausdruck, Validierung, Prüfung und Veröffentlichung, Wiederverwendung und Austausch.',
        steps: [
          { code: '01', title: 'Nachweise', description: 'Quellen, Grenzen, Annahmen, Proxy-Begründung und Qualitätsurteile festhalten.', href: docsHref('de', 'data-collection/data-collection-instructions'), boundary: 'method' },
          { code: '02', title: 'TIDAS-Ausdruck', description: 'Felder, Referenzen und Mengen in TIDAS-Datensatzstrukturen ausdrücken.', href: tidasHref('de', 'core-modules/schema/tidas-schema-intro'), boundary: 'specification' },
          { code: '03', title: 'Validieren', description: 'Struktur und Regeln mit dem TIDAS-Schema prüfen; Fehler vor Einreichung beheben.', href: tidasHref('de', 'core-modules/schema/tidas-schema-validation'), boundary: 'specification' },
          { code: '04', title: 'Prüfen und veröffentlichen', description: 'In der Plattform einreichen, Hinweise bearbeiten und Admin-Entscheidung abwarten.', href: docsHref('de', 'user-guide/data-review'), boundary: 'platform' },
          { code: '05', title: 'Wiederverwenden und austauschen', description: 'TIDAS-ZIP-Pakete importieren/exportieren und Hintergrundaufgaben verfolgen.', href: docsHref('de', 'user-guide/tidas-zip-workflows'), boundary: 'platform' },
        ],
      },
    ],
    referenceEyebrow: 'Bei Bedarf', referenceTitle: 'Detaillierte Referenz öffnen',
    referenceDescription: 'Erste Nutzung, Oberfläche, Integration und Betrieb haben jeweils einen klaren Ort.',
    references: [
      { code: 'START', title: 'Schnellstart in 10–15 Minuten', description: 'Eine feste Beispielroute in der ersten Sitzung abschließen.', href: docsHref('de', 'quick-start') },
      { code: 'GUIDE', title: 'Benutzerhandbuch', description: 'Oberflächenhinweise nach Daten, Modellierung, Analyse, Prüfung und Zugriff.', href: docsHref('de', 'user-guide') },
      { code: 'CONNECT', title: 'Integrationen und Erweiterungen', description: 'Einstiege für MCP, CLI, OpenAPI und externe Werkzeuge.', href: docsHref('de', 'integration') },
      { code: 'OPERATE', title: 'Bereitstellung und Entwicklung', description: 'Self-Hosting, Entwicklungsumgebung und Docs-Synchronisation.', href: docsHref('de', 'deploy-and-dev') },
    ],
  },
  fr: {
    eyebrow: 'Carte documentaire', title: 'Choisissez un parcours, puis suivez les preuves',
    description: 'Cette page est le hub documentaire : les deux parcours indiquent quoi lire ensuite, le démarrage rapide couvre la première session pratique et le guide utilisateur détaille l’interface. Les libellés distinguent plateforme, travail externe et contexte méthodologique.',
    boundaryLabels: { method: 'Contexte méthodologique', platform: 'Dans la plateforme', specification: 'Spécification TIDAS', shared: 'Dans + hors plateforme' },
    journeys: [
      {
        code: 'PARCOURS 01', title: 'Mener une étude ACV',
        description: 'Suivez la question d’étude. La plateforme porte les données, systèmes de produit et preuves de calcul ; l’objectif et le champ, l’interprétation et le rapport restent sous la responsabilité du praticien selon la méthode applicable.',
        ariaLabel: 'Parcours d’étude ACV : objectif et champ, inventaire et données, système de produit, ACVI, interprétation et rapport.',
        steps: [
          { code: '01', title: 'Objectif et champ', description: 'Définir usage prévu, unité fonctionnelle, frontière et besoins qualité.', href: docsHref('fr', 'data-collection/data-collection-instructions'), boundary: 'method' },
          { code: '02', title: 'Inventaire et données', description: 'Rechercher les espaces et évaluer origine, représentativité et usage permis.', href: docsHref('fr', 'user-guide/data'), boundary: 'platform' },
          { code: '03', title: 'Système de produit', description: 'Relier procédés et échanges ; vérifier flux de référence et quantités.', href: docsHref('fr', 'user-guide/create-my-data'), boundary: 'platform' },
          { code: '04', title: 'ACVI', description: 'Choisir une méthode et examiner preuves des facteurs, couverture et résultats.', href: docsHref('fr', 'user-guide/lcia'), boundary: 'platform' },
          { code: '05', title: 'Interpréter et rapporter', description: 'Analyser les preuves ; assumer conclusions, sensibilité et rapport.', href: docsHref('fr', 'user-guide/process-analysis'), boundary: 'shared' },
        ],
      },
      {
        code: 'PARCOURS 02', title: 'Produire des données ACV réutilisables',
        description: 'Suivez l’actif de données depuis les preuves externes jusqu’à l’expression TIDAS, la validation et la revue dans la plateforme, puis la publication, la réutilisation et l’échange.',
        ariaLabel: 'Parcours de production de données ACV : preuves, expression TIDAS, validation, revue et publication, réutilisation et échange.',
        steps: [
          { code: '01', title: 'Preuves', description: 'Conserver sources, limites, hypothèses, justification des proxies et qualité.', href: docsHref('fr', 'data-collection/data-collection-instructions'), boundary: 'method' },
          { code: '02', title: 'Expression TIDAS', description: 'Exprimer champs, références et quantités dans les structures TIDAS.', href: tidasHref('fr', 'core-modules/schema/tidas-schema-intro'), boundary: 'specification' },
          { code: '03', title: 'Valider', description: 'Contrôler structure et contraintes avec le Schema TIDAS ; corriger avant envoi.', href: tidasHref('fr', 'core-modules/schema/tidas-schema-validation'), boundary: 'specification' },
          { code: '04', title: 'Réviser et publier', description: 'Soumettre, répondre aux avis et attendre la décision finale de l’admin.', href: docsHref('fr', 'user-guide/data-review'), boundary: 'platform' },
          { code: '05', title: 'Réutiliser et échanger', description: 'Importer/exporter des paquets TIDAS ZIP et suivre les tâches de fond.', href: docsHref('fr', 'user-guide/tidas-zip-workflows'), boundary: 'platform' },
        ],
      },
    ],
    referenceEyebrow: 'Selon le besoin', referenceTitle: 'Ouvrir la référence détaillée',
    referenceDescription: 'Première utilisation, interface, intégrations et déploiement ont chacun un rôle clair.',
    references: [
      { code: 'START', title: 'Démarrage rapide en 10–15 minutes', description: 'Suivre un parcours exemple fixe lors de la première session.', href: docsHref('fr', 'quick-start') },
      { code: 'GUIDE', title: 'Guide utilisateur', description: 'Trouver l’interface par données, modélisation, analyse, revue et accès.', href: docsHref('fr', 'user-guide') },
      { code: 'CONNECT', title: 'Intégrations et extensions', description: 'Entrées MCP, CLI, OpenAPI et outils externes.', href: docsHref('fr', 'integration') },
      { code: 'OPERATE', title: 'Déploiement et développement', description: 'Auto-hébergement, environnement et synchronisation des docs.', href: docsHref('fr', 'deploy-and-dev') },
    ],
  },
};

function Arrow() {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 20 20" width="16">
      <path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

function JourneyLink({ href, children, className }: { href: string; children: React.ReactNode; className: string }) {
  const external = href.startsWith('https://');
  return <Link className={className} href={href} {...(external ? { rel: 'noreferrer', target: '_blank' } : {})}>{children}</Link>;
}

export function DocsPortal({ lang }: { lang: string }) {
  const language: Language = lang in copy ? (lang as Language) : 'en';
  const content = copy[language];

  return (
    <div className="not-prose mt-8 grid gap-12 pb-3" data-docs-portal="lca-task-hub">
      <section aria-labelledby="docs-portal-journeys" className="grid gap-6" data-docs-portal-map="lca-task-route" data-docs-portal-map-v2="two-lca-journeys">
        <div className="grid max-w-[48rem] gap-2">
          <p className="m-0 text-xs font-semibold tracking-[0.08em] text-fd-primary uppercase">{content.eyebrow}</p>
          <h2 className="m-0 text-2xl leading-tight font-semibold tracking-[-0.025em]" id="docs-portal-journeys">{content.title}</h2>
          <p className="m-0 text-sm leading-6 text-fd-muted-foreground">{content.description}</p>
        </div>
        {content.journeys.map((journey, journeyIndex) => (
          <article className="rounded-[2px] border border-fd-border bg-fd-muted/25 p-5 max-[40rem]:p-4" data-docs-journey={journeyIndex === 0 ? 'lca-study' : 'data-production'} id={journeyIndex === 0 ? 'journey-lca-study' : 'journey-data-production'} key={journey.code}>
            <div className="mb-5 grid max-w-[48rem] gap-2">
              <p className="m-0 text-xs font-semibold tracking-[0.08em] text-fd-primary uppercase">{journey.code}</p>
              <h3 className="m-0 text-xl leading-tight font-semibold tracking-[-0.02em]">{journey.title}</h3>
              <p className="m-0 text-sm leading-6 text-fd-muted-foreground">{journey.description}</p>
            </div>
            <ol aria-label={journey.ariaLabel} className="m-0 grid list-none grid-cols-5 gap-[2px] overflow-hidden rounded-[2px] border-2 border-fd-border bg-fd-border p-0 max-[58rem]:grid-cols-1">
              {journey.steps.map((step) => (
                <li className="m-0 min-w-0 bg-fd-background p-0" key={step.code}>
                  <JourneyLink className="group grid min-h-48 content-between gap-5 p-3.5 text-fd-foreground no-underline transition-colors duration-100 hover:bg-fd-accent max-[58rem]:min-h-0" href={step.href}>
                    <span className="flex items-center justify-between gap-2 text-xs font-semibold text-fd-primary">{step.code}<Arrow /></span>
                    <span className="grid gap-1.5">
                      <span className="w-fit rounded-[2px] border border-fd-border px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-[0.04em] text-fd-muted-foreground uppercase">{content.boundaryLabels[step.boundary]}</span>
                      <strong className="text-sm leading-snug font-semibold">{step.title}</strong>
                      <span className="text-xs leading-5 text-fd-muted-foreground">{step.description}</span>
                    </span>
                  </JourneyLink>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </section>

      <section aria-labelledby="docs-portal-reference">
        <div className="mb-5 grid max-w-[43rem] gap-2">
          <p className="m-0 text-xs font-semibold tracking-[0.08em] text-fd-primary uppercase">{content.referenceEyebrow}</p>
          <h2 className="m-0 text-xl leading-tight font-semibold tracking-[-0.02em]" id="docs-portal-reference">{content.referenceTitle}</h2>
          <p className="m-0 text-sm leading-6 text-fd-muted-foreground">{content.referenceDescription}</p>
        </div>
        <div className="grid grid-cols-2 gap-[2px] overflow-hidden rounded-[2px] border-2 border-fd-border bg-fd-border max-[40rem]:grid-cols-1">
          {content.references.map((item) => (
            <JourneyLink className="group grid min-h-28 content-between gap-4 bg-fd-background p-4 text-fd-foreground no-underline transition-colors duration-100 hover:bg-fd-accent" href={item.href} key={item.code}>
              <span className="flex items-center justify-between gap-3 text-xs font-semibold tracking-[0.05em] text-fd-primary uppercase">{item.code}<Arrow /></span>
              <span className="grid gap-1"><strong className="text-sm font-semibold">{item.title}</strong><span className="text-xs leading-5 text-fd-muted-foreground">{item.description}</span></span>
            </JourneyLink>
          ))}
        </div>
      </section>
    </div>
  );
}
