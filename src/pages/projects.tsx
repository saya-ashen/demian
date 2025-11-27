import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './projects.module.css';

type Project = {
  title: string;
  description: string;
  role: string;
  period: string;
  technologies: string[];
  url?: string;
  github?: string;
  highlights: string[];
  image?: string;
};

const projects: Project[] = [
  {
    title: 'Dingent: Open-Source LLM Agent Development Framework',
    description: 'A general-purpose LLM agent framework designed to streamline the full lifecycle of intelligent application development.',
    role: 'Lead Architect & Maintainer',
    period: '2024 – Present',
    technologies: ['LangGraph', 'Next.js', 'React', 'FastAPI', 'Python', 'TypeScript'],
    github: 'https://github.com/saya-ashen/Dingent',
    highlights: [
      'Provides an integrated stack combining LangGraph-based backend, Next.js chat frontend, and React Admin Dashboard',
      'Features a modular plugin system with configuration via UI',
      'Bundled project setup command (dingent dev) for rapid prototyping and deployment',
      'Actively maintained and evolving into a community-driven platform',
    ],
  },
  {
    title: 'EWAS AI Assistant: Epigenomic Q&A System',
    description: 'An AI-powered question-answering assistant enabling natural-language access to large-scale epigenomic datasets.',
    role: 'Lead Developer',
    period: '2024 – Present',
    technologies: ['LangChain', 'LangGraph', 'FastAPI', 'Vue3', 'Text-to-SQL', 'Python'],
    url: 'https://ngdc.cncb.ac.cn/bioagent/#/',
    highlights: [
      'Designed multi-stage text-to-SQL pipeline: intent parsing → SQL generation → data retrieval → LLM-based synthesis',
      'Achieved 76.7% accuracy in expert evaluations',
      'Implemented multi-format interactive visualizations (radar, violin, and line plots)',
      'Featured in EWAS Open Platform 2026 paper (Nucleic Acids Research)',
    ],
  },
  {
    title: 'iDog AI Search',
    description: 'An AI chatbot enabling natural language queries over canid multi-omics resources.',
    role: 'Backend Architect & Developer',
    period: '2024 – 2025',
    technologies: ['LangGraph', 'FastAPI', 'Multi-omics', 'Python'],
    highlights: [
      'Built AI chatbot for the iDog platform',
      'Executed multi-omics pipelines for canid genomic data',
      'Co-first author publication in Nucleic Acids Research (2025)',
    ],
  },
  {
    title: 'BioKA: Biomarker Knowledgebase',
    description: 'A curated and integrated biomarker knowledgebase for animals.',
    role: 'Data Curator & Contributor',
    period: '2023 – 2024',
    technologies: ['Data Curation', 'Bioinformatics', 'Python'],
    highlights: [
      'Curated and integrated biomarker data from 20+ public resources',
      'Published in Nucleic Acids Research (2024)',
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <div className={styles.projectMeta}>
          <span className={styles.role}>{project.role}</span>
          <span className={styles.period}>{project.period}</span>
        </div>
      </div>
      
      <p className={styles.description}>{project.description}</p>
      
      <div className={styles.technologies}>
        {project.technologies.map((tech, idx) => (
          <span key={idx} className={styles.tech}>{tech}</span>
        ))}
      </div>
      
      <ul className={styles.highlights}>
        {project.highlights.map((highlight, idx) => (
          <li key={idx}>{highlight}</li>
        ))}
      </ul>
      
      <div className={styles.links}>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            🌐 Live Demo
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            📦 GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Layout title="Projects" description="Research and development projects by Demian Kong">
      <main className="container margin-vert--lg">
        <div className={styles.header}>
          <h1>🚀 Projects</h1>
          <p className={styles.subtitle}>
            Building AI-powered systems for scientific discovery and data accessibility.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
