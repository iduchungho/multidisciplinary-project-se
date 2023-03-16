import sys
from Adafruit_IO import MQTTClient
import time
import random

AIO_FEED_ID = ["btnled","btndoor","btnfan"]
AIO_USERNAME = "smartHomeIOT1"
AIO_KEY = "aio_tTiq09eRd7kbStgBoMbAGeQY7nDi"

def connected(client):
    print("Ket noi thanh cong ...")
    for topic in AIO_FEED_ID:
        client.subscribe(topic)

def subscribe(client , userdata , mid , granted_qos):
    print("Subscribe thanh cong ...")

def disconnected(client):
    print("Ngat ket noi ...")
    sys.exit (1)

def message(client , feed_id , payload):
    print("Nhan du lieu: " + payload + ",feed id: " + feed_id)

client = MQTTClient(AIO_USERNAME , AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()


count=10
while True:
    if(count<=0):
        print("Publish data to server Adafruit")
        time.sleep(5)
        print("Publish temperature")
        client.publish("temperature",random.randint(0,100))
        time.sleep(5)
        print("Publish humidity")
        client.publish("humidity",random.randint(0,100))
        time.sleep(5)
        print("Publish light")
        client.publish("light",random.randint(0,500))
        count=10
    count-=1
    time.sleep(1)

