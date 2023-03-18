package route

import (
	"github.com/gin-gonic/gin"
	ctrl "src/controller"
	mdw "src/middleware"
)

func UserRoute(r *gin.Engine) {
	r.POST("/api/user/new", ctrl.AddNewUser)
	r.POST("/api/user/login", ctrl.Login)
	r.GET("/api/user/logout", mdw.RequireUser, ctrl.Logout)
}
