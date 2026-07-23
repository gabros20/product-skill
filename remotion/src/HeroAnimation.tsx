import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { themes, MONO, SANS, type ThemeName, type Theme } from "./theme";

// Hero: "the front of the product lifecycle, on a whiteboard." What an expert sketches to explain
// the product skill — a rough idea arrives, discovery validates the PROBLEM before any solution,
// the faceted router composes the smallest sufficient reference set from one primary job × at most
// one product-type overlay, the agentic overlay turns the eval set INTO the acceptance criteria
// (the differentiator), the PRD gets specified and prioritized on divergence, success is defined as
// a north-star metric tree, and a handoff.yaml hands the DECISION — never the execution — to
// design / architecture. ~59s, loops (opens/closes on an empty stage).
//
// Pacing model (reader-first): every scene animates its content IN, then HOLDS fully still for a
// reading beat (~2.5–4s, scaled to how much there is to read) before the container fades OUT. The
// fade-out begins at dur − <envelope hold>, so each scene's dur = content-in-end + reading-hold +
// fade. Never let the next scene start before this one has been readable at rest.
//
// Scene map (30fps):
//   S1 idea      0–195       the rough ask arrives — the whole product register
//   S2 discover  195–445     validate the PROBLEM first — an Opportunity Solution Tree + F/I/A labels
//   S3 route     445–745     THE centerpiece: primary job × one overlay → smallest sufficient set
//   S4 agentic   745–1045    the differentiator: the eval set IS the acceptance criteria
//   S5 define    1045–1320   spec the PRD → prioritize on multi-engine DIVERGENCE, not one rank
//   S6 metrics   1320–1560   define success: a north-star metric tree + guardrails
//   S7 handoff   1560–1785   hand the DECISION (handoff.yaml) to design / architecture

const EASE = Easing.bezier(0.16, 1, 0.3, 1);

function envelope(frame: number, dur: number, hold = 26) {
  const opIn = interpolate(frame, [0, hold], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const opOut = interpolate(frame, [dur - hold, dur], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const y = interpolate(frame, [0, hold], [14, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  return { opacity: Math.min(opIn, opOut), y };
}

const step = (frame: number, a: number, b: number, ease = false) =>
  interpolate(frame, [a, b], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease ? EASE : undefined });

const SceneTitle: React.FC<{ t: Theme; kicker: string; title: string; accent?: string }> = ({ t, kicker, title, accent }) => (
  <div style={{ textAlign: "center", marginBottom: 30 }}>
    <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, fontSize: 17, color: accent ?? t.accent, marginBottom: 12 }}>
      {kicker}
    </div>
    <div style={{ fontFamily: MONO, fontSize: 40, color: t.ink, letterSpacing: "-0.02em" }}>{title}</div>
  </div>
);

// ── S1 · the rough ask arrives — the whole product register ───────────────────
const AskLine: React.FC<{ t: Theme; text: string; frame: number; from: number }> = ({ t, text, frame, from }) => {
  const chars = Math.floor(interpolate(frame, [from, from + 38], [0, text.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const typed = text.slice(0, chars);
  const caretOn = Math.floor(frame / 8) % 2 === 0 && chars < text.length && frame > from;
  const op = step(frame, from - 4, from + 6);
  return (
    <div style={{ opacity: op }}>
      <span style={{ color: t.accent, fontWeight: 700 }}>/product</span> <span>{typed}</span>
      <span style={{ opacity: caretOn ? 1 : 0, color: t.accent }}>▋</span>
    </div>
  );
};

const SceneIdea: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 22);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 1000 }}>
        <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, fontSize: 16, color: t.muted, marginBottom: 20, textAlign: "center" }}>
          decide what to build, for whom &amp; why
        </div>
        <div style={{ background: t.codeBg, border: `1px solid ${t.line}`, borderRadius: 12, padding: "26px 32px", fontFamily: MONO, fontSize: 21, lineHeight: 2, color: t.ink }}>
          <AskLine t={t} text="should we build an agent that drafts refund replies?" frame={frame} from={8} />
          <AskLine t={t} text="write the PRD + success metrics for checkout v2" frame={frame} from={54} />
        </div>
        <div style={{ marginTop: 18, textAlign: "center", fontFamily: SANS, fontSize: 15.5, color: t.muted, opacity: step(frame, 92, 112) }}>
          websites · web &amp; SaaS · mobile · agentic / AI · internal tools
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S2 · discovery — validate the PROBLEM before the solution ─────────────────
const OstNode: React.FC<{ t: Theme; label: string; kind: "outcome" | "opp" | "sol"; appear: number; w?: number }> = ({ t, label, kind, appear, w }) => {
  const border = kind === "outcome" ? t.accent : kind === "opp" ? t.line : t.line;
  const bg = kind === "outcome" ? t.panel : kind === "opp" ? t.panel : t.bg;
  const col = kind === "sol" ? t.muted : t.ink;
  return (
    <div style={{ opacity: appear, scale: String(interpolate(appear, [0, 1], [0.9, 1])), width: w ?? 168, textAlign: "center", background: bg, border: `${kind === "outcome" ? 2 : 1}px solid ${border}`, borderRadius: 9, padding: "9px 12px", fontFamily: MONO, fontSize: 14.5, color: col, whiteSpace: "nowrap" }}>
      {label}
    </div>
  );
};

const EvidenceTag: React.FC<{ t: Theme; label: string; col: string; appear: number }> = ({ t, label, col, appear }) => (
  <div style={{ opacity: appear, display: "flex", alignItems: "center", gap: 7, fontFamily: MONO, fontSize: 14.5, color: t.ink }}>
    <span style={{ width: 10, height: 10, borderRadius: 3, background: col }} /> {label}
  </div>
);

const SceneDiscover: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const outcome = step(frame, 14, 40, true);
  const line1 = step(frame, 40, 60, true);
  const opp1 = step(frame, 48, 72, true);
  const opp2 = step(frame, 58, 82, true);
  const line2 = step(frame, 82, 100, true);
  const sol1 = step(frame, 92, 114, true);
  const sol2 = step(frame, 100, 122, true);
  const tags = step(frame, 120, 142, true);
  const cap = step(frame, 138, 160);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1000 }}>
        <SceneTitle t={t} kicker="discover · problem before solution" title="frame opportunities, not features" />
        {/* opportunity solution tree */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          <OstNode t={t} label="↑ activation rate" kind="outcome" appear={outcome} w={210} />
          <div style={{ width: 2, height: 20, background: t.line, opacity: line1 }} />
          <div style={{ display: "flex", gap: 60 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <OstNode t={t} label="can't tell what's next" kind="opp" appear={opp1} w={200} />
              <div style={{ width: 2, height: 18, background: t.line, opacity: line2 }} />
              <OstNode t={t} label="guided first-run" kind="sol" appear={sol1} w={158} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <OstNode t={t} label="setup feels heavy" kind="opp" appear={opp2} w={200} />
              <div style={{ width: 2, height: 18, background: t.line, opacity: line2 }} />
              <OstNode t={t} label="import from tool" kind="sol" appear={sol2} w={162} />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 26, marginTop: 26, opacity: tags }}>
          <EvidenceTag t={t} label="Fact" col={t.good} appear={tags} />
          <EvidenceTag t={t} label="Inference" col={t.dim} appear={tags} />
          <EvidenceTag t={t} label="Assumption → risk register" col={t.amber} appear={tags} />
        </div>
        <div style={{ marginTop: 22, fontFamily: MONO, fontSize: 16.5, color: t.muted, opacity: cap, textAlign: "center" }}>
          desirability in doubt? <span style={{ color: t.accent }}>run the cheapest probe that tells the harshest truth</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S3 · the faceted router (centerpiece) ─────────────────────────────────────
const Lane: React.FC<{ t: Theme; label: string; chips: string[]; onIndex: number; appear: number; lit: number }> = ({ t, label, chips, onIndex, appear, lit }) => (
  <div style={{ opacity: appear, display: "grid", gridTemplateColumns: "190px 1fr", gap: 16, alignItems: "center" }}>
    <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, fontSize: 13, color: t.muted, textAlign: "right" }}>{label}</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {chips.map((c, i) => {
        const on = i === onIndex;
        return (
          <div key={c} style={{ fontFamily: MONO, fontSize: 15, padding: "6px 12px", borderRadius: 8, whiteSpace: "nowrap", color: on ? t.accentInk : t.muted, background: on ? `color-mix(in srgb, ${t.accent} ${30 + lit * 70}%, ${t.panel})` : t.bg, border: `1px solid ${on ? t.accent : t.line}`, scale: String(on ? interpolate(lit, [0, 1], [1, 1.06]) : 1) }}>
            {c}
          </div>
        );
      })}
    </div>
  </div>
);

const SceneRoute: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const lane1 = step(frame, 14, 40, true);
  const lane2 = step(frame, 26, 52, true);
  const lit1 = step(frame, 46, 68, true);
  const lit2 = step(frame, 62, 84, true);
  const arrow = step(frame, 92, 110, true);
  const readSet = ["prd.md", "surface-agentic.md", "risk-register.md", "metrics.md"];
  const counter = step(frame, 150, 172);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1040 }}>
        <SceneTitle t={t} kicker="route · smallest sufficient set" title="the faceted router" />
        <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 900 }}>
          <Lane t={t} label="one primary job" chips={["discovery", "strategy", "positioning", "business-model", "market", "PRD", "prioritization", "metrics", "risk"]} onIndex={5} appear={lane1} lit={lit1} />
          <Lane t={t} label="≤ one overlay" chips={["website", "app / SaaS", "mobile", "agentic / AI", "internal"]} onIndex={3} appear={lane2} lit={lit2} />
        </div>
        <div style={{ fontFamily: MONO, fontSize: 26, color: t.accent, margin: "16px 0 12px", opacity: arrow }}>↓</div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 9, maxWidth: 900 }}>
          {readSet.map((r, i) => {
            const ap = step(frame, 112 + i * 7, 130 + i * 7, true);
            return (
              <div key={r} style={{ opacity: ap, translate: `0 ${interpolate(ap, [0, 1], [8, 0])}px`, fontFamily: MONO, fontSize: 15, padding: "7px 13px", borderRadius: 8, color: t.accent, background: t.codeBg, border: `1px solid ${t.accent}` }}>
                {r}
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 18, fontFamily: MONO, fontSize: 16.5, color: t.muted, opacity: counter }}>
          <span style={{ color: t.ink, fontWeight: 600 }}>one job · one overlay</span> — read fully, <span style={{ color: t.accent }}>never all 15</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S4 · the agentic differentiator (the wedge) ───────────────────────────────
const Tier: React.FC<{ t: Theme; name: string; autonomy: string; col: string; appear: number }> = ({ t, name, autonomy, col, appear }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [8, 0])}px`, display: "flex", flexDirection: "column", gap: 4, alignItems: "center", background: t.panel, border: `1px solid ${t.line}`, borderTop: `3px solid ${col}`, borderRadius: 8, padding: "10px 16px", minWidth: 150 }}>
    <div style={{ fontFamily: MONO, fontSize: 15, color: t.ink, fontWeight: 600 }}>{name}</div>
    <div style={{ fontFamily: SANS, fontSize: 12.5, color: t.muted }}>→ {autonomy}</div>
  </div>
);

const SceneAgentic: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const evalLines: [string, string][] = [
    ["id:", " EVAL-1"],
    ["job:", " draft refund reply"],
    ["task_set:", " 40 real transcripts"],
    ["success:", " 0 hallucinated policy claims"],
    ["evaluator:", " llm_judge"],
    ["pass_threshold:", " ≥ 92%"],
    ["regression_gate:", " blocks release on drop"],
  ];
  const t1 = step(frame, 150, 170, true);
  const t2 = step(frame, 160, 180, true);
  const t3 = step(frame, 170, 190, true);
  const cap = step(frame, 196, 218);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1040 }}>
        <SceneTitle t={t} kicker="the differentiator · agentic / AI" title="the eval set IS the acceptance criteria" accent={t.accent} />
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <div style={{ width: 470 }}>
            <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600, fontSize: 13, color: t.accent, marginBottom: 10 }}>acceptance criteria</div>
            <div style={{ background: t.codeBg, border: `1px solid ${t.line}`, borderRadius: 12, padding: "18px 22px", fontFamily: MONO, fontSize: 17, lineHeight: 1.75 }}>
              {evalLines.map(([k, v], i) => {
                const op = step(frame, 14 + i * 14, 32 + i * 14);
                return (
                  <div key={k} style={{ opacity: op }}>
                    <span style={{ color: t.accent }}>{k}</span><span style={{ color: t.ink }}>{v}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, fontSize: 12.5, color: t.muted, opacity: t1, textAlign: "center" }}>capability tier → autonomy</div>
            <Tier t={t} name="Reliable" autonomy="Act" col={t.good} appear={t1} />
            <Tier t={t} name="Assistable" autonomy="Draft" col={t.amber} appear={t2} />
            <Tier t={t} name="Unreliable" autonomy="Suggest / don't ship" col={t.bad} appear={t3} />
          </div>
        </div>
        <div style={{ marginTop: 26, fontFamily: MONO, fontSize: 16.5, color: t.muted, opacity: cap, textAlign: "center" }}>
          re-checked every time the model or prompt changes — <span style={{ color: t.accent }}>a gate, not a QA afterthought</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S5 · define & prioritize — spec, then rank on divergence ───────────────────
const SceneDefine: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const prd = step(frame, 16, 40, true);
  const altitude = step(frame, 36, 60, true);
  const arrow = step(frame, 78, 96, true);
  const table = step(frame, 92, 116, true);
  const cap = step(frame, 168, 190);
  // three features, four engines — ranks DIVERGE (the finding)
  const engines = ["RICE", "ICE", "Kano", "MoSCoW"];
  const rows: [string, string[]][] = [
    ["import flow", ["1", "2", "must", "must"]],
    ["guided setup", ["2", "1", "perf", "should"]],
    ["SSO", ["3", "3", "excite", "won't"]],
  ];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1040 }}>
        <SceneTitle t={t} kicker="define · prioritize" title="spec it, then rank it honestly" />
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {/* PRD altitude card */}
          <div style={{ opacity: prd, width: 300, background: t.panel, border: `1px solid ${t.line}`, borderRadius: 12, padding: "18px 20px" }}>
            <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, fontSize: 12.5, color: t.muted, marginBottom: 12 }}>PRD · altitude-flexed</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, opacity: altitude }}>
              {["1-pager", "full spec", "machine-readable"].map((lvl, i) => (
                <div key={lvl} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 20, fontFamily: MONO, fontSize: 12, color: t.accent }}>{["◔", "◑", "●"][i]}</div>
                  <div style={{ fontFamily: MONO, fontSize: 15, color: t.ink }}>{lvl}</div>
                </div>
              ))}
              <div style={{ marginTop: 6, fontFamily: MONO, fontSize: 13, color: t.muted }}>Given / When / Then · scope in/out</div>
            </div>
          </div>
          <div style={{ fontFamily: MONO, fontSize: 34, color: t.accent, opacity: arrow }}>→</div>
          {/* prioritization divergence table */}
          <div style={{ opacity: table, background: t.panel, border: `1px solid ${t.line}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "126px repeat(4, 66px)", fontFamily: MONO, fontSize: 14 }}>
              <div style={{ padding: "9px 12px", color: t.muted, borderBottom: `1px solid ${t.line}` }} />
              {engines.map((e) => (
                <div key={e} style={{ padding: "9px 6px", color: t.muted, textAlign: "center", borderBottom: `1px solid ${t.line}`, fontSize: 12.5 }}>{e}</div>
              ))}
              {rows.map(([feat, ranks], ri) => (
                <React.Fragment key={feat}>
                  <div style={{ padding: "9px 12px", color: t.ink, borderBottom: ri < 2 ? `1px solid ${t.line}` : "none" }}>{feat}</div>
                  {ranks.map((r, ci) => (
                    <div key={ci} style={{ padding: "9px 6px", textAlign: "center", color: ri === 0 ? t.accent : t.ink, fontWeight: ri === 0 ? 700 : 400, borderBottom: ri < 2 ? `1px solid ${t.line}` : "none" }}>{r}</div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 24, fontFamily: MONO, fontSize: 16.5, color: t.muted, opacity: cap, textAlign: "center" }}>
          report the <span style={{ color: t.accent }}>divergence</span> as the finding — never fabricate a missing input to force one rank
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S6 · define success — north-star metric tree ──────────────────────────────
const MetricNode: React.FC<{ t: Theme; label: string; star?: boolean; appear: number }> = ({ t, label, star, appear }) => (
  <div style={{ opacity: appear, scale: String(interpolate(appear, [0, 1], [0.9, 1])), textAlign: "center", background: star ? t.panel : t.bg, border: `${star ? 2 : 1}px solid ${star ? t.accent : t.line}`, borderRadius: 9, padding: star ? "11px 20px" : "8px 14px", fontFamily: MONO, fontSize: star ? 17 : 14, color: star ? t.ink : t.muted, whiteSpace: "nowrap", boxShadow: star ? `0 20px 50px -34px ${t.accent}` : "none" }}>
    {star && <span style={{ color: t.accent, marginRight: 6 }}>★</span>}{label}
  </div>
);

const SceneMetrics: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const star = step(frame, 14, 40, true);
  const lines = step(frame, 40, 58, true);
  const drivers = step(frame, 50, 76, true);
  const inputs = step(frame, 74, 100, true);
  const guard = step(frame, 104, 128, true);
  const cap = step(frame, 132, 154);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1000 }}>
        <SceneTitle t={t} kicker="define success · outcomes over outputs" title="a north-star metric tree" />
        <MetricNode t={t} label="weekly active teams" star appear={star} />
        <div style={{ width: 2, height: 20, background: t.line, opacity: lines }} />
        <div style={{ display: "flex", gap: 44 }}>
          {["activation", "retention", "expansion"].map((d, i) => (
            <div key={d} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <MetricNode t={t} label={d} appear={drivers} />
              <div style={{ width: 2, height: 16, background: t.line, opacity: inputs }} />
              <MetricNode t={t} label={["setup ✓", "wk-4 return", "seats / team"][i]} appear={inputs} />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 24, opacity: guard }}>
          {["guardrail: p95 latency", "guardrail: cost / task", "guardrail: churn"].map((g) => (
            <div key={g} style={{ fontFamily: MONO, fontSize: 13.5, color: t.amber, background: t.amberBg, border: `1px solid ${t.amber}`, borderRadius: 7, padding: "6px 12px" }}>{g}</div>
          ))}
        </div>
        <div style={{ marginTop: 22, fontFamily: MONO, fontSize: 16.5, color: t.muted, opacity: cap, textAlign: "center" }}>
          a metric, a %, a named segment — <span style={{ color: t.accent }}>never “great results”</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S7 · hand off the DECISION (family arc closes) ────────────────────────────
const NextSkill: React.FC<{ t: Theme; name: string; note: string; appear: number }> = ({ t, name, note, appear }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [12, 0])}px`, width: 260, background: t.panel, border: `1px solid ${t.line}`, borderRadius: 11, padding: "16px 18px" }}>
    <div style={{ fontFamily: MONO, fontSize: 18, color: t.ink }}><span style={{ color: t.accent, fontWeight: 700 }}>/</span>{name}</div>
    <div style={{ fontFamily: SANS, fontSize: 13, color: t.muted, marginTop: 5, lineHeight: 1.45 }}>{note}</div>
  </div>
);

const SceneHandoff: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 20);
  const yamlLines: [string, string][] = [
    ["skill:", " product"],
    ["problem:", " validated"],
    ["artifacts:", " prd, roadmap, metrics"],
    ["risks:", " open register"],
    ["next:", " design · architecture"],
  ];
  const arrow = step(frame, 56, 78, true);
  const d = step(frame, 66, 90, true);
  const a = step(frame, 78, 102, true);
  const cap = step(frame, 96, 118);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <SceneTitle t={t} kicker="family · product → design / architecture" title="hand off the decision, not the execution" accent={t.dim} />
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <div style={{ width: 430 }}>
            <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600, fontSize: 14, color: t.accent, marginBottom: 12 }}>handoff.yaml</div>
            <div style={{ background: t.codeBg, border: `1px solid ${t.line}`, borderRadius: 12, padding: "18px 22px", fontFamily: MONO, fontSize: 18, lineHeight: 1.8 }}>
              {yamlLines.map(([k, v], i) => {
                const op = step(frame, 12 + i * 8, 28 + i * 8);
                return (
                  <div key={k} style={{ opacity: op }}>
                    <span style={{ color: t.accent }}>{k}</span><span style={{ color: t.ink }}>{v}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ fontFamily: MONO, fontSize: 40, color: t.accent, opacity: arrow }}>→</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <NextSkill t={t} name="design" note="experience · UI · interaction from validated intent" appear={d} />
            <NextSkill t={t} name="architecture" note="system & technical decisions from the brief" appear={a} />
          </div>
        </div>
        <div style={{ marginTop: 26, fontFamily: MONO, fontSize: 16.5, color: t.muted, opacity: cap, textAlign: "center" }}>
          own the <span style={{ color: t.accent }}>decision</span> about what to build · recommend siblings, never auto-invoke
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── persistent chrome + master timeline ──────────────────────────────────────
const BOUNDS = [195, 445, 745, 1045, 1320, 1560, 1785];
const LABELS = ["idea", "discover", "route", "agentic", "define", "metrics", "handoff"];

const PhaseBar: React.FC<{ t: Theme; frame: number }> = ({ t, frame }) => {
  const active = Math.max(0, BOUNDS.findIndex((b) => frame < b));
  return (
    <div style={{ position: "absolute", bottom: 34, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 15 }}>
      {LABELS.map((l, i) => (
        <div key={l} style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === active ? t.accent : t.line, scale: String(i === active ? 1.3 : 1) }} />
          <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.09em", fontSize: 12, fontWeight: 600, color: i === active ? t.ink : t.muted, opacity: i === active ? 1 : 0.55 }}>{l}</div>
        </div>
      ))}
    </div>
  );
};

export const HeroAnimation: React.FC<{ theme: ThemeName }> = ({ theme }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = themes[theme];

  const intro = step(frame, 0, 14);
  const outro = interpolate(frame, [durationInFrames - 16, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const master = Math.min(intro, outro);
  const glow = interpolate(Math.sin(frame / 90), [-1, 1], [0.5, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: t.bg, fontFamily: SANS }}>
      <AbsoluteFill style={{ background: `radial-gradient(circle at 82% 16%, color-mix(in srgb, ${t.accent} 13%, transparent), transparent 44%), radial-gradient(circle at 8% 92%, color-mix(in srgb, ${t.accent} 9%, transparent), transparent 48%)`, opacity: glow }} />
      <AbsoluteFill style={{ opacity: master }}>
        <Sequence durationInFrames={195}><SceneIdea t={t} dur={195} /></Sequence>
        <Sequence from={195} durationInFrames={250}><SceneDiscover t={t} dur={250} /></Sequence>
        <Sequence from={445} durationInFrames={300}><SceneRoute t={t} dur={300} /></Sequence>
        <Sequence from={745} durationInFrames={300}><SceneAgentic t={t} dur={300} /></Sequence>
        <Sequence from={1045} durationInFrames={275}><SceneDefine t={t} dur={275} /></Sequence>
        <Sequence from={1320} durationInFrames={240}><SceneMetrics t={t} dur={240} /></Sequence>
        <Sequence from={1560} durationInFrames={225}><SceneHandoff t={t} dur={225} /></Sequence>
        <PhaseBar t={t} frame={frame} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
