#import "../templates/public-resume-layout.typ": resume, section, entry, compact

#show: resume.with(
  name: "Demian Kong",
  contact: [
    #link("mailto:demian.kong.ai@gmail.com")[demian.kong.ai\@gmail.com] ·
    #link("https://github.com/saya-ashen")[github.com/saya-ashen] ·
    #link("https://saya-ashen.github.io/demian/")[saya-ashen.github.io/demian]
  ],
  tagline: [Growing Agent Platforms · Verified Tool Use · Scientific AI],
)

#section("Research Profile")
I build systems that turn human needs into executable, reusable capabilities. My work connects growing agent platforms, configurable scientific database agents, and verified Text-to-SQL. I am seeking Ph.D. opportunities in AI agents and scientific AI.

#section("Education")
#entry([University of Chinese Academy of Sciences / CNCB], meta: [M.S. Bioinformatics · Sep 2023–Jun 2026])
Thesis: #emph[Research and Development of an Agent Framework for Bioinformatics Data Retrieval Based on Large Language Models.]

#entry([Jilin University], meta: [B.S. Pharmacy · Sep 2019–Jun 2023])
Thesis research on MKP5 in hepatic fibrosis, combining experimental models and bioinformatic analysis.

#section("Selected Research & Systems")
#entry([Chrona · Creator & Sole Developer], meta: [2026–Present · #link("https://github.com/saya-ashen/Chrona")[Source]])
- Building a local-first platform where agents create and revise persistent modules in response to human needs. Modules combine event-driven execution, persistent data, scheduled work, and routed tool calls.
- Implemented iterative build sessions, content-addressed versions, tests, platform-owned execution probes, and migration checks on data copies, with activation bound to reviewed versions.

#entry([Dingent · Founder & Lead Developer · NGDC, CNCB], meta: [2025–Jun 2026 · #link("https://github.com/Dingent/Dingent")[Source]])
- Designed a framework integrating eight CNCB biological data resources through MCP plugins; compiled visual workflows into checkpointed LangGraph state graphs, preserving entities and query scope across databases.
- First-listed co-first author of the bioRxiv preprint; technical support after graduation.

#entry([EWAS AI Assistant · Technical Lead & Developer · NGDC, CNCB], meta: [2024–2025])
- Built entity-enhanced schema linking, AST-level SQL validation, and execution-guided query repair for the natural-language AI assistant of EWAS Open Platform.
- Designed a 30-question expert-reviewed benchmark with manually verified reference SQL over a fixed system version and database snapshot (project/thesis evaluation).

#entry([ProLLaVA · Independent protein–language prototype], meta: [Oct 2024–Feb 2025])
- Connected ESM2 to Llama-3-8B on UniProt sequence–function data; ran projector pretraining, 4-bit LoRA fine-tuning, and protein–text contrastive training with advisor-provided computing resources.

#entry([iDog & NGDC Data Applications · Co-first Author & Developer], meta: [2023–Jun 2026])
- Performed canine transcriptome and DNA-methylation analysis; built DogRAG, GSA submission-data retrieval, and the Smart consultation plugin; contributed to BioKA biomarker curation.

#section("Selected Publications")
#compact[
*Kong D†*, Bei S, Wu Y, Tang B†, Zhao W. Dingent: An Easily Deployable Database Retrieval and Integration Agent Framework. #emph[bioRxiv preprint], 2026. #link("https://doi.org/10.64898/2026.03.17.712026")[DOI]

Yang F†, Xiong Z†, Zong W†, *Kong D†*, et al. EWAS Open Platform 2026. #emph[Nucleic Acids Research], 2026;54(D1):D1061–D1068. #link("https://doi.org/10.1093/nar/gkaf1155")[DOI]

Liu Y†, Wang Y†, Sun J†, *Kong D†*, Zhou B†, et al. iDog: A Multi-Omics Resource for Canids Study. #emph[Nucleic Acids Research], 2025;53(D1):D1039–D1046. #link("https://doi.org/10.1093/nar/gkae1031")[DOI]

† Equal contribution / co-first author. Additional publications: BioKA (#emph[NAR], 2024) and NGDC database-resource consortium papers (2024–2026).
]

#section("Technical Preparation & Recognition")
#compact[
*Systems:* Python, TypeScript, SQL, LangGraph, MCP, FastAPI, React / Next.js, Docker, Nix, Linux. *ML:* PyTorch, Hugging Face Transformers, LoRA / QLoRA, contrastive training.

UCAS Graduate Academic Scholarship (2023, 2024, 2025). Project lead, Provincial Undergraduate Innovation Training Program, Jilin University (completed 2022).
]
