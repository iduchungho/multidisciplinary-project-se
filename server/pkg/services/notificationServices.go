package service

import (
	interfaces "smhome/app/interface"
	repo "smhome/pkg/repository"
	"smhome/platform/database"
)

type NotifyService struct {
	Factory interfaces.IRepoFactory
}

func NewNotifyService(typ string) *NotifyService {
	return &NotifyService{
		Factory: NewFactory(database.GetConnection().Database(repo.DB).Collection(repo.NOTIFY)),
	}
}

func (noty *NotifyService) GetNotifyByUser(id string) {

}
