from flask import Flask
from github import Github

g = Github("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")
repo = g.get_repo("pycaret/pycaret")
contents = repo.get_contents('/datasets')
files = []
for i in contents:
  fileName = i.path.split('/')[1]
  fileName = fileName.replace(' ','%20')
  raw_url = 'https://raw.githubusercontent.com/hrshah211/Face_And_Mask_Detector/main/DataSet/'+fileName
  files.append(raw_url)

app = Flask(__name__)


@app.route("/members")
def members():
    return {"members": files}


if __name__ == "__main__":
    app.run(debug=True)
