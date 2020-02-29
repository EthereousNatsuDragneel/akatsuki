def getGraph():
	global explored,distances
	explored=[]
	distances={}
	g={}
	f=open("dijkstraData.txt",'r')
	lines=f.readlines()
	f.close()
	q=2
	for line in lines:
		if(q<201):
			distances[q]=1000000
			q=q+1
		x=""
		line=list(line.strip())
		y=0
		while(line[y]!='\t'):
			x=x+line[y]
			y=y+1
		g[int(x)]=[]
		z=""
		t=[]
		for i in range(y+1,len(line)):
			if(line[i]==','):
				t.append(int(z))
				z=""
			elif(line[i]=='\t'):
				t.append(int(z))
				g[int(x)].append(t)
				z=""
				t=[]
			else:
				z=z+line[i]
		t.append(int(z))
		g[int(x)].append(t)
	return g
	#return {1:[[2,2],[3,4]],2:[[1,2],[3,1],[4,4],[5,5]],3:[[1,4],[2,1],[4,2],[5,3]],4:[[3,2]],5:[[3,3],[4,1]]}

def dijkstra(source):
	global explored,g,distances
	if(len(explored)==0):
		distances[source]=0
	temp=[]
	explored.append(source)
	for i in range(0,len(g[source])):
		temp.append(g[source][i][1])
		new=distances[source]+g[source][i][1]
		if(new<distances[g[source][i][0]]):
			distances[g[source][i][0]]=new
	unsorted=temp
	temp.sort()
	for i in range(0,len(temp)):
		n=unsorted.index(temp[i])
		if g[source][n][0] not in explored:
			dijkstra(g[source][n][0])



g=getGraph()
dijkstra(1)
print(distances[7],distances[37],distances[59],distances[82],distances[99],distances[115],distances[133],distances[165],distances[188],distances[197])
#print(g)