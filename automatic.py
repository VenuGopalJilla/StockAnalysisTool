from datetime import datetime, timedelta
from threading import Timer

x=datetime.today()
y = x.replace(day=x.day, hour=15, minute=30, second=0, microsecond=0) + timedelta(days=0)
delta_t=y-x

secs=delta_t.total_seconds()
print(secs)

def hello_world():
    print("hello world")
    #...

t = Timer(secs, hello_world)
t.start()