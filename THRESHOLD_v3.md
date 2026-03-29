# THRESHOLD
### *A Text-Only Literary Puzzle House — Final Design Document v3*
### *Revised: Hong Kong Wing · Solvability Audit · Bug Fixes · Complexity Pass · All Clue Notes*

---

## CHANGELOG FROM v2

> **Structural**: Wing 4 expanded from "Boston Archive" (3 scenes) to **"The Two Cities Archive"** (5 scenes: 3 Boston + 2 Hong Kong). Annie lives in Hong Kong. The game now knows this. The long-distance relationship is no longer invisible — it is the emotional spine of the late game.
>
> **Bug fixes**: Greek mirror text corrected (was 8 chars, THRESHOLD has 9). Scene 13 Vigenère naming contradiction resolved (room no longer names the cipher — the mechanism is described and the player must identify it). Scene 9 puzzle framing clarified. Scene 2 answer validation expanded.
>
> **Solvability audit**: Every puzzle verified solvable from in-room context + one Google search (or calculator). No puzzle relies on obscure knowledge without providing a searchable clue. Clue notes now explicitly include search terms where relevant.
>
> **Complexity additions**: Scene 17 (The Two Clocks) requires a calculator. Scene 16 (The Harbour Room) requires a specific Google search. Wing 4 now requires 5 scenes instead of 3, adding ~3-5 hours of play. Estimated total: 12–30 hours across multiple days.
>
> **New scenes**: Scene 16 (The Harbour Room), Scene 17 (The Two Clocks). Total scene count: 0–22 + Tuna's Nook (Scene 23).
>
> **Thematic update**: Wing 4's theme is now "where we are — both of us" rather than just Boston. The epilogue acknowledges the two-city distance.

---

## OVERVIEW

**THRESHOLD** is a text-based narrative puzzle game. Click to explore. Type to solve.
Drag to arrange. No timer. No map. No mercy.

The house was built for someone. It knows her books, her music, her cat, her city —
both of her cities. At the end, it will ask her name.

The answer is **ANNIE**.

**Estimated completion time**: 12–30 hours across multiple sittings (3–7 days).
**Cannot be brute-forced**: The final lock requires a specific 5-letter password drawn from
the full alphabet (26^5 = ~11.8 million combinations), but the password is gated behind
completing the synthesis room — which is gated behind all five fragments — which are
gated behind four full wings of puzzles. There is no shortcut.

**Player profile**: An adult who reads Dostoevsky and Camus simultaneously for fun. Studied
literature. Has a cat named Tuna. Lives in Hong Kong. Her partner lives in Boston.
Willing to Google things she doesn't know. Owns a calculator (or a phone with one).

---

## THE TUNA HINT SYSTEM

Tuna is Annie's actual cat. She lives in the house. She appears in every scene.
She is not very helpful. She is trying her best.

**Mechanics:**

Every scene has a `[ask tuna]` link available at all times. Clicking it the first time
triggers Tuna's Tier 1 response (useless but thematic). Clicking again triggers Tier 2
(misdirected but gesturing). Clicking a third time triggers Tier 3 (the closest thing
to a real hint she will offer). After three asks in a single room, Tuna falls asleep:

> *"Tuna has settled into a tight spiral. Her breathing has slowed. She is asleep
> in the specific way that makes it impossible to justify waking her. She is
> unavailable for hints. She was barely available before."*

Tuna's hints are always written in character: she notices physical things, gets distracted
by irrelevant details, and makes bizarre logical leaps that accidentally point toward the
answer category — never the answer itself. The hints should feel warm, slightly absurd,
and personally true to a cat owner who knows this cat.

**Tuna's hint text, room by room, is specified in each scene entry below.**

---

## THE ANNIE MECHANISM — FINAL DESIGN

Five puzzle rooms each yield a **number** written on a small fragment card.
The Synthesis Antechamber converts those numbers to letters via A=1 through Z=26.
The five numbers, assigned to the correct labeled slots, spell **ANNIE**.

| Fragment | Source Room | Puzzle | Number | Letter |
|----------|-------------|--------|--------|--------|
| A | Scene 3 — Absurdist Shelf | Camus' authentic responses | 1 | A |
| N | Scene 5 — keshi Memorial | Letters in Casey Thai Luong | 14 | N |
| N | Scene 9 — Cipher Cabinet | A + one playing card suit | 14 | N |
| I | Scene 8 — Drafting Room | Windows per Simmons Hall room | 9 | I |
| E | Scene 19 — Sisyphus Room | Letters in the word "happy" | 5 | E |

**Randomization**: The Synthesis Antechamber (Scene 20) displays the five labeled slots in
a session-seeded random order every time. The player must match each number to its poetic
clue label, not enter them positionally. Players who haven't done the work won't recognize
which number belongs to which clue. Players who have done all five rooms will match them
immediately.

**The conversion animation runs once all five slots are correctly filled.** Only then does
the staircase to the Final Door appear. Typing ANNIE at the Final Door without completing
synthesis is impossible — the door does not exist until synthesis is done.

---

## COMPLETE SCENE STRUCTURE

```
[Scene 0: Entrance Hall]
        |
   ┌────┴────────┬──────────────┐
   ↓             ↓              ↓
[WING 1]     [WING 2]       [WING 3]
Library      Music Archive  Logic Annex
Scene 1      Scene 4        Scene 8 ★
Scene 2      Scene 5 ★      Scene 9 ★
Scene 3 ★    Scene 6        Scene 10
             Scene 7        Scene 11
                            Scene 12
   └─────────────┬───────────────┘
                 ↓ (all 3 wings complete)
        [WING 4: The Two Cities Archive]
        ┌────────┴────────┐
     BOSTON             HONG KONG
     Scene 13          Scene 16
     Scene 14          Scene 17
     Scene 15
        └────────┬────────┘
                 ↓ (all 5 scenes complete)
         [WING 5: Inner Sanctum]
                Scene 18
                Scene 19 ★
                Scene 20 (Synthesis)
                Scene 21 (Final Door → ANNIE)
                Scene 22 (Epilogue)
─────────────────────────────────────────────
[Scene 23: Tuna's Nook — secret, keyword anywhere]
```
★ = Fragment room

All of Wings 1, 2, and 3 can be completed in any order.
Wing 4 (Two Cities Archive) unlocks only when all three outer wings are done.
Within Wing 4, Boston and Hong Kong branches can be done in either order.
Wing 5 (Inner Sanctum) unlocks only when all five Wing 4 scenes are done.

---

## SCENE 0 — THE ENTRANCE HALL

**Purpose**: Tutorial. Teaches the `[click to explore]`, `[type to solve]`, and
`[ask tuna]` mechanics without stakes.

**Room Description**:
A hall that smells faintly of chalk and something like rain. The walls are bare stone.
Three doors ahead of you, each slightly ajar. A fourth door, directly behind you, is
sealed. On the wall beside the sealed door, a small brass mirror.

The mirror reflects the room. In the mirror, you can read a word above the three doors
that is not visible when you look at the doors directly. In the mirror it reads:

> *ΤΗΡΕΣΗΟΛΔ*

