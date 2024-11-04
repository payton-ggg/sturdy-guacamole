FROM swift:5.8

WORKDIR /app

COPY . .

RUN swift build -c release

EXPOSE 8080

CMD ["swift", "run", "Run"]
