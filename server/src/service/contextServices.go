package service

import (
	"errors"
	_interface "src/interface"
)

// Factory method Design Pattern
// param typ string.

func NewEntityContext(typ string) (_interface.IEntity, error) {
	switch typ {
	case "user":
		return newUser(), nil
	case "action":
		return newAction(), nil
	}
	return nil, errors.New("data type not in models")
}
