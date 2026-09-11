# Fleet Automation Notes (brain dump)

Raw notes — capture anything here, then refine the externally safe story into `page.tsx`.

## Known facts (from resume)

- **Role:** Senior Software Engineer, Bloomberg LP — Fleet Automation Services Platform, June 2025–present
- Led expansion of a fleet automation platform to **6,000 Juniper routers**, replacing manual SSH upgrades that could require up to **3,000 engineer-days per quarterly cycle**.
- Co-designed a **Go-based orchestration platform** spanning **7 services** and **100,000+ machines**.
- Evolving batch workflows toward **Kafka-driven events** to reduce stale state and race conditions across eligibility, scheduling, ticketing, and reconciliation.
- Designed and implemented a **DORA-driven security campaign** across **60,000 machines** and **6 infrastructure teams**. Extended the orchestration system with multi-stage rollouts, telemetry prechecks, and campaign-specific scheduling constraints.
- Led **2 fleet automation campaigns** end-to-end: translating infrastructure requirements into technical proposals, architecture, implementation, and production support.
- Led a four-engineer hackathon team that built a Bloomberg Philanthropy MCP server. It integrated IAM-protected services to surface events and volunteer activity through an LLM interface, then was productionized for internal use.

## Page narrative

This case study should be about the shift from automating data pipelines to operating infrastructure at fleet scale: systems where stale state, timing, and safe rollout mechanics are central product concerns. Lead with the router upgrade outcome, then explain the orchestration and event-driven design at a public-safe level. The DORA campaign can demonstrate the broader ownership: technical design, rollout safety, and alignment across infrastructure teams.

Possible page structure:

1. **Fleet Automation at Bloomberg** — introduction and June 2025–present date.
2. **Replacing manual router upgrades** — 6,000 routers; up to 3,000 engineer-days per quarterly cycle. Explain the operational payoff without describing internal systems or procedures.
3. **Designing for fleet-scale correctness** — seven Go services, 100,000+ machines, and a move from batch to Kafka-driven events. Describe stale state and race conditions as the motivating problem, not as confidential incidents.
4. **Rolling out security safely** — DORA campaign across 60,000 machines and six teams; multi-stage rollout, telemetry checks, and tailored scheduling.
5. **Owning the campaign lifecycle** — technical proposal through production support, backed by two end-to-end campaign deliveries.

The MCP-server hackathon project is a useful optional final section, but it is somewhat separate from the fleet story. Include it only if it helps show leadership and LLM-adjacent work without making the page feel unfocused.

## Confidentiality boundary

The resume bullets are the public-safe baseline. Keep the published page at that level: high-level architecture patterns, team/scale metrics already on the resume, and personal ownership. Do not include internal service names, operational playbooks, security implementation details, topology, customer details, unreleased roadmap, or incident specifics.

## Prompts to fill in

- What made manual SSH upgrades hard beyond their engineer-time cost? Were consistency, sequencing, visibility, or recovery the main pain points?
  - Sequencing, visibility, and having operators on hand to diagnose issues all made manual SSH upgrades difficult. My team worked with the networking teams to devise scheduling rules so they could safely deploy their changes, with automated remediation for some errors, while avoiding operator fatigue.
- Which boundary between the 7 services most often surfaced stale state or race-condition risk, and what general design principle helped resolve it?
  - A cron job recomputed a device's status—whether it was ready for an upgrade, failing prechecks, upgraded, or had failed an upgrade—and was later changed to use Kafka for event-driven workflows.
- Why were Kafka-driven events a better fit than batch workflows for this domain? What tradeoff did that introduce?
  - Kafka-driven events made sense for immediate feedback to owners of the devices being upgraded. Some parts of the system remained cron jobs; others were made real-time.
- For the DORA campaign, how did telemetry prechecks determine whether a machine could proceed? Keep the answer architectural and non-sensitive.
  - We worked with the networking team to devise a series of telemetry prechecks that told us whether a device was safe to upgrade. For example, has the device been SSH'd into recently, does the machine have the correct image version for the OS upgrade, etc.
- What did campaign-specific scheduling need to accommodate: maintenance windows, dependencies, capacity, or a different constraint?
  - Regional maintenance windows worldwide, dependencies (A before B), device concurrency per time slot, and automated staged rollouts.
- What did you learn from owning the 2 campaigns from proposal through production support that you could not have learned from 1 implementation task?
  - Lots of client communication and soft skills, but also architectural judgment. Metrics and logging made debugging in production easier.
- Is there a sanitized before/after metric beyond engineer-days that would make the router story more tangible: duration, success rate, retries, or coverage?
- Did leading the four-person MCP hackathon change how you think about building LLM interfaces on top of existing, access-controlled services?

## Potential media / visual direction (later)

- A sanitized flow diagram: request or eligibility event → orchestration → staged rollout → telemetry gate → reconciliation. Use generic labels only.
- A simple scale comparison: manual quarterly SSH process → automated campaign, showing 6,000 routers and up to 3,000 engineer-days avoided.
- Do not use screenshots of internal dashboards, tickets, service names, or topology diagrams. 
