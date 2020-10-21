import socket
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
server=socket.gethostbyname(socket.gethostname())
port=5555
s.connect((server,port))

while True:
	msg=input("Type a message: ").encode()
	s.send(msg)
	data=s.recv(30).decode()
	print("Received: ", data)
	if msg=="":
		break

s.close