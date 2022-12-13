//input = bass line
//tune is list of chords
//have data of permissible chords & such. like C -> CEG, ACE, FAC. I->any. V->I,vi.
//class chord contains: root, numeral, inversion, four notes (SATB). initialized with bass note.
//class note has pitch and octave. default to natural unless accidental is submitted.
//depth first search
//get permissible chords. check if permitted by prev chord & next bass note (for 6/4 chords). if none permissible, backtrack.
//build first permissible chord. check for parallel fifths and octaves & frustrated leading tones. if none, move forward.
//later, try tracking octave gaps b/t upper 3 voices also
