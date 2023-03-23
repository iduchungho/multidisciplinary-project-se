FROM golang:1.20-alpine
RUN apk add --no-cache git
RUN mkdir /app
ADD . /app
WORKDIR /app/src
RUN go build main.go app.go
CMD [ "/app/src/main" ]
