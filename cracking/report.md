# Password cracking report

[Link](https://github.com/OmnixTry/human-like-passwords/tree/main/PasswordGenerator/Generated%20passwords) to passwords!

## Md5 (unsalted) 
- Dictionary attack 1: firstly i chose dictionary with list of top 1000000. It allowed me to recover 466870 passwords from 1000000 
- Mask attack 1: i chose the simplest mask - 8 lowercase letters with increment, so passwords with lengths 1-7 are also checked. With this attack i recovered 131858 passwords from 1000000. Almost all of these passwords were in list of top 1000000 passwords
- Mask attack 2: i chose mask with 6 lowercase letters and 4 numbers (i think its most common password scheme if 10 symbols are required). With this attack i recovered 2300 passwords. Almost all of these passwords were in list of top 1000000 passwords
- Dictionary attack 2: i tried different word combinations but it was too long to try out all combinations so i wrote a script which created dictionary with different combinations, delimiters and word transformations. I had to decrease number of options, because now i have very limited disk size, so ended up with 20GB dictionary. It allowed me to recover 10302 passwords. It's not many but almost all of them weren't from list of top 1000000 passwords

On this stage i checked how passwords which i chose were generated, and i found that it's very hard to break passwords which are not from list of top million passwords. Length of purely random strings is too big (more than 10 symbols). And rules of transformation make "humanlike" passwords difficult to crack, because all symbols can be transformed to special symbol and because symbols which  are transformed are chosen randomly and their number can vary. Though i think a could crack passwords with exactly one transformed symbol if i had more disk space. (but its also if we suppose that i know password generation and transformation rules)

Unsalted Md5 passwords generally are very easy to crack. However, really long passwords with unpredictable patterns are still not easy to break. Most vulnerable passwords are probably passwords from lists of the most popular passwords. Passwords with predictable symbol or word patterns (like 6 letters and 4 numbers, especially if 6 letters is name and 4 numbers are year) are also in big danger. Most attacks that i performed needed less than 1 minute, the lengthiest attack needed took less than 15 minutes (it was mask attack 2).

## Sha256 (salted)
- Dictionary attack 1: firstly i chose dictionary with list of top 1000000. It allowed me to recover 840636 passwords from 1000000. This attack took about an hour.
- Mask attack 1: i chose the simplest mask - 8 lowercase letters with increment, so passwords with lengths 1-7 are also checked. But on password length 5 this attack already needed about 10 hours. I don't know how many passwords i recovered exactly, but only 5 of them weren't in list of top million passwords.

Other attacks were very to lengthy to perform, mainly because of salt, so we can say that salt if very helpful. Passwords from lists of the most popular passwords are still very vulnerable (passwords with predictable word patterns probably vulnerable too)

## Bcrypt
- Dictionary attack 1:  i chose dictionary with list of top 100 passwords. It allowed me to recover 1916 passwords from 20000. This attack took seven hours for me to perform.

Other attacks were very to lengthy to perform. Probably only the most popular passwords are in big danger. Though i heard that special hardware exists which can hash passwords with bcrypt faster, so there are other password-hashing functions which are more secure.

## General recommendations and results
- Password with length 10, with at least one special symbol, one number and one letter is more or less fine, it takes 349766 years to crack all passwords (on my PC) with the smallest charset (eight numbers, 1 letter and one special symbols) hashed with bcrypt (and we can use argon2), but if words and dates for example are used passwords still can be cracked probably. But even if we take 100 last years and 1000 most popular names with 5 letters, and exclamation mark (it's probably the easiest pattern), then it still be 1000 times a thousand times longer than to check top 100 most popular passwords, and it's long
- Restricting users from using very popular passwords is very good idea
- Restricting users from using leaked passwords is probably a good idea (there is special API to check passwords)
- Argon2 is probably the best password-hashing function
- Dictionary attack was the most efficient and easy to use, mask attacks would be useful for other password generators, also hashcat combinator and rule-based attacks can be helpful, but it's not very convenient to use them if there are a lot of possible combinations to try and in this case write own script to generate combined dictionary is easier.
