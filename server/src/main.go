/*
main.go file
Author: Ho Duc Hung
Start api: cd /src -> make run or go run main.go app.o
*/
package main

func main() {
	// create application
	app := GetApplication()
	// app run localhost:8080
	app.Run()
}
