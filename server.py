import socket
from _thread import *
import sys

server=socket.gethostbyname(socket.gethostname())
port=5555
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)

try:
	s.bind((server,port))
except socket.error as e:
	str(e)

s.listen(2)
print("Server up and kicking. Waiting for connections.")

currentUser=0
msgList=["",""]

def threadedUser(conn,user):
	global msgList, currentUser
	while True:
		data=conn.recv(1024).decode()
		msgList[user]=data
		if not data:
			print("Disconnected")
			break
		else:
			if user==1:
				reply=msgList[0]
			else:
				reply=msgList[1]
			conn.send(reply.encode())

while True:
	conn,addr=s.accept()
	print("Connected to ",addr)
	start_new_thread(threadedUser,(conn,currentUser))
	currentUser+=1