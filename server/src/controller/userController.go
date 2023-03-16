package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"src/model"
	"src/service"
)

func AddNewUser(c *gin.Context) {
	var userMd model.User
	newUser, err := service.NewEntityContext("user")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	if newUser.AddTypeEntity("user") != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	if c.BindJSON(&userMd) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "can't read body request",
		})
		return
	}

	_, errIs := newUser.InsertData(userMd)
	if errIs != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": errIs.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": userMd,
	})
	return
}
