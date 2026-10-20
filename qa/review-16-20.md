# Independent Dutch/Italian audit: units 16–20

Review date: 2026-10-20.

Scope: independent review and correction of the main author's new lessons in `data/unit-16.js` through `data/unit-20.js`. Earlier units were consulted for prerequisite vocabulary/forms; `data/helpers.mjs` was read to inspect generated questions. Neither earlier units, helpers, nor runtime were edited in this pass. No build, commit, or push was performed.

As requested, **rule hints and Italian translations were treated as visible**. This report does not repeat the previous review's provisional runtime findings or assume that those findings still apply.

## Outcome

Corrections were needed, particularly for untaught irregular forms, a translation distractor from another unit, and missing valid variants. After correction:

- All 25 MC items have exactly one correct listed option under the sentence, hint, and Italian meaning.
- All five explanations meet the 300–600-word requirement.
- All 25 order distractors are marked `!` and generate silent, deliberately malformed tiles.
- All 25 translation distractors belong to their own unit's vocabulary.
- All 132 accepted mixed-sentence answers can be constructed from the supplied non-distractor tiles.
- Every word form in those accepted mixed sentences is introduced in the current explanation/vocabulary or earlier course material.

This is a scoped language/data audit, not a blanket guarantee of every conceivable answer, learner comprehension, or application behavior.

## Corrections

### Unit 16 — adverbs

