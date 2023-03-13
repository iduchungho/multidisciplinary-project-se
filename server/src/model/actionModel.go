package model

type Action struct {
	ActionName string `json:"action_name"`
	Status     string `json:"status"`
	StatusDesc string `json:"status_desc"`
}

type Actions struct {
	Type    string   `json:"type"`
	Payload []Action `json:"payload"`
}

func (a *Actions) Get() (interface{}, error) {
	return nil, nil
}

func (a *Actions) AddTypeEntity(typ string) error {
	a.Type = typ
	return nil
}

func (a *Actions) Delete() (interface{}, error) {
	return nil, nil
}

func (a *Actions) Update() (interface{}, error) {
	return nil, nil
}

func (a *Actions) Insert() (interface{}, error) {
	return nil, nil
}

func (a *Actions) GetType() string {
	return a.Type
}

func (a *Actions) FindDocument() (interface{}, error) {
	return nil, nil
}
