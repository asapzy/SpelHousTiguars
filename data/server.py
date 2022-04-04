from flask import Flask

import os
from sodapy import Socrata
from dotenv import load_dotenv
from flask import Flask
import pandas as pd
import json

# Gather token info
load_dotenv()
token = os.getenv("APP_TOKEN")

# App crendentials
domain = "data.sfgov.org"
prefix = "https://"
identifier = "5xmc-5bjj"

# Gathering data
client = Socrata(domain, token)
results = client.get(identifier)
df = pd.DataFrame(results)
mapData = dict(df['the_geom'])

# GeoJSON data
realData = {"type" : "FeatureCollection",
            "features" : [
                {
                    "type": "Feature",
                    "properties": {
                        df.columns[1]: df['district_name'][0],
                        df.columns[2]: df['designation_date'][0]
                    },
                    "geometry": {
                        "type": df['the_geom'][0]["type"],
                        "coordinates": df['the_geom'][0]["coordinates"],
                    },
                },
            ]
}

app = Flask(__name__)

# Creatind data endpoint
@app.route("/data")
def data():
    data = json.dumps(realData)
    return data

if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=5000)