package route

import (
	"github.com/gin-gonic/gin"
	"src/controller"
)

func SenSorRoute(r *gin.Engine) {
	r.GET("/api/sensor/temperature", controller.GetTemperature)
}
