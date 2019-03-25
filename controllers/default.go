package controllers

import (
	"renshi/cmd"

	"github.com/astaxie/beego"
)

var comand = cmd.Command{}

type MainController struct {
	beego.Controller
}

//返回主页面
func (c *MainController) Get() {
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.tpl"
}

//自动刷新硬件信息
func (c *MainController) Post() {
	info := cmd.Info{}
	info.CpuFree = comand.GetCpu()
	MemList := comand.GetMem()
	info.MemTotal = MemList[0]
	info.MemUsed = MemList[1]
	info.MemFree = MemList[2]
	swapList := comand.GetSwap()
	info.SwapTotal = swapList[0]
	info.SwapUsed = swapList[1]
	info.SwapFree = swapList[2]
	info.Io = comand.GetIO()
	c.Data["json"] = info
	c.ServeJSON()
}

func (c *MainController) GetDisk() {
	c.Data["json"] = comand.GetDisk()
	c.ServeJSON()
}
