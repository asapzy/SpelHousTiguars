from flask import Flask

import os
from sodapy import Socrata
from dotenv import load_dotenv
from flask import Flask
import pandas as pd
import json
import requests
from http.server import BaseHTTPRequestHandler, HTTPServer
import time

load_dotenv()
token = os.getenv("APP_TOKEN")
# "https://data.sfgov.org/resource/5xmc-5bjj.json"

hostName = "localhost"
serverPort = 8080

domain = "data.sfgov.org"
prefix = "https://"
identifier = "5xmc-5bjj"

client = Socrata(domain, token)
results = client.get(identifier)
df = pd.DataFrame(results)
mapData = dict(df['the_geom'])

# class MyServer(BaseHTTPRequestHandler):
#     def do_POST(self):
#         content_length = int(self.headers['Content-Length'])
#         post_data = self.rfile.read(content_length)
#         self._set_headers()
#         self.wfile.write("<html><body><p>POST!</p><p>%s</p></body></html>"
#                             .encode('utf-8') % post_data)


app = Flask(__name__)

@app.route("/data")
def data():
    # Headers = {"Content-Type":"text/plain"}
    data = json.dumps(mapData)
    print(type(data))
    return data
    # r = requests.post('http://localhost:5000/data', json=mapData)
    # print(r.json())

if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=5000)
    # app.run(debug=True)