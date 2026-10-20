# Independent Dutch/Italian content review: units 11–15

Reviewed on 2026-10-20 against the Patatino working-tree content.

## Exact scope

The content review and content edits cover only:

| File | Unit | Exercises reviewed |
| --- | --- | --- |
| `data/unit-11.js` | Hoe laat is het? / L’ora | `11-g1`–`11-g10`, `11-m1`–`11-m10` |
| `data/unit-12.js` | Niet of geen? / La negazione | `12-g1`–`12-g10`, `12-m1`–`12-m10` |
| `data/unit-13.js` | Deze, die, dit, dat / I dimostrativi | `13-g1`–`13-g10`, `13-m1`–`13-m10` |
| `data/unit-14.js` | Een mooi huis / Gli aggettivi | `14-g1`–`14-g10`, `14-m1`–`14-m10` |
| `data/unit-15.js` | Groter, het grootst / Comparativo e superlativo | `15-g1`–`15-g10`, `15-m1`–`15-m10` |

For those five units, the review includes explanations, grammar tables, Italian translations, keywords, vocabulary, Belgian usage notes, hints, feedback, distractors, and accepted answers. This is an independent review pass over existing course content, not a human native-speaker certification.

`data/helpers.mjs` was read in full to establish the actual schema. It alternates `fill`/`mc` for grammar rows and `order`/`tr` for mixed rows, reads fill alternatives from the eighth tuple field and mixed alternatives from the fourth, adds the necessary alternative tiles with multiplicity, and uses `!` to suppress distractor speech. Odd grammar rows do not render their two unused MC distractor fields.

Earlier-unit vocabulary declarations and the unit 5 number explanation were consulted only to check prerequisites. The project content specification and existing tooling were read for context. Other units, helpers, runtime, build output, and tooling were not edited or independently reviewed. The only additional file created by this review is this report. No commit or push was performed.

## Findings and fixes

