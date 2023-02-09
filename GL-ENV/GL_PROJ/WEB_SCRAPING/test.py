import requests
from bs4 import BeautifulSoup
import csv
from itertools import zip_longest

# 2- use requests to fetch the url
# result = requests.get("https://dz.professeurparticulier.com/")
result = requests.get("https://dz.professeurparticulier.com/marech.php?ap=8&cat=0&pp=1&pays=Alg%E9rie&profil=3&go=1")

# 3- save page content/markup
src = result.content

# 4- create soup object to parse content
soup = BeautifulSoup(src, "lxml")

# 5- find the elementc containing info we need : 

user_name = soup.select("div.anntotl1 div:nth-of-type(2)")
announce_title = soup.select("div.anntotl2 a.bleu_sslien h2")
description = soup.select("div.anntotl2 h3")
place = soup.select("div.anntotl3 > div > h3")
tarif = soup.select("div.anntotl3 > p")

# 6- loop over returned lists to extract needed info other lists

user_name_list = []
announce_title_list = []
description_list = []
place_list = []
tarif_list = []

for i in range(len(user_name)):
    user_name_list.append(user_name[i].text)
    announce_title_list.append(announce_title[i].text)
    description_list.append(description[i].text)
    place_list.append(place[i].text)
    tarif_list.append(tarif[i].text)

# print (user_name_list)
# print (announce_title_list)
# print (description_list)
# print (place_list)
# print (tarif_list)

# 7- create csv file and fill it with values
file_list =  [user_name_list, announce_title_list, description_list, place_list, tarif_list]
exported = zip_longest(*file_list)
with open("/Users/kamel/Documents/document.csv", "w") as myfile:
    wr = csv.writer(myfile)
    wr.writerow(["user_name_list", "announce_title_list", "description_list", "place_list", "tarif_list"])
    wr.writerows(exported)