package routers

import (
	"renshi/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{}, "get:Get;post:Post")
	beego.Router("/disk", &controllers.MainController{}, "post:GetDisk")
}
