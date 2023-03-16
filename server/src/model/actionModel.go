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

func (a *Actions) GetEntityFromDB(param string) (interface{}, error) {
	return nil, nil
}

func (a *Actions) AddTypeEntity(typ string) error {
	a.Type = typ
	return nil
}

func (a *Actions) DeleteElement(param string) (interface{}, error) {
	return nil, nil
}

func (a *Actions) UpdateData(msg string, payload interface{}, param string) (interface{}, error) {
	return nil, nil
}

func (a *Actions) InsertData(payload interface{}) (interface{}, error) {
	return nil, nil
}

func (a *Actions) GetType() string {
	return a.Type
}

func (a *Actions) FindDocument(key string, val string) (interface{}, error) {
	return nil, nil
}
