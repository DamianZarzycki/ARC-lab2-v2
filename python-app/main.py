from flask import Flask, request, jsonify, make_response, redirect, session 
from google.cloud import firestore

db = firestore.Client()

app = Flask(__name__)
db = firestore.Client()
tvs = db.collection('tvs')


@app.route('/api1/v1/tvs', methods=['GET'])
def getTvs():

    allTvs = []
    tv_id = request.args.get('id')

    if tv_id:
        return jsonify(tvs.document(tv_id).get().to_dict()), 200

    for d in tvs.stream():
        allTvs.append(
            {
                "id": d.id,
                "details": d.to_dict()
            })
    return jsonify(allTvs), 200


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)

