package route

import (
	"github.com/gin-gonic/gin"
	"src/controller"
)

func UserRoute(r *gin.Engine) {
	r.POST("/api/user/new", controller.AddNewUser)
}
