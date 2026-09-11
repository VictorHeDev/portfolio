# ESG Notes (brain dump)

Raw notes — capture anything here, refine into `page.tsx` later.

## Known facts (from resume / current page)
- May 2022 – June 2025, two roles: ESG Score Computation, then ESG Analytics & Government Climate Risk
- ESG == "Environmental, Social, & Governance Scores"
- **Scaling company scoring** — replaced ad hoc scripts with 6 microservices, 3,000 → 15,000 companies scored nightly, 80x throughput (16 hrs → <1 hr), worked with quants to decompose 4 scoring models, snapshot service versioning 1M+ nightly data points (~5% persisted via time-series diffing)
- **Climate Risk rebuild** — 151 countries, 24+ runbook-driven scripts → single Argo-orchestrated service, 2 weeks → 15 min, regression-tested migration back to 2015, Pandera-based input validation
- **File diff tool** — built and shipped independently, ~100 users (quants, analysts, engineers)
- **Cross-datacenter DR-1 migration** — 8 months, aligned 6 ESG teams onto one phased plan instead of 6 independent ones
- **ESG mobile application** — Created an MVP for an ESG mobile app which was later productionized into the Bloomberg mobile app
- **Core maintainer** internal Iceberg alternative library maintainer

## A confidentiality note
Unlike the bootcamp projects, this is Bloomberg's internal system — worth being deliberate about what's fair game to name publicly (architecture patterns, scale numbers, your role) vs. anything that reads as proprietary implementation detail, internal tool/service names, or client-specific info. Resume bullets are already vetted as external-safe, so staying close to that level of specificity is the safe default.

## Prompts to fill in
- Scaling company scoring: hardest part of decomposing the 4 scoring models? Any race condition or correctness bug that only showed up at nightly-cadence scale?
  - The hardest part was decoupling the quant models into actual pipelines, split into microservices, and later divvyed up to teams.
- Snapshot service: what tradeoffs shaped the ~5% time-series diffing design — any near-miss where diffing almost lost data fidelity?
  - I designed some Jupyter notebooks to track and visualize that hundreds of thousands of data points did not change daily, which made zero sense to insert as new into the database. A business use-case win is that the snapshot DB and service allowed us to re-create ESG scores for any day in the past because can retrieve their inputs.
- Climate Risk rebuild: what made reproducing legacy results back to 2015 hard? A specific validation failure that was gnarly to track down?
  - Needed to understand, debug, and rewrite many of the pandas and numpy transformations, make them vectorized, for correctness and speed.
- File diff tool: what pain point made you build it? Was adoption organic, or did you have to sell people on using it?
  - We needed a way to tell who was uploading datasets, when, and how they were changing the output of scores.
- DR migration: was the harder part technical or organizational — getting 6 teams to agree on one plan? Any specific pushback you had to navigate?
  - Definitely organizational. It was clear what tools I wanted to use, and the strategy of a dual writer and eventual cutover strategy instead of a 1 time switch.
- What changed about how you worked between the two roles — first team scaling raw throughput, second team owning a full pipeline rebuild + migration?
  - Learned how to navigate ambiguity from 1 task force to another. My work on the 1st team gave me insights on how to design the system differently the 2nd time for Government/Country scores.
- Anything about the jump from Software Engineer to Senior Software Engineer (Fleet Automation) that traces back to lessons from this era?

## Photos/media (for later)
- No UI screenshots here (backend/infra work) — think architecture diagrams, before/after throughput or latency charts, Grafana dashboard snapshots (sanitized of any confidential labels/values)
