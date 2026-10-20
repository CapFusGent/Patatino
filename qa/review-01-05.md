# Independent Dutch/Italian review: units 01–05

Reviewed on 2026-10-20. Scope: the new original lesson drafts in `data/unit-01.js` through `data/unit-05.js`, plus the question-generation behavior of `data/helpers.mjs`. This was a separate review pass, not the authoring pass. It is an AI language/data audit, not a claim of certification by a human native-speaker editor.

## Result

The five units needed corrections. The corrected data pass the focused structural and answer-construction checks below, and all 25 MC questions have exactly one correct **listed option when the sentence and its hint are available**. This is conditional data approval, not release approval: the current runtime snapshot still has material integration issues, detailed below.

Only the five unit files and this report were edited. Helpers, runtime, other units, generated builds, and deployment files were not changed. No commit or push was performed.

## Corrections made

1. **Unit 01 — contemporary courtesy form and variants.** Removed `U is blij` as an ordinary alternative to `U bent blij` in `1-m8`, and explicitly identified `u is` as antiquated in the explanation. This does not claim the older construction never occurs; it keeps a course on current usage aligned with [Taaladvies: U is / bent](https://taaladvies.net/u-is-of-bent/). Added `Je` to `1-g2`'s answer metadata and the informal spelling `'k` to the open answer in `1-g1`, with a register explanation.

2. **Unit 02 — incomplete wonen examples.** Changed `Hij ___` / `Jij woont` to `Hij ___ hier` / `Jij woont hier`, with matching Italian translations. Added `hier = qui` to the lesson vocabulary before testing it, taking the list from eight to nine entries. The [e-ANS account of place complements](https://e-ans.ivdnt.org/topics/pid/ans20100201lingtopic) supports requiring a location for these ordinary, context-free uses of `wonen`; exceptional contrastive uses do not rescue the original beginner examples. Clarified that inversion with `jij/je` removes an added ending `-t`, not a `t` belonging to the stem.

3. **Unit 04 — valid Belgian female-object ze was missing.** Added `ze` to `4-g5`, and to the mixed sentences with female-object `haar` (`4-m3`, `4-m10`), including both `wij/we` subject combinations where appropriate. Added an explanation of this use. [Taaladvies: Ze / haar](https://taaladvies.net/ze-of-haar-verwijzing-naar-personen/) explicitly recognizes female-object `ze` as standard in Belgium. Also included the informal written alternatives `d'r` and `'r` for the open answer, with a register distinction.

4. **Unit 04 — other object-pronoun details.** Added plural-object `ze` to `4-g6`'s metadata and informal `'m` to the relevant `hem` metadata. Explained `met ze` alongside `met hen`, and corrected the overly broad “after the verb the object is required” wording: the person's grammatical role determines the pronoun form. Made explicit that contrast requires the full pronoun. See [full and reduced pronouns](https://taaladvies.net/volle-en-gereduceerde-vormen-van-persoonlijke-en-bezittelijke-voornaamwoorden-algemeen/) and [hen, hun / ze](https://taaladvies.net/hen-hun-of-ze-verwijzing-naar-personen/). Changed explanatory Italian `ascolti` to `senti` for the exercise using `horen`, and made `L’aiutiamo` the natural Italian wording in `4-m3`.

5. **Units 01–05 — accepted word order.** Added grammatical declarative alternatives that front the predicate, object, or location while retaining the finite verb in second position. Examples: `Klaar ben ik`, `Water drink ik`, `Het boek heeft hij`, `Hem zie ik`, and `Tien euro betalen we`. These have a different information focus but preserve the requested statement; the prompts do not require neutral subject-first order. The full pronoun is retained when an object pronoun is fronted: no invalid `Me hoort hij` or `Ze helpen wij` was added. Inversion alternatives involving `jij/je` use the corresponding verb form, e.g. `Hier woon je` and `Een stoel heb jij`.

6. **Unit 03 — distractor spelling.** Replaced the order distractors `!dee` and `!eenen` with visibly malformed `!deee` and `!eeen`. All designated order distractors are deliberately invalid forms and are marked silent by the helper.

7. **Unit 05 — Italian and usage.** Replaced the incorrect Italian `una centinaia` and the awkward `Dieci centinaia` hints with `Dieci volte dieci` and `Dieci volte cento`. Replaced the less idiomatic teaching sentence `De rekening is duur` with `Ik betaal de rekening`, translated as `Pago il conto`. Added the less usual `eenhonderd/eenduizend` alternatives and explained their financial-document register; see [e-ANS: cardinal-number base forms](https://e-ans.ivdnt.org/topics/pid/topic-16981466427992174). The ordinary model answers remain `honderd/duizend`.

## Checks completed

Imported only units 01–05 through the actual helper, and separately inspected the raw arrays. Reviewed all 50 grammar items, 50 mixed items, keywords, vocabulary translations, explanations, and Flemish notes.

| Unit | Explanation words | Keywords | Vocabulary | Fill / MC | Order / translation | Accepted mixed answers |
|---|---:|---:|---:|---:|---:|---:|
| 01 | 357 | 8 | 8 | 5 / 5 | 5 / 5 | 28 |
| 02 | 329 | 8 | 9 | 5 / 5 | 5 / 5 | 24 |
| 03 | 336 | 3 | 8 | 5 / 5 | 5 / 5 | 28 |
| 04 | 373 | 8 | 8 | 5 / 5 | 5 / 5 | 35 |
| 05 | 338 | 8 | 8 | 5 / 5 | 5 / 5 | 26 |

Word counts strip HTML and count Unicode word/number tokens, including visible headings and table text. All explanations satisfy 300–600 under that method.

Focused in-memory Node assertions passed for:

- Required question strings, translations, hints, answer lists, and notes.
- Keyword/vocabulary limits and absence of same-unit keyword/vocabulary duplicates.
- Ten grammar and ten mixed items per unit; five of each exercise type.
- Valid MC indices, unique option texts, canonical answer matching the indexed option, and no explicitly accepted alternative also appearing as a wrong option.
- Exactly one designated distractor per mixed item.
- All 25 order distractors beginning with `!` in source and generating `speak: false`.
- All 25 translation distractors belonging to that unit's vocabulary, allowing omission of a noun's dictionary article, e.g. `boek` from `het boek`.
- No duplicate accepted sentence strings after case/punctuation normalization.
- All 141 accepted mixed answers being constructible from the supplied non-distractor tiles with sufficient token multiplicity. None requires the designated distractor.

The MC language check was manual as well as structural. For units 01, 02, and 04, incorrect options fail the requested subject/object or conjugation constraint. Unit 05's options denote different numbers or contain an invalid form. Unit 03's items depend on the explicit definite/indefinite restriction: `de fiets` and `een fiets` are both Dutch, but only one answers the indicated request.

### Previously known vocabulary

“Known” was interpreted as introduced in an earlier unit **or in the current lesson's explanation, keyword cards, or vocabulary before its exercises**. Under that sequencing, no unexplained new content lemma remains in the exercises.

A cumulative token check, supplemented with a manually supplied inflection map and a review of the lesson tables, found no remaining exceptions. This is not an independent morphological parser. In particular:

- Unit 01 introduces `zijn`, its forms, and reduced subject pronouns in the explanation; `de man/de vrouw` are initially learned as noun chunks.
- Unit 02 uses its own verb vocabulary and the newly introduced `hier`.
- Unit 03 combines its new nouns/articles with earlier `hebben` and pronouns.
- Unit 04 introduces `zien`/`zie`/`ziet` explicitly and applies the earlier present-tense rules to its other verbs.
- Unit 05's non-keyword numbers are introduced in the prose/table; nouns such as `boek`, `brood`, and `fiets` come from unit 03.

If “previously known” is intended to mean only earlier numbered units, the current lesson design does not meet that stricter interpretation: unit 01 necessarily uses new words, and every unit practices its newly presented vocabulary.

### Flemish-note source check

All linked sources were opened and checked on the review date.

| Notes | Finding |
|---|---|
| Units 01, 02, 04: informal `ge/gij` | Supported by [Team Taaladvies: gij, ge](https://www.vlaanderen.be/team-taaladvies/taaladviezen/gij-ge-gebruik). The notes appropriately describe widespread informal Belgian speech, not universal usage or an unqualified standard-language recommendation. |
| Unit 03: geographic variants within standard Dutch | Supported by [Taaladvies: Wat is standaardtaal?](https://taaladvies.net/wat-is-standaardtaal-algemeen/). The article-choice advice is a separate general grammar point, not a claim that Belgian nouns freely change articles. |
| Unit 05: Belgian `voormiddag` | Supported by [Taaladvies: Voormiddag, namiddag](https://taaladvies.net/voormiddag-namiddag/), which identifies the later morning in Belgian standard usage. The note's wording is appropriately approximate. |

No change to these five Flemish-note strings or their helper source mappings was necessary. The additional Belgian `ze` correction is sourced separately above.

## Remaining limitations and follow-up

1. **P1 — MC hint visibility is required.** The runtime author is already addressing this. In particular, `3-g2`, `3-g4`, `3-g6`, `3-g8`, and `3-g10` have multiple grammatical completions if the definite/indefinite requirement is hidden. Recheck the actual rendered prompt after integration; a generic “Completa la frase” is insufficient on its own.

2. **P1 — expected-sensitive spelling is not established in the runtime snapshot.** Unit `5-g3` requires `tweeëntwintig`, and its explanation says the diaeresis is required. A read-only execution of the `norm()` function found in `index.template.html` returned identical values for `tweeëntwintig` and `tweeentwintig`; it also conflated `d'r` and `dr`. Helpers preserve these strings but do not implement matching. The eventual grader must retain required diacritics/apostrophes and reasonably equate straight/curly apostrophe typography. This was reported, not repaired, because runtime edits are excluded.

3. **P2 — helper option glosses can disclose the answer.** `defineUnit` gives the correct option a full-sentence gloss prefixed `Nella frase:` and wrong options explanatory reasons such as “non è l’articolo di fiets.” Those are useful feedback, but if displayed before submission they directly reveal some answers. Check feedback timing in the final UI; this review did not change helper/runtime behavior.

4. **Coverage is deliberately finite.** The corrected lists cover the ordinary written reduced forms, Belgian female-object `ze`, the identified open-input contractions, and the straightforward fronting alternatives possible with the tile inventories. Tile banks do not enumerate every informal transcription (`'k`, `'m`, `ie`, `d'r`, etc.), dialectal realization, synonym, or possible discourse construction. A finite answer list is not a general Dutch-language judge. Informal variants stored for MC questions are metadata, not extra selectable options.

5. **No browser/release certification.** The inspected template still used older data fields (`u.exercises`, `u.table`, string tiles), whereas the reviewed helper produces `grammar`, `mixed`, and tile objects. Authoring and runtime integration are ongoing. The focused checks establish data consistency, not that the current build renders or grades these lessons correctly. No full build, 30-unit test, speech-voice evaluation, mobile/offline check, or full-course lexical audit was run. Building would also write files outside this review's allowed edit scope.

6. **Originality and pedagogy have limits.** This was not a plagiarism/corpus search or a learner trial. Short conventional grammar examples cannot establish or disprove copying. Deliberately malformed order distractors satisfy the requested validity rule but mostly test recognition of spelling errors; this audit does not demonstrate their teaching effectiveness.

## Edited files

- `data/unit-01.js`
- `data/unit-02.js`
- `data/unit-03.js`
- `data/unit-04.js`
- `data/unit-05.js`
- `qa/review-01-05.md`
