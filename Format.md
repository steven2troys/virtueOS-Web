# virtueOS: Format Specification

## Core Concept

This novel is presented as **Alan Goodenough's curated collection of artifacts** from the Marble Porch project. The website IS the collection—not a book displayed on a website, but the actual archive Alan assembled, presented exactly as he organized it.

Readers don't read a novel. They explore an archive. The distinction matters.

---

## Narrative Structure

### First-Person Curation

The narrative voice is Alan's curatorial perspective. He doesn't tell the story directly—he presents artifacts and comments on them. His notes provide:

- Context ("I found this six months later...")
- Emotional response ("Reading this now, I understand...")
- Connections between artifacts ("Compare this to what Val said in...")
- Confessions ("I edited this. I'm not proud of it.")
- Misdirection (sometimes his notes contradict the artifact)

This keeps everything in-world. The reader never leaves the fiction.

### Layered Annotations

Each chapter can contain up to three layers:

| Layer | Content | Voice |
|-------|---------|-------|
| **Layer 1** | The artifact itself | Authentic document format |
| **Layer 2** | Original notes | Character who created/received it (Val's marginalia, TenX's code comments, DM's annotations) |
| **Layer 3** | Alan's curation | His context, interpretation, confession |

Not every chapter needs all three layers. Some artifacts have only Alan's notes. Some have competing annotations from multiple characters. The layering creates texture and unreliability.

### Chapter 34: The Frame Breaks

The final chapter has no artifact. Alan speaks directly. This structural break is emotionally significant—after 33 chapters of mediated artifacts, we finally get unfiltered Alan.

**Visual treatment:**
- The artifact panel remains but is empty—just a placeholder (Marble Porch logo or virtueOS logo, centered, muted)
- Alan's notes appear in their normal position in the notes panel
- The dual-panel structure is preserved, but one panel is deliberately void

The emptiness *is* the artifact. The absence says: there's nothing left to show you. Just me.

---

## Visual Design

### Three-Column Layout

```
┌──────────────┬────────────────────────────────┬──────────────────┐
│  LEFT        │  CENTER                        │  RIGHT           │
│  SIDEBAR     │  ARTIFACT PANEL                │  ANNOTATIONS     │
│              │                                │                  │
│  ┌────────┐  │  ┌────────────────────────┐    │  ┌────────────┐  │
│  │ TOC    │  │  │                        │    │  │ ALAN'S     │  │
│  │        │  │  │  [Artifact content]    │    │  │ NOTES      │  │
│  │ Ch 1 ✓ │  │  │                        │    │  │            │  │
│  │ Ch 2 ✓ │  │  │  - Formatted to type   │    │  │ [Context,  │  │
│  │ Ch 3 ✓ │  │  │  - Tabbed if multiple  │    │  │ reactions, │  │
│  │ Ch 4   │  │  │                        │    │  │ confessions│  │
│  │ ...    │  │  │                        │    │  └────────────┘  │
│  │        │  │  └────────────────────────┘    │                  │
│  └────────┘  │                                │  ┌────────────┐  │
│              │  [Tab 1] [Tab 2] (if needed)   │  │ OTHER      │  │
│  ┌────────┐  │                                │  │ ANNOTATIONS│  │
│  │ ← Prev │  │                                │  │            │  │
│  │ Next → │  │                                │  │ [Val, DM,  │  │
│  └────────┘  │                                │  │ TenX, etc] │  │
│              │                                │  └────────────┘  │
└──────────────┴────────────────────────────────┴──────────────────┘
```

**Left sidebar:**
- TOC showing sequential reading progress (visited chapters marked)
- Previous/Next navigation
- Direct chapter access (with confirmation dialog if jumping to unvisited future chapter)

**Center panel:**
- The artifact itself, formatted to type
- Tabbed interface if chapter has multiple artifacts

**Right panel:**
- Stacked annotation panels
- Alan's curatorial notes always on top
- Other characters' annotations appear below as needed

### Artifact Type Formatting

| Artifact Type | Visual Treatment |
|---------------|------------------|
| Slack/chat threads | Message bubbles, avatars, timestamps |
| Emails | Header fields (From, To, Subject, Date), threaded replies |
| Code files | Syntax highlighting, line numbers, commit metadata |
| Meeting notes | Bulleted lists, attendee headers, action items |
| Official documents | Letterhead, formal formatting, stamps/signatures |
| Handwritten notes | Scanned images, messy handwriting, stains |
| Audio transcripts | Speaker labels, timestamps, [inaudible] markers |
| Classified docs | Redaction bars, classification headers, marginalia |

### Character Annotations

How annotations appear depends on the artifact type—no one-size-fits-all approach:

| Situation | Treatment |
|-----------|-----------|
| TenX's code comments | Inline in the code, naturally placed |
| TenX's non-code thoughts | Dedicated panel in right sidebar |
| Slack/chat conversations | Characters' words appear in the artifact itself |
| Val's security marginalia | Right sidebar panel, or inline if handwritten on document |
| DM's campaign notes | Often a separate artifact; if annotating, right sidebar |
| Meri's clinical observations | Right sidebar panel |
| Alan's curatorial notes | Always top of right sidebar |

**Guiding principle:** If it would naturally appear *in* the document (code comments, chat messages, handwritten marginalia), show it there. If it's external commentary (like Word document comments or attached notes), use the right sidebar panels.

Each chapter handles this based on what makes sense for its artifacts.

### Navigation Elements

- **Left sidebar TOC** showing sequential reading progress
- **Chapter title** in header
- **Artifact date** prominently displayed
- **Previous/Next** buttons in left sidebar
- **Direct chapter access** with confirmation dialog if jumping ahead
- **Tabs** in center panel when chapter has multiple artifacts

---

## Interactive Elements

### Story-Serving Interactions

These enhance the narrative rather than distract from it:

| Chapter | Element | Interaction |
|---------|---------|-------------|
| Ch 12 | Unread message from virtueOS | Reader can open it; Alan never did. Creates dramatic irony—reader knows what Alan refused to learn. |
| Ch 12 | Two code review versions | Tabbed interface with diff coloring to highlight discrepancies between versions |
| Ch 16 | Fragmentary classified doc | Gaps in the document render as corrupted/missing |
| Ch 16 | Redacted text | Some redactions reveal on click; others don't |
| Ch 18 | Code file | Syntax highlighting; possibly "runnable" in simulated terminal |
| Ch 20 | Complete classified doc | Compare to fragmentary version from Ch 16 |
| Ch 28 | TenX's resignation timestamps | Hover to see "5 minutes before virtueOS's message" |
| Ch 31 | Val's deletion script | Visual "execution"—TenX's messages fading/disappearing |

### What NOT to Do

- No gamification (points, achievements, unlocks)
- No branching narrative that changes the story
- No puzzles that block progress
- No required interactions—everything should be optional enhancement

---

## Audio Experience

### Read-Aloud Button

Each chapter has an optional "Listen" button for text-to-speech or pre-recorded narration.

### Audio Considerations by Artifact Type

| Artifact Type | Audio Treatment |
|---------------|-----------------|
| Prose notes | Standard narration |
| Emails/memos | Brief context ("An email dated October 2027"), then read content |
| Slack threads | Voice differentiation for speakers, message sounds |
| Code files | Describe purpose, read significant comments, summarize logic |
| Handwritten notes | "A handwritten note, slightly illegible..." |
| Transcripts | Voice acting for speakers |

### Sound Design (Optional Enhancement)

- Subtle ambient cues for artifact types
- Keyboard sounds under code
- Message notification sounds for Slack
- Paper rustling for physical documents
- Static/distortion for corrupted/redacted sections

---

## Design Philosophy

Alan built this archive. He's a programmer, not a designer. The site reflects that:

- **Clean and functional** — No faux paper textures, no archival visual effects, no skeuomorphic niceties
- **Fast** — Maximize load and search speeds; don't waste cycles on graphics that don't serve the story
- **Artifacts as-is** — Documents are digital by nature and presented in accurate preview format (Slack looks like Slack, code has syntax highlighting, etc.)
- **Quiet** — The archive doesn't greet you, congratulate you, or gamify your reading

This isn't a museum recreation. It's a programmer's file dump with good organization.

---

## Reader Engagement

### Progress Tracking

Two options:

1. **Cookie-based** (no login required)
   - Position saved locally
   - Lost if cookies cleared
   - No email list

2. **Account-based** (optional login)
   - "Save your place in the archive"
   - Framed as accessing Alan's collection
   - Enables email list for updates
   - Syncs across devices

Recommendation: Allow both. Cookie by default; login as optional upgrade.

### Visited Chapter Indicators

The TOC shows which chapters (artifacts) you've already read:

- **Simple visual distinction** — Visited chapters have a subtle indicator (muted text, small checkmark, or similar)
- **Not gamified** — No progress bars, no percentages, no achievements
- **Accessible** — Distinction isn't color-only (screen readers announce "visited" state)
- **Functional, not chatty** — No "Welcome back!" messages

On first return after creating an account, a single line appears once:

> *"Your place has been saved."*

Then never again. The archive remembers quietly.

### Spoiler Protection (or Lack Thereof)

Readers can skip ahead if they want—nothing stops them, just like a physical book. We don't protect readers from themselves.

**Sequential progress tracking:**
- "Visited" status only advances through sequential reading
- If you've read chapters 1-15, those show as visited
- If you skip to chapter 25 to peek, chapter 25 does *not* get marked visited
- Your progress marker stays at 15 until you read 16, then 17, etc.

This keeps the visited indicator meaningful as a bookmark ("where I left off") rather than a literal page-load tracker. Readers who skip around can do so freely—they just won't lose their place in the natural reading order.

**On chapter titles:** Most are thematic single words ("Napkin," "Schism," "Silence," "Message") that evoke without spoiling. The structure itself provides context: Chapter 1 opens with a post-mortem declaring the project a failure. Readers know from page one that something went wrong. The mystery is *how*, not *whether*.

### Email List Integration

Framing: "Create an account to save your progress and receive updates from the archive."

This positions it in-world—the archive might update, Alan might add new artifacts, etc.

### Community Features (Future Consideration)

- Annotations/highlighting that can be shared
- Discussion threads per chapter
- "What did you choose?" polls for interactive moments (Ch 12 message, etc.)

---

## Technical Considerations

### Responsive Design

- **Desktop:** Three-column layout (TOC left, artifact center, annotations right)
- **Tablet:** Two-column (collapsible TOC drawer, artifact left, annotations right) or stacked (artifact top, annotations bottom)
- **Mobile:** Single column with navigation drawer; tabbed interface to switch between artifact and annotations

### Accessibility

- All images have alt text describing the artifact
- Audio descriptions available
- Keyboard navigation for all interactions
- Screen reader compatible (artifact type announced)
- Redactions and interactions have non-visual alternatives

### Performance

- Artifacts load progressively (text first, images/formatting after)
- Audio files stream, not preloaded
- Position saved on scroll, not just chapter completion

---

## File Structure (When Building)

```
/chapters
  /01-post-mortem
    artifact.html (or .md)
    notes.md
    assets/ (images, audio)
  /02-napkin
    ...
/assets
  /ui (navigation, icons)
  /audio (narration files)
/styles
  artifact-types.css (Slack, email, code, etc.)
```

---

## Open Questions

### Resolved

1. **Reader choices:** ~~If readers can choose to open the Ch 12 message, do we show them what's inside?~~ **YES.** Reader can open what Alan refused to read. This creates dramatic irony—from that point forward, the reader knows something Alan doesn't. (See Outline.md, Chapter 12 for the message content.)

2. **Multiple readings:** ~~Should the site acknowledge return visitors?~~ **MINIMALLY.** No "Welcome back!" messages. TOC quietly shows visited/unvisited state. On first return after account creation, a single line: *"Your place has been saved."* Then never again.

3. **Chapter 34:** ~~How does the format change when there's no artifact?~~ **EMPTY PANEL.** The artifact panel remains but shows only a placeholder (Marble Porch or virtueOS logo, muted). Alan's notes appear in their normal position. The dual-panel structure is preserved—one panel deliberately void. The emptiness is the artifact.

4. **Spoiler protection:** ~~How do we handle the TOC showing chapter titles that might spoil plot points?~~ **WE DON'T.** Readers can skip ahead freely, like a physical book. However, "visited" status only advances through sequential reading—skipping to chapter 25 doesn't mark it visited if you've only read through chapter 15. This preserves the bookmark function without restricting access. Chapter titles are thematic, not spoilery, and the post-mortem opening already signals the project's fate.

5. **Annotations by other characters:** ~~How do we visually distinguish Val's marginalia from TenX's code comments from Alan's notes?~~ **CONTEXT-DEPENDENT.** No one-size-fits-all approach. If an annotation would naturally appear *in* the document (code comments, chat messages, handwritten marginalia), show it there. If it's external commentary, use the right sidebar annotation panels. Alan's notes always appear at the top of the right sidebar. Each chapter handles this based on what makes sense for its artifacts.

### All Questions Resolved
