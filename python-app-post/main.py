from flask import Flask, request, jsonify, make_response, redirect, session 
from google.cloud import firestore
import time
from datetime import datetime

db = firestore.Client()

app = Flask(__name__)
db = firestore.Client()
tvs = db.collection('tvs')


@app.route('/api2/v1/tvs', methods=['POST'])
def postTvs():

    tv_brand = request.args.get('brand')
    tv_contrast = request.args.get('contrast')
    tv_format = request.args.get('format')
   # tv_image = request.args.get('image')
    tv_resolution = request.args.get('resolution')
    tv_type = request.args.get('type')
    timestamp = time.time()
    dt_object = datetime.fromtimestamp(timestamp)

    if (tv_brand == None or tv_contrast == None or tv_format == None
            or tv_resolution == None or tv_type == None ):
        return 'Missing argument', 400


    tvs.add(
        {
            'addTime': dt_object,
            'brand': tv_brand,
            'contrast': tv_contrast,
            'format': tv_format,
         #   'image': tv_image,
            'resolution': tv_resolution,
            'type': tv_type,
            
        })

    return 'success', 200



if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)

