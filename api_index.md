# Zombie-TransAPI
API for translating zombie to human.

## Translator
### Default Translation Rules
- lower-case "r" at the end of words replaced with "rh".
- an "a" or "A" is replaced with "hra".Edited to be easier. 
- the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
- "e" or "E" is replaced by "rr"
- "i" or "I" is replaced by "rrRr"
- "o" or "O" is replaced by "rrrRr"
- "u" or "U" is replaced by "rrrrRr"
- "r" or "R" is replaced by "RR"

### Custom Translation Rules
- ':)' is replaced with '☠' (skull and cross bones)
- 'Ok', 'OK', and 'ok' are replaced with 'ECHHh'