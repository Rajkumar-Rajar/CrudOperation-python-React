# Import flask and datetime module for showing date and time
from flask import Flask, redirect, url_for, request,jsonify
import datetime
from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.json_util import dumps,loads



x = datetime.datetime.now()

client = MongoClient('mongodb://localhost:27017')
db = client.student
collection = db.s_data


# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/dataone',methods = ['POST', 'GET'])
def get_time():
      
	if request.method == "POST":

		body = request.json
		# print('post method is working')

		print(body,"inserted in data")
		a=collection.insert_one(body)
		# a=collection.delete_one({ "_id":"4" })
		return {
		'alertMessage':"successfully uploaded"
		}
	

	if request.method == "GET":
			
			# get=request.json

			# a=collection.find({"_id":"1"})
			a=collection.find()
			stud_json =loads(dumps(a))
			# print(stud_json)
			return({"name":stud_json})
	

	return ({"responce":"website loaded"})
	

	
@app.route('/datadel',methods = ['POST', 'GET','DELETE','PUT'])
def delete_data():
		if request.method == "DELETE":
			body = request.json
			print(body)
			a=collection.delete_one(body)
			return {
		'alertMessage':"`successfully deleted"
		}
		
		if request.method == "PUT":
			body = request.json
			# print(body,"put")
			print(body["name"])
			print(body["password"])
			print(body["_id"])

			number=int(body['_id'])

			# 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 ---------------------new token

			# a=collection.update_one({ "_id":body["_id"] },{"$set" : { "Name": body['name']} } )

			a=collection.update_one({ "_id":body["_id"] },{ "$set": { "Name": body['name'],"password": body['password'],"_id":body["_id"] } })
			return {
			'alertMessage':"successfully updated"
		}
		

@app.route("/sample_add",methods = ["POST","GET","PUT","DELETE"])
def sample_add():

	if request.method == "POST":
		
		body = request.json
		new_collection =client.studen_2.student_data.insert_one(body)


		return{
			"alert_message":"data inserted in database"
		}
	
	if request.method == "GET":
		
		# body = request.json
		# new_collection =client.studen_2.student_data.insert_one(body)

		new_collection=client.studen_2.student_data.find()
		new_data=loads(dumps(new_collection))
		

		# a=json.loads(json_util.dumps(new_data))
		print(new_data,"get data")
		# f=[]
		# for x in new_data:
		# 	for i in x:
		# 		dicda={}



		return{
			"alert_data":new_data
		}



	
# Running app
if __name__ == '__main__':
	app.run(debug=True)
