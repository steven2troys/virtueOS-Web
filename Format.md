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

The final chapter has no artifact. Alan speaks directly. The dual-panel structure dissolves. This structural break is emotionally significant—after 33 chapters of mediated artifacts, we finally get unfiltered Alan.

---

## Visual Design

### Dual-Panel Layout

```
┌─────────────────────────────────────────────────────────────┐
│  ARTIFACT PANEL                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │  [Formatted to look authentic]                        │  │
│  │  - Slack threads look like Slack                      │  │
│  │  - Emails look like emails                            │  │
│  │  - Code has syntax highlighting                       │  │
│  │  - Napkins are scanned images                         │  │
│  │  - Government docs have redactions                    │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  NOTES PANEL                                                │
│                                                             │
│  [Original character notes, if any]                         │
│                                                             │
│  [Alan's curatorial notes]                                  │
│  - Context and timeline                                     │
│  - His reactions and interpretations                        │
│  - Connections to other artifacts                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

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

### Navigation Elements

- **Chapter title** in header
- **Artifact date** prominently displayed
- **Previous/Next** buttons
- **Sidebar TOC** showing position in collection
- **Progress indicator** ("You have explored 23 of 34 artifacts")

---

## Interactive Elements

### Story-Serving Interactions

These enhance the narrative rather than distract from it:

| Chapter | Element | Interaction |
|---------|---------|-------------|
| Ch 12 | Unread message from virtueOS | Reader can choose to open it or not. Alan didn't. Track this choice. |
| Ch 12 | Two code review versions | Toggle between versions to see discrepancies |
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

- Desktop: Side-by-side panels (artifact left, notes right)
- Tablet: Stacked panels (artifact top, notes bottom)
- Mobile: Tabbed interface (swipe between artifact and notes)

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

1. **Reader choices:** If readers can choose to open the Ch 12 message, do we show them what's inside? Or keep it hidden even if they click?

2. **Multiple readings:** Should the site acknowledge return visitors? ("Welcome back to the archive.")

3. **Chapter 34:** How does the format change when there's no artifact? Full-width prose? Video of Alan? Audio only?

4. **Spoiler protection:** How do we handle the TOC showing chapter titles that might spoil plot points?

5. **Annotations by other characters:** How do we visually distinguish Val's marginalia from TenX's code comments from Alan's notes?
