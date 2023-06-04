update-db:
	python market_server/manage.py makemigrations market
	python market_server/manage.py migrate

start-server: update-db
	python market_server/manage.py runserver

start-web:
	cd market_web_client/ && npm start