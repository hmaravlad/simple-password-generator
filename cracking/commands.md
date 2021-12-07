### md5

sudo hashcat data/md5.csv -m 0 -a 0 -p , ../src/common-credentials/10-million-password-list-top-1000000.txt  -o results/md5-dict-top-million
**Recovered 61%**

sudo hashcat data/md5.csv -m 0 -a 1 -p ,  ../src/resources/names.txt ../src/resources/last-names.txt  -o results/md5-dict-top-million
**Recovered 61%**

sudo hashcat data/md5.csv -m 0 -a 1 -p ,  ../src/resources/adjectives.txt ../src/resources/nouns.txt  -o results/md5-dict-top-million
**Recovered 61%**

sudo hashcat data/md5.csv -m 0 -a 6 -p ,  ../src/resources/names.txt ?d?d?d?d  -o results/md5-dict-top-million
**Recovered 61%**

sudo hashcat data/md5.csv -m 0 -a 0 -p , ./dict.txt  -o results/md5-my-dict
**Recovered 62%**