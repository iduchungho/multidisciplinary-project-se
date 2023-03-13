package model

import (
	"context"
	"encoding/json"
	"errors"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
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
	Type    string   `json:"type"`
	Payload []Sensor `json:"payload"`
}

func (s *Sensors) GetType() string {
	return s.Type
}
func (s *Sensors) AddTypeEntity(typ string) error {
	s.Type = typ
	return nil
}

func (s *Sensors) Get() (interface{}, error) {
	errEnv := godotenv.Load()
	if errEnv != nil {
		return nil, errEnv
	}

	var api string
	switch s.GetType() {
	case "temperature":
		api = os.Getenv("API_TEMP")
	case "humidity":
		api = os.Getenv("API_HUMID")
	default:
		return nil, errors.New("no type in entity")
	}
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
	errSen := json.Unmarshal(body, &sensors.Payload)
	if errSen != nil {
		return nil, errSen
	}

	s.Payload = sensors.Payload
	s.Type = sensors.Payload[0].FeedKey
	return &sensors.Payload, nil
}

func (s *Sensors) Delete() (interface{}, error) {
	return nil, nil
}

func (s *Sensors) Update() (interface{}, error) {
	return nil, nil
}

func (s *Sensors) Insert() (interface{}, error) {
	instanceSensor, _ := s.FindDocument()
	if instanceSensor != nil {
		return nil, nil
	}

	collection := database.GetConnection().Database("SmartHomeDB").Collection("Sensors")

	insertResult, err := collection.InsertOne(context.TODO(), s)
	if err != nil {
		log.Fatal(err)
	}
	return insertResult.InsertedID, nil
}
func (s *Sensors) FindDocument() (interface{}, error) {
	typ := s.GetType()
	filter := bson.D{{"type", typ}}

	var res Sensors
	collection := database.GetConnection().Database("SmartHomeDB").Collection("Sensors")

	err := collection.FindOne(context.TODO(), filter).Decode(&res)
	if err != nil {
		return nil, err
	}
	return res, nil
}
