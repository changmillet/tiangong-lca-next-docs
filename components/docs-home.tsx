import Link from 'next/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { LcaConceptMap, type ConceptMapCopy } from '@/components/lca-concept-map';
import { baseOptions } from '@/lib/layout.shared';

type Language = 'zh' | 'en' | 'de' | 'fr';

interface HomePath {
  title: string;
  description: string;
  anchor: 'journey-lca-study' | 'journey-data-production';
}

interface HomeCopy {
  eyebrow: string;
  title: string;
  titleLines?: readonly [string, string];
  description: string;
  primary: string;
  secondary: string;
  pathsEyebrow: string;
  pathsTitle: string;
  pathsDescription: string;
  openGuide: string;
  paths: HomePath[];
  technicalLabel: string;
  integrationAction: string;
  deploymentAction: string;
  conceptMap: ConceptMapCopy;
}

const copy: Record<Language, HomeCopy> = {
  zh: {
    eyebrow: 'TianGong LCA · 开源生命周期评价平台',
    title: '连接数据、模型与可审查的影响证据',
    titleLines: ['连接数据、模型与', '可审查的影响证据'],
    description:
      'TianGong LCA 串联标准化数据、过程建模、LCIA 计算证据与团队评审。平台支持研究工作流，但不会替代目标与范围定义、专业解释或最终报告责任。',
    primary: '完成 10–15 分钟快速开始',
    secondary: '打开文档路线图',
    pathsEyebrow: '两条用户旅程',
    pathsTitle: '你要开展研究，还是生产数据？',
    pathsDescription: '首页只帮助选择方向；完整阶段、平台边界和具体页面统一由文档路线图承接。',
    openGuide: '查看完整旅程',
    paths: [
      { title: '开展一项 LCA 研究', description: '从目标与范围，经清单、产品系统和 LCIA，走到解释与报告。', anchor: 'journey-lca-study' },
      { title: '生产可复用的 LCA 数据', description: '从来源证据，经 TIDAS 表达、校验与评审，走到发布和交换。', anchor: 'journey-data-production' },
    ],
    technicalLabel: '面向开发者与运维',
    integrationAction: '连接 MCP、CLI 与 OpenAPI',
    deploymentAction: '查看私有部署与开发',
    conceptMap: {
      ariaLabel: '生命周期评价概念图：参考数据连接过程关系，形成产品系统并生成 LCIA 结果。',
      title: '生命周期评价概念图',
      referenceLabel: '参考数据',
      referenceItems: ['过程数据', '基本流', '影响方法'],
      relationsLabel: '过程关系',
      relationItems: ['材料', '电力', '制造'],
      productSystemLabel: '产品系统',
      resultsLabel: 'LCIA 结果',
      impactLabels: ['气候变化', '资源使用'],
    },
  },
  en: {
    eyebrow: 'TianGong LCA · Open life cycle assessment platform',
    title: 'Connect data, models, and reviewable impact evidence',
    description:
      'TianGong LCA connects standardised data, process modelling, LCIA calculation evidence, and team review. It supports the study workflow without replacing goal-and-scope choices, expert interpretation, or responsibility for the final report.',
    primary: 'Complete the 10–15 minute Quick Start',
    secondary: 'Open the documentation map',
    pathsEyebrow: 'Two user journeys',
    pathsTitle: 'Are you conducting a study or producing data?',
    pathsDescription: 'The home page only helps you choose a direction; the documentation map owns stages, boundaries, and detailed destinations.',
    openGuide: 'View the full journey',
    paths: [
      { title: 'Conduct an LCA study', description: 'Move from goal and scope through inventory, product system, and LCIA to interpretation and reporting.', anchor: 'journey-lca-study' },
      { title: 'Produce reusable LCA data', description: 'Move from source evidence through TIDAS expression, validation, and review to publication and exchange.', anchor: 'journey-data-production' },
    ],
    technicalLabel: 'For developers and operators',
    integrationAction: 'Connect MCP, CLI, and OpenAPI',
    deploymentAction: 'View self-hosting and development',
    conceptMap: {
      ariaLabel: 'Life cycle assessment concept map: reference data connects process relationships to a product system and LCIA results.',
      title: 'Life cycle assessment concept map',
      referenceLabel: 'Reference data',
      referenceItems: ['Process data', 'Elementary flows', 'Impact methods'],
      relationsLabel: 'Process relations',
      relationItems: ['Material', 'Electricity', 'Manufacturing'],
      productSystemLabel: 'Product system',
      resultsLabel: 'LCIA results',
      impactLabels: ['Climate change', 'Resource use'],
    },
  },
  de: {
    eyebrow: 'TianGong LCA · Offene Plattform für Ökobilanzen',
    title: 'Daten, Modelle und prüfbare Wirkungsnachweise verbinden',
    description:
      'TianGong LCA verbindet standardisierte Daten, Prozessmodellierung, LCIA-Berechnungsnachweise und Teamprüfung. Die Plattform unterstützt die Studie, ersetzt aber weder Ziel-und-Umfang-Entscheidungen noch fachliche Interpretation oder Berichtsverantwortung.',
    primary: 'Schnellstart in 10–15 Minuten',
    secondary: 'Dokumentationskarte öffnen',
    pathsEyebrow: 'Zwei Nutzerreisen',
    pathsTitle: 'Führen Sie eine Studie durch oder erzeugen Sie Daten?',
    pathsDescription: 'Die Startseite hilft nur bei der Richtungswahl; Stufen, Grenzen und Detailziele stehen in der Dokumentationskarte.',
    openGuide: 'Vollständige Reise ansehen',
    paths: [
      { title: 'Eine Ökobilanz durchführen', description: 'Von Ziel und Umfang über Sachbilanz, Produktsystem und LCIA zu Interpretation und Bericht.', anchor: 'journey-lca-study' },
      { title: 'Wiederverwendbare LCA-Daten erzeugen', description: 'Von Quellenbelegen über TIDAS-Ausdruck, Validierung und Prüfung zu Veröffentlichung und Austausch.', anchor: 'journey-data-production' },
    ],
    technicalLabel: 'Für Entwicklung und Betrieb',
    integrationAction: 'MCP, CLI und OpenAPI anbinden',
    deploymentAction: 'Self-Hosting und Entwicklung ansehen',
    conceptMap: {
      ariaLabel: 'Konzeptkarte der Ökobilanz: Referenzdaten verbinden Prozessbeziehungen mit dem Produktsystem und den LCIA-Ergebnissen.',
      title: 'Konzeptkarte der Ökobilanz',
      referenceLabel: 'Referenzdaten',
      referenceItems: ['Prozessdaten', 'Elementarflüsse', 'Wirkungsmethoden'],
      relationsLabel: 'Prozessbeziehungen',
      relationItems: ['Material', 'Strom', 'Herstellung'],
      productSystemLabel: 'Produktsystem',
      resultsLabel: 'LCIA-Ergebnisse',
      impactLabels: ['Klimawandel', 'Ressourcennutzung'],
    },
  },
  fr: {
    eyebrow: 'TianGong LCA · Plateforme ouverte d’analyse du cycle de vie',
    title: 'Relier données, modèles et preuves d’impact vérifiables',
    description:
      'TianGong LCA relie données normalisées, modélisation, preuves de calcul ACVI et revue en équipe. La plateforme soutient l’étude sans remplacer les choix d’objectif et de champ, l’interprétation experte ni la responsabilité du rapport final.',
    primary: 'Démarrage rapide en 10–15 minutes',
    secondary: 'Ouvrir la carte documentaire',
    pathsEyebrow: 'Deux parcours utilisateurs',
    pathsTitle: 'Menez-vous une étude ou produisez-vous des données ?',
    pathsDescription: 'L’accueil aide seulement à choisir une direction ; la carte documentaire porte les étapes, limites et destinations détaillées.',
    openGuide: 'Voir le parcours complet',
    paths: [
      { title: 'Mener une étude ACV', description: 'De l’objectif et du champ à l’interprétation et au rapport via inventaire, système de produit et ACVI.', anchor: 'journey-lca-study' },
      { title: 'Produire des données ACV réutilisables', description: 'Des preuves sources à la publication et l’échange via TIDAS, validation et revue.', anchor: 'journey-data-production' },
    ],
    technicalLabel: 'Pour les équipes techniques',
    integrationAction: 'Connecter MCP, la CLI et OpenAPI',
    deploymentAction: 'Voir l’auto-hébergement et le développement',
    conceptMap: {
      ariaLabel: 'Carte conceptuelle de l’ACV : les données de référence relient les relations entre procédés au système de produit et aux résultats d’ACVI.',
      title: 'Carte conceptuelle de l’ACV',
      referenceLabel: 'Données de référence',
      referenceItems: ['Données de procédé', 'Flux élémentaires', 'Méthodes d’impact'],
      relationsLabel: 'Relations de procédé',
      relationItems: ['Matière', 'Électricité', 'Fabrication'],
      productSystemLabel: 'Système de produit',
      resultsLabel: 'Résultats ACVI',
      impactLabels: ['Changement climatique', 'Ressources'],
    },
  },
};

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DocsHome({ lang }: { lang: string }) {
  const language: Language = lang in copy ? (lang as Language) : 'en';
  const content = copy[language];

  return (
    <HomeLayout {...baseOptions(language)}>
      <div className="min-w-0 max-w-full flex-1 overflow-clip text-fd-foreground">
        <section className="border-b border-fd-border bg-fd-background" data-hero-signature="lca-concept-map">
          <div className="atlas-shell grid min-h-[40rem] grid-cols-[minmax(0,1fr)_minmax(28rem,1fr)] items-center gap-[clamp(2rem,4vw,4rem)] py-[clamp(4.5rem,8vw,7rem)] max-[68rem]:grid-cols-1 max-[40rem]:min-h-0 max-[40rem]:gap-12 max-[40rem]:py-12">
            <div className="min-w-0 max-w-[38rem] max-[68rem]:max-w-[48rem]" data-hero-copy>
              <p className="docs-eyebrow">{content.eyebrow}</p>
              <h1 className="m-0 max-w-[14ch] text-[clamp(2.5rem,4.2vw,4rem)] leading-[1.08] font-[560] tracking-[-0.045em] text-balance max-[40rem]:max-w-full max-[40rem]:text-[clamp(2.2rem,10vw,2.8rem)] max-[40rem]:tracking-[-0.04em]" data-controlled-title>
                {content.titleLines
                  ? content.titleLines.map((line) => <span className="block whitespace-nowrap" data-title-line key={line}>{line}</span>)
                  : content.title}
              </h1>
              <p className="mt-6 mb-0 max-w-[39rem] text-[clamp(1rem,1.35vw,1.125rem)] leading-[1.7] text-fd-muted-foreground">
                {content.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2 max-[40rem]:flex-col max-[40rem]:items-stretch">
                <Link
                  className={`${buttonVariants({ variant: 'primary' })} min-h-12 min-w-[11.5rem] justify-between rounded-[2px] px-4 py-3 text-sm font-medium transition-colors duration-100 hover:bg-[#481c53] active:bg-[#35123e] dark:hover:bg-[#dabdff] dark:active:bg-[#eadbff] max-[40rem]:w-full`}
                  data-primary-action
                  href={`/${language}/docs/quick-start/`}
                >
                  {content.primary}
                  <Arrow />
                </Link>
                <Link
                  className={`${buttonVariants({ variant: 'outline' })} min-h-12 min-w-[11.5rem] justify-between rounded-[2px] border-fd-border bg-transparent px-4 py-3 text-sm font-medium transition-colors duration-100 max-[40rem]:w-full`}
                  href={`/${language}/docs/`}
                >
                  {content.secondary}
                </Link>
              </div>
            </div>

            <LcaConceptMap copy={content.conceptMap} />
          </div>
        </section>

        <section className="bg-fd-background py-[clamp(4.5rem,8vw,7rem)]">
          <div className="atlas-shell">
            <div className="mb-10 grid max-w-[48rem] gap-2.5">
              <p className="docs-eyebrow">{content.pathsEyebrow}</p>
              <h2 className="m-0 text-[clamp(2rem,3.5vw,3rem)] leading-[1.12] font-[520] tracking-[-0.035em] text-balance">
                {content.pathsTitle}
              </h2>
              <p className="m-0 text-base leading-[1.65] text-fd-muted-foreground">{content.pathsDescription}</p>
            </div>
            <Cards className="grid-cols-2 gap-3 max-[40rem]:grid-cols-1">
              {content.paths.map((path) => (
                <Card
                  className="grid min-h-56 content-start gap-2.5 rounded-[2px] border-fd-border bg-fd-card p-5 text-inherit transition-colors duration-100 hover:border-fd-primary hover:bg-fd-accent max-[40rem]:min-h-48 [&>div:last-child]:self-end [&_h3]:m-0 [&_h3]:text-lg [&_h3]:leading-[1.35] [&_h3]:font-semibold [&_h3]:tracking-[-0.02em] [&_p]:m-0! [&_p]:text-sm [&_p]:leading-[1.6] [&_p]:text-fd-muted-foreground"
                  description={path.description}
                  href={`/${language}/docs/#${path.anchor}`}
                  key={path.anchor}
                  title={path.title}
                >
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-fd-primary">
                    {content.openGuide}
                    <Arrow />
                  </span>
                </Card>
              ))}
            </Cards>

            <div className="mt-12 grid grid-cols-[minmax(11rem,1fr)_minmax(0,3fr)] items-start gap-6 border-t border-fd-border pt-5 max-[40rem]:grid-cols-1">
              <p className="m-0 text-xs font-semibold tracking-[0.04em] text-fd-muted-foreground uppercase">{content.technicalLabel}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <Link className="inline-flex items-center gap-2 text-sm font-medium text-fd-primary" href={`/${language}/docs/integration/`}>
                  {content.integrationAction}
                  <Arrow />
                </Link>
                <Link className="inline-flex items-center gap-2 text-sm font-medium text-fd-primary" href={`/${language}/docs/deploy-and-dev/`}>
                  {content.deploymentAction}
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
