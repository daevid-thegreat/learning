import string
import random


characters = list(string.ascii_lowercase) + list(string.ascii_uppercase) + list(string.digits) + ['@', '#', '$', '%', '&', '?', ]
r = random.randint(12, 16)
p = random.sample(characters, r)
password = "".join(p)

print(password)
