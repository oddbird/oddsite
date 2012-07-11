clean:
	find content -name *~ -delete
	rm -rf output/*

build: clean
	run-rstblog build content/

serve: build
	run-rstblog serve content/

