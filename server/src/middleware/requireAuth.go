package middleware

import "github.com/gin-gonic/gin"

func RequireUser(c *gin.Context) {
	c.Next()
}
