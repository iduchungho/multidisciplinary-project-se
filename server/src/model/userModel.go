package model

import (
	"context"
	"errors"
	"go.mongodb.org/mongo-driver/bson"
	"src/database"
)

type User struct {
	Type      string   `json:"type"`
	FirstName string   `json:"first_name"`
	LastName  string   `json:"last_name"`
	UserName  string   `json:"user_name"`
	Password  string   `json:"password"`
	Avatar    string   `json:"avatar"`
	Actions   []Action `json:"actions"`
}

func (u *User) GetType() string {
	return u.Type
}

func (u *User) AddTypeEntity(typ string) error {
	u.Type = typ
	return nil
}

func (u *User) GetEntityFromDB(param string) (interface{}, error) {
	return nil, nil
}

func (u *User) DeleteElement(param string) (interface{}, error) {
	return nil, nil
}

func (u *User) UpdateData(msg string, payload interface{}, param string) (interface{}, error) {
	return nil, nil
}

func (u *User) InsertData(payload interface{}) (interface{}, error) {
	user, ok := payload.(User)
	if !ok {
		return nil, errors.New("InitField: Require a User")
	}

	u.Type = "user"
	u.UserName = user.UserName
	u.FirstName = user.FirstName
	u.LastName = user.LastName
	u.Avatar = user.Avatar
	u.Password = user.Password
	u.Actions = user.Actions

	res, _ := u.FindDocument("username", u.UserName)
	if res != nil {
		return nil, errors.New("username already exist")
	}

	collection := database.GetConnection().Database("SmartHomeDB").Collection("Users")

	insertRes, err := collection.InsertOne(context.TODO(), u)
	if err != nil {
		return nil, err
	}
	return insertRes.InsertedID, nil

}
func (u *User) FindDocument(key string, val string) (interface{}, error) {
	filter := bson.D{{key, val}}

	collection := database.GetConnection().Database("SmartHomeDB").Collection("Users")
	var res User
	err := collection.FindOne(context.TODO(), filter).Decode(&res)

	if err != nil {
		return nil, err
	}
	return res, nil
}
