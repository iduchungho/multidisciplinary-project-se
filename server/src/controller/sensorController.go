package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"src/service"
)

func GetTemperature(c *gin.Context) {
	nSensors, errS := service.NewEntityContext("sensors")
	if errS != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "can't create sensors models",
		})
		return
	}
	sen, errSen := nSensors.Get()
	if errSen != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": errSen,
		})
		return
	}
	_, errIs := nSensors.Insert()
	if errIs != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": errIs,
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"data": sen,
	})
}
