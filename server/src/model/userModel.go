package model

type User struct {
	FirstName string   `json:"first_name"`
	LastName  string   `json:"last_name"`
	UserName  string   `json:"user_name"`
	Password  string   `json:"password"`
	Avatar    string   `json:"avatar"`
	Actions   []Action `json:"actions"`
}

type Users struct {
	Type string `json:"type"`
	Data []User `json:"data"`
}

func (u *Users) GetType() string {
	return u.Type
}

func (u *Users) AddTypeEntity(typ string) error {
	u.Type = typ
	return nil
}

func (u *Users) Get() (interface{}, error) {
	return nil, nil
}

func (u *Users) Delete() (interface{}, error) {
	return nil, nil
}

func (u *Users) Update() (interface{}, error) {
	return nil, nil
}

func (u *Users) Insert() (interface{}, error) {
	return nil, nil
}
func (u *Users) FindDocument() (interface{}, error) {
	return nil, nil
}