| Location | Finding | Resolution |
| --- | --- | --- |
| `11-g9` | The fill required two words, `Hoe laat`. | Changed to `Hoe ___ is het?`, answer `laat`; updated the hint and feedback. |
| `11-g7`, `11-m5` | The Belgian time expression with `na` was rejected. | Added `na` as a one-word fill alternative, added `kwart na vijf` tile answers, and introduced the usage in the explanation. |
| `11-g3` | The numeral versus written-word expectation was unstated. | The hint now explicitly requests the next hour in letters. |
| `11-m6` | `twaalf uur` was translated only as noon, although the Dutch sentence does not distinguish noon from midnight. | Changed the Italian to “alle dodici,” preserving the same information as the Dutch. |
| Units 11–15, mixed exercises | Several grammatical orders were rejected despite being constructible from the tiles. | Added time, object, predicate, and appropriate infinitive fronting while preserving V2 and meaning. Existing full/reduced subject-pronoun alternatives were retained and extended where needed. Marked or emphatic orders remain alternatives, not the default teaching sentence. |
| `11-m1`, `11-m2`, `11-m4`, `11-m6`, `11-m10` | Valid clock expressions omitting `uur` were rejected. | Added the corresponding complete sentences without `uur`, including their time-first variants where applicable. |
| `12-g6` | The context excluding contrastive `niet` could be clearer. | Explicitly requests neutral negation of an indefinite plural, without contrast. |
| Unit 12 explanation, `12-m7` | Fronted negative phrases needed context; modal negation must retain its scope. | Explained emphatic fronting. Accepted `Komen kunnen wij/we niet`, which preserves inability to come; did not accept fronting `niet komen`, which can suggest ability not to come. |
| `13-g7` | A freestanding `deze` can refer to an identifiable person; “presentation” alone did not precisely constrain the fill. | The hint now requests the neuter presentation demonstrative for someone nearby. The unused distractor explanation no longer categorically rejects independent `deze`. |
| `13-m4` | The distractor `klein` belongs to unit 12, not unit 13. | Replaced it with bare `formulier`, present as `het formulier` in unit 13. |
| `13-m9`, `15-m9` | Contextually valid independent `deze` and inverse identification orders were missing. | Added alternatives and notes distinguishing presentation with `dit` from reference to an identifiable noun with `deze`. |
| Unit 13 Belgian note | `deze middag` was mentioned without a direct Italian gloss. | Added the context-dependent meanings “oggi a mezzogiorno” / “oggi pomeriggio.” |
| `14-g1`, `14-g3`, `14-g7`, `14-g9` | Some fills left the intended adjective implicit or gave the unchanged answer in the hint. | Put the source adjective explicitly in the sentence as a transformation prompt; hints now request the grammatical form. This constrains the exercise without an open-ended synonym test. |
| Unit 14 explanation | `rode` and `zware` appeared in exercises without explicit treatment of those vocabulary forms. | Added both transformations and explained the single vowel in an open syllable. |
| `14-g7`, unused distractor metadata | `nieuws` is a real noun, not an invented word. | Removed `!` and glossed it as “notizie.” This does not change the fill interface. |
| `15-g4` | `als` occurs after comparatives in informal speech, so the intended register should be visible in the exercise itself. | The hint explicitly requests the form used in careful standard Dutch; the distractor feedback acknowledges the spoken usage. `dan` is the unique option satisfying that request. |
| `15-g7`, `15-m3`, `15-m6` | Valid superlatives ending in `-e` were rejected. | Accepted `beste`, `het lichtste`, `de lichtste` with an understood `jas`, and `het dikste`; added grammatical explanations and corresponding tile variants. |
| `15-m7` | Reversing the terms of an equality comparison preserves the stated price relationship but was rejected. | Accepted `De computer is even duur als de fiets` and corresponding fronted orders. |
| Unit 15 explanation and lexicon | `veel` and `weinig` lacked direct introductory glosses; Italian `spesso` can mean either thickness or frequency. | Added “molto” / “poco” and clarified the physical meaning of `dik`. |
| Unit 15 explanation | It claimed every comparison term was named or specified in the translation, but `Dit boek is beter` and `Deze trein is trager` have implicit comparands. | Explained that the second term can be understood from context. |

All 25 MC questions were reviewed using the complete Dutch sentence, visible hint, Italian translation, and the three displayed options. Each has one intended valid option under those combined constraints. In particular, the distant demonstratives in unit 13 are disambiguated by both the hint and Italian; adjective choices in unit 14 are constrained by noun gender, number, definiteness, and position; `dan` in `15-g4` is constrained by the newly explicit register.

## Lexical progression

The prerequisite check found the exercise nouns already introduced in earlier vocabulary: furniture and books in unit 3; cars, bags, doors, and streets in unit 6; shops and trains in unit 7; coats and offices in unit 8; letters in unit 9; schools and cafés in unit 10. Prices, `duur`, and `goedkoop` are in unit 5. Numbers such as `acht`, `negen`, `twaalf`, and `veertien` appear in its explanation even where absent from its keyword cards.

New content vocabulary within units 11–15 is introduced in each unit’s own lexicon. The local progression fixes introduce `na` before testing it, explicitly gloss `veel`/`weinig`, and explain `rood → rode` and `zwaar → zware`. The meaning of `laat` inside `hoe laat` is distinguished from its ordinary “tardi” gloss in exercise feedback. No remaining prerequisite content-word gap was identified in the scoped exercises.

This check does not certify the teaching quality or completeness of units 1–10. The current explanations introduce the relevant numbers; no earlier-unit changes were needed.

## Verification

Direct Node imports of the five unit modules and their existing helper passed. An isolated assertion-based audit checked:

- Required exercise text, translations, hints where applicable, and feedback.
- Ten grammar and ten mixed exercises per unit: 25 fills, 25 MCs, 25 orders, 25 translations.
- Exactly one blank and one-word accepted answers for every fill.
- Three distinct MC options, a valid correct index, matching canonical answers, and no incorrect option duplicated in accepted answers.
- Unique accepted answers after case/punctuation normalization.
- Tile availability and multiplicity for every accepted mixed answer, without using the distractor.
- One distractor per mixed exercise; all 25 order distractors are invalid spellings marked `!` in the source and muted in generated data.
- All 25 translation distractors are spoken, single bare content words from their own unit’s lexicon, with noun articles removed.
- Eight vocabulary entries per unit, at most eight keywords, and no vocabulary/keyword overlap within a unit.
- Explicit regression checks for `Hoe ___ is het?` / `laat`, `na`, `beste`, `de lichtste`, `het dikste`, and the reversed equality comparison.

| Unit | Explanation words | Vocabulary entries | Keywords | Exercises | Accepted answer forms |
| --- | ---: | ---: | ---: | ---: | ---: |
| 11 | 350 | 8 | 6 | 20 | 46 |
| 12 | 367 | 8 | 2 | 20 | 36 |
| 13 | 343 | 8 | 4 | 20 | 34 |
| 14 | 357 | 8 | 0 | 20 | 32 |
| 15 | 365 | 8 | 7 | 20 | 46 |
| Total | — | 40 | 19 | 100 | 194 |

Word counts use the visible explanation text, including headings and tables, after replacing HTML tags with spaces; letter/number tokens with internal apostrophes or hyphens count as one word. All explanations are within 300–600 words and retain the idea, rule/table, and common-error sections.

`git diff --check` passed for the scoped unit files and this report. Structural assertions support the manual language review; they do not establish grammatical correctness on their own. No app build, browser/E2E run, runtime grading audit, or whole-course validation was performed. Accepted alternatives cover the reviewed meanings and tile constructions, not every conceivable Dutch paraphrase.

## Sources consulted

- [ULB MultiGram: Heure](https://multigram.ulb.ac.be/nld/Heure): `half`, clock prepositions, and the Flemish use of `tien na vier`. The indexed page text was available; a subsequent direct fetch failed.
- [Onze Taal: het beste / het best](https://onzetaal.nl/taalloket/het-beste-het-best): predicative forms with and without `-e`, register, and an understood noun with `de`/`het`.
- [Taaladvies.net: Groter als / dan](https://taaladvies.net/groter-als-of-dan/): the recommendation for `dan` in careful standard usage and the occurrence of `als` in speech.
- [Taaladvies.net: Dit / dat, deze / die](https://taaladvies.net/dit-of-dat-deze-of-die-algemeen/): independent and attributive demonstratives and their contextual interpretation.
- [e-ANS: Infinitieven op de eerste zinsplaats](https://e-ans.ivdnt.org/topics/pid/ans21030303lingtopic): fronting an infinitive while retaining the finite verb’s position.
- [Taaladvies.net: Voormiddag, namiddag](https://taaladvies.net/voormiddag-namiddag/): Belgian time ranges in unit 11’s note.
- [Team Taaladvies: deze middag / vanmiddag / vannamiddag](https://www.vlaanderen.be/team-taaladvies/taaladviezen/deze-middag-vanmiddag-vannamiddag): unit 13’s Belgian usage note and context-dependent times.
- [Canon van Vlaanderen: Goesting](https://www.canonvanvlaanderen.be/events/goesting/) and [Team Taaladvies: goesting / trek / zin](https://www.vlaanderen.be/team-taaladvies/taaladviezen/goesting-trek-zin): the Belgian use of `goesting`. Unit 12 presents it as informal usage, not as an uncontested standard form.
- [Taaladvies.net: Wat is standaardtaal?](https://taaladvies.net/wat-is-standaardtaal-algemeen/): the distinction between general standard Dutch and accepted national variants used in the Belgian notes.
