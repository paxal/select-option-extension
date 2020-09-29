ES ?=

all: eslint static

zip:
	(cd src && zip -r ../select-option-extension.zip *)

static: ./node_modules/.bin/tsc
	./node_modules/.bin/tsc --allowJs --checkJs --noEmit --target ES6 src/*.js src/js/*.js lib/*.ts

eslint: ./node_modules/.bin/eslint
	./node_modules/.bin/eslint src --format codeframe $(ES)

eslintfix:
	$(MAKE) eslint ES="$(ES) --fix"

./node_modules/.bin/tsc ./node_modules/.bin/eslint:
	npm ci
