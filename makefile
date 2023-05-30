create-env:
	virtualenv market_server/venv
	source market_server/venv/bin/activate
	pip install -r market_server/requirements.txt

init-env:
	source market_server/venv/bin/activate

update-db:
	python market_server/manage.py makemigrations market
	python market_server/manage.py migrate

start-server: update-db
	python market_server/manage.py runserver
