# Independent Dutch content review: units 06–10

Reviewed on 2026-10-20. Scope: `data/unit-06.js` through `data/unit-10.js`, plus this report. Read `data/helpers.mjs` for the schema and units 01–05 only to establish previously introduced vocabulary. No other unit, helper, runtime, build output, or Git commit was changed by this review.

The review covers Dutch grammar, Italian meanings, the five explanations, regional notes, all 50 grammar questions, and all 50 mixed exercises. MC judgments assume the Italian translation and hint are visible, as specified in the request.

## Findings and edits

### Unit 06 — plurals

- The correct plural forms and Italian translations were sound: `boeken`, `tafels`, `auto's`, `bedden`, `huizen`, `kinderen`, `foto's`, `tassen`, and `kamers`. Kept the required apostrophes.
- The answer lists rejected grammatical fronting using the supplied tiles. Added object-first orders such as `Boeken heb ik.` and `Twee auto's hebben wij/we.`, plus predicate-first orders such as `Klaar zijn de kamers.` and `Goedkoop zijn de tassen.` These change emphasis, not the core Italian meaning.
- Expanded the explanation with the contrast `tas/tassen` versus `deur/deuren`, so the minimum length does not depend on counting the table.
- Kept all five nonsense `order` distractors marked with `!`; none can function as a Dutch word in the intended clauses.

### Unit 07 — questions

- Replaced the explanation's identical pair of Italian quotations (“chi vede Nora?” / “chi vede Nora?”), which did not explain the subject/object distinction. The new pair is `Wie helpt jou?` / `Wie help jij?`, with distinct Italian translations and explicit identification of the subject.
- Corrected the shared practice note: interrogative + verb + subject is not universal, because `wie` can itself be the subject.
- Added `Wie helpt ze?` to `7-m7`. Object `ze` referring to one woman is standard Belgian Dutch and had already been introduced in unit 04. The question-specific note makes the intended subject/object reading explicit.
- Expanded the `komen` gloss to “venire, arrivare” and explained its use with a train, matching `Wanneer komt de trein?`.

### Unit 08 — possessives

- `8-m10`, `Jullie baan is goed.`, used `goed` without an introduction in the inspected units 01–08. Replaced it with `Ik ken jullie familie.` / “Conosco la vostra famiglia.” This retains the possessive `jullie` and uses established vocabulary. Its distractor is now `baan`, from this unit's own lexicon.
- Added grammatical fronting and identification variants, including `Nora is mijn naam.`, `Jouw/Je sleutel heb ik.`, `Uw naam kennen wij/we.`, and `Jullie familie ken ik.` Reduced possessive `je` is allowed inside an initial noun phrase; it is not being used as a stressed standalone object pronoun.
- Introduced the informal written possessives `m'n`, `z'n`, `d'r`, and `'r` in the explanation. Added applicable single-word fill alternatives for `mijn` (`8-g1`) and `haar` (`8-g7`).
- Explicitly glossed `van` as “di” in the ownership construction.
- Retained the distinction between the possessor's gender (`zijn/haar`) and the possessed noun's class/number (`ons/onze`), and the polite `uw`.

### Unit 09 — modals

- Expanded the explanation of `kan/kunt`, `wil/wilt`, `zal/zult`, and inversion with `jij` versus `u`. Existing acceptance of both `U kunt werken.` and `U kan werken.` was correct and is retained.
- Added valid object and infinitive fronting, including `Fietsen kan ik.`, `Het ticket moet ik betalen.`, `Het boek lezen kunnen jullie.`, and `Werken kunt/kan u.` Included the applicable `wij/we` and `zij/ze` combinations.
- Qualified the explanation and practice note: a final infinitive describes the neutral order; a fronted infinitive is also grammatical. Some accepted orders need contrastive emphasis and are not presented as the default answer.
- `wilt` is an existing Dutch form, although incorrect with singular `zij` in `9-g4`. Removed its `!` marker and changed its explanation to identify its legitimate use with `jij/u`.
- Kept the capacity, obligation, permission, and intention translations distinct.

### Unit 10 — V2

- Removed the unintroduced adjective `nieuwe` from the introductory example: `Mijn collega` still demonstrates that a multiword constituent occupies one position.
- Introduced `naar` as a keyword and explained `naar het park` before its use in `10-m10`.
- Replaced the blanket claim that `u` “keeps the ending” with the more accurate statement that inversion does not change the form used with `u`. This accommodates both previously taught `kunt u` and `kan u`.
- Added object-first, destination-first, and final-time variants: for example, `Brood eet ik vandaag.`, `Naar het park gaat zij/ze morgen.`, `Koffie drinkt hij in het café.`, and `Ik moet werken morgen.` The last is a conversational ordering; the canonical answer remains `Morgen moet ik werken.`
- Corrected the `wilt` distractor label/audio marker in `10-g10` for the same reason as in unit 09.

## Verification

Imported the five modules through their real helper using Node.js and ran read-only assertions. All passed. Word counts replace HTML tags with spaces, split on whitespace, and count tokens containing a letter or digit; punctuation-only tokens are excluded. The second column includes table text, while the third excludes tables.

| Unit | Explanation words | Without tables | Accepted mixed answers |
| --- | ---: | ---: | ---: |
| 06 | 348 | 313 | 26 |
| 07 | 359 | 320 | 13 |
| 08 | 344 | 309 | 24 |
| 09 | 365 | 341 | 37 |
| 10 | 383 | 364 | 40 |

All five explanations satisfy 300–600 words even without table text. Each unit retains 10 grammar questions and 10 mixed exercises, eight content-lexicon entries, and at most eight keywords.

Checks performed:

- All 25 MC questions have three distinct options, a valid correct index, Italian option text, and exactly one option matching the accepted answers. Manual review additionally checked that the other options do not satisfy the displayed translation and hint.
- All 25 fill questions have a hint and Italian translation; each accepted fill is a single token.
- All 25 `order` distractors retain the `!` source marker and become `speak: false`. Manual inspection found no usable Dutch distractor in these intended clauses.
- All 25 `tr` distractors belong to their own unit's content lexicon, allowing the noun's article to be stripped. Different-meaning but grammatical combinations, such as `gesloten` instead of `open`, are intentional translation distractors.
- All 140 accepted mixed sentences can be assembled from the generated non-distractor tile multiset, including every pronoun variant. No accepted answer uses its designated distractor, and no normalized answer duplicates another answer in the same exercise.
- No content-lexicon/keyword duplicate occurs within these five units.
- A token-difference pass followed by manual lemma checking found no remaining unintroduced exercise vocabulary against the inspected units 01–10. New surface forms are taught inflections or explicitly introduced reductions: for example, `bedden`, `komt`, `ken`, `m'n`, `kan/kunt`, `leest`, `eet`, `gaat`, and `kookt`.
- `git diff --check` for the five data files passed; Git emitted only line-ending conversion notices.

The manually checked MC keys are:

| Unit | g2 | g4 | g6 | g8 | g10 |
| --- | --- | --- | --- | --- | --- |
| 06 | tafels | bedden | kinderen | de | kamers |
| 07 | Wie | Werk | Waarom | Is | Drinken |
| 08 | jouw | onze | uw | zijn | ons |
| 09 | moeten | wil | schrijven | lezen | drinken |
| 10 | werken | ik | werk | werk | wil |

For example, `willen` in `9-g4` or `10-g10` would require plural `zij`, excluded by both the Italian “lei” and the singular hint. `Waar` in `7-g6` can produce a grammatical question, but asks where, not the requested reason. These are not additional correct MC choices.

## Sources checked

- [Team Taaladvies: hoe laat / om hoe laat](https://www.vlaanderen.be/team-taaladvies/taaladviezen/hoe-laat-om-hoe-laat-om-welk-uur) confirms the unit 07 regional note.
- [Team Taaladvies: vanmiddag / vannamiddag](https://www.vlaanderen.be/team-taaladvies/taaladviezen/deze-middag-vanmiddag-vannamiddag) confirms Belgian standard `vannamiddag`, particularly in informal speech, for the afternoon.
- [Team Taaladvies: gij/ge](https://www.vlaanderen.be/team-taaladvies/taaladviezen/gij-ge-gebruik) supports the familiar `je/jij` versus polite `u` distinction.
- [Taaladvies: standard language](https://taaladvies.net/wat-is-standaardtaal-algemeen/) supports the restrained general regional notes in units 06 and 09.
- [Taaladvies: ze/haar for a female person](https://taaladvies.net/ze-of-haar-verwijzing-naar-personen/) verifies the added Belgian object-pronoun alternative.
- [Taaladvies: full and reduced pronouns](https://taaladvies.net/volle-en-gereduceerde-vormen-van-persoonlijke-en-bezittelijke-voornaamwoorden-algemeen/) supports the accepted reduced forms and their register labels.
- [Taaladvies: u wil/zal/kan and wilt/zult/kunt](https://taaladvies.net/u-wil-zal-kan-of-wilt-zult-kunt/) and [je wil/zal/kan and wilt/zult/kunt](https://taaladvies.net/je-wil-zal-kan-of-je-wilt-zult-kunt/) verify the modal variants and inversion distinction.
- [E-ANS: infinitives in first position](https://e-ans.ivdnt.org/topics/pid/ans21030303lingtopic) supports infinitive fronting. The added exercise sentences are original applications of the construction.

## Remaining limits

- This is a data/content review, not browser or speech testing. No build, package, full-course test, runtime change, or commit was made. Final integration must show the hints/translations and honor the data's `answers` and `speak` flags.
- The runtime must preserve required apostrophes in `auto's`, `foto's`, and reduced pronouns while treating straight/curly apostrophes consistently. It must also allow unused alternative-pronoun tiles; the helper intentionally provides the union of accepted variants. This review checks the data's feasibility, not that UI behavior.
- Answer lists cover the supplied vocabulary and reviewed declarative/question structures, including several emphasis-sensitive orders. They are not a proof of exhaustive acceptance of every possible paraphrase, dialectal form, echo question, afterthought, or prosodic reading. Informal reductions not supplied as mixed-exercise tiles were not systematically added to those tile sets.
- Vocabulary progression is based on the files read during this review. Concurrent changes to earlier units should trigger the final course-wide vocabulary check.
- No unresolved content error was identified within this scope after the edits and checks above.
