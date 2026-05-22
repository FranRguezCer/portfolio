// Shared types for the bilingual data layer ported from the Claude Design
// handoff (mocks-shared.jsx). Site-wide content lives in ./site.ts and is
// strictly typed via the interfaces below.

export type Lang = 'en' | 'es';

export interface Bilingual<T> {
  en: T;
  es: T;
}

export interface NavLabels {
  home: string;
  work: string;
  stack: string;
  experience: string;
  education: string;
  contact: string;
}

export interface SectionLabels {
  work: string;
  otherLines: string;
  experience: string;
  education: string;
  stack: string;
  contact: string;
}

export interface SectionSubs {
  work: string;
  otherLines: string;
  experience: string;
  education: string;
  stack: string;
}

export interface CtaLabels {
  work: string;
  cv: string;
  contact: string;
}

export interface StrLang {
  nav: NavLabels;
  role: string;
  based: string;
  available: string;
  heroLine1: string;
  heroLine2: string;
  manifest: string;
  heroCta: string;
  cta: CtaLabels;
  sections: SectionLabels;
  sectionSubs: SectionSubs;
  crumbWork: string;
  overview: string;
  stack: string;
  notesLbl: string;
  yearLbl: string;
  typeLbl: string;
  expSub: string;
  fmt: { present: string };
  privateNote: string;
}

export type Str = Bilingual<StrLang>;

export interface WorkCase {
  id: string;
  slug: string;
  title: Bilingual<string>;
  domain: Bilingual<string>;
  oneLiner: Bilingual<string>;
  body: Bilingual<string[]>;
  notesLabel: Bilingual<string>;
  notes: Bilingual<string[]>;
  stack: string[];
}

export interface OtherLine {
  id: string;
  slug: string;
  title: Bilingual<string>;
  summary: Bilingual<string>;
  body: Bilingual<string>;
  chips: string[];
}

export interface ExperienceEntry {
  id: string;
  period: Bilingual<string>;
  role: Bilingual<string>;
  org: Bilingual<string>;
  loc: string;
  tag: Bilingual<string>;
  desc: Bilingual<string>;
  bullets: Bilingual<string[]>;
}

export interface EducationEntry {
  id: string;
  period: Bilingual<string>;
  title: Bilingual<string>;
  org: Bilingual<string>;
  loc: string;
  tag: Bilingual<string>;
  desc: Bilingual<string>;
}

export interface StackItem {
  label: string;
  slug: string | null;
}

export interface WorkIntroEntry {
  subtitle: string;
}
