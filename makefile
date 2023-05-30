init-env:
	virtualenv market_server/venv
	source market_server/venv/bin/activate
	pip install -r market_server/requirements.txt

update-db:
	python3 market_server/manage.py makemigrations market
	python3 market_server/manage.py migrate

start-server: update-db
	python3 market_server/manage.py runserver
