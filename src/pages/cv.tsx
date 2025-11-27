import React from 'react';
import Layout from '@theme/Layout';
import styles from './cv.module.css';

export default function CV() {
  return (
    <Layout title="CV" description="Curriculum Vitae of Demian Kong">
      <main className="container margin-vert--lg">
        <div className={styles.header}>
          <h1>📄 Curriculum Vitae</h1>
          <p className={styles.subtitle}>Demian Kong | AI & Bioinformatics Researcher</p>
          <div className={styles.contact}>
            <a href="mailto:kongdemian@big.ac.cn">📧 kongdemian@big.ac.cn</a>
            <a href="https://github.com/saya-ashen" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
          </div>
        </div>

        {/* Education Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🎓 Education</h2>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>University of Chinese Academy of Sciences (UCAS)</h3>
              <span className={styles.location}>Beijing, China</span>
            </div>
            <div className={styles.entryMeta}>
              <span className={styles.degree}>M.S. in Bioinformatics</span>
              <span className={styles.period}>2023 – 2026 (Expected)</span>
            </div>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>Jilin University</h3>
              <span className={styles.location}>Jilin, China</span>
            </div>
            <div className={styles.entryMeta}>
              <span className={styles.degree}>B.S. in Pharmacy</span>
              <span className={styles.period}>2019 – 2023</span>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>💼 Experience</h2>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>Graduate Researcher</h3>
              <span className={styles.location}>Beijing, China</span>
            </div>
            <div className={styles.entryMeta}>
              <span className={styles.company}>National Genomics Data Center (NGDC), CNCB</span>
              <span className={styles.period}>2023 – Present</span>
            </div>
            <p className={styles.supervisor}>Supervisor: Dr. Wenming Zhao</p>
            <ul className={styles.responsibilities}>
              <li>Pioneered the development of AI-driven conversational agents using LangGraph and FastAPI to streamline natural-language access to large-scale genomic/epigenomic databases.</li>
              <li>Co-first author on iDog (Liu et al., Nucleic Acids Research, 2025): executed multi-omics pipelines and built an AI chatbot enabling NL queries over canid resources.</li>
              <li>Architected the EWAS AI Assistant, a multi-stage text-to-SQL agent (featured in an NAR 2026 paper) that enables complex querying and interactive visualization of epigenomic data.</li>
              <li>Contributed to BioKA (Wang et al., Nucleic Acids Research, 2024) by curating and integrating biomarker data from 20+ public resources.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>Thesis Student</h3>
              <span className={styles.location}>Jilin, China</span>
            </div>
            <div className={styles.entryMeta}>
              <span className={styles.company}>Jilin University</span>
              <span className={styles.period}>2022 – 2023</span>
            </div>
            <p className={styles.supervisor}>Advisor: Dr. Ping Jiao</p>
            <ul className={styles.responsibilities}>
              <li>Established an in vivo CCl₄-induced hepatic fibrosis model to study the role of MKP5.</li>
              <li>Performed mechanistic studies using retroviral overexpression and RNA-seq; conducted GO/KEGG enrichment to identify regulated pathways.</li>
              <li>Applied qRT-PCR, Western Blot, and histology (H&E, Masson's) for phenotype evaluation.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>Undergraduate Researcher</h3>
              <span className={styles.location}>Jilin, China</span>
            </div>
            <div className={styles.entryMeta}>
              <span className={styles.company}>Jilin University</span>
              <span className={styles.period}>2021 – 2022</span>
            </div>
            <p className={styles.supervisor}>Advisor: Dr. Wei Sun</p>
            <ul className={styles.responsibilities}>
              <li>Synthesis and Crystallographic Study of 2-amino-4-(3-bromophenyl)-5-oxo-4H,5H-pyrano[3,2-c]chromene-3-carbonitrile.</li>
              <li>Determined absolute configuration via single-crystal X-ray diffraction; completed a comprehensive synthesis & crystallography report.</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🛠️ Skills</h2>

          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h4>AI & Data Science</h4>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>PyTorch</span>
                <span className={styles.skillTag}>Hugging Face Transformers</span>
                <span className={styles.skillTag}>LangChain/LangGraph</span>
                <span className={styles.skillTag}>Pandas</span>
                <span className={styles.skillTag}>NumPy</span>
                <span className={styles.skillTag}>DeepEval</span>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h4>Programming & Scripting</h4>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Python</span>
                <span className={styles.skillTag}>JavaScript/TypeScript</span>
                <span className={styles.skillTag}>Nix</span>
                <span className={styles.skillTag}>SQL</span>
                <span className={styles.skillTag}>Bash</span>
                <span className={styles.skillTag}>Java</span>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h4>Web & Systems</h4>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Linux</span>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>Neovim</span>
                <span className={styles.skillTag}>FastAPI</span>
                <span className={styles.skillTag}>Docker</span>
                <span className={styles.skillTag}>Git</span>
                <span className={styles.skillTag}>Vue.js</span>
                <span className={styles.skillTag}>Node.js</span>
                <span className={styles.skillTag}>Kubernetes</span>
                <span className={styles.skillTag}>Proxmox VE</span>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h4>Languages</h4>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Chinese (Native)</span>
                <span className={styles.skillTag}>English</span>
              </div>
            </div>
          </div>
        </section>

        {/* Download Button */}
        <div className={styles.download}>
          <p>For a complete PDF version, please contact me directly.</p>
        </div>
      </main>
    </Layout>
  );
}
