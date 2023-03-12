package model

type User struct {
	FirstName string   `json:"first_name"`
	LastName  string   `json:"last_name"`
	UserName  string   `json:"user_name"`
	Password  string   `json:"password"`
	Avatar    string   `json:"avatar"`
	Actions   []Action `json:"actions"`
}

func (u *User) Get() (interface{}, error) {
	return nil, nil
}

func (u *User) Delete() (interface{}, error) {
	return nil, nil
}

func (u *User) Update() (interface{}, error) {
	return nil, nil
}

func (u *User) Insert() (interface{}, error) {
	return nil, nil
}
