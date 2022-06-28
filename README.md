# PyCaret-UI


Pre Requisites : Python should be below version 3.8.10


Steps to Run Backend:
1) cd .\pycaret_server\
2) pip install virtualenv (First Time)
3) py -m virtualenv -p="C:\Users\.......\AppData\Local\Programs\Python\Python38\python.Exe" venv (First Time / Only if you have a future version of Python installed.)
4) python -m venv venv (If Python version is older)
5) venv/scripts/activate
6) pip install -r requirements.txt
7) python app.py

  
Use 'pip freeze > requirements.txt' if there are changes in the packages. 


Steps to Run Frontend:
1) cd pycaret
2) npm i
3) npm start

  
APP Deployed on : https://py-caret-ui.vercel.app/

API Deployed on : https://py-caret-api.herokuapp.com/
