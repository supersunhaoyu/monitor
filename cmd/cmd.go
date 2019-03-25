package cmd

// 格式化后的信息存放struct
type Info struct {
	// 交换分区信息
	SwapUsed  string //交换分区使用情况
	SwapFree  string //剩余交换分区大小
	SwapTotal string //交换分区总大小
	//内存使用信息
	MemUsed  string // 内存使用情况
	MemFree  string // 剩余内存大小
	MemTotal string // 总内存大小
	//CPU空闲信息
	CpuFree string // 剩余CPU使用率
	// io信息
	Io []IO
}

// 格式化前信息存放struct
type Command struct {
	// CPU 信息结果
	CpuInfo []string
	// 内存信息结果
	MemInfo []string
	// 硬盘信息结果
	DiskInfo []string
	IOinfo   []string
}

// 分区信息
type Disk struct {
	DiskSize   string // 分区大小
	FileSystem string // 文件系统
	Used       string // 分区已使用情况
	IsUsed     string // 分区已使用百分比
	Free       string // 分区剩余空间
	MountOn    string // 分区挂载点
}

type IO struct {
	Name     string // 磁盘代号
	Time     string // 磁盘读取次数
	IOReading  string // 磁盘每秒读取大小
	IOWriting string // 磁盘每秒写入大小
	ReadAll  string // 磁盘总读取大小
	WriteAll string // 磁盘总写入大小
}
