create-network:
	docker network create unleash

build:
	docker-compose build

up: build
	docker-compose up