import Link from 'next/link';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';

type Language = 'zh' | 'en' | 'de' | 'fr';

interface GuideStep {
  code: string;
  title: string;
  description: string;
  outcome: string;
  slug: string;
}

interface RecoveryLink {
  title: string;
  description: string;
  slug: string;
}

interface QuickStartCopy {
  eyebrow: string;
  title: string;
  description: string;
  openApp: string;
  prerequisitesTitle: string;
  prerequisites: [string, string, string];
  sampleLabel: string;
  sampleTitle: string;
  sampleDescription: string;
  sampleAction: string;
  routeAriaLabel: string;
  outcomeLabel: string;
  openStep: string;
  steps: [GuideStep, GuideStep, GuideStep, GuideStep, GuideStep];
  completionTitle: string;
  completionDescription: string;
  completion: [string, string, string];
  recoveryTitle: string;
  recoveryDescription: string;
  recovery: [RecoveryLink, RecoveryLink, RecoveryLink];
  videoLabel: string;
  videoDescription: string;
}

const copy: Record<Language, QuickStartCopy> = {
  zh: {
    eyebrow: '10–15 分钟 · 固定路线',
    title: '从一个开放过程走到可解释的 LCIA 证据',
    description:
      '这不是功能目录，也不要求你第一次就创建数据。按顺序完成五步：登录、确认样例语境、找到过程、检查定量基础、查看 LCIA 证据。',
    openApp: '打开 TianGong LCA',
    prerequisitesTitle: '开始前准备',
    prerequisites: ['一个可登录的 TianGong LCA 账号', '约 10–15 分钟连续时间', '允许使用任一可见的开放过程；没有完全同名结果时无需中断'],
    sampleLabel: '样例语境',
    sampleTitle: '甲醇生产文献示例',
    sampleDescription: '示例用于识别“证据 → 过程 → 产品系统 → LCIA”的关系，不代表复现论文结论或提供可直接导入的数据包。',
    sampleAction: '先读书面演示',
    routeAriaLabel: 'TianGong LCA 十到十五分钟快速路线：登录、确认样例、查找过程、检查定量基础、查看 LCIA 证据。',
    outcomeLabel: '本步完成标志',
    openStep: '查看操作说明',
    steps: [
      { code: '01', title: '登录平台', description: '注册、验证邮箱，或用已有账号进入平台首页。', outcome: '能看到平台首页和数据入口', slug: 'quick-start/first-login' },
      { code: '02', title: '确认样例与来源', description: '打开甲醇示例，先区分论文证据、示例操作和平台数据。', outcome: '能说出样例来源与本路线不复现论文结论', slug: 'quick-start/demonstrations' },
      { code: '03', title: '找到一个开放过程', description: '进入开放数据的过程列表，搜索“methanol”；没有精确结果时选择任一可见过程。', outcome: '已打开一个过程详情页', slug: 'user-guide/data' },
      { code: '04', title: '检查定量基础', description: '在详情中找到定量参考、参考流和输入输出；不要把过程参考量直接当作研究功能单位。', outcome: '能指出该过程的参考流与参考量', slug: 'user-guide/data-use' },
      { code: '05', title: '查看 LCIA 证据', description: '打开可用的 LCIA 结果，记录方法、版本或快照以及覆盖状态；缺失因子表示覆盖不完整，不是零影响。', outcome: '能记录一条结果及其证据/完整性状态', slug: 'user-guide/lcia' },
    ],
    completionTitle: '完成标准',
    completionDescription: '满足以下三点，即完成快速开始；创建、评审和发布留给后续数据生产旅程。',
    completion: ['打开并识别了一个过程数据集', '区分了过程参考流与研究功能单位', '查看结果时同时检查了 LCIA 方法证据与覆盖状态'],
    recoveryTitle: '失败恢复',
    recoveryDescription: '路线不分叉；遇到阻塞时修复当前步骤，再回到下一编号。',
    recovery: [
      { title: '无法登录', description: '检查邮箱验证、账号设置和浏览器会话。', slug: 'user-guide/account-profile' },
      { title: '找不到 methanol', description: '清除筛选或选择任一可见开放过程继续。', slug: 'user-guide/search' },
      { title: '没有可查看的 LCIA', description: '换一个有结果的过程，并用 LCIA 指南核对证据状态。', slug: 'faq' },
    ],
    videoLabel: '可选视频',
    videoDescription: '视频只是书面路线的补充；没有播放条件也能完成全部步骤。',
  },
  en: {
    eyebrow: '10–15 minutes · one fixed route',
    title: 'Follow one open process to interpretable LCIA evidence',
    description: 'This is not a feature catalogue and you do not need to author data on day one. Complete five steps in order: sign in, establish the sample context, find a process, check its quantitative basis, and inspect LCIA evidence.',
    openApp: 'Open TianGong LCA',
    prerequisitesTitle: 'Before you start',
    prerequisites: ['A TianGong LCA account that can sign in', 'About 10–15 uninterrupted minutes', 'Permission to use any visible open process; an exact sample-name match is not required'],
    sampleLabel: 'Sample context', sampleTitle: 'Methanol-production literature example',
    sampleDescription: 'The sample helps you recognise the evidence → process → product system → LCIA relationship. It does not reproduce the paper’s conclusions or provide an import-ready package.',
    sampleAction: 'Read the written walkthrough',
    routeAriaLabel: 'TianGong LCA ten-to-fifteen-minute route: sign in, establish sample context, find a process, inspect the quantitative basis, and inspect LCIA evidence.',
    outcomeLabel: 'Done when', openStep: 'Open instructions',
    steps: [
      { code: '01', title: 'Sign in', description: 'Register and verify your email, or enter with an existing account.', outcome: 'You can see the platform home and data entry points', slug: 'quick-start/first-login' },
      { code: '02', title: 'Establish sample provenance', description: 'Open the methanol example and separate paper evidence, demonstration actions, and platform data.', outcome: 'You can name the source and explain that this route does not reproduce its conclusions', slug: 'quick-start/demonstrations' },
      { code: '03', title: 'Find one open process', description: 'Open the Process list in Open Data and search for “methanol”; if there is no exact match, choose any visible process.', outcome: 'One process detail page is open', slug: 'user-guide/data' },
      { code: '04', title: 'Check the quantitative basis', description: 'Locate the quantitative reference, reference flow, and exchanges. Do not treat a process reference quantity as the study functional unit.', outcome: 'You can point to the process reference flow and quantity', slug: 'user-guide/data-use' },
      { code: '05', title: 'Inspect LCIA evidence', description: 'Open an available LCIA result and record its method, version or snapshot, and coverage state. A missing factor means incomplete coverage, not zero impact.', outcome: 'You recorded one result together with its evidence/completeness state', slug: 'user-guide/lcia' },
    ],
    completionTitle: 'Completion criteria',
    completionDescription: 'You have completed Quick Start when all three are true. Authoring, review, and publication belong to the later data-production journey.',
    completion: ['You opened and identified one process dataset', 'You distinguished its reference flow from a study functional unit', 'You checked LCIA method evidence and coverage alongside the result'],
    recoveryTitle: 'Failure recovery', recoveryDescription: 'The route does not branch. Fix the current step, then return to the next number.',
    recovery: [
      { title: 'Cannot sign in', description: 'Check email verification, account settings, and the browser session.', slug: 'user-guide/account-profile' },
      { title: 'No methanol result', description: 'Clear filters or choose any visible open process and continue.', slug: 'user-guide/search' },
      { title: 'No LCIA to inspect', description: 'Choose a process with results and use the LCIA guide to read the evidence state.', slug: 'faq' },
    ],
    videoLabel: 'Optional video', videoDescription: 'The video supplements the written route; playback is not required to complete it.',
  },
  de: {
    eyebrow: '10–15 Minuten · eine feste Route', title: 'Von einem offenen Prozess zu nachvollziehbaren LCIA-Nachweisen',
    description: 'Dies ist kein Funktionskatalog; in der ersten Sitzung müssen Sie keine Daten erstellen. Folgen Sie fünf Schritten: anmelden, Beispielkontext klären, Prozess finden, quantitative Grundlage prüfen und LCIA-Nachweise ansehen.',
    openApp: 'TianGong LCA öffnen', prerequisitesTitle: 'Vor dem Start',
    prerequisites: ['Ein nutzbares TianGong-LCA-Konto', 'Etwa 10–15 ungestörte Minuten', 'Ein beliebiger sichtbarer offener Prozess genügt; ein exakter Beispieltreffer ist nicht nötig'],
    sampleLabel: 'Beispielkontext', sampleTitle: 'Literaturbeispiel Methanolproduktion',
    sampleDescription: 'Das Beispiel zeigt die Beziehung Nachweise → Prozess → Produktsystem → LCIA. Es reproduziert weder die Schlussfolgerungen der Veröffentlichung noch liefert es ein importfertiges Paket.',
    sampleAction: 'Schriftliche Anleitung lesen',
    routeAriaLabel: 'TianGong-LCA-Schnellroute: anmelden, Beispiel klären, Prozess finden, quantitative Grundlage und LCIA-Nachweise prüfen.',
    outcomeLabel: 'Abgeschlossen, wenn', openStep: 'Anleitung öffnen',
    steps: [
      { code: '01', title: 'Anmelden', description: 'Registrieren und E-Mail bestätigen oder mit vorhandenem Konto anmelden.', outcome: 'Plattformstart und Dateneinstiege sind sichtbar', slug: 'quick-start/first-login' },
      { code: '02', title: 'Herkunft des Beispiels klären', description: 'Methanolbeispiel öffnen und Publikationsnachweis, Demo und Plattformdaten trennen.', outcome: 'Quelle und Begrenzung der Demo können erklärt werden', slug: 'quick-start/demonstrations' },
      { code: '03', title: 'Einen offenen Prozess finden', description: 'In Offene Daten nach „methanol“ suchen; ohne exakten Treffer einen sichtbaren Prozess wählen.', outcome: 'Eine Prozessdetailseite ist geöffnet', slug: 'user-guide/data' },
      { code: '04', title: 'Quantitative Grundlage prüfen', description: 'Quantitative Referenz, Referenzfluss und Austausche finden. Die Prozessreferenzmenge ist nicht automatisch die funktionelle Einheit der Studie.', outcome: 'Referenzfluss und -menge können gezeigt werden', slug: 'user-guide/data-use' },
      { code: '05', title: 'LCIA-Nachweise prüfen', description: 'Verfügbares Ergebnis öffnen und Methode, Version/Snapshot sowie Abdeckung notieren. Fehlende Faktoren bedeuten unvollständige Abdeckung, nicht Nullwirkung.', outcome: 'Ein Ergebnis samt Nachweis-/Vollständigkeitsstatus ist notiert', slug: 'user-guide/lcia' },
    ],
    completionTitle: 'Abschlusskriterien', completionDescription: 'Sind alle drei Punkte erfüllt, ist der Schnellstart abgeschlossen. Erstellung, Prüfung und Veröffentlichung folgen in der Datenproduktionsreise.',
    completion: ['Ein Prozessdatensatz wurde geöffnet und erkannt', 'Referenzfluss und funktionelle Einheit wurden unterschieden', 'Methodennachweis und Abdeckung wurden zusammen mit dem LCIA-Ergebnis geprüft'],
    recoveryTitle: 'Fehlerbehebung', recoveryDescription: 'Die Route verzweigt nicht. Beheben Sie den aktuellen Schritt und fahren Sie mit der nächsten Nummer fort.',
    recovery: [
      { title: 'Anmeldung scheitert', description: 'E-Mail-Bestätigung, Kontoeinstellungen und Browsersitzung prüfen.', slug: 'user-guide/account-profile' },
      { title: 'Kein Methanol-Treffer', description: 'Filter löschen oder einen anderen sichtbaren offenen Prozess wählen.', slug: 'user-guide/search' },
      { title: 'Keine LCIA sichtbar', description: 'Einen Prozess mit Ergebnis wählen und den Nachweisstatus im LCIA-Guide prüfen.', slug: 'faq' },
    ],
    videoLabel: 'Optionales Video', videoDescription: 'Das Video ergänzt die schriftliche Route; Wiedergabe ist für den Abschluss nicht erforderlich.',
  },
  fr: {
    eyebrow: '10–15 minutes · un parcours fixe', title: 'D’un procédé ouvert à des preuves ACVI interprétables',
    description: 'Ce parcours n’est pas un catalogue de fonctions et ne demande pas de créer des données dès la première session. Suivez cinq étapes : connexion, contexte de l’exemple, recherche d’un procédé, base quantitative et preuves ACVI.',
    openApp: 'Ouvrir TianGong LCA', prerequisitesTitle: 'Avant de commencer',
    prerequisites: ['Un compte TianGong LCA permettant la connexion', 'Environ 10–15 minutes sans interruption', 'Tout procédé ouvert visible convient ; une correspondance exacte avec l’exemple n’est pas requise'],
    sampleLabel: 'Contexte de l’exemple', sampleTitle: 'Exemple bibliographique de production de méthanol',
    sampleDescription: 'L’exemple aide à reconnaître la relation preuves → procédé → système de produit → ACVI. Il ne reproduit pas les conclusions de l’article et ne fournit pas de paquet prêt à importer.',
    sampleAction: 'Lire le parcours écrit',
    routeAriaLabel: 'Parcours TianGong LCA en dix à quinze minutes : connexion, contexte, recherche du procédé, base quantitative et preuves ACVI.',
    outcomeLabel: 'Étape terminée lorsque', openStep: 'Ouvrir les instructions',
    steps: [
      { code: '01', title: 'Se connecter', description: 'Créer et vérifier un compte, ou se connecter avec un compte existant.', outcome: 'L’accueil et les entrées de données sont visibles', slug: 'quick-start/first-login' },
      { code: '02', title: 'Établir la provenance', description: 'Ouvrir l’exemple méthanol et distinguer preuves de l’article, démonstration et données de plateforme.', outcome: 'Vous pouvez citer la source et la limite de la démonstration', slug: 'quick-start/demonstrations' },
      { code: '03', title: 'Trouver un procédé ouvert', description: 'Dans Données ouvertes, chercher « methanol » ; sans résultat exact, choisir tout procédé visible.', outcome: 'La page de détail d’un procédé est ouverte', slug: 'user-guide/data' },
      { code: '04', title: 'Vérifier la base quantitative', description: 'Repérer référence quantitative, flux de référence et échanges. La quantité de référence du procédé n’est pas automatiquement l’unité fonctionnelle de l’étude.', outcome: 'Vous pouvez montrer le flux et la quantité de référence', slug: 'user-guide/data-use' },
      { code: '05', title: 'Examiner les preuves ACVI', description: 'Ouvrir un résultat et noter méthode, version ou instantané et couverture. Un facteur absent signifie couverture incomplète, pas impact nul.', outcome: 'Un résultat et son état de preuve/complétude sont notés', slug: 'user-guide/lcia' },
    ],
    completionTitle: 'Critères de fin', completionDescription: 'Le démarrage est terminé lorsque les trois points sont vrais. Création, revue et publication relèvent ensuite du parcours de production de données.',
    completion: ['Un jeu de données de procédé a été ouvert et identifié', 'Flux de référence et unité fonctionnelle ont été distingués', 'Preuve de méthode et couverture ont été vérifiées avec le résultat ACVI'],
    recoveryTitle: 'Reprise après échec', recoveryDescription: 'Le parcours ne bifurque pas. Corrigez l’étape courante, puis reprenez au numéro suivant.',
    recovery: [
      { title: 'Connexion impossible', description: 'Vérifier e-mail, réglages du compte et session du navigateur.', slug: 'user-guide/account-profile' },
      { title: 'Aucun résultat méthanol', description: 'Effacer les filtres ou choisir un autre procédé ouvert visible.', slug: 'user-guide/search' },
      { title: 'Aucune ACVI visible', description: 'Choisir un procédé avec résultat et lire l’état des preuves dans le guide ACVI.', slug: 'faq' },
    ],
    videoLabel: 'Vidéo facultative', videoDescription: 'La vidéo complète le parcours écrit ; sa lecture n’est pas nécessaire pour terminer.',
  },
};

function Arrow() {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 20 20" width="16">
      <path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

function routeHref(language: Language, slug: string) {
  return `/${language}/docs/${slug}/`;
}

export function QuickStartGuide({ lang }: { lang: string }) {
  const language: Language = lang in copy ? (lang as Language) : 'en';
  const content = copy[language];

  return (
    <div className="not-prose mt-8 grid gap-10 pb-3" data-quick-start-guide="first-session-route">
      <section aria-labelledby="quick-start-route">
        <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5 max-[40rem]:grid-cols-1 max-[40rem]:items-stretch">
          <div className="grid max-w-[48rem] gap-2">
            <p className="m-0 text-xs font-semibold tracking-[0.08em] text-fd-primary uppercase">{content.eyebrow}</p>
            <h2 className="m-0 text-2xl leading-tight font-semibold tracking-[-0.025em]" id="quick-start-route">{content.title}</h2>
            <p className="m-0 text-sm leading-6 text-fd-muted-foreground">{content.description}</p>
          </div>
          <Link className={`${buttonVariants({ variant: 'primary' })} min-h-11 shrink-0 rounded-[2px] px-4 text-sm font-medium max-[40rem]:w-full`} data-quick-start-primary href="https://lca.tiangong.earth/" rel="noreferrer" target="_blank">
            {content.openApp}<Arrow />
          </Link>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-[2px] overflow-hidden rounded-[2px] border-2 border-fd-border bg-fd-border max-[48rem]:grid-cols-1">
          <aside className="bg-fd-background p-4" data-quick-start-prerequisites>
            <h3 className="m-0 text-sm font-semibold">{content.prerequisitesTitle}</h3>
            <ul className="mt-3 mb-0 grid gap-2 pl-5 text-sm leading-6 text-fd-muted-foreground">
              {content.prerequisites.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>
          <aside className="grid content-between gap-4 bg-fd-background p-4" data-quick-start-sample>
            <div className="grid gap-1.5">
              <p className="m-0 text-xs font-semibold tracking-[0.05em] text-fd-primary uppercase">{content.sampleLabel}</p>
              <h3 className="m-0 text-sm font-semibold">{content.sampleTitle}</h3>
              <p className="m-0 text-sm leading-6 text-fd-muted-foreground">{content.sampleDescription}</p>
            </div>
            <Link className="inline-flex items-center gap-1.5 text-sm font-medium text-fd-primary" href={routeHref(language, 'quick-start/demonstrations')}>{content.sampleAction}<Arrow /></Link>
          </aside>
        </div>

        <ol aria-label={content.routeAriaLabel} className="m-0 grid list-none gap-[2px] overflow-hidden rounded-[2px] border-2 border-fd-border bg-fd-border p-0" data-quick-start-map="three-stage-onboarding" data-quick-start-map-v2="golden-path">
          {content.steps.map((step) => (
            <li className="m-0 bg-fd-background p-0" key={step.code}>
              <Link className="group grid min-h-32 grid-cols-[3rem_minmax(0,1fr)_minmax(12rem,auto)] items-center gap-4 p-4 text-fd-foreground no-underline transition-colors duration-100 hover:bg-fd-accent max-[48rem]:grid-cols-[3rem_minmax(0,1fr)] max-[48rem]:items-start" href={routeHref(language, step.slug)}>
                <span className="self-start pt-0.5 text-sm font-semibold text-fd-primary">{step.code}</span>
                <span className="grid gap-1.5">
                  <strong className="text-base leading-snug font-semibold">{step.title}</strong>
                  <span className="text-sm leading-6 text-fd-muted-foreground">{step.description}</span>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-fd-primary">{content.openStep}<Arrow /></span>
                </span>
                <span className="grid gap-1 border-l border-fd-border pl-4 max-[48rem]:col-start-2 max-[48rem]:border-t max-[48rem]:border-l-0 max-[48rem]:pt-3 max-[48rem]:pl-0">
                  <span className="text-xs font-semibold tracking-[0.04em] text-fd-muted-foreground uppercase">{content.outcomeLabel}</span>
                  <strong className="text-sm leading-5 font-medium">{step.outcome}</strong>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="quick-start-completion" className="rounded-[2px] border border-fd-primary/35 bg-fd-primary/5 p-5">
        <h2 className="m-0 text-xl font-semibold" id="quick-start-completion">{content.completionTitle}</h2>
        <p className="mt-2 mb-0 text-sm leading-6 text-fd-muted-foreground">{content.completionDescription}</p>
        <ul className="mt-4 mb-0 grid gap-2 pl-5 text-sm leading-6">{content.completion.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section aria-labelledby="quick-start-recovery" className="border-t border-fd-border pt-5" data-quick-start-recovery>
        <div className="mb-4 grid max-w-[43rem] gap-2">
          <h2 className="m-0 text-xl leading-tight font-semibold tracking-[-0.02em]" id="quick-start-recovery">{content.recoveryTitle}</h2>
          <p className="m-0 text-sm leading-6 text-fd-muted-foreground">{content.recoveryDescription}</p>
        </div>
        <div className="grid grid-cols-3 gap-[2px] overflow-hidden rounded-[2px] border-2 border-fd-border bg-fd-border max-[46rem]:grid-cols-1">
          {content.recovery.map((item) => (
            <Link className="group grid min-h-24 content-between gap-3 bg-fd-background p-3.5 text-fd-foreground no-underline transition-colors duration-100 hover:bg-fd-accent" href={routeHref(language, item.slug)} key={item.slug}>
              <strong className="flex items-center justify-between gap-2 text-sm font-semibold">{item.title}<Arrow /></strong>
              <span className="text-xs leading-5 text-fd-muted-foreground">{item.description}</span>
            </Link>
          ))}
        </div>
        <Link className="mt-4 grid max-w-[43rem] gap-1 text-fd-foreground no-underline" href={routeHref(language, 'quick-start/demonstrations')}>
          <span className="text-xs font-semibold tracking-[0.05em] text-fd-primary uppercase">{content.videoLabel}</span>
          <span className="text-sm leading-6 text-fd-muted-foreground">{content.videoDescription}</span>
        </Link>
      </section>
    </div>
  );
}
