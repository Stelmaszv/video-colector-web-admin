import json
import os

save_mode_defult={
   "save_mode": False,
   "udpdate_relation":True,
}

def get_josn_file():
    with open('setings.JSON') as f:
        data = json.load(f)
        data_JSON = data
    return data_JSON

def update_setings(setings):
    if os.path.exists('setings.JSON'):
        os.remove('setings.JSON')
    f = open('setings.JSON', "x")
    f.write(json.dumps(setings))
    f.close()

def setings_set_defult():
    update_setings(save_mode_defult)

setings_set_defult()
