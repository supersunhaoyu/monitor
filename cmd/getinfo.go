package cmd

import (
	"os/exec"
	"regexp"
	"strings"
)

//获取硬盘信息
// func (c *Command) getDiskInfo() {
// 	disk := exec.Command("df", "-h")
// 	buf, _ := disk.Output()

// }

//获取CPU信息
func (c *Command) getCPUInfo() {
	// res := Cmd("./cpu.sh")
	cmds := exec.Command("top", "-bn", "1", "-i", "-c")
	buf, _ := cmds.Output()
	// fmt.Printf("%v\n", string(buf))
	c.CpuInfo = strings.Split(string(buf), "\n")
	// fmt.Println(len(c.Info))

}

//获取内存信息
func (c *Command) getMemInfo() {
	cmd := exec.Command("free", "-m")
	buf, _ := cmd.Output()
	info := string(buf)
	c.MemInfo = strings.Split(info, "\n")
}

//获取硬盘信息
func (c *Command) getDiskInfo() {
	cmd := exec.Command("df", "-h")
	buf, _ := cmd.Output()
	info := string(buf)
	c.DiskInfo = strings.Split(info, "\n")
	//去掉标题
	c.DiskInfo = c.DiskInfo[1:]
	c.DiskInfo = c.DiskInfo[:len(c.DiskInfo)-1]
}

func (c *Command) getIOInfo() {
	cmd := exec.Command("iostat", "-dk")
	buf, _ := cmd.Output()
	info := strings.Split(string(buf), "\n")
	info = info[3:]
	info = info[:len(info)-2]
	// fmt.Println(info, len(info))
	c.IOinfo = info
}

//CPU信息格式化并写入struct中
func (c *Command) GetCpu() string {
	c.getCPUInfo()
	// fmt.Println(len(c.Info))
	info := c.CpuInfo[2]
	CPU := regexp.MustCompile(`(\d+.\d+)`)
	cpuinfo := CPU.FindAllString(info, -1)
	return cpuinfo[3]
}

//MEM信息格式化并写入struct中
func (c *Command) GetMem() []string {
	c.getMemInfo()
	info := c.MemInfo[1]
	MEM := regexp.MustCompile(`(\d+)`)
	mem_info := MEM.FindAllString(info, -1)
	return mem_info
}

//SWAP分区信息格式化并写入struct中
func (c *Command) GetSwap() []string {
	c.getMemInfo()
	info := c.MemInfo[2]
	MEM := regexp.MustCompile(`(\d+)`)
	swap_info := MEM.FindAllString(info, -1)
	return swap_info
}

func (c *Command) GetDisk() []Disk {
	c.getDiskInfo()
	info := Disk{}
	lists := []Disk{}
	for _, i := range c.DiskInfo {
		FileSystem := regexp.MustCompile(`([^\s])+`)
		list := FileSystem.FindAllString(i, -1)
		info.FileSystem = list[0]
		info.DiskSize = list[1]
		info.Used = list[2]
		info.Free = list[3]
		info.IsUsed = list[4]
		info.MountOn = list[5]
		lists = append(lists, info)
	}
	return lists
}

func (c *Command) GetIO() []IO {
	c.getIOInfo()
	info := IO{}
	lists := []IO{}
	for _, i := range c.IOinfo {
		FileSystem := regexp.MustCompile(`([^\s])+`)
		list := FileSystem.FindAllString(i, -1)
		// fmt.Println(list)
		info.Name = list[0]
		info.Time = list[1]
		info.IOReading = list[2]
		info.IOWriting = list[3]
		info.ReadAll = list[4]
		info.WriteAll = list[5]
		lists = append(lists, info)
	}
	return lists
}
