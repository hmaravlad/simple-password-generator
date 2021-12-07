# Password generator report

### Attention! This is training project and using it isn't safe!


Every password is one block. There is list of blocks with weights on the basis of which certain block is chosen. If one block has weight 1 and the other has weight 2, then the probability of choosing the second is twice as high as that of the first. This list is in file "./src/generator/patterns.ts". 

These are existing types of blocks:
- Pattern - is is main block. It combines other blocks and applies transformations to them.
- Top1000000password - returns one of top 1000000 passwords.
- Top100password - returns one of top 100 passwords.
- Noun
- Adjective
- Name
- LastName
- Delimiter
- SpecialSymbol
- RandomString
- RecentYear
- RecentDate

Block "pattern" applies transformations to blocks. These are transformations:
- Same: password -> password
- Repeat: password -> passwordpassword
- Capitalize: password -> Password
- CapitalizeHalf: password -> PaSsWoRd
- Replace: password -> p@$$w0rd

Half of all passwords are from list of top million passwords, 5% are from list of top hundred passwords and 5% are random strings, all other passwords are different patterns like "Adjective_Delimiter_Name_SpecialSymbol".

Examples of passwords generated from patterns: 
unmaskedseagull?, 
hardy-jacqueline2018?,
militaryConduct!,
kaitlynWright$$,
Unacceptableterranceterrance,
$ummer$!03072014.
