ES ?=

all: eslint

zip:
	(cd src && zip -r ../select-option-extension.zip *)

eslint: ./node_modules/.bin/eslint
	./node_modules/.bin/eslint src --format codeframe $(ES)

eslintfix:
	$(MAKE) eslint ES="$(ES) --fix"

./node_modules/.bin/eslint: node_modules

node_modules:
	npm ci
