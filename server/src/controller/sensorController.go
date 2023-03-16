package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"src/service"
)

func GetTemperature(c *gin.Context) {
	nSensors, err := service.NewEntityContext("sensors")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "can't create sensors models",
		})
		return
	}
	err = nSensors.AddTypeEntity("temperature")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err,
		})
		return
	}

	res, errSen := nSensors.GetEntityFromDB("")
	if errSen != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": errSen,
		})
		return
	}

	_, errIs := nSensors.InsertData(res)
	if errIs != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": errIs,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": res,
	})
}

func GetHumidity(c *gin.Context) {
	nSensors, err := service.NewEntityContext("sensors")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "can't create sensors models",
		})
		return
	}
	err = nSensors.AddTypeEntity("humidity")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err,
		})
		return
	}

	res, errSen := nSensors.GetEntityFromDB("")
	if errSen != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": errSen,
		})
		return
	}

	_, errIs := nSensors.InsertData(res)
	if errIs != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": errIs,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": res,
	})
	return
}