- Explicitly introduced the present forms used in the mixed exercises: `slaapt`, `rijdt`, `praten`, `luister`, and `vertrekken`. Their infinitives remain in the vocabulary.
- Added defensible open-answer synonyms: `vlug/rap` for `snel`, `dikwijls` for `vaak`, and the more formal `nimmer` for `nooit`. The explanation now introduces them, without replacing the ordinary model answers.
- Removed the `!` marker from `wilt` in `16-g6`: it is a real conjugated Dutch word, although wrong with `ik`. It should not be treated as an invented, unpronounceable form.
- Replaced the problematic `rustigen` distractor with `rustiger` in `16-g10`, explaining the comparative meaning. `Rustiger` is grammatical in that sentence but does not translate the requested non-comparative Italian.
- Added missing fronting alternatives, including `Snel rijdt hij`, `Heel moeilijk is dit`, and `Slapen wil ik nu`.
- Refined `vannamiddag` from generic “the afternoon” to **this afternoon, approximately 14:00–18:00**, retaining the informal-spoken register description. This matches the linked [Team Taaladvies source](https://www.vlaanderen.be/team-taaladvies/taaladviezen/deze-middag-vanmiddag-vannamiddag).

### Unit 17 — separable verbs

- Expanded the instructional table to teach `doe/doet`, the clothing/door/window constructions, and plural `nemen` before they appear in exercises.
- Made the Italian meaning of `aandoen` explicitly dynamic: “mettersi un indumento,” with “si mette la giacca” in the relevant examples. This avoids suggesting that `aandoen` simply describes already wearing something.
- Added object/time fronting and modal-infinitive fronting where appropriate, retaining all ordinary `wij/we`, `zij/ze`, and `mij/me`, `jou/je` combinations already present.
- Retained `Ik bel morgen jou op` as a possible contrastive full-pronoun order; did not invent the corresponding weak-pronoun order `Ik bel morgen je op`. The distinction is supported by the [e-ANS account of pronoun placement and contrast](https://e-ans.ivdnt.org/topics/pid/ans210402lingtopic).
- Removed `!` from raw distractor fields `opsta` and `opbel`: these are possible finite forms in subordinate clauses, not nonexistent words. Those distractor fields are currently unused because the relevant items are fills, but the data should still describe them accurately.
- Corrected the `mee` option's explanation in `17-g6`: inserting it into the whole clothing sentence does not simply mean “participates.”
- Refined `deze middag` so the note distinguishes the Belgian **12:00–14:00 interval** from the wider afternoon, rather than implying an exact appointment at noon. The note now also identifies the expression as standard throughout the Dutch-speaking area, with greater spoken frequency in Belgium. [Source](https://www.vlaanderen.be/team-taaladvies/taaladviezen/deze-middag-vanmiddag-vannamiddag)

### Unit 18 — imperatives

- Fixed the specifically reported `18-m10` distractor: `boek` → `herhalen`, which is in unit 18's own word list.
- Added explicit imperative forms for `geven → geef`, `nemen → neem`, `herhalen → herhaal`, `proberen → probeer`, `kijken → kijk`, and the separable `binnenkomen → kom binnen`.
- Replaced the awkward, context-dependent `Probeer het antwoord! / Prova la risposta!` with the usable expression `Probeer het! / Provaci!`, introduced in the explanation.
- Added Belgian-standard female-recipient `ze`: `Geef ze de pen!` alongside `Geef haar de pen!`. [Taaladvies recognizes female-object ze as Belgian standard](https://taaladvies.net/ze-of-haar-verwijzing-naar-personen/).
- Clarified the MC hints as requesting the **current personal imperative without an expressed subject**. This matters because infinitive directives can be legitimate instructions, and historical plural imperatives in `-t` exist. The explanation preserves those distinctions rather than calling every such utterance impossible. [Taaladvies: Wordt / word lid](https://taaladvies.net/wordt-of-word-lid/)
- Checked `wees` independently: `ben` and regional `zij` are not standard imperatives of `zijn`. [Taaladvies: Ben / wees stil](https://taaladvies.net/ben-of-wees-stil/)

### Unit 19 — perfect tense

- Added the missing irregular participles and their auxiliaries before testing them: `gedronken`, `gekocht`, `bezocht`, `gebleven`.
- Added complete models for `gereisd`, `verhuisd`, `geweest`, and `gehad`; the prior keyword `gehad` alone did not teach its complete auxiliary combination.
- Explained the underlying `z` in `reizen/verhuizen` and the resulting `-d` in `gereisd/verhuisd`. [Team Taaladvies on participle spelling](https://www.vlaanderen.be/team-taaladvies/spellingregels/werkwoorden-vervoegen/werkwoorden-vervoegen-3-spelling-van-het-voltooid-deelwoord)
- Added several valid object/predicate-fronted alternatives and both placements of the destination phrase in `Wij/We zijn naar de stad gegaan` / `Wij/We zijn gegaan naar de stad`.
- Kept the distinction between an exercise's selected tense and Dutch usage generally. Unit 19's perfect tense and unit 20's simple past are not mechanically determined by an Italian tense or by the word “yesterday.” [Team Taaladvies on past-tense choice](https://www.vlaanderen.be/team-taaladvies/taaladviezen/ik-woonde-vroeger-in-gent-heb-vroeger-in-gent-gewoond)

### Unit 20 — simple past

- Added singular/plural models for `komen`, `lezen`, `kunnen`, and `moeten`, including the tested `moesten`.
- Explicitly revisited `een goede dag` versus `een goed jaar`. The ending follows the earlier adjective lesson, but `goede` had not previously been explicitly listed in the material checked.
- Explained the title's `vroeger` and `anders`.
- Replaced the claim that every prompt already explicitly requested the tense with a clear unit-wide instruction to use the Dutch simple past.
- Improved Italian wording (`Ieri lavoravo`; `Lui passò una buona giornata`) and added valid inversion/fronting alternatives, including `Slapen kon ik niet`, `Werken moest hij`, and `Naar het museum gingen zij/ze`.

## Validation evidence

The actual helper-generated objects and raw source arrays were imported in memory with Node. No generated application files were written.

| Unit | Explanation words | Keywords | Vocabulary entries | Fill / MC | Order / translation | Accepted mixed answers |
|---|---:|---:|---:|---:|---:|---:|
| 16 | 389 | 8 | 8 | 5 / 5 | 5 / 5 | 29 |
| 17 | 396 | 4 | 8 | 5 / 5 | 5 / 5 | 31 |
| 18 | 374 | 3 | 8 | 5 / 5 | 5 / 5 | 12 |
| 19 | 400 | 8 | 8 | 5 / 5 | 5 / 5 | 29 |
| 20 | 371 | 8 | 8 | 5 / 5 | 5 / 5 | 31 |

Word counts strip HTML and count Unicode word/number tokens, including visible headings and table contents.

Assertions passed for required question fields and translations; answer/option uniqueness; valid MC answer indices; no accepted alternative placed among wrong MC options; word-list limits and keyword/lexicon separation; distractor flags and own-unit membership; and token multiplicity for every accepted tile answer. `git diff --check` also passed for the five scoped unit files.

### Mixed-sentence prerequisites

The cumulative check adds each lesson's vocabulary, keywords, and correct instructional examples before checking that lesson's mixed answers. Earlier correct exercises also count as prior exposure. Struck-out errors and distractors do not establish knowledge.

This was an exact word-form check, not merely a lemma check. It reported no remaining unknown forms after correction. Manual checks also verified the relevant meanings and constructions.

| Forms or constructions | Introduction/reference |
|---|---|
| `slaapt`, `rijdt`, `luister`, `praten`, `vertrekken` | Unit 16 explanation and vocabulary |
| `sta/op`, `bel/belt/op`, `komt/aan`, `neem/nemen/mee`, `doe/doet/open/aan/dicht` | Unit 17 table/prose; earlier verbs and present-tense rules |
| `geef`, `neem`, `herhaal`, `probeer`, `kijk`, `kom binnen` | Unit 18 table; `doe` also taught in unit 17 |
| `ze` for a female object/recipient | Unit 04 explanation; applied in `18-m10` |
| `gedronken`, `gekocht`, `bezocht`, `gebleven`, `gereisd`, `verhuisd` | Unit 19 table/prose |
| `was/waren`, `had/hadden`, `werkte/werkten`, `ging/gingen`, `kwam`, `kon`, `moest/moesten`, `las` | Unit 20 table/prose/keywords |
| `goede dag`, `goed jaar` | Unit 20 explicit reminder; adjective rules from unit 14, `goed` from unit 15 |
| `brief`, `jas`, `scherm`, `pen`, `naar`, `die`, `om acht uur` | Earlier units 08–13; no new unexplained content vocabulary required |

## Source checks and remaining limitations

- All five Flemish boxes were checked against their linked primary sources. Units 16–17 were refined as described above. Unit 18's source supports courtesy `u`; `Kunt u…?` is also already taught in unit 09. Units 19–20 correctly reflect [Belgian voormiddag/namiddag usage](https://taaladvies.net/voormiddag-namiddag/). These are usage distinctions, not assertions that every Belgian speaker uses identical expressions.
- MC uniqueness is semantic as well as grammatical. For example, `17-g6` permits grammatical sentences with both `aan` and `uit`, but only `aan` expresses putting on the jacket. Likewise `rustiger` in `16-g10` changes the requested degree. This audit relies on the promised visible hints and translations.
- Accepted variants are finite. The checks verify every listed variant and several previously omitted ordinary orders; they do not prove exhaustive coverage of all discourse-driven topicalization, right-edge afterthoughts, colloquial contractions, or synonymous translations. Neutral model answers remain first. Some accepted fronted forms need contrastive emphasis to sound natural; text-only checking cannot assess that prosody.
- The prerequisite check establishes exposure, not mastery. Unit 19 now supplies the previously missing forms, but eight additional table rows add a substantial memory load. Retention and lesson pacing require learner testing.
- Earlier units were consulted as dependencies, not re-audited or edited. Changes to those prerequisite lessons could invalidate this coverage result.
- Runtime matching, hint rendering, audio, mobile layout, and offline behavior were not tested in this data-only pass. No inference about current runtime defects is made.
- This independent pass is AI review, not a human native-speaker certification or a plagiarism/corpus search. The original author remains responsible for the original lesson content.

## Files edited in this pass

- `data/unit-16.js`
- `data/unit-17.js`
- `data/unit-18.js`
- `data/unit-19.js`
- `data/unit-20.js`
- `qa/review-16-20.md`
