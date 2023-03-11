package model

type Action struct {
	ActionName string `json:"action_name"`
	Status     string `json:"status"`
	StatusDesc string `json:"status_desc"`
}

func (a *Action) Get() {

}

func (a *Action) Delete() {

}

func (a *Action) Update() {

}

func (a *Action) Insert() {

}
