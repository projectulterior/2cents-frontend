.PHONY: run

gen:
	yarn run compile

run:
	NEXT_PUBLIC_API_URL="http://localhost:8080" yarn run dev