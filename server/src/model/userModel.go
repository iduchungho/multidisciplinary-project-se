package model

type User struct {
	FirstName string   `json:"first_name"`
	LastName  string   `json:"last_name"`
	UserName  string   `json:"user_name"`
	Password  string   `json:"password"`
	Avatar    string   `json:"avatar"`
	Actions   []Action `json:"actions"`
}

func (u *User) Get() {

}

func (u *User) Delete() {

}

func (u *User) Update() {

}

func (u *User) Insert() {

}