(This is THRESHOLD transliterated into Greek letters — Τ=T, Η=H, Ρ=R, Ε=E, Σ=S, Η=H,
Ο=O, Λ=L, Δ=D — displayed as a mirror-readable inscription. The player doesn't need to
solve this. It's flavor.)

Below the mirror, a small notebook sits open. It reads:

> *"There is a cat somewhere in this house. Her name is Tuna. She will not help you,
> but she will try. You may ask her at any time by selecting [ask tuna].
> The three doors ahead lead to the Library, the Music Archive, and the Logic Annex.
> You may enter them in any order.*
>
> *There is also a fourth wing, and a sanctum beyond that.*
>
> *You will know when you have earned them."*

**Interactive objects**: `[mirror]`, `[notebook]`, `[door — library]`, `[door — music]`,
`[door — logic]`, `[ask tuna]`

**Tuna here**: Sitting directly in front of the sealed door, looking at it.
> Ask 1: *"Tuna is sitting in front of the sealed door as if she placed herself there
> deliberately. She has not. She is simply a cat, and this is where she sat."*
> Ask 2: *"She has not moved. She seems to believe the sealed door is hers. Perhaps it is."*
> Ask 3: *"Tuna turns. She looks at the three open doors. She looks back at the sealed
> door. She returns to looking at the three open doors. This is, genuinely, as much
> guidance as she is able to offer."*

**No puzzle here.** The player selects a wing and begins.

---

## WING 1: THE LIBRARY OF WHAT HAS BEEN READ

*Three scenes, one fragment. The wing's theme is the literature currently being read.
What the books demand philosophically. What the reader carries out.*

---

### SCENE 1 — The Crime and Punishment Alcove

**Theme**: Dostoevsky, *Crime and Punishment* (currently reading)

**Room Description**:
A narrow room smelling of old paper and copper. A single gas lamp casts everything amber.
On the desk, an open copy of *Crime and Punishment*, spine cracked at Part Two. The margins
are annotated in a hand that is not yours — small, precise, argumentative. On the wall
behind the desk, someone has pinned a handwritten note in two pieces. The top half reads:

> *"If he belongs to the ordinary class, he must live in submission and has no right to
> transgress the law. But if he belongs to the other sort — he has the right..."*

The bottom half has been torn away. A `[torn fragment]` lies on the floor.

**Interactive objects**: `[annotated margins]`, `[wall note — top]`, `[torn fragment]`,
`[desk lamp]`, `[cat]`, `[ask tuna]`, `[corridor east]`

**Clue Note**: Examining `[annotated margins]` reveals a margin note reading:
*"Raskolnikov never asks 'may I.' He asks 'do I have the ___.' One word. Fills the sentence.
It rhymes with 'night.'"*

**Gating Puzzle**: Examine `[torn fragment]`. It finishes: *"...he has the right to..."*
The last word has been burned away. Four letter-shaped char marks remain: `_ _ _ _ _`
Type the missing word to unlock the eastern corridor.

**Answer**: `RIGHT`

**Why this is solvable**: The wall note explicitly says "he has the right..." and the
margin note says "do I have the ___." The Dostoevsky passage is one of the novel's most
famous articulations. A player who has read Part Two (or who Googles "Raskolnikov ordinary
extraordinary theory right") will arrive immediately. The burned word has five letter-marks
matching RIGHT. The rhyme clue in the margin ("rhymes with night") is a safety net.

**Tuna**:
> Ask 1: *"Tuna is lying across the open book. She has covered Part Two entirely. Whatever
> Raskolnikov is doing on those pages, it is now Tuna's business."*
> Ask 2: *"She lifts her head. She stares at the torn paper on the floor. She bats it
> once. It spins. She decides this is enough and looks away."*
> Ask 3: *"Tuna places a paw over the burned-out word. She seems to be considering
> whether she has the word. Whether she has the permission. She decides she does not.
> She is, in this sense, one of the ordinary ones."*

**Margin notes** (flavor, non-puzzling):
- *"He needs her to be guilty too. He cannot stand to be the only one who crossed."*
- *"This is not nihilism. Raskolnikov is the argument against nihilism. He fails because
  the theory holds no weight when it becomes a person lying on the floor."*
- *"The psychology of exception is not philosophy — it is wound dressed as logic."*

---

### SCENE 2 — The Constructionist Study

**Theme**: Lisa Feldman Barrett, *How Emotions Are Made* (currently reading)

**Room Description**:
A study with a clinical feel — too clean to be comfortable. All the bookshelves have
their spines facing inward. On the central table: an open monograph. At the top of the
visible page, a brain diagram labeled **"Interoceptive Network"** with a red circle.
Below it, a two-column comparison:

| Classical View | Constructionist View |
|----------------|---------------------|
| Emotions are universal | Emotions are ??? |
| Discovered, not made | ??? by the brain |
| Fixed biological circuits | Prediction as primary function |

The right column's first two entries have been blacked out with a thick marker.

A second panel on the wall shows a scenario:

> *"A subject is administered adrenaline. Their heart rate rises. Their palms sweat.
> In a room with an angry person, they feel fear. In a room with a cheerful person,
> they feel joy. The physiological arousal is identical in both cases.*
>
> *Barrett's theory explains this as: the brain ___ the emotion from context.*
> *The same one-word answer fills the blanks in both the table and the scenario."*

**Interactive objects**: `[monograph]`, `[blacked-out column]`, `[wall panel]`,
`[bookshelves — spines inward]`, `[ask tuna]`, `[corridor south]`

**Clue Note**: The monograph, when examined fully, shows a page-corner dog-ear with:
*"Key verb. Not discovered. Not found. Made. Built. One word. Past tense.
Google: 'Barrett theory of constructed emotion key concept' if needed."*

**Gating Puzzle**: Supply the missing word.

**Answer**: `CONSTRUCTED` (also accept: `CONSTRUCTS`)

**Why this is solvable**: The theory name itself contains the answer ("theory of
**constructed** emotion"). The table's first missing entry ("Emotions are ???") is
filled by "constructed." The scenario blank ("the brain ___ the emotion") is filled
by "constructs" or "constructed." The clue note says "past tense" and names the theory
directly. A Google search for "Barrett constructed emotion" returns the answer in every
result.

**Tuna**:
> Ask 1: *"Tuna jumps onto the table and sits directly on the brain diagram. She begins
> to purr. Whether this is emotional or physiological is unclear. Possibly both."*
> Ask 2: *"She is examining the blacked-out text with great interest. She does not read.
> She is, however, pressing her face against the blackout bar as if proximity is a
> substitute for knowledge."*
> Ask 3: *"Tuna looks at the bookshelves. She looks at you. She very deliberately turns
> her back to the room, facing inward toward the wall — the same direction as all the
> books. She sits there. This is probably a comment about construction and context.
> Probably."*

**Developer note**: The spines-inward shelves are a deliberate design choice — Barrett
argues we perceive the world through a lens we've already built. The books are present
but unreadable from outside. Players who examine them get: *"All the spines face away.
The books are here. You simply cannot read their names from this angle."*

---

### SCENE 3 — The Absurdist Shelf ★ FRAGMENT A

**Theme**: Albert Camus, *The Myth of Sisyphus* (currently reading)
**Fragment yielded**: `1` → **A**

**Room Description**:
A high-ceilinged room smelling of chalk dust. Floor-to-ceiling shelves hold identical
grey-spined books with no titles. At the center: a freestanding chalkboard. On it,
written in large letters:

> *"There is but ___ truly serious philosophical problem, and that is suicide."*

The blank is large. The chalk is in the tray.

Beside the chalkboard: a locked brass box. Its lock has a single dial, numbers 1 through
99. Above the lock, engraved: *"The answer fills the blank. The answer is also the
combination."*

**Interactive objects**: `[chalkboard]`, `[brass box]`, `[chalk]`, `[identical books]`,
`[ask tuna]`

**Clue Note**: One of the identical grey books, examined at random, falls open to a single
page. It reads: *"Camus opens his essay with the most important sentence he ever wrote.
Google 'Camus Myth of Sisyphus opening line.' The missing word is a number.
Numbers below ten can also be words. The dial accepts either."*

**Gating Puzzle**: Fill in the blank. Use the answer as the combination.

**Answer**: `ONE` / `1`
(Source: Camus, *The Myth of Sisyphus*, opening line — findable immediately by searching
*"Camus one truly serious philosophical problem"*)

**Why this is solvable**: The quote is the most famous sentence Camus ever wrote. Searching
any combination of "Camus," "serious," "philosophical," and "problem" returns it. The
blank accepts both the word ONE and the numeral 1. The clue note provides the exact
Google query.

**On correct answer**: Brass box opens. Inside: a small card reading:
> *The first fragment. The philosopher said: ONE serious problem. ONE authentic response.*
> *Number: 1*

**Fragment collected**: `1` → A

**Tuna**:
> Ask 1: *"Tuna sits on top of the brass box. She is considering the dial. She turns it
> with her paw. She lands on 7. Nothing happens. She turns it again. She lands on 7 again.
> She seems satisfied. Nothing happens."*
> Ask 2: *"She is now examining the identical books. She has selected one. She is sitting
> on it. She has not opened it. This is her relationship to philosophy in general."*
> Ask 3: *"Tuna walks to the chalkboard. She looks at the blank. She looks at you. She
> holds up one paw. Slowly. Deliberately. She is counting. She is counting to the answer.
> She puts the paw down. She has said all she is prepared to say."*

**Developer note**: The grey-spined identical books each contain the Camus absurd syllogism
in a different language when examined. One book, examined last (or seventh), is empty
except for a single pawprint on the center of the page. It belongs to Tuna.

---

## WING 2: THE MUSIC ARCHIVE

*Four scenes, one fragment. The wing's theme is identity through naming — keshi chose his
name from a partner's parents' nickname; Jane Remover left one name to become another.
The fragment comes from keshi.*

---

### SCENE 4 — The Record Room

**Theme**: keshi's discography — *Gabriel*, the minimal R&B of longing and near-silence

**Room Description**:
A dim room with wood-paneled walls. A record player runs but produces no sound — the
needle is down, the record spins, but nothing comes out. The sleeve on the record reads
*UNDERSTAND*. On the wall: a handwritten setlist from a concert that has already happened.
The setlist lists song titles but one is replaced with a blank:

```
— like i need u
— UNDERSTAND
— ___________
— touch
— 2 soon
```

Below the setlist, a note pinned to the wall:

> *"He named himself after a word her parents gave him. The name is a gift he chose to
> keep. He named his first full album after an angel. The angel is the door."*

**Interactive objects**: `[record player]`, `[setlist]`, `[blank on setlist]`,
`[sleeve notes]`, `[ask tuna]`, `[door north]`

**Clue Note**: The sleeve notes, examined fully, reveal a final line: *"His debut album.
Two thousand and twenty-two. A single syllable. The name of a messenger.
Search: 'keshi debut album 2022' if you don't know it."*

**Gating Puzzle**: Name keshi's debut album.

**Answer**: `GABRIEL`
(Google: *"keshi debut album"* → *GABRIEL*, 2022, named after the archangel)

**Why this is solvable**: The clue note provides the year (2022), the artist (keshi),
the format (debut album), and a descriptor (angel/messenger). Googling "keshi debut
album" returns GABRIEL as the top result. The room description also says "an angel"
which narrows it even without searching.

**Tuna**:
> Ask 1: *"Tuna is sitting inside the empty record sleeve. She is perfectly sized for it.
> She looks extremely comfortable. The record player spins beside her. She does not
> acknowledge it."*
> Ask 2: *"She has decided to sit directly in front of the door labeled north. She will
> not move. She is not blocking it. She is simply very close to it. There is something
> about the name on the door that interests her."*
> Ask 3: *"Tuna yawns. She shows her teeth. Then she looks at the setlist on the wall.
> Then at the note. Then at you. The note mentions an angel. She does not know what
> angels are called. But she knows what you should be searching for."*

**Developer note**: The silent record player is intentional. keshi's music is described
by critics as barely-there — a whisper of feeling, a murmur between croon and silence.
The sleeve notes say: *"A song about knowing someone and being known. The voice arrives
between a croon and a murmur. It is less than a shout and more than a secret."*
The blank in the setlist is `limbo`, but the player doesn't need to fill it.

---

### SCENE 5 — The keshi Memorial ★ FRAGMENT N

**Theme**: keshi's biography, birth name, Vietnamese-American identity
**Fragment yielded**: `14` → **N**

**Room Description**:
A small, warm room with fairy lights strung along the ceiling. A framed photograph (described
in text, not shown): a young man holding a guitar in a Houston living room. Below the frame,
an engraved plaque:

> *"He gave himself a name that wasn't his. But every name he has used has been him.*
> *How many letters did he start with — first name, middle name, and last name together?"*

A numerical input below the plaque: `[__]` (two-digit field).

**Interactive objects**: `[framed photograph]`, `[engraved plaque]`, `[numerical input]`,
`[fairy lights — examine]`, `[ask tuna]`

**Clue Note**: A small card tucked into the frame reads: *"He was born Casey. His family
came from Vietnam. He has three names. Count all three. Do not count the stage name.
Search: 'keshi real name full birth name' — you need all three parts."*

**Fragment Puzzle**: Count the letters in keshi's full birth name.

**Answer**: `14`
(Google: *"keshi real name full"* → **Casey Thai Luong**
C-A-S-E-Y = 5, T-H-A-I = 4, L-U-O-N-G = 5 → 5+4+5 = **14**)

**Why this is solvable**: The clue note specifies three names, says "Casey" is the first,
mentions Vietnam, and instructs the player to search for the full birth name. Googling
"keshi real name" returns "Casey Thai Luong" on his Wikipedia page and multiple fan sites.
Counting 5+4+5=14 is arithmetic. The plaque confirms the answer format (two-digit number).

**On correct answer**: A small drawer opens. Inside, a fragment card:
> *The second fragment. Three names, all his. Fourteen letters total.*
> *Number: 14*

**Fragment collected**: `14` → N

**Tuna**:
> Ask 1: *"Tuna sits beside the plaque. She seems to be counting something. She gets to
> four. She stops. She has counted her own paws. She is wrong. She is also counting
> the wrong thing."*
> Ask 2: *"She looks at the photograph. She looks at you. She looks at the photograph
> again. She presses her nose to the glass. She seems to want you to read the photograph
> more carefully. She is not able to specify which part."*
> Ask 3: *"Tuna puts her paw on the photograph. She moves it first to the face, then to
> the text beneath: Casey. She moves it to the second word: Thai. Then the third: Luong.
> She counts — one group, two groups, three groups — and then knocks the photograph
> off the wall entirely. She has said what she came to say."*

---

### SCENE 6 — The Shoegaze Passage

**Theme**: Jane Remover — the transition, the name left behind, identity as a threshold

**Room Description**:
A long corridor whose walls are painted in a blue so saturated it becomes physical — not
just a color but a presence. The walls are dimpled like soundproofing foam. At irregular
intervals, blank canvases hang at odd angles. At the end: a door. Its plate reads:

> *"Only the former name may enter."*

Beside the door, an alphabetic keypad.

A `[journal]` on a ledge midway down the corridor reads:

> *"On June 27, 2022, she released 'Royal Blue Walls.' On the same day, she announced
> a new name and retired the old one. The old name is the key. It was five characters.
> No vowels. It is the password."*

**Interactive objects**: `[journal]`, `[blank canvases]`, `[door]`, `[keypad]`, `[ask tuna]`

**Clue Note**: One blank canvas, examined closely, has a date written in pencil on its back:
*"June 27, 2022 — the day a name was retired.
Search: 'Jane Remover former stage name' or 'Jane Remover Dltzk.'"*

**Gating Puzzle**: Jane Remover's pre-transition pseudonym.

**Answer**: `DLTZK`
(Google: *"Jane Remover former name"* → **Dltzk**, retired June 27, 2022)

**Why this is solvable**: The journal gives the artist name (Jane Remover), the date, the
album release that coincided with the name change, and the constraint (five characters,
no vowels). Googling "Jane Remover former name" or "Jane Remover before transition" returns
Dltzk. The no-vowels constraint confirms the answer.

**Tuna**:
> Ask 1: *"Tuna walks the length of the blue corridor very slowly. She examines every
> canvas. She selects none of them as meaningful. She sits at the far end, near the door,
> and stares back at you."*
> Ask 2: *"She is pressing herself against the door as if she can push it open with her
> body weight. She cannot. She weighs approximately what she weighs. The door does not
> care."*
> Ask 3: *"Tuna sits beside the journal. She puts a paw on it. She seems to be
> indicating: the answer is in here. More specifically: the date, the event, the name
> that was given up. She does not type. You will have to type."*

---

### SCENE 7 — The Census Designated Chamber

**Theme**: Jane Remover's near-death experience → *Census Designated* → the absurd
**Note**: This room uses a hidden acrostic — a more complex puzzle layer.

**Room Description**:
A cavernous room smelling of snow and gasoline. The ceiling is painted with a blizzard.
On the wall: a topographic map of Oregon, with a circle drawn around **JOHN DAY**. Beneath
it: *"I almost wasn't. Then I was. Again."*

A record player runs. The text describes it: *"Track five. Something builds to the edge
of itself. Then the edge becomes the song."*

On a reading table: a printed page titled *CENSUS DESIGNATED — A DOCUMENT*. The text
reads (this is the acrostic — first letter of each sentence is bolded for implementation):

> **A** concert hall built inside a blizzard.
> **B**etween John Day, Oregon and the rest of the world, she almost didn't make it.
> **S**hocking only in hindsight — these things often are.
> **U**nder that specific weight of snow, something clarified.
> **R**eturning to music after, she said: a near-death experience changed the record.
> **D**eath, specifically the nearness of it, does something to the sound.

Below the acrostic, in red ink:

> *"A French philosopher — who wrote the book she is currently reading — gave a precise
> name to this confrontation: the silence of the world against the demand for meaning.
> The first letter of each sentence above spells it. Enter the word."*

**Interactive objects**: `[topographic map]`, `[record player]`, `[printed page]`,
`[acrostic — examine]`, `[ask tuna]`, `[sealed arch]`

**Clue Note**: A small card pinned to the map reads: *"Six sentences. Six first letters.
A six-letter word. Camus coined the term. She is reading his book. Check Wing 1 if needed.
If stuck: search 'Camus confrontation between humans and the universe one word.'"*

**Gating Puzzle**: Read the acrostic (A-B-S-U-R-D). Enter the word.

**Answer**: `ABSURD` (also accept: `THE ABSURD`)

This puzzle has two valid solving paths:
1. Read the acrostic carefully → spell ABSURD
2. Connect Jane Remover's near-death confrontation to Camus → Google *"Camus term
   confrontation meaning universe"* → absurd → return to confirm with acrostic

**Tuna**:
> Ask 1: *"Tuna is sitting in the middle of the painted blizzard on the ceiling. She is
> not on the ceiling. She is on the floor beneath it, staring up at it. She seems to
> find the blizzard specifically interesting."*
> Ask 2: *"She has jumped onto the reading table. She is sitting on the printed page.
> She is covering most of it. The first letters of each sentence are still visible at
> the left margin, if you look carefully."*
> Ask 3: *"Tuna stands up. She walks from the top of the page to the bottom, pressing
> each first letter with her paw as she goes: first column, first column, first column.
> She reaches the bottom. She looks at you. She has done something deliberate.
> Whether you understood it is your problem."*

---

## WING 3: THE LOGIC ANNEX

*Five scenes, two fragments. Theme: what can be proved without being revealed.
The sponge building, the classical cipher, the Minecraft paradox, the cave.*

---

### SCENE 8 — The Drafting Room ★ FRAGMENT I

**Theme**: MIT Simmons Hall — Steven Holl, porosity, nine windows per room
**Fragment yielded**: `9` → **I**

**Room Description**:
A room smelling of drafting pencil and coffee. Architectural blueprints cover every
surface. All of them depict the same building: ten stories, on a wide straight road
(labeled VASSAR STREET), its facade covered in an irregular grid of small windows that
together produce the impression of something alive and paused.

On the central drafting table, a detail circle highlights a single student room. The
annotation beside it reads:

> *"CONCEPT: POROSITY. The architect called it a sponge. It was built at a school on
> the Charles River where people learn to make the invisible visible.*
> *Each student room in this building has exactly ___ windows.*
> *This number is your third fragment."*

At the bottom of the detail, a fill-in field.

**Interactive objects**: `[blueprints — walls]`, `[blueprints — floor glass panel]`,
`[detail circle]`, `[note in margin]`, `[ask tuna]`, `[door — CIPHER CABINET]`

**Clue Note**: A blueprint annotation reads: *"Simmons Hall, MIT, 229 Vassar Street,
Cambridge MA. Architect: Steven Holl. Search: 'Simmons Hall MIT windows per room'
or 'Steven Holl sponge building student rooms.' The number is on MIT's own website."*

**Fragment Puzzle**: How many windows does each student room in Simmons Hall have?

**Answer**: `9`
(Google: *"Simmons Hall MIT windows per room"* → MIT documentation: *"Each student room
has a grid of nine windows"*)

**Why this is solvable**: The room names the building (Simmons Hall), the street (Vassar),
the architect (Steven Holl), the school (MIT), and the concept (sponge/porosity). Any of
these search terms lead to the MIT architecture page confirming nine windows per room.

**On correct answer**: Drawer opens. Fragment card:
> *The third fragment. Nine windows per room. The sponge architect believed in openness.*
> *Number: 9*

**Fragment collected**: `9` → I

**Tuna**:
> Ask 1: *"Tuna is walking across the blueprints spread on the floor, leaving no marks.
> She examines Vassar Street with the authority of someone who has lived there. She has
> not lived there."*
> Ask 2: *"She has found the detail circle on the drafting table. She is sitting inside
> it with her whole body, having determined that the circle is hers. She is not in the
> way of the annotation. She is in the way of everything else."*
> Ask 3: *"Tuna walks to the window of this room. She sits and looks out. She turns back
> to look at you. She turns to the window again. She counts the panes of the window she
> is sitting in front of. She gets to three and loses interest. She is not helpful
> with the counting. But she is pointing at windows."*

---

### SCENE 9 — The Cipher Cabinet ★ FRAGMENT N

**Theme**: Caesar cipher — classical cryptography, shifting the alphabet
**Fragment yielded**: `14` → **N**

**Room Description**:
A room that feels like a clockwork interior — brass and wood, small gears turning for
no apparent structural reason along one wall. In the center: a large rotating Caesar
wheel on a stand. Outer ring: the alphabet. Inner ring: the alphabet, rotatable.

On the wall, in formal type:

> *"A Caesar cipher shifts every letter of the alphabet by a fixed number.*
> *To encode the letter A with a shift of 3: A becomes D.*
>
> *Your task:*
> *Step 1: How many cards are in a single suit of a standard playing deck?*
> *Step 2: Starting from the letter A, shift forward by that many positions.*
> *Step 3: Name the letter you land on. Where does that letter sit in the alphabet?*
> *That alphabet position is your fragment number."*

A numerical input field below. Above it: *"Enter the alphabet position."*

**Interactive objects**: `[cipher wheel]`, `[wall instructions]`, `[gears — examine]`,
`[playing card display — examine]`, `[ask tuna]`

**Clue Note**: A small card affixed to the wheel reads: *"Cards in a standard suit:
Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King = 13 cards. A is position 1.
Shift forward 13: position 1 + 13 = position 14. The letter at position 14 is N.
What is N's position? It's 14. Enter 14."*

**Playing card display** (new interactive object): A glass case on the side wall shows
a single suit of cards fanned out: A♠ 2♠ 3♠ 4♠ 5♠ 6♠ 7♠ 8♠ 9♠ 10♠ J♠ Q♠ K♠.
A label: *"One suit. Count them."*

**Fragment Puzzle**:
- Step 1: Cards in a standard suit → **13**
- Step 2: A (position 1) + shift 13 → position 14 → letter **N**
- Step 3: N is the 14th letter of the alphabet → **14**

**Answer**: `14`

**Why this is solvable**: The wall text breaks the puzzle into three explicit steps. The
playing card display physically shows all 13 cards. The clue note walks through the
entire solution. The Caesar wheel is present for manual verification. Even a player
unfamiliar with ciphers can follow the instructions step by step.

**On correct answer**: Fragment card:
> *The fourth fragment. A suit's worth forward from A. Fourteen. The letter is N.*
> *Number: 14*

**Fragment collected**: `14` → N (second N in ANNIE)

**Tuna**:
> Ask 1: *"Tuna is spinning the cipher wheel with her paw. She stops on M. She looks
> satisfied. M is not the answer. She spins again. She stops on M. This is a pattern
> with her."*
> Ask 2: *"She has climbed inside the cipher wheel like a wheel of fortune. She rotates
> herself a quarter turn. She is now looking at the ceiling. This is not a hint."*
> Ask 3: *"Tuna looks at the playing card display. She puts one paw on the glass. Then
> she walks over to the cipher wheel, sits on A, and looks expectantly at the card
> display. She looks back at A. She looks at you. She is pointing at the start. She
> is pointing at the shift. She is, somehow, pointing at thirteen."*

---

### SCENE 10 — The Void Terminal

**Theme**: Zero-knowledge proofs — toborwinner and shiny, knowledge without disclosure

**Room Description**:
A room that should not exist inside a house: it is rendered in low-resolution cubes.
Stone brick walls. Polished andesite floor. A torch on the wall casts blocky orange light.
Two figures stand near a stone door. Their conversation updates in real time:

```
toborwinner: the key is 24
toborwinner: that's how many iron ingots you need for a full armor set
shiny: wrong. the key is 10
shiny: that's how many hearts you have
toborwinner: neither of those is the password
shiny: i know what the password is
toborwinner: then say it
shiny: i can't say it. i just know it
toborwinner: how is that different from not knowing it
shiny: is it
toborwinner: yes
shiny: think about that
```

The stone door is labeled `[PROOF ALCOVE]`.

**Interactive objects**: `[toborwinner — talk]`, `[shiny — talk]`, `[stone door]`,
`[torch — examine]`, `[floor — examine]`, `[ask tuna]`

**Clue Note**: A chest in the room (open) contains a note: *"shiny's paradox is real.
A whole branch of cryptography is built around proving you know something without saying
what it is. Search: 'prove you know a secret without revealing it cryptography.'
Three words. Or a three-letter acronym."*

**Gating Puzzle**: The protocol that resolves shiny's paradox.

**Answer**: `ZERO KNOWLEDGE PROOF` (also accepts: `ZKP`, `zero-knowledge proof`,
`zero knowledge proofs`)

**Why this is solvable**: The clue note describes the concept precisely and provides the
Google search query. The Minecraft dialogue dramatizes the concept. Searching the provided
phrase returns "zero-knowledge proof" as every top result.

**On correct answer**: Stone door grinds open. Terminal text:
```
toborwinner: oh
shiny: told you
toborwinner: you didn't tell me anything
shiny: exactly
```

**Tuna**:
> Ask 1: *"Tuna is inside the chest. She is sitting on the note. She has not read the
> note. She is simply occupying it, as is her custom."*
> Ask 2: *"She climbs out of the chest. She walks to the stone door and sits facing it.
> She knows what is on the other side. She will not say. This is, in a sense, the point
> of the room."*
> Ask 3: *"Tuna turns to look at you. She looks at shiny's last line — 'exactly.' She
> looks back at you. She has understood the philosophical point and is communicating
> it by proximity to the relevant text. She cannot type the three words. But she has
> gestured at the concept: proving by not telling."*

**Developer note**: toborwinner's 24 iron ingots (for a full iron armor set: 24 iron
ingots) and shiny's 10 hearts (standard health bar: 10 full hearts = 20 HP) are both
Minecraft-accurate. Neither is relevant. They are there because it is true that these
two people would argue about this.

---

### SCENE 11 — The Proof Alcove

**Theme**: ZKP mechanics — the Ali Baba cave, probability of fraud, rounds of interaction

**Room Description**:
A small cave. Rough stone walls, carefully lit with recessed lights. At the far end, it
forks into two identical passages. A curtain spans the fork. Carved in the wall:

> *"THE ALI BABA CAVE:*
>
> *A cave splits into two passages. They connect in a loop. A magic door in the middle
> of one passage is locked by a secret word.*
>
> *The prover enters a passage (unseen). The verifier calls LEFT or RIGHT. The prover
> must emerge from the called side. If the prover knows the magic word, they can always
> comply. If they don't, they succeed only by luck: 1 in 2.*
>
> *One round proves very little. But repeated rounds make lucky fraud increasingly
> improbable. After how many rounds does the probability of successful fraud by
> pure luck fall below 1% for the first time?"*

A numerical keypad below the carving.

**Interactive objects**: `[left passage]`, `[right passage]`, `[carved text]`,
`[numerical keypad]`, `[curtain]`, `[ask tuna]`

**Clue Note**: A footnote below the carving reads: *"The probability of faking it after
n rounds is (1/2)^n. You need (1/2)^n < 0.01 — equivalently, 2^n > 100.
Try values: 2^6 = 64 (not enough). 2^7 = 128 (enough). The answer is 7.
Or use a calculator: keep doubling from 1 until you pass 100."*

**Gating Puzzle**: After how many rounds does the fraud probability first fall below 1%?

**Answer**: `7`
(1/2)^7 = 1/128 ≈ 0.78% < 1% ✓
(1/2)^6 = 1/64 ≈ 1.56% > 1% ✗

**Why this is solvable**: The clue note provides the formula, the inequality, AND works
through both n=6 and n=7 explicitly. Even a player with no math background can verify:
"is 128 > 100? Yes → 7." Alternatively, Googling "zero knowledge proof rounds 1 percent"
returns the answer in tutorial articles.

**Tuna**:
> Ask 1: *"Tuna has positioned herself exactly at the fork between the two passages.
> She is blocking neither. She is looking at both. She seems to be waiting to see
> which one you will choose. She is the verifier."*
> Ask 2: *"She has gone down the left passage. She has not come back. A moment passes.
> She comes back from the right passage. This was not magic. This was a cat."*
> Ask 3: *"Tuna does the two-passage demonstration again. This time she does it seven
> times. Left in, right out. Right in, right out. Left in, left out. She returns each
> time. She is counting. By the seventh round she seems satisfied. She sits. She
> blinks at you. Seven."*

---

### SCENE 12 — The Window Between Wings

**Theme**: Synthesis passage — Library and Music Archive locked together

**Room Description**:
A corridor with windows on both sides. Left window: looks into a library. Right window:
looks into a music room. Straight ahead: a heavy door with two keyholes.

Left keyhole plaque: *"Name the psychologist."*
Right keyhole plaque: *"Name the philosopher."*

**Interactive objects**: `[left window]`, `[right window]`, `[heavy door]`,
`[left keyhole]`, `[right keyhole]`, `[ask tuna]`

**Clue Note**: On the floor, a note: *"Both names have already appeared in this house.
Look left — the study of constructed emotion. Look right — the problem of the absurd.
If you have completed Wings 1 and 2, you already know both names."*

**Gating Puzzle**: Two-part.
- Left keyhole: `BARRETT`
- Right keyhole: `CAMUS`

**Why this is solvable**: Both names were central to earlier rooms (Scene 2 and Scene 3).
The clue note explicitly connects them to their rooms. A player who completed Wings 1
and 2 (required before reaching this point in Wing 3) has encountered both names.

**Tuna**:
> Ask 1: *"Tuna is looking through the left window at the library. She presses her nose
> to the glass. She does this for some time. She switches to the right window. She
> repeats this process. She has found both windows equally interesting and is providing
> no disambiguation."*
> Ask 2: *"She taps the left keyhole. She looks at you. She taps the right keyhole.
> She looks at you. She walks away. She is doing more than you might think."*
> Ask 3: *"Tuna sits in front of the left window: the library. She looks at you very
> seriously, then says nothing, because she is a cat. But her expression is the
> expression of someone who has just remembered a name. The name of the scientist in
> the study with the books facing inward."*

---

## WING 4: THE TWO CITIES ARCHIVE

*Five scenes, no new fragments. All five required to unlock the Inner Sanctum.
Theme: the two cities where the house exists — Boston, where the builder lives, and
Hong Kong, where the one who was built for lives. The architecture, the water, the
distance between. Each puzzle is harder than anything in the previous wings.*

*The Boston and Hong Kong branches can be completed in either order.*

---

### SCENE 13 — The Smoot Gallery

**Theme**: Harvard Bridge, Oliver Smoot, the 1958 measurement, non-standard units
**Contains**: A Vigenère cipher with key TUNA — the most complex cryptographic puzzle
in the game.

**Room Description**:
A long gallery with a floor painted to resemble a bridge. At intervals along the floor,
painted markings with numbers: 10, 20, 30... 360. Beside each marking: a small gold label.
The markings stop at 360. After 360, there is a painted mark labeled with a fraction:
`"360 + ?"` The final mark reads simply: `"+  1 ear"`.

On the wall, a framed document:

> *"In October 1958, an MIT fraternity pledge lay down on a bridge spanning the Charles
> River and was rolled from one end to the other. His height became the unit. The bridge
> was measured to be a specific number of these units — plus one ear.*
>
> *This number, stripped of its decimal, is not your answer.*
> *Your answer is hidden in the message below.*
>
> *The message has been encoded using a cipher — one where each letter is shifted forward
> by a different amount, determined by the letters of a keyword. The keyword repeats
> across the message. Each keyword letter gives the shift: A shifts by 0, B by 1, C by 2,
> and so on.*
>
> *The keyword is the name of the cat who lives in this house.*
> *Decode the message. The decoded word is the name of the river.*
> *Enter the river."*

Below, in large monospace font:

```
CIPHERTEXT:  V B N R E Y F
```

A second plaque explains the mechanics:

> *"To encode a letter, shift it forward by the keyword letter's position (A=0, B=1...
> Z=25). To decode, shift backward. Example: if the keyword letter is T (position 19)
> and the ciphertext letter is V (position 21), then: 21 minus 19 = 2 = C.*
>
> *The keyword is four letters. The message is seven. The keyword repeats: four letters,
> then the first three again. The decoded message is a proper noun — the name of a river."*

**Interactive objects**: `[painted floor markings]`, `[framed document]`, `[ciphertext plaque]`,
`[mechanics plaque]`, `[ask tuna]`, `[door — MITHENGE OBSERVATORY]`

**Clue Note**: A card tucked behind the framed document: *"The bridge measurement:
search 'Harvard Bridge smoots.' The cipher: search 'Vigenère cipher decoder online' —
many free tools exist. Enter the ciphertext VBNREYF and the key TUNA (the cat's name).
The result is a river name."*

**Gating Puzzle**: Decode the ciphertext.

**Full decode workthrough** (for implementation/verification):
```
Key:   T  U  N  A  T  U  N
       19 20 13  0 19 20 13
Cipher:V  B  N  R  E  Y  F
       21  1 13 17  4 24  5
Plain: 21-19=2  1-20=-19≡7  13-13=0  17-0=17  4-19=-15≡11  24-20=4  5-13=-8≡18
       C        H            A        R         L             E        S
```
**Answer**: `CHARLES` (the Charles River)
(Also accept: `THE CHARLES`, `CHARLES RIVER`)

**Why this is solvable**: The room describes the cipher mechanism in full without using
the name "Vigenère" (the player may recognize it or search "cipher where keyword shifts
each letter"). The keyword is explicitly stated as "the cat who lives in this house" =
TUNA. The mechanics plaque provides a worked decoding example using T and V → C (the
first step of the actual solution). The clue note names the cipher type (Vigenère) and
suggests an online decoder. Using any Vigenère decoder with ciphertext VBNREYF and key
TUNA yields CHARLES immediately.

**Developer note**: The design intent is that the word "Vigenère" is never used in the
room's prose — only the mechanics are described. The clue note IS allowed to name it,
since it serves as the safety-net hint. Players who recognize the mechanism from the
description can solve without the clue note. Players who need help get the cipher's name
from the clue note and can use online tools.

**Tuna**:
> Ask 1: *"Tuna is walking down the painted bridge markings on the floor. She reaches
> the mark that says 360 and stops. She looks at the '+? ear' mark. She looks at her
> own ear. She seems vaguely offended."*
> Ask 2: *"She is sitting on the ciphertext. This is VBNREYF. She is sitting on the V.
> She seems to be offering herself as the first step toward the answer, which would
> require you to know that the key is her name, which you do, because it is."*
> Ask 3: *"Tuna stands up. She spells her own name slowly: she pats herself on the
> head with her paw — T. She looks at you with great significance — U. She looks at
> herself again — N. She yawns — A. She has told you the key. This is the most helpful
> she has ever been. She will not repeat it."*

---

### SCENE 14 — The MIThenge Observatory

**Theme**: MIT Infinite Corridor, the MIThenge solar alignment, Building sequence
**This is a two-step gate — both answers required in sequence.**

**Room Description**:
A long dark room oriented east to west, with a single narrow window at the far (west)
end. The room is built to precisely mimic a corridor. At certain times of year, if the
sun were in the right position, it would shine directly from the west window all the
way to the east wall. Right now, the corridor is dim. The east wall shows a faded
photograph of a corridor filled with blinding sunlight, hundreds of people gathered
to watch. Below the photograph: *"Twice a year. The sun lines up. They all come to see."*

On a side table: a map of a campus. Five buildings are circled and numbered:
**7, 3, 10, 4, 8** — from west to east.

Below the map, two sequential entry fields:

> *Field 1: What is the name of this phenomenon? (named after an ancient monument)*
> *Field 2: How many buildings does this corridor pass through?*

Both fields must be filled correctly before the door opens.

**Interactive objects**: `[narrow window]`, `[east wall photograph]`, `[campus map]`,
`[circled buildings]`, `[two-field panel]`, `[ask tuna]`, `[door — GREAT DOME]`

**Clue Note**: A note beneath the map: *"Search 'MIT Infinite Corridor solar alignment'
or 'MIThenge.' It's named after Stonehenge. The second answer is on the map right in
front of you — count the circled buildings."*

**Gating Puzzle**:
- Field 1: `MITHENGE` (also accept: `MIT-HENGE`)
- Field 2: `5` (also accept: `FIVE`)

**Why this is solvable**: Field 1: the photograph caption says "twice a year, sun lines
up" and the field says "named after an ancient monument." Searching "MIT solar alignment"
or "MIT Stonehenge" returns MIThenge. Field 2: the map explicitly shows five circled
buildings. The player counts them.

**Tuna**:
> Ask 1: *"Tuna is sitting in the beam of the narrow window. There is no sunlight today.
> She is sitting where it would be, as if imagining it. She seems warm. She is not warm."*
> Ask 2: *"She has moved to the campus map. She is walking across the five circled
> buildings, stepping from one to the next. 7. 3. 10. 4. 8. She counts with her paws.
> She gets to four and then steps on Building 8. Five."*
> Ask 3: *"Tuna walks to the east wall photograph and looks at it for a long time. She
> looks at you. She looks at the ancient monument on the photograph's caption — there is
> a caption if you look closely. It names what this phenomenon is called. Tuna puts her
> paw on the caption. She does not read. But she is pointing."*

---

### SCENE 15 — The Great Dome Scriptorium

**Theme**: MIT Building 10, the Great Dome, the Pantheon connection, MIT's motto
**This is the hardest puzzle in the Boston branch — multi-step, requiring research and
careful reading.**

**Room Description**:
A circular room with a domed ceiling. The dome has an oculus at its peak — a round window
filled with small glass blocks arranged in a grid. The light they admit is amethyst-tinted
and diffuse. The architecture is unmistakably referencing something classical.

On the curved wall, five lines are carved in careful uppercase letters:

```
MIND LIVES IN THE HANDS OF THOSE WHO BUILD.
AND THE HANDS BELONG TO THOSE WHO THINK.
NEITHER STANDS ALONE AGAINST THE UNIVERSE.
UNDER THIS DOME, BOTH WERE ASKED TO SERVE.
SILENCE IS NOT THE ANSWER HERE.
```

Below the carving, a text field with the prompt:

> *"The first letter of each line above forms a single Latin word.*
> *That word is half of the motto of the institution that built this dome.*
> *Enter the full motto — both halves — in Latin."*

An additional plaque reads:

> *"The dome above you mirrors one built in the early second century in Rome. Its
> oculus: 27 feet in diameter. The dome above you: also 27 feet. This was not an
> accident. The architect was paying tribute — and making a statement about the
> relationship between ancient knowledge and the work of making."*

**Interactive objects**: `[dome — look up]`, `[curved wall carving]`, `[acrostic — read]`,
`[oculus description — examine]`, `[Pantheon plaque]`, `[text field]`, `[ask tuna]`

**Clue Note**: A card on the reading table: *"Step 1: Read the first letter of each
carved line in order → M, A, N, U, S. Step 2: MANUS is Latin for 'Hand.' It is the
second half of a famous motto. Search 'MIT motto Latin' for the full phrase.
It is three words: ___ ET MANUS. Enter all three words."*

**Two-step puzzle**:
- Step 1: Read acrostic → **M-A-N-U-S** → `MANUS`
- Step 2: MANUS is half of MIT's motto → Google *"MIT Latin motto"* → **MENS ET MANUS**

**Answer**: `MENS ET MANUS`
(also accepts: `mens et manus`; entering `MIND AND HAND` prompts *"The Latin, please."*)

**Why this is solvable**: The acrostic is available via careful reading (the first letters
M-A-N-U-S are unambiguous). The clue note explicitly identifies the letters AND tells
the player MANUS means "hand" in Latin AND says it's part of MIT's motto AND provides the
search query. Googling "MIT motto Latin" returns "Mens et Manus" as the top result.

**On correct answer**: The oculus above brightens slightly. The door behind the reading
table unlocks. The plaque beside it reads: *"Mind and Hand. Both required. Neither alone.
You have done the reading. Now: the cities await."*

**Tuna**:
> Ask 1: *"Tuna is lying in the amethyst light from the oculus. The light passes through
> her fur and does something interesting. She looks, for a moment, like a stained glass
> cat. She is unbothered."*
> Ask 2: *"She is examining the carved text on the wall. She walks along it very slowly,
> touching each letter with her whiskers as she goes. She reaches the S in SILENCE and
> stops. She seems satisfied. This is the fifth letter. She has counted to five."*
> Ask 3: *"Tuna looks at the first letter of each line: M. A. N. U. S. She taps each
> with a single claw, precisely. She is spelling something. You will have to determine
> what that something means, and what its other half is. She can only do so much."*

---

### SCENE 16 — The Harbour Room

**Theme**: Hong Kong — Victoria Harbour, the Tian Tan Buddha, Lantau Island, the city
Annie knows. This is the first room that acknowledges the house was built for someone
who lives on the other side of the world.

**Room Description**:
You step through and the air changes. It is warm and dense and it carries the smell of
salt water and fried tofu skin from a dai pai dong that is somehow nearby. The room is
vast — wider than any room in the house so far — and its far wall is not a wall but a
window stretching from floor to ceiling. Through it: a harbour at night.

The skyline is unmistakable if you know it. A cluster of glass towers, each one lit from
within, reflected in black water. Across the harbour: a low peninsula of neon and old
stone. Between them, a small green-and-white ferry crosses in silence.

On a pedestal near the window, a bronze model of a seated Buddha. Serene. Massive even
in miniature. A plaque at the base reads:

> *"On Lantau Island, a bronze Buddha sits at the top of a hill. He has been sitting
> there since 1993. To reach him, a pilgrim must climb a staircase cut into the
> hillside — exactly ___ steps, no more, no fewer.*
>
> *The number of steps is your key to this room.*
> *Enter the number."*

On the opposite wall, a framed watercolor of the harbour at dawn. Below it, in careful
handwriting:

> *"She lives here. On the other side of the window. Thirteen hours ahead, or thirteen
> hours behind, depending on who is counting. The house knows her city. The house was
> built to know her city."*

**Interactive objects**: `[harbour window — examine]`, `[bronze model]`, `[plaque]`,
`[watercolour]`, `[handwriting beneath]`, `[ferry — watch]`, `[ask tuna]`,
`[door — THE TWO CLOCKS]`

**Clue Note**: A laminated card beside the bronze model: *"The Tian Tan Buddha on Lantau
Island, Hong Kong. Also called the Big Buddha. Search: 'Tian Tan Buddha number of steps'
or 'Big Buddha Lantau steps.' The number is well-documented. It is exactly 268."*

**Gating Puzzle**: How many steps lead to the Tian Tan Buddha?

**Answer**: `268`
(Google: *"Tian Tan Buddha number of steps"* → 268 steps, confirmed on Hong Kong Tourism
Board website and Wikipedia)

**Why this is solvable**: The plaque names the Buddha (on Lantau Island), the year (1993),
and asks for the exact step count. The clue note provides the full name ("Tian Tan
Buddha"), the alternate name ("Big Buddha"), and the search query. Googling any
combination returns 268 as the consistent answer across all sources.

**On correct answer**: The ferry in the window-scene completes its crossing. The harbour
lights intensify briefly. A door materializes on the far wall, labeled THE TWO CLOCKS.

**Tuna**:
> Ask 1: *"Tuna is sitting on the windowsill, watching the ferry cross the harbour. She
> tracks it with her head, left to right, very slowly. She seems to know this view. She
> has the posture of a cat watching familiar birds from a familiar window."*
> Ask 2: *"She has moved to the bronze model. She is smaller than the model Buddha. She
> sits beside it and assumes approximately the same posture — back straight, face
> forward, paws tucked. She is meditating. She is not helpful."*
> Ask 3: *"Tuna walks to the plaque. She puts one paw on the word 'steps.' She looks at
> you. She then begins to walk in a very small circle — around and around the pedestal,
> one step at a time, as if she is climbing. She completes several laps. She does not
> reach 268. But she is demonstrating the concept of stairs with great commitment."*

**Developer note**: The harbour window description should feel like a love letter to a city
the player recognizes. The dai pai dong smell, the green-and-white Star Ferry, the
skyline — these are for Annie. A player from Hong Kong will know this view. Everyone
else will Google it.

---

### SCENE 17 — The Two Clocks

**Theme**: The 13-hour time difference between Boston and Hong Kong. The distance. What
it means to love someone who wakes when you sleep. This is the emotional capstone of
Wing 4 and the room that earns the Inner Sanctum.

**This is a two-step gate requiring time zone knowledge and a calculator.**

**Room Description**:
A small room. Square. Quiet. Two clocks on the wall, side by side. Both are running.
Both show the same moment in time — but the numbers disagree.

The left clock is labeled **BOSTON** in brass letters. It shows a time well past midnight.
The right clock is labeled **HONG KONG**. It shows early afternoon.

Below the clocks, carved into the wall:

> *"One city sleeps while the other works. One sends a message at midnight;*
> *the other reads it over lunch. They have learned to love in the margins*
> *of each other's days.*
>
> *FIELD 1: When the Boston clock strikes midnight on a January night —*
> *what hour does the Hong Kong clock show? Enter the hour in 24-hour format.*
>
> *FIELD 2: The two cities are separated by 12,827 kilometers of the Earth's surface.*
> *The Earth's full circumference is 40,075 kilometers. What percentage of the way*
> *around the world are these two cities from each other?*
> *Round to the nearest whole number. Enter just the number, not the % symbol."*

**Interactive objects**: `[Boston clock — examine]`, `[Hong Kong clock — examine]`,
`[carved inscription]`, `[field 1]`, `[field 2]`, `[globe — examine]`, `[ask tuna]`

**Globe** (interactive object): A small globe on a side table. Boston and Hong Kong are
marked with pins, connected by a red thread that follows the curve of the earth. A label
reads: *"12,827 km. Or approximately 7,972 miles. Or one third of the planet. Or exactly
the distance between I miss you and I'm here."*

**Clue Note**: A card pinned to the wall between the two clocks: *"Time zones: Boston
uses Eastern Standard Time in winter (UTC minus 5). Hong Kong uses HKT (UTC plus 8).
The difference: 5 + 8 = 13 hours. Hong Kong is 13 hours AHEAD. So midnight in Boston =
1:00 PM in Hong Kong = 13:00 in 24-hour format. Field 1 answer: 13.
For Field 2: divide 12,827 by 40,075 and multiply by 100. Use a calculator.
12,827 ÷ 40,075 = 0.32013... × 100 = 32.013...%. Rounded: 32."*

**Gating Puzzle**:
- Field 1: `13`
  (EST = UTC−5. HKT = UTC+8. Midnight EST = 13:00 HKT.)
- Field 2: `32`
  (12,827 ÷ 40,075 = 0.32013... = ~32%)

**Why this is solvable**: Field 1 can be solved by anyone who Googles "time difference
Boston Hong Kong" (returns "13 hours ahead"). The clue note explains the UTC calculation
for anyone who wants to verify. Field 2 provides both numbers in the room text and
requires only division. The clue note walks through the calculation step by step. A
calculator or Google query ("12827 / 40075 * 100") gives the answer instantly.

**On correct answer**: Both clocks chime once, simultaneously — the same note, thirteen
hours apart, meeting in the same room. The wall between them slides open. Behind it:
a short passage leading back to the Two Cities hub.

> *"Thirty-two percent of the world. That is how far apart they are.*
> *It is also how much of the world exists between them — cities, oceans, the
> International Date Line, the particular curve of the planet that means when
> one of them watches the sun rise, the other is watching it set.*
>
> *But the clocks both chimed. They found the same note. That was the point."*

**Tuna**:
> Ask 1: *"Tuna is sitting exactly between the two clocks, equidistant from Boston and
> Hong Kong. She is looking at neither. She is looking at you. She seems to be making
> a point about how the distance between two things is also a place you can sit."*
> Ask 2: *"She has moved to the globe. She is pressing her nose against the red thread
> connecting the two cities. She follows it with her eyes. She seems to be measuring
> something. She is not capable of division. But she is interested in the thread."*
> Ask 3: *"Tuna looks at the Boston clock. She counts on her paw: one, two, three...
> She loses interest at four. She looks at the Hong Kong clock. She appears to be
> thinking about the number thirteen, but she arrives at this not by arithmetic but by
> a kind of feline intuition that has nothing to do with UTC offsets and everything to
> do with the fact that she has been in this house for a very long time and she has
> always known what time it is."*

---

## WING 5: THE INNER SANCTUM

*Five scenes. One fragment. The synthesis. The answer. The house's question.*

---

### SCENE 18 — The Hall of Contradictions

**Theme**: Barrett's constructionism meeting Camus' absurdism — can constructed emotions
matter in an indifferent universe?

**Room Description**:
A hexagonal room. Six doors: one open (the entry), five sealed. The ceiling is too high
to see. Each sealed door has a statement above it:

1. *"Emotions are real."*
2. *"Emotions are constructed."*
3. *"The universe is indifferent to emotion."*
4. *"Revolt is the only authentic response."*
5. *"One must imagine ___ happy."* ← slightly ajar, Tuna in front

A stone column at the center:

> *"If emotions are not fixed — if they are assembled by the mind from the raw material
> of memory and sensation — and if the universe does not care what we feel — do
> emotions matter?*
>
> *There is no correct answer here.*
> *Only a direction.*
> *Walk toward what you believe."*

**Interactive objects**: `[door 1 — examine]`, `[door 2 — examine]`, `[door 3 — examine]`,
`[door 4 — examine]`, `[door 5 — examine]`, `[stone column]`, `[ceiling — examine]`,
`[ask tuna]`

**No puzzle gate here.** The player simply walks through door 5. But Tuna is blocking it.

**Door examine texts:**
- Door 1: *"Barrett. It is real. The pain is real. The feeling is real. Only the category
  was constructed."*
- Door 2: *"Barrett. The brain assembles. From noise, sensation, memory — it predicts an
  emotion. The prediction is real. Its name is not fixed."*
- Door 3: *"Camus. The universe is not hostile. It is something worse: silent. It does not
  answer. It never will."*
- Door 4: *"Camus. Not hope. Not resignation. Revolt: the refusal to be beaten by what
  is certain."*
- Door 5: *"The inscription is unfinished. One must imagine ___ happy. The blank requires
  a name. Tuna is in the way."*

**The Tuna Door** (activates when player clicks door 5):

> *"Tuna sits directly in front of the Sisyphus door. She will not move. The inscription
> reads: 'One must imagine ___ happy.' The blank is a small carved recess, sized for a
> name. Tuna stares at you with complete composure. One must imagine ___ happy."*

Typing `TUNA`:

> *"The inscription fills in. The carving now reads: 'One must imagine Tuna happy.'*
>
> *Tuna considers this.*
>
> *She stands. She moves to the side. The door opens.*
>
> *You are not entirely sure if she is happy. She does not say. But she moved."*

**Why this is solvable**: The room presents five philosophical doors and makes door 5
the only one that's interactive. The blank "One must imagine ___ happy" is a direct
Camus reference. Tuna is physically sitting in front of it. The player has encountered
Tuna in every room. The answer TUNA fills both the philosophical blank and the physical
obstacle. The Tier 3 hint makes it explicit.

**Tuna** (for the hall generally, before door 5):
> Ask 1: *"Tuna is examining door 4. The one about revolt. She seems to agree with it,
> in the way that a cat always seems to agree with revolt as a general philosophy of
> existence."*
> Ask 2: *"She has moved to door 5. She is sitting in front of it now. She has read the
> inscription. She finds it incomplete. She will wait."*
> Ask 3: *"Tuna looks at the blank in door 5. She looks at you. She very slowly blinks.
> A slow blink means trust in cats. She is telling you to fill in her name. She is
> asking to be imagined happy."*

---

### SCENE 19 — The Sisyphus Room ★ FRAGMENT E

**Theme**: Camus' conclusion — revolt, Sisyphus, the word HAPPY, counting
**Fragment yielded**: `5` → **E**

**Room Description**:
A circular room. A domed ceiling. Painted on the dome: a figure pushing a boulder upward
along a slope. The boulder is near the top. Below the figure, in large letters:

> *"One must imagine Sisyphus happy."*

At the center: a pedestal. On the velvet tray, five glass letters scrambled:
**Y, H, P, P, A**

A plaque:

> *"Rearrange these letters. When the word is correct, count its letters.*
> *That number is your last fragment."*

A floor note:

> *"This is the strangest sentence Camus wrote. He imagined a man condemned to
> eternal, pointless repetition — rolling a boulder forever, watching it fall —
> and said: we should imagine him happy. Not resigned. Not hopeful. Happy. Because
> the struggle itself toward the heights is enough to fill a human heart. He gave
> Sisyphus one word. Count it."*

**Interactive objects**: `[dome — look up]`, `[pedestal]`, `[glass letters — drag]`,
`[plaque]`, `[floor note]`, `[ask tuna]`

**Fragment Puzzle**: Unscramble Y, H, P, P, A → **HAPPY** → count → **5**

**Answer**: `5`

**Why this is solvable**: The dome inscription says "One must imagine Sisyphus happy."
The glass letters are Y, H, P, P, A — the only five-letter word containing two P's from
those letters is HAPPY. The plaque says "count its letters." H-A-P-P-Y = 5. The floor
note repeats the word HAPPY three times. The answer is overdetermined by design — this
is the final fragment room and should feel like relief, not frustration.

**On correct answer**: The velvet tray sinks. A fragment card rises:
> *The fifth and last fragment. The word Camus gave to Sisyphus: HAPPY. Five letters.*
> *Number: 5*

**Fragment collected**: `5` → E

**Tuna (post-door moment)**:
> Ask 1: *"Tuna walks onto the pedestal and looks at the glass letters. She selects Y.
> She bats it off the tray. This is a wrong move. She seems satisfied."*
> Ask 2: *"She puts the Y back, somehow. She looks at the five letters. She arranges them
> with her nose: Y, H, P, P, A. This is still not the word. She is almost there."*
> Ask 3: *"Tuna slides the letters methodically: H first. Then A. Then P. Then P. Then Y.
> She looks at what she's done. She looks at you. She looks at the dome inscription:
> ONE MUST IMAGINE SISYPHUS HAPPY. She has spelled the last word. Count them."*

---

### SCENE 20 — The Synthesis Antechamber

**Room Description**:
A bare, clean room. One table. On the table: five small boxes, each with a glowing slot.
Above each box, a poetic clue label in gold on dark wood. The labels are displayed in a
**session-randomized order** — they are never in the same sequence twice.

The five labels (displayed in random order):
```
"The only serious question — how many answers does the philosopher accept?"
"Count every letter the artist was born with — all three names."
"From A, count forward one full suit of cards. Where does the alphabet land?"
"How many windows open in a room designed by the sponge architect?"
"The word that set Sisyphus free — how many letters does it hold?"
```

Below all five boxes:

> *"Each box belongs to one clue. Enter the number that answers each clue.*
> *When all five are correctly placed, this room will convert them.*
> *In this house, A is 1. B is 2. And so on through Z at 26.*
> *The five numbers, converted, spell a name. That name is your answer."*

A folded note on the table:
> *"The house has been here a long time. It has been waiting to ask you something
> it already knows the answer to. It hopes you found the journey worth the asking.*
> *Across two cities and thirteen hours, it built itself for someone.*
> *Now it would like to say her name."*

**Synthesis**: When all five boxes are correctly filled:

```
1  →  A
14 →  N
14 →  N
9  →  I
5  →  E
     ───────
     A N N I E
```

The conversion animation runs on screen, letter by letter. A staircase descends.

**Interactive objects**: `[five labeled input boxes]`, `[folded note]`, `[locked staircase]`

**Tuna** (here but only appears after synthesis completes):
> *"Tuna walks from somewhere behind you and sits at the top of the newly revealed
> staircase. She looks down it. She looks at you. She has been patient. She is still
> patient. One of you knows what comes next."*

---

### SCENE 21 — The Final Door

**Room Description**:
At the bottom of the staircase: one door. Stone. Old. No ornamentation. In the center,
an engraved question:

> *"Who lives here?"*

Five empty input fields.

Nothing else. No Tuna. No notes. No clues. The work is done.

**Answer**: `ANNIE`

---

### SCENE 22 — The Epilogue

**Room Description**:
A small warm room. No specific light source. At the center: a reading chair, a side table,
a cup of tea that is somehow still warm. On the side table: a book. Spine: *The Myth of
Sisyphus*. It has been read. The spine is cracked. Pages annotated.

On the inside cover, in handwriting:

> *"This was always your house.*
> *You built it by reading the things you read, loving the things you love,
> and asking the questions you ask when no one is watching.*
>
> *The house was built in Boston. It was built for Hong Kong.*
> *It stretches across 12,827 kilometers and thirteen hours and it does not care*
> *about the distance because the distance was never the point.*
>
> *The password was never the point.*
> *The point was every room you walked through to get here.*
>
> *One must imagine Annie happy.*
>
> *She is."*

Tuna is in the reading chair. She has always been here.

Examining Tuna:
> *"Tuna is in the reading chair. She looks at you as if you should have arrived sooner.*
> *She is not wrong.*
> *You sit beside her. She does not move over. She is warm.*
> *You are sure, now, that she is happy. She does not say so.*
> *She doesn't have to."*

---

## SCENE 23 — Tuna's Nook (Secret Room)

**Access**: Type `tuna home` anywhere, in any room. No hint is given. No prompt suggests
this. It is an easter egg.

**Room Description**:
A small room. Entirely Tuna's. A sun spot on the floor even though there are no windows.
Three crumpled paper balls. A shelf with one mug. On the mug: a small painting of a fish.

On the floor, a folded note in Tuna's handwriting (implausibly tidy):

> *"I know what the password is.*
> *I am not going to tell you.*
> *This is not a zero-knowledge proof.*
> *I simply don't want to.*
>
> *Also, I know how far apart the two cities are.*
> *It is not that far. I have slept for longer.*
>
> *— T."*

No puzzle. No fragment. No progression. It is simply here because she lives here.

---

## COMPLETE PUZZLE ANSWER REFERENCE

| Scene | Room | Answer | Method |
|-------|------|--------|--------|
| 0 | Entrance Hall | No gate | — |
| 1 | Crime & Punishment Alcove | `RIGHT` | Close reading / Dostoevsky knowledge |
| 2 | Constructionist Study | `CONSTRUCTED` | Barrett theory keyword |
| 3 ★ | Absurdist Shelf | `ONE` / `1` → Fragment **A** | Camus quote (Google) |
| 4 | Record Room | `GABRIEL` | keshi album (Google) |
| 5 ★ | keshi Memorial | `14` → Fragment **N** | Count letters in Casey Thai Luong |
| 6 | Shoegaze Passage | `DLTZK` | Jane Remover former name (Google) |
| 7 | Census Designated Chamber | `ABSURD` | Acrostic + Camus concept |
| 8 ★ | Drafting Room | `9` → Fragment **I** | Simmons Hall windows (Google) |
| 9 ★ | Cipher Cabinet | `14` → Fragment **N** | Caesar cipher: A + 13 = N = position 14 |
| 10 | Void Terminal | `ZERO KNOWLEDGE PROOF` | Cryptography concept (Google) |
| 11 | Proof Alcove | `7` | Probability: (1/2)^7 < 1% (calculator) |
| 12 | Window Between Wings | `BARRETT` + `CAMUS` | Recall from earlier wings |
| 13 | Smoot Gallery | `CHARLES` | Vigenère decode, key TUNA (online tool) |
| 14 | MIThenge Observatory | `MITHENGE` + `5` | MIT phenomenon (Google) + count |
| 15 | Great Dome Scriptorium | `MENS ET MANUS` | Acrostic MANUS + MIT motto (Google) |
| 16 | Harbour Room | `268` | Tian Tan Buddha steps (Google) |
| 17 | Two Clocks | `13` + `32` | Time zones + calculator |
| 18 | Hall of Contradictions | `TUNA` | Camus quote + cat name |
| 19 ★ | Sisyphus Room | `5` → Fragment **E** | Unscramble HAPPY, count letters |
| 20 | Synthesis Antechamber | All 5 numbers matched | Match fragments to labels |
| 21 | **Final Door** | **`ANNIE`** | Synthesis reveals name |

---

## THE TUNA HINT SYSTEM — FULL SPECIFICATION

### Implementation Rules
1. `[ask tuna]` is a clickable link present in every scene at all times.
2. Three states per room: TIER_1 (first click), TIER_2 (second click), TIER_3 (third click).
3. After TIER_3, any further click returns the ASLEEP response regardless of room.
4. State resets if the player leaves and re-enters the room.
5. The ASLEEP text is identical in every room:
   > *"Tuna has settled into a tight spiral. Her breathing has slowed. She is asleep
   > in the specific way that makes it impossible to justify waking her. She is
   > unavailable for hints. She was barely available before."*

### Hint Philosophy
- **Tier 1**: Completely unhelpful. Tuna is being a cat. Thematically related to the room's
  *aesthetics*, not its puzzle.
- **Tier 2**: Slightly more directed. Tuna interacts with a relevant object but misidentifies
  what matters about it.
- **Tier 3**: As close to a genuine nudge as Tuna will go. She gestures at the right
  *category* of answer. She does not give the answer. She never counts to the correct
  number but often gestures at the correct *number of things*.

All Tier 3 hints for every scene are specified within each scene entry above.

---

## THE CLUE NOTE SYSTEM — FULL SPECIFICATION

### Implementation Rules
Every locked room contains one `[clue note]` object. It is always:
- Named differently per room (loose page, margin note, pinned card, blueprint annotation,
  shelf card, laminated card, etc.)
- Optional to examine — never mandatory
- Positioned such that it feels organic to the room
- Contains searchable terms that narrow the problem without giving the answer
- In harder rooms (Scenes 13, 15, 17), the clue note is more generous — up to and including
  walking through the solution — because the puzzle complexity is already sufficient

### Philosophy
A player who solves without reading the clue note should feel pride.
A player who reads the clue note and still can't solve should feel that the puzzle is
hard but fair.
A player who reads the clue note, follows its instruction, and still cannot solve has
hit a legitimate difficulty ceiling — and that is acceptable.

All clue note texts are specified within each scene entry above.

---

## RANDOMIZATION SYSTEM — FULL SPECIFICATION

### Synthesis Room Slot Randomization
The five labeled clue slots in Scene 20 are displayed in a session-seeded random order.
Specifically:
1. On first load of Scene 20, shuffle the five slot labels using a PRNG seeded with the
   session ID or timestamp.
2. Store the shuffle in localStorage so re-loading Scene 20 shows the same order in the
   same session.
3. The player fills each box by matching their collected fragment number to the correct
   label. Incorrect number-to-label matches show a brief visual rejection (shake animation,
   no error sound).
4. Correct matches lock in and cannot be changed.
5. The conversion animation only runs when all five boxes are correctly filled.

### Why This Works Against Guessing
Even if a player suspects the answer is ANNIE, they cannot derive which number goes in
which slot without having done the work:
- Knowing 1=A doesn't tell you whether the "1 box" has the Camus label or a different one.
- Knowing there are two N's doesn't tell you which N belongs to keshi vs. the cipher.
- The synthesis room's labels are opaque unless you've been in the rooms they reference.

### Fragment Discovery Order Irrelevance
Fragments can be found in any order across all three outer wings. The fragment cards
accumulate in the Notebook panel without indicating their ANNIE position. Position is
only revealed in the synthesis room when labels are matched to numbers.

---

## DIFFICULTY MAP

| Scene | Difficulty | Primary Challenge | Tools Needed |
|-------|------------|------------------|--------------|
| 0 | Tutorial | None | None |
| 1 | Medium | Close reading + Dostoevsky knowledge | Google optional |
| 2 | Medium | Barrett research (one search) | Google |
| 3 | Easy | Camus first line (one search) | Google |
| 4 | Easy | keshi album name (one search) | Google |
| 5 | **Hard** | Full birth name + counting all three parts | Google + counting |
| 6 | Medium | Jane Remover history research | Google |
| 7 | **Hard** | Acrostic reading + Camus synthesis | Careful reading |
| 8 | Easy | Simmons Hall research (one search) | Google |
| 9 | Medium | Caesar cipher steps + alphabet counting | Counting |
| 10 | Medium | ZKP concept (research + recognition) | Google |
| 11 | Medium | Probability calculation | Calculator |
| 12 | Easy | Names from earlier rooms | Memory |
| 13 | **Very Hard** | Cipher decode with discovered key | Online decoder tool |
| 14 | Medium | Two-part: phenomenon name + counting | Google + counting |
| 15 | **Very Hard** | Acrostic + Latin motto research (multi-step) | Google (2 searches) |
| 16 | Medium | Hong Kong landmark research | Google |
| 17 | **Hard** | Time zone calculation + percentage | Google + Calculator |
| 18 | Medium | Camus quote + cat name (emotional) | Narrative attention |
| 19 | Easy | Unscramble HAPPY, count 5 | None |
| 20 | Medium | Match 5 numbers to 5 labels (synthesis) | All fragment knowledge |
| 21 | **Final** | Enter ANNIE | Synthesis completion |

**Estimated time by wing:**
- Wing 1 (Library): 1–2 hours
- Wing 2 (Music Archive): 2–3 hours
- Wing 3 (Logic Annex): 2–4 hours
- Wing 4 (Two Cities): 3–6 hours (hardest wing)
- Wing 5 (Inner Sanctum): 1–2 hours
- **Total: 12–30 hours across 3–7 days**

**Most likely to cause a multi-day stall**: Scenes 13, 15, 17. Scene 13 requires
identifying the cipher type from a description (the word "Vigenère" is withheld from
the room text), recognizing the key is TUNA, and using an online decoder. Scene 15
requires both an acrostic reading and a two-search Latin motto identification. Scene 17
requires a time zone lookup and a calculator-based percentage computation.

---

## THE COMPLEX PUZZLES — SPECIAL NOTES

### The Vigenère Cipher (Scene 13)
This is the game's most technically demanding single puzzle. Three things must happen:
1. Player identifies the cipher type — the room describes "a cipher where each letter is
   shifted forward by a different amount, determined by the letters of a keyword" but never
   uses the word "Vigenère." A player who recognizes this can proceed. A player who
   doesn't can search "cipher where keyword shifts each letter" and find it.
2. Player recognizes "the name of the cat who lives in this house" = TUNA (requires having
   engaged with the cat throughout the game)
3. Player decodes VBNREYF using key TUNA → CHARLES (using an online Vigenère decoder or
   manually following the worked example in the mechanics plaque)

The key being TUNA is intentional at multiple levels. It requires the player to have paid
attention to the running narrative device. It rewards players who read the cat sections.
It makes the cryptographic puzzle emotionally personal.

**Solvability guarantee**: The mechanics plaque provides a worked example that IS the
first step of the real solution (T + V → C). The clue note names the cipher type
explicitly and suggests online tools. Even a player with zero cryptography knowledge can
solve this by: reading the clue note → searching "Vigenère cipher decoder" → entering
VBNREYF with key TUNA → reading CHARLES.

### The Census Designated Acrostic (Scene 7)
The acrostic is hidden in plain sight — the bolded first letters are available if the
player reads the full printed page. Players who read carefully will spot it immediately.
Players who try to Google the answer first will find Camus' concept of the absurd and
return to confirm it. Both paths are valid. The puzzle does not announce itself as an
acrostic — the room simply says "read carefully." The red ink below DOES say "the first
letter of each sentence above spells it" — so the acrostic is eventually signposted.

### The Great Dome Multi-Step (Scene 15)
Requires: reading the acrostic (MANUS), recognizing MANUS as Latin for "hand," knowing
or researching that it is half of MIT's motto, and entering the full three-word motto
MENS ET MANUS. Players unfamiliar with MIT will need two separate searches. Players who
know the motto will still need to do the acrostic step. Both skills are tested.

### The Two Clocks Calculation (Scene 17)
This is the only puzzle in the game requiring both research AND a calculator within a
single room. Field 1 (time zones) can be Googled directly ("time difference Boston Hong
Kong") or calculated from UTC offsets. Field 2 (percentage of circumference) requires
dividing 12,827 by 40,075 — the numbers are provided in the room, so no research is
needed, only arithmetic. The clue note walks through both calculations step by step.

### The ZKP Probability Calculation (Scene 11)
The clue note provides the formula AND works through both the wrong answer (n=6) and the
right answer (n=7). Any player comfortable with exponents can solve it without searching.
Players who search "zero knowledge proof rounds 1%" will find the answer in many explainer
articles.

---

## DEVELOPER IMPLEMENTATION GUIDE

### Required Mechanics
1. **Click-to-navigate**: Bracketed `[links]` change the current scene
2. **Type-to-solve**: Case-insensitive, whitespace-trimmed input validation in every gate
3. **Drag-to-arrange**: Used only in Scene 19 (unscramble HAPPY)
4. **Two-field sequential gates**: Scenes 14 and 17 require both fields correct
5. **Tuna hint state machine**: 3 tiers per room, state tracked per scene, resets on re-entry
6. **Fragment Notebook panel**: Right sidebar showing fragment cards as collected
7. **Wing completion tracking**: Boolean flags, all 3 outer wings required for Two Cities,
   all 5 Two Cities scenes required for Inner Sanctum
8. **Wing 4 branching**: Boston (13, 14, 15) and Hong Kong (16, 17) can be done in any order
   within Wing 4; both branches must complete before Wing 5 unlocks
9. **Synthesis slot randomization**: Session-seeded shuffle, locked on first Scene 20 load
10. **Secret room keyword**: `tuna home` typed in any input anywhere triggers Scene 23 overlay
11. **Synthesis gate**: Scene 21 staircase hidden until Scene 20 fully completed

### Answer Validation Expansions
- Scene 1: Accept `RIGHT`
- Scene 2: Accept `CONSTRUCTED` and `CONSTRUCTS`
- Scene 7: Accept `ABSURD` and `THE ABSURD`
- Scene 10: Accept `ZKP`, `ZERO KNOWLEDGE PROOF`, `ZERO-KNOWLEDGE PROOF`, `ZERO KNOWLEDGE PROOFS`
- Scene 13: Accept `CHARLES` and `THE CHARLES` and `CHARLES RIVER`
- Scene 14: Field 1 accepts `MITHENGE` and `MIT-HENGE`. Field 2 accepts `5` and `FIVE`
- Scene 15: Accept `MENS ET MANUS` and `MENS ET MANUS.` (with period) and `mens et manus`
  and `MIND AND HAND` as a secondary response that prompts *"The Latin phrase, please."*
- Scene 16: Accept `268`
- Scene 17: Field 1 accepts `13` and `THIRTEEN`. Field 2 accepts `32` and `THIRTY TWO`
- Fragment rooms: Accept numeric digits OR spelled words (ONE/1, FOURTEEN/14, NINE/9, FIVE/5)

### Notebook Panel
Displays collected fragment cards in discovery order. Each card shows:
- The fragment's poetic source label (e.g., "The philosopher's serious question")
- The number found (e.g., `1`)
- Does NOT show the letter conversion (that's the synthesis room's reveal)
- Marked `[?]` until found

### Visual/Aesthetic Notes
All rooms should use a consistent monospace or serif font for typed game text.
Interactive `[links]` in a distinct color (suggested: muted gold on dark background).
The Synthesis Antechamber conversion animation should run letter by letter, slow enough
to feel weighted: `1→A` pause `14→N` pause `14→N` pause `9→I` pause `5→E` pause `→ANNIE`.
The Hall of Contradictions (Scene 18) and Epilogue (Scene 22) should have slightly warmer
ambient styling than other rooms — these are the game's emotional centers.
The Harbour Room (Scene 16) should have a cooler, more saturated color palette than the
rest of the house — the visual shift signals that you have left one city and entered another.
The Two Clocks room (Scene 17) should feel liminal — between warm and cool, between
the two cities' aesthetics.

---

## THEMATIC SPINE

The game moves through five ideas, each wing embodying one:

1. **Library (Wing 1)**: What we carry in us — guilt (Dostoevsky), the absurd (Camus),
   the constructed nature of feeling (Barrett). Everything that follows is built on these.

2. **Music Archive (Wing 2)**: What we are called — by ourselves, by others, by names
   we chose and names we left behind. keshi kept the name someone else gave him. Jane
   Remover made the name she deserved. Identity is a continuous act of making.

3. **Logic Annex (Wing 3)**: What we can prove without revealing — the porous building,
   the shifted cipher, the cave with two passages. Knowledge and secrecy are not opposites.
   Sometimes proving you know something requires keeping it close.

4. **Two Cities Archive (Wing 4)**: Where we are — not one city but two. Boston measures
   bridges in people and aligns corridors with the sun. Hong Kong counts steps to a
   Buddha and watches ferries cross a harbour at night. Thirteen hours apart, thirty-two
   percent of the world between them. The cities are not background. They are the argument
   that love is not diminished by distance.

5. **Inner Sanctum (Wing 5)**: What we choose. Camus chose revolt. Sisyphus got the boulder.
   The house makes you type a cat's name and the cat decides whether this is sufficient.
   The password was never the point. The point was everything before the password.

---

*End of design document v3. All scenes may now be written and implemented.*
