package _interface

type IEntity interface {
	GetType() string
	InsertData(payload interface{}) (interface{}, error)
	DeleteElement(param string) (interface{}, error)
	UpdateData(msg string, payload interface{}, param string) (interface{}, error)
	GetEntityFromDB(param string) (interface{}, error)
	AddTypeEntity(typ string) error
	FindDocument(key string, val string) (interface{}, error)
}
