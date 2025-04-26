import random

arrival = start = end = 0
service = 30
wait = []

print("●人目：　到着　待ち　開始　終了")

for i in range(100):
    arrival = arrival + random.randint(1, 100)
    if end <= arrival:
        start = arrival
    else:
        start = end
    end = start + service
    wait.append(start - arrival)
    print((i+1), "人目：", arrival, wait[i], start, end)

import matplotlib.pyplot as plt

plt.figure("Register Queue Simulation")
plt.hist(wait, range=(0, 100))
plt.xlabel("wait [sec]")
plt.ylabel("count")
plt.show()








