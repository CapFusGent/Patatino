# Independent Dutch/Italian content review: units 26–30

Review date: 2026-10-20. Repository: Patatino.

## Exact reviewed scope

| File | Unit | Exercises reviewed |
| --- | --- | --- |
| `data/unit-26.js` | Omdat ik hier woon / Le subordinate | `26-g1`–`26-g10`, `26-m1`–`26-m10` |
| `data/unit-27.js` | De man die hier woont / Le frasi relative | `27-g1`–`27-g10`, `27-m1`–`27-m10` |
| `data/unit-28.js` | Hij zegt dat… / Il discorso indiretto | `28-g1`–`28-g10`, `28-m1`–`28-m10` |
| `data/unit-29.js` | Niet meer, nog niet / Negazione II | `29-g1`–`29-g10`, `29-m1`–`29-m10` |
| `data/unit-30.js` | Goed geschreven / Punteggiatura e ortografia | `30-g1`–`30-g10`, `30-m1`–`30-m10` |

The review covers the five explanations, tables, common-error examples, Italian translations, vocabulary and keywords, Belgian usage notes, hints, answer alternatives, and distractors. Content changes are confined to these five files. This report is the only additional file created.

`data/helpers.mjs` was read in full, without modification. The review follows its actual tuple schema: grammar alternates fill/MC, mixed exercises alternate order/translation, fill alternatives occupy the eighth field, mixed alternatives occupy the fourth, alternative tiles are added with the required multiplicity, and `!` suppresses speech for intentionally invalid distractors.

Earlier-unit vocabulary and relevant prerequisite explanations were consulted read-only. Units 16–25 were being edited separately; their referenced vocabulary is a snapshot, not a review or certification of those units. No other unit, helper, runtime, test tool, or generated build artifact was edited. No commit or push was performed.

## Findings and corrections

### Unit 26: subordinate clauses

- The explanation now acknowledges the less common but possible modal order `werken moet`, alongside the preferred `moet werken`. `26-m10` accepts `werken moeten` with both `wij` and `we`, retaining tomorrow as the time of working.
- Completed the independent full/reduced pronoun combinations in `26-m5` and `26-m8`. The concessive or causal relationship stays unchanged. The two pronouns retain the same intended referent.
- Narrowed `26-g5` explicitly to the causal subordinator in the unit’s keywords. This is a vocabulary-selection constraint, not a claim that every other Dutch causal connective is ungrammatical. No conditional, concessive, coordinating, or interrogative replacement was added.
- Made the requested verb explicit in `26-g9`. In `26-g3`, moved the infinitive to the transformation prompt so the hint asks for agreement rather than directly supplying the unchanged plural answer.
- Added Italian glosses for the coordinating conjunctions and a reminder to preserve the original relationship when moving clauses.

### Unit 27: relative clauses

- Added an explicit gloss for `praten over` and explained the existing equivalent constructions `waarover ik praat` / `waar ik over praat`.
- Added predicate/location fronting and fronting of a complete object noun phrase with its attached relative clause. For example, `Het boek dat je hebt lees ik` preserves both who has the book and who reads it.
- All added orders retain the original antecedent and the original information inside the relative clause. No exchange of the main-clause predicate and the identifying relative was accepted.
- Clarified the verb requested in `27-g7` and `27-g9`. The relative-pronoun fills explicitly target the forms taught in this unit, rather than inviting an open-ended search for rare formal equivalents.
- Expanded the explanation of restrictive meaning: the tired student who lives here is identified by residence, not by tiredness.

### Unit 28: reported speech

- Added the Belgian standard alternative `om hoe laat` to `28-m9`, keeping the same question about the conversation’s starting time. This brings the answers into line with the unit’s existing Belgian usage note.
- Completed the `zij`/`ze` combinations in `28-m10` for both `heeft gewerkt` and `gewerkt heeft`. The note specifies the same intended female referent and preserves the reported statement.
- Explicitly linked `zei` to `zeggen`, `vroeg` to `vragen`, and `kwamen` to `komen`. Distinguished past-tense `vroeg` (“chiese”) from the previously taught adverb (“presto”).
- Improved `28-m3`’s Italian to “Chiedo dove si tiene la riunione.”
- Kept declarative `dat`, yes/no `of`, time `wanneer`, and location `waar` distinct. No competing connective was added merely because it produces a grammatical Dutch sentence.

### Unit 29: extended negation

- Added the requested gloss for `heen`: a directional element, “verso un luogo.” Explained `nergens heen` before the exercises and in `29-m9` feedback.
- Added valid one-word fill alternatives: `langer` in `29-g1`, `niks` in `29-g5`, and `weer` in `29-g7`. The explanation introduces each meaning and distinguishes adverbial `weer` (“di nuovo”) from the noun `het weer` (“tempo atmosferico”).
- Added the corresponding `niet langer` and `niks` translation variants where the Italian meaning is unchanged.
- Changed the default in `29-m7` to the natural neutral order `Ik heb hier nog nooit gewerkt`, retaining the original order and adding `Nog nooit heb ik hier gewerkt`.
- Added suitable fronted orders without moving negation to a different proposition, adding double negation, or exchanging “not yet,” “no longer,” and “never again.”
- Clarified that `29-g9` asks for an adversative conjunction. Made the Belgian note concrete with `nog geen goesting` versus `geen goesting meer`.

### Unit 30: spelling and punctuation

- `België` was already introduced in the explanation and was not treated as missing vocabulary. Added its direct Italian gloss “Belgio.”
- Replaced `huis-deur` in `30-g10` with the unequivocal misspelling `huizdeur`. Dutch allows optional readability hyphens in compounds, so an unnecessary hyphen alone is an unsuitable blanket example of an invalid spelling. The hint now asks for the ordinary joined vocabulary form.
- Removed the invalid-word flag from the real forms `email` and `beden`. Their feedback distinguishes them from the target meaning or inflection. `email` is in an unused distractor field of a fill; `beden` is a displayed MC distractor.
- Added valid object/predicate fronting while retaining the statements’ meaning. The direct question in `30-m7` remains a direct question; the declaration containing an indirect question in `30-m10` remains a declaration.
- Reworded application-grading claims as spelling guidance. This language review does not verify the runtime’s handling of accents, apostrophes, hyphens, or punctuation.

## Multiple-choice and answer-scope audit

All 25 MC items were evaluated using the displayed sentence, hint, Italian, and actual options together. Each has one valid option under those constraints after the edits. A distractor can be a legitimate word or grammatical in another context without being correct for the displayed task.

Important boundaries checked:

| Exercise | Accepted meaning | Rejected change |
| --- | --- | --- |
| `26-g5` | The taught causal subordinator with subordinate order | `want` with the unchanged subordinate order; conditional `als` |
| `26-m10` | I know that we must work tomorrow | Moving `morgen` to the time when I know it |
| `27-m1` | The student who lives here is tired | `De student die moe is woont hier`: changes the identifying relative |
| `27-m6` | I read the book that you have | `Het boek dat ik lees heb jij`: exchanges main assertion and relative information |
| `28-g1` | He says that he is coming | `of`: says whether, not that |
| `28-m2` | She asks whether I am coming | A request that I come, using `dat` |
| `28-m5` | We do not know whether she is coming | We know whether she is not coming |
| `29-m7` | Never worked here up to now | Never worked here again |
| `30-m10` | I do not know where he lives | A direct question, or knowing where he does not live |

No new direct-question alternatives were added to declarative exercises. Fronting in unit 27 keeps the relative clause intact. Pronoun variants change emphasis, not the intended participant. The accepted-answer arrays were checked against 20 explicitly rejected examples involving conjunctions, clause boundaries, relative attachment, negation, and sentence type.

## Lexical progression

The read-only prerequisite check found `praten`, `moeilijk`, and `nooit` in unit 16; `opbellen` in unit 17; `reizen/gereisd` in unit 19; `ziek`, `kon`, and past-tense material in unit 20; and `staan` in unit 23. Earlier foundational nouns and verbs are also present before these units. New content vocabulary in units 26–30 appears in the relevant unit lexicon.

Local progression improvements cover `heen`, the topic sense of `over` in `praten over`, the new grammatical senses of `vroeg` and `weer`, the accepted negative equivalents, and the explicit country-name gloss. These do not require edits to units 1–25. No remaining prerequisite content-word gap was identified in the reviewed exercises against the reference snapshot.

All translation distractors already met the own-unit rule before this review and still do: they are single bare content words from that unit’s `words` list, with noun articles removed. In particular, `weer` in `26-m10` is the bare form of that unit’s `het weer`; its possible adverbial reading does not make a sentence containing extra “again” an accepted translation.

## Verification results

Direct Node imports and an isolated assertion audit passed for the final five modules:

| Unit | Explanation words | Vocabulary entries | Keywords | Exercises | Accepted answer forms |
| --- | ---: | ---: | ---: | ---: | ---: |
| 26 | 385 | 8 | 8 | 20 | 45 |
| 27 | 408 | 8 | 4 | 20 | 35 |
| 28 | 395 | 8 | 6 | 20 | 34 |
| 29 | 413 | 8 | 8 | 20 | 44 |
| 30 | 379 | 8 | 6 | 20 | 31 |
| Total | — | 40 | 32 | 100 | 189 |

Counts use visible explanation text, including headings and tables, with HTML tags replaced by spaces. Letter/number tokens with internal apostrophes or hyphens count as one word. All explanations were within 300–600 words before review and remain within the limit.

The automated checks covered required fields and translations; explanation sections; 25 one-word fills with exactly one blank each; 25 MCs with distinct options and valid correct indices; distinct accepted answers; all 50 tile exercises; sufficient tile multiplicity for every accepted answer; no distractor used in an accepted answer; raw `!` markers and muted speech for all 25 invalid order distractors; own-unit bare-word membership for all 25 translation distractors; vocabulary/keyword counts and overlap; the new `heen` and `België` glosses; and targeted positive/negative answer checks. Five additional spelling checks confirm that `Belgie`, `fotos`, `email`, `raamen`, and `mannen` are not accepted for the respective differently spelled or differently translated fill targets.

`git diff --check` passed for the five units and this report. The audit ran without writing a test file or modifying application code.

These are content/data checks plus a manual language review, not a runtime/E2E test or a native-speaker certification. In particular, source answers preserve the required dieresis, apostrophe, and hyphen, but their production grading behavior was not tested. The accepted variants are reviewed equivalents, not an exhaustive inventory of every possible Dutch paraphrase.

## Sources consulted

- [Taaladvies.net: Two-verb group order](https://taaladvies.net/werkwoordvolgorde-in-werkwoordgroepen-groepen-van-twee-werkwoorden-algemeen/): both participle orders and the less common reversed modal/infinitive order.
- [Onze Taal: Main and subordinate clauses](https://onzetaal.nl/taalloket/woordvolgorde-in-bijzinnen-en-hoofdzinnen): clause structure and finite-verb placement.
- [Team Taaladvies: hoe laat / om hoe laat](https://www.vlaanderen.be/team-taaladvies/taaladviezen/hoe-laat-om-hoe-laat-om-welk-uur): Belgian standard usage, including an embedded question.
- [Team Taaladvies: niks / niets](https://www.vlaanderen.be/team-taaladvies/taaladviezen/niks-niets): equivalence and register.
- [Team Taaladvies: nooit meer / nooit weer](https://www.vlaanderen.be/team-taaladvies/taaladviezen/nooit-meer-nooit-weer): both forms mean “not again,” with `meer` more frequent.
- [e-ANS: Pronominal adverbs](https://e-ans.ivdnt.org/topics/pid/ans08070103lingtopic): directional `-heen`/`-naartoe` and prepositional combinations.
- [Taalunie spelling guide, rule 6.C](https://woordenlijst.org/zoeken/leidraad/6/2.html): joined compounds and optional readability hyphens.
- [Taaladvies.net: email / e-mail](https://taaladvies.net/email-of-e-mail/): spelling of electronic mail and the separate noun `email`.
- [Van Dale, Taalkundig handboekje: B](https://www.dbnl.org/tekst/dale003taal01_01/dale003taal01_01_0005.php): attestation of `beden` as a form of `bede`, not a nonexistent sequence.

The general standard-language and informal `goesting` notes were checked against the source material consulted in the preceding review: [Taaladvies.net on standard Dutch](https://taaladvies.net/wat-is-standaardtaal-algemeen/) and [Team Taaladvies on goesting](https://www.vlaanderen.be/team-taaladvies/taaladviezen/goesting-trek-zin).
