<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="/static/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="/static/css/bootstrap.min.css">
  <link rel="stylesheet" href="/static/css/circle.css">
  <script src="/static/js/bootstrap.min.js"></script>
  <script src="/static/js/jquey.min.js"></script>
  <script src="/static/js/index/index.js"></script>
  <style>
  ul{
    list-style: none;
    margin: 0;
    paddning:0;
     
  }
  li{
    display: inline-block;
    width: 100px;
    height: 100px;
    float:left;
  }
  </style>
  <title>Document</title>
</head>
<body>
    <!-- <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">计算机硬件信息使用情况</div>
            <div class="panel-body">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>硬件信息</th>
                      <th>使用率%</th>
                      <th>硬件资源大小</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>CPU使用率</th>
                      <td>
                          <div class="progress" style="width: 300px;">
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;" id="cpupro">
                                0%
                              </div>
                            </div>
                          </td>
                          <td>-</td>
                    </tr>
                    <tr>
                      <th>内存使用率</th>
                      <td>
                          <div class="progress" style="width: 300px;">
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;" id="mempro">
                                0%
                              </div>
                            </div>
                      </td>
                      <td id="memsize"></td>
                    </tr>
                    <tr>
                      <th>交换分区使用率</th>
                      <td>
                          <div class="progress" style="width: 300px;">
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;" id="swappro">
                                0%
                              </div>
                            </div>
                      </td>
                      <td id="swapsize"></td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
    </div>
    <div class="col-md-6" style="height:183px;">
        <div class="panel panel-default">
            <div class="panel-heading">硬盘使用信息</div>
            <div class="panel-body" style="overflow:auto; max-height: 200px;">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>文件系统</th>
                      <th>容量</th>
                      <th>已用</th>
                      <th>可用</th>
                      <th>已用%</th>
                      <th>挂载点</th>
                    </tr>
                  </thead>
                  <tbody id="diskinfo">
                    <tr>
                      <td>正在获取...</td>
                      <td>正在获取...</td>
                      <td>正在获取...</td>
                      <td>正在获取...</td>
                      <td>正在获取...</td>
                      <td>正在获取...</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
    </div>
    <div class="col-md-6" style="height:183px; max-height: 200px;">
        <div class="panel panel-default">
            <div class="panel-heading">磁盘IO信息</div>
            <div class="panel-body" style="max-height:150px;overflow: auto;">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>磁盘代号</th>
                      <th>磁盘读取次数/s</th>
                      <th>磁盘读取/s</th>
                      <th>磁盘写入/s</th>
                      <th>总磁盘读取</th>
                      <th>总磁盘写入</th>
                    </tr>
                  </thead>
                  <tbody id="ioinfo">

                  </tbody>
                </table>
            </div>
          </div>
    </div> -->
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">状态</div>
        <div class="panel-body" style="height: 200px;">
            <ul>
                <li class="col-md-offset-1">
                        <div class="circle" id="cpu">
                          <div class="pie_left">
                          <div class="left"></div>
                          </div>
                          <div class="pie_right">
                          <div class="right"></div>
                          </div>
                          <div class="mask"><span>0</span>%<div>CPU</div></div>
                          </div>
                </li>
                <li class="col-md-offset-1">
                        <div class="circle" id="mem">
                          <div class="pie_left">
                          <div class="left"></div>
                          </div>
                          <div class="pie_right">
                          <div class="right"></div>
                          </div>
                          <div class="mask"><span>0</span>%<div>内存</div></div>
                          </div>
          
                </li>
                <li class="col-md-offset-1">
                        <div class="circle" id="index">
                          <div class="pie_left">
                          <div class="left"></div>
                          </div>
                          <div class="pie_right">
                          <div class="right"></div>
                          </div>
                          <div class="mask"><span>0</span>%<div>/</div></div>
                          </div>
                </li>
                <li class="col-md-offset-1">
                        <div class="circle" id="boot">
                          <div class="pie_left">
                          <div class="left"></div>
                          </div>
                          <div class="pie_right">
                          <div class="right"></div>
                          </div>
                          <div class="mask"><span>0</span>%<div>/boot</div></div>
                </li>
                <li class="col-md-offset-1">
                    <div class="circle" id="homedisk">
                      <div class="pie_left">
                      <div class="left"></div>
                      </div>
                      <div class="pie_right">
                      <div class="right"></div>
                      </div>
                      <div class="mask"><span>0</span>%<div>/home</div></div>
            </li>
              </ul>
          

            
           

              
            
            
            
        </div>
      </div>
      
    </div>
</body>
</html>