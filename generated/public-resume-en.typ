#import "../templates/public-resume-layout.typ": resume, section, entry, compact-note, compact

#show: resume.with(
  name: "Demian Kong",
  contact: [
    #link("mailto:c3313433633@gmail.com")[c3313433633\@gmail.com] ·
    #link("https://github.com/saya-ashen")[github.com/saya-ashen] ·
    #link("https://saya-ashen.github.io/demian/")[saya-ashen.github.io/demian]
  ],
  tagline: [AI Agents & LLM Systems · Scientific AI · Reliable Execution],
)

#section("Profile")
Bioinformatics M.S. graduate building reliable AI systems for scientific data and tool-driven work. Experience spans natural-language database access, verified Text-to-SQL, cross-database integration, and stateful agent runtimes. Current work focuses on inspectable planning, execution, review, and recovery.

#section("Education")
#entry([University of Chinese Academy of Sciences (UCAS)], meta: [M.S. Bioinformatics · 2023–2026 · graduated Jun 2026])
Thesis: #emph[Development of Bioinformatics Data Retrieval Technology and Configurable Agent Framework Based on Large Language Models.]

#entry([Jilin University], meta: [B.S. Pharmacy · 2019–2023])

#section("Research Experience")
#entry([National Genomics Data Center (NGDC), CNCB], meta: [Graduate Researcher · 2023–Jun 2026])
- Built conversational retrieval agents for genomic and epigenomic databases; designed multi-stage Text-to-SQL and interactive data-exploration workflows for EWAS AI Assistant.
- Contributed multi-omics pipeline and chatbot components to iDog; curated and integrated biomarker data from more than 20 public resources for BioKA.

#entry([Jilin University], meta: [Undergraduate research · 2021–2023])
- Investigated MKP5-related hepatic-fibrosis mechanisms and conducted organic synthesis and single-crystal X-ray crystallography.

#section("Selected Projects")
#entry([Chrona · Current developer], meta: [#link("https://github.com/saya-ashen/Chrona")[Repository] · #link("https://github.com/saya-ashen/Chrona/releases/tag/v0.3.1")[v0.3.1]])
- Local-first AI work executor for Task → Plan → Schedule → Execute → Review/Recover, with approval boundaries, persistent state, tool traces, and recovery. Current public release: v0.3.1 alpha.

#entry([Dingent · Founder and Lead Architect], meta: [2024–Jun 2026 · #link("https://doi.org/10.64898/2026.03.17.712026")[Preprint]])
- Built a configurable framework with MCP-based tools, graph-compiled workflows, checkpointed execution, and cross-database evidence integration; integrated it across eight CNCB data resources during graduate work.
- Evaluated under a 100-concurrent-user workload with approximately 400 ms median framework-side latency. Transferred the project to the group at graduation; now provide technical support only.

#entry([EWAS AI Assistant · Developer], meta: [2024–Jun 2026 · #link("https://ngdc.cncb.ac.cn/bioagent/#/")[BioAgent]])
- Built entity retrieval, schema-constrained Text-to-SQL, execution-based verification/correction, synthesis, and visualization. On 30 expert-reviewed questions with reference SQL: 76.7% strict and 83.3% fully-or-partially-correct accuracy.

#compact-note[Project figures above are project/thesis evaluation evidence, not journal-reported metrics.]

#section("Selected Publications")
#compact[
1. *Kong D*, Bei S, Wu Y, Tang B, Zhao W. “Dingent: An Easily Deployable Database Retrieval and Integration Agent framework.” #emph[bioRxiv preprint], 2026. #link("https://doi.org/10.64898/2026.03.17.712026")[doi:10.64898/2026.03.17.712026].
]
#v(0.6pt)
#compact[
2. Yang F†, Xiong Z†, Zong W†, *Kong D†*, et al. “EWAS Open Platform 2026.” #emph[Nucleic Acids Research], 2026;54(D1):D1061–D1068. #link("https://doi.org/10.1093/nar/gkaf1155")[doi:10.1093/nar/gkaf1155].
]
#v(0.6pt)
#compact[
3. Liu Y†, Wang Y†, Sun J†, *Kong D†*, Zhou B†, et al. “iDog: a multi-omics resource for canids study.” #emph[Nucleic Acids Research], 2025;53(D1):D1039–D1046.
]
#v(0.6pt)
#compact[
4. Wang Y, *Kong D*, et al. “BioKA: a curated and integrated biomarker knowledgebase for animals.” #emph[Nucleic Acids Research], 2024;52(D1).
]
#v(0.6pt)
#compact[
5. CNCB–NGDC Members and Partners. “Database resources of the National Genomics Data Center, China National Center for Bioinformation in 2026.” #emph[Nucleic Acids Research], 2026;54(D1):D28–D47. #link("https://doi.org/10.1093/nar/gkaf1172")[doi:10.1093/nar/gkaf1172]. *Kong D* is listed among consortium members.  #emph[† Equal contribution / joint first author.]
]

#section("Technical Skills & Recognition")
#compact[
*Programming & systems:* Python, TypeScript/JavaScript, SQL, Bash, Linux, Docker, Git · *AI & applications:* PyTorch, LangChain/LangGraph, MCP, FastAPI, React, Next.js, Vue · *Languages:* Chinese (native), English (IELTS 7.0) · *Recognition:* Provincial Undergraduate Innovation and Entrepreneurship Training Program, Jilin University
]
