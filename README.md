# AIHPI
All-Inclusive History of Present Illness (AIHPI) 

### How to use
> git clone https://github.com/iJEEBUS/AIHPI.git

Create a virtual environment

> cd backend

> virtualenv env

> source env/bin/activate


Setup the backend requirements

> pip install -r requirements.txt

Sync the database

> python3 manage.py makemigration

> python3 manage.py migrate

> python3 manage.py runserver [port]

Note: above you can specify a port to run on, defaults to 3000


Setup the front end

> cd frontend/gui

> npm install

> npm start OR yarn start (depends on package manager being used)


Visit the page at 
> http://localhost:3000/


