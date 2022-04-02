import os
# from sodapy import Socrata
from dotenv import load_dotenv
# load_dotenv()

# URI_PREFIX = "https://"
# domain = "data.sfgov.org"
# identifies = "5xmc-5bjj"

socrata_token = os.environ.get("APP_TOKEN")
print(socrata_token)
