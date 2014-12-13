install:
	npm install -g es6-module-transpiler
	npm install -g es6-module-transpiler-amd-formatter
	npm install

build:
	compile-modules convert -o tmp/i18n.js -f es6-module-transpiler-amd-formatter  *.js
	compile-modules convert -o tmp/ -f es6-module-transpiler-amd-formatter lang/*.js
	cp tmp/lang/*.js tmp
	awk 'FNR==1{print ""}1' tmp/*.js > dist/i18n.amd.js
	rm -Rf tmp/*
