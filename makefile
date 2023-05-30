init-env:
	virtualenv venv
	source venv/bin/activate
	pip install -r auto_market/requirements.txt

update-db:
	python auto_market/manage.py makemigrations market
	python auto_market/manage.py migrate

start-server: update-db
	python auto_market/manage.py runserver
