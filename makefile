init-env:
	virtualenv venv
	source venv/bin/activate
	pip install -r market_server/requirements.txt

update-db:
	python market_server/manage.py makemigrations market
	python market_server/manage.py migrate

start-server: update-db
	python market_server/manage.py runserver
