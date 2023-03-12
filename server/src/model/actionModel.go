package model

type Action struct {
	ActionName string `json:"action_name"`
	Status     string `json:"status"`
	StatusDesc string `json:"status_desc"`
}

func (a *Action) Get() (interface{}, error) {
	return nil, nil
}

func (a *Action) Delete() (interface{}, error) {
	return nil, nil
}

func (a *Action) Update() (interface{}, error) {
	return nil, nil
}

func (a *Action) Insert() (interface{}, error) {
	return nil, nil
}
