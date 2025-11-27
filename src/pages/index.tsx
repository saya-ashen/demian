import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Demian Kong - AI & Bioinformatics Researcher">
      
      {/* Hero Section */}
      <header className={styles.heroBanner}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.avatar}>
              <div className={styles.avatarPlaceholder}>DK</div>
            </div>
            <h1 className={styles.heroTitle}>Demian Kong</h1>
            <p className={styles.heroSubtitle}>
              AI-Driven Bioinformatics & LLM Agent Researcher
            </p>
            <p className={styles.heroAffiliation}>
              M.S. Candidate @ University of Chinese Academy of Sciences
            </p>
            <div className={styles.heroButtons}>
              <Link className="button button--primary button--lg" to="/publications">
                📚 Publications
              </Link>
              <Link className="button button--outline button--primary button--lg" to="/projects">
                🚀 Projects
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container margin-vert--lg">
        {/* About Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>👋 About Me</h2>
          <div className={styles.aboutContent}>
            <p>
              I am a Graduate Researcher at the <strong>National Genomics Data Center (NGDC)</strong>, 
              China National Center for Bioinformation (CNCB). My research lies at the intersection 
              of <strong>AI and Bioinformatics</strong>, focusing on developing production-grade 
              large language model (LLM) agent systems to enhance genomic and epigenomic data accessibility.
            </p>
            <p>
              As the lead architect of <Link to="/projects"><strong>Dingent</strong></Link>, 
              an open-source LLM-agent framework, I work on building scalable multi-agent orchestration 
              systems using technologies like <strong>LangGraph</strong>, <strong>Next.js</strong>, 
              and <strong>FastAPI</strong>.
            </p>
          </div>
        </section>

        {/* Research Highlights */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🔬 Research Highlights</h2>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🤖</div>
              <h3>LLM Agent Systems</h3>
              <p>Building AI-driven conversational agents for natural-language access to genomic databases.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🧬</div>
              <h3>Bioinformatics Tools</h3>
              <p>Developing multi-stage text-to-SQL pipelines for epigenomic data exploration.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>📊</div>
              <h3>Data Visualization</h3>
              <p>Creating interactive visualizations for comprehensive exploration of biological data.</p>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🔥 Recent News</h2>
          <div className={styles.newsList}>
            <div className={styles.newsItem}>
              <span className={styles.newsDate}>2026</span>
              <div className={styles.newsContent}>
                <strong>EWAS Open Platform</strong> paper accepted in <em>Nucleic Acids Research</em>! 
                Featured our AI assistant for epigenomic Q&A.
              </div>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.newsDate}>2025</span>
              <div className={styles.newsContent}>
                Published <strong>iDog</strong> (Co-first author) in <em>Nucleic Acids Research</em> — 
                a multi-omics resource for canids study.
              </div>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.newsDate}>2025</span>
              <div className={styles.newsContent}>
                Contributed to <strong>NGDC Database Resources 2025</strong> paper in <em>NAR</em>.
              </div>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.newsDate}>2024</span>
              <div className={styles.newsContent}>
                <strong>BioKA</strong> published in <em>Nucleic Acids Research</em> — 
                a curated biomarker knowledgebase for animals.
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📬 Get In Touch</h2>
          <div className={styles.contactCards}>
            <a href="mailto:kongdemian@big.ac.cn" className={styles.contactCard}>
              <span className={styles.contactIcon}>📧</span>
              <span>kongdemian@big.ac.cn</span>
            </a>
            <a href="https://github.com/saya-ashen" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <span className={styles.contactIcon}>🔗</span>
              <span>github.com/saya-ashen</span>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
