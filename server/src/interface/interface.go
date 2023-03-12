package _interface

type IEntity interface {
	Insert() (interface{}, error)
	Delete() (interface{}, error)
	Update() (interface{}, error)
	Get() (interface{}, error)
}
