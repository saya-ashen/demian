import React from 'react';
import Layout from '@theme/Layout';
import styles from './publications.module.css';

type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  url?: string;
  isCoFirst?: boolean;
  isHighlight?: boolean;
};

const publications: Publication[] = [
  {
    title: 'EWAS Open Platform 2026: a deeply integrated resource for epigenome-wide association studies',
    authors: 'Yang, F.†, Ong, Z.†, Zong, W., Kong, D†, Tang, B., Chen, X., ... & Li, R.',
    journal: 'Nucleic Acids Research',
    year: 2026,
    volume: 'gkaf1155',
    isCoFirst: true,
    isHighlight: true,
  },
  {
    title: 'OmniExtract: An automatic data extraction tool based on Large Language Model and Prompt Engineering',
    authors: 'Wang, Y., Tang, B., Wu, S., Meng, Y., Kong, D., & Zhao, W.',
    journal: 'bioRxiv',
    year: 2025,
    volume: '2025-09',
    url: 'https://www.biorxiv.org/',
  },
  {
    title: 'Database Resources of the National Genomics Data Center, China National Center for Bioinformation in 2025',
    authors: 'Bao Y, Kong D, et al.',
    journal: 'Nucleic Acids Research',
    year: 2025,
    volume: '53(D1)',
    pages: 'D30–D44',
  },
  {
    title: 'iDog: a multi-omics resource for canids study',
    authors: 'Liu Y†, Wang Y†, Sun J†, Kong D†, et al.',
    journal: 'Nucleic Acids Research',
    year: 2025,
    volume: '53(D1)',
    pages: 'D1039–D1046',
    isCoFirst: true,
    isHighlight: true,
  },
  {
    title: 'Database resources of the National Genomics Data Center, China National Center for Bioinformation in 2024',
    authors: 'Bai, X., ... Kong, D., ... & Tian, W.',
    journal: 'Nucleic Acids Research',
    year: 2024,
    volume: '52(D1)',
    pages: 'D18–D32',
  },
  {
    title: 'BioKA: a curated and integrated biomarker knowledgebase for animals',
    authors: 'Wang Y, Kong D, et al.',
    journal: 'Nucleic Acids Research',
    year: 2024,
    volume: '52(D1)',
  },
];

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <div className={`${styles.publicationCard} ${pub.isHighlight ? styles.highlight : ''}`}>
      <div className={styles.year}>{pub.year}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {pub.title}
          {pub.isCoFirst && <span className={styles.badge}>Co-first Author</span>}
        </h3>
        <p className={styles.authors}>{pub.authors}</p>
        <p className={styles.journal}>
          <em>{pub.journal}</em>
          {pub.volume && `, ${pub.volume}`}
          {pub.pages && `, ${pub.pages}`}
        </p>
        {pub.url && (
          <a href={pub.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Paper →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <Layout title="Publications" description="Academic publications by Demian Kong">
      <main className="container margin-vert--lg">
        <div className={styles.header}>
          <h1>📚 Publications</h1>
          <p className={styles.subtitle}>
            My research focuses on AI-driven bioinformatics tools and LLM agent systems for genomic databases.
            <br />
            <span className={styles.note}>† indicates co-first authorship</span>
          </p>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{publications.length}</span>
            <span className={styles.statLabel}>Publications</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{publications.filter(p => p.isCoFirst).length}</span>
            <span className={styles.statLabel}>Co-first Author</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{publications.filter(p => p.journal.includes('Nucleic Acids Research')).length}</span>
            <span className={styles.statLabel}>NAR Papers</span>
          </div>
        </div>

        <div className={styles.publicationsList}>
          {publications.map((pub, idx) => (
            <PublicationCard key={idx} pub={pub} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
