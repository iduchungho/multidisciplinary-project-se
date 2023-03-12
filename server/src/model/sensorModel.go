package model

import (
	"context"
	"encoding/json"
	"github.com/joho/godotenv"
	"io"
	"log"
	"net/http"
	"os"
	"src/database"
)

type Sensor struct {
	Id           string `json:"id"`
	Value        string `json:"value"`
	FeedID       int    `json:"feed_id"`
	FeedKey      string `json:"feed_key"`
	CreatedAt    string `json:"created_at"`
	CreatedEpoch int    `json:"created_epoch"`
	Expiration   string `json:"expiration"`
}

type Sensors struct {
	Data []Sensor `json:"data"`
}

func (s *Sensors) Get() (interface{}, error) {
	errEnv := godotenv.Load()
	if errEnv != nil {
		return nil, errEnv
	}

	api := os.Getenv("API_TEMP")
	resp, err := http.Get(api)
	if err != nil {
		return nil, err
	}

	//We Read the response body on the line below.
	body, errBody := io.ReadAll(resp.Body)
	if errBody != nil {
		return nil, errBody
	}

	var sensors Sensors
	errSen := json.Unmarshal(body, &sensors.Data)
	if errSen != nil {
		return nil, errSen
	}

	s.Data = sensors.Data
	return &sensors.Data, nil
}

func (s *Sensors) Delete() (interface{}, error) {
	return nil, nil
}

func (s *Sensors) Update() (interface{}, error) {
	return nil, nil
}

func (s *Sensors) Insert() (interface{}, error) {
	collection := database.GetConnection().Database("SmartHomeDB").Collection("Sensors")
	insertResult, err := collection.InsertOne(context.TODO(), s)
	if err != nil {
		log.Fatal(err)
	}
	return insertResult.InsertedID, nil
}
