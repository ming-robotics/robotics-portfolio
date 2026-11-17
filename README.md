# 丁彬｜机器人软件开发作品集

> 机器人软件开发・ROS1 / ROS2・设备控制与实机联调

在职期间，我参与了管道巡检与无人船项目，负责本体侧指令执行与实机联调。

在校期间，我独立开发了 ROS1 自主导航无人机、ROS2 AGV 融合导航和 ROS2 智能送药小车。

[在线作品集](https://ming-robotics.github.io/robotics-portfolio/) · [网页简历](resume.html) · [GitHub](https://github.com/ming-robotics)

首页展示 3 个代表项目和完整的 15 项项目库。可按在职或校园项目筛选，也可按项目名称或技术关键词搜索。15 个项目均提供独立案例页；原有的 `#case-…` 形式链接仍可在首页打开详情弹窗并复制案例链接。案例详情包含整体架构、通信关系、软件模块、硬件接口及关键技术。网页简历支持打印或保存为 PDF。

## 项目一览

### 在职开发



| 项目                                         | 项目内容 / 验证情况                | 图片                                  |
| ------------------------------------------ | -------------------------- | ----------------------------------- |
| [排水管道检测机器人](cases/drain-inspection.html)   | 机器人本体动作控制、系缆指令执行，已用于正式管检作业 | [参考照片](art/project-images/W03.jpg)  |
| [海钓船用顶流机](cases/fishing-boat-control.html) | 推进与转向控制，完成近海 3 小时实船测试      | [参考照片](art/project-images/W01.webp) |
| [拉网捕鱼无人船](cases/net-fishing-usv.html)                  | 差速推进控制与作业联锁，已用于实际捕鱼作业      | [参考照片](art/project-images/W02.webp) |
| [给水管道检测机器人](cases/water-pipe-inspection.html)         | 双路推进与检测采样配合                | [参考照片](art/project-images/W04.webp) |
| [风电叶片检测机器人](cases/wind-blade-inspection.html)         | 四轮驱动、多相机扫描与补光配合            | [参考照片](art/project-images/W05.webp) |
| [电动吊篮运行监测](cases/suspended-platform-monitoring.html)   | 运行数据采集、告警与安全联锁配合           | [参考照片](art/project-images/W06.webp) |

### 校园项目



| 项目                                             | 项目内容 / 验证情况                    | 图片                                  |
| ---------------------------------------------- | ------------------------------ | ----------------------------------- |
| [ROS1 自主导航无人机](cases/ros1-uav.html)            | ROS1、MAVROS、Gazebo 导航联调，完成实飞验证 | [参考照片](art/project-images/S01.webp) |
| [ROS2 AGV 多传感器融合导航](cases/agv-navigation.html) | ROS2、EKF 融合定位，实车连续运输 200 米     | [参考照片](art/project-images/S02.webp) |
| [ROS2 智能送药小车](cases/medical-delivery-robot.html)         | OpenCV、OCR 与 ROS2 任务流程         | [参考照片](art/project-images/S03.webp) |
| [植保飞行器全覆盖飞播系统](cases/coverage-seeding-uav.html)     | 覆盖航线与模拟播撒，28 个格区联调             | [参考照片](art/project-images/S04.webp) |
| [空地协同智能消防系统](cases/air-ground-firefighting.html)     | 无人机巡逻与地面消防车协同                  | [参考照片](art/project-images/S05.webp) |
| [送货无人机](cases/delivery-uav.html)                         | 定点悬停、升降吊舱与指定地点交付               | [参考照片](art/project-images/S06.jpg)  |
| [简易自行瞄准装置](cases/mobile-aiming-device.html)           | 自动寻迹底盘与双轴云台联调                  | [参考照片](art/project-images/S07.webp) |
| [自动泊车电动车](cases/autonomous-parking-car.html)           | 倒车入库、侧方入库及出库测试                 | [参考照片](art/project-images/S08.webp) |
| [坡道行驶电动车](cases/slope-driving-car.html)                 | 平地与坡道循迹、指定区域停车                 | [参考照片](art/project-images/S09.webp) |

首页使用车间设备实拍作为主图。[查看首页主图](art/workshop-hero.webp)

## 项目中涉及的技术



* 机器人中间件与仿真使用 ROS1、ROS2 Humble、MAVROS、Gazebo 和 `ros2_control`。

* 编程与视觉涉及 C++、Python、OpenCV、OCR 和 ONNX Runtime。

* 建图与定位涉及激光 SLAM（GMapping、Cartographer）、视觉 SLAM（ORB-SLAM2、RTAB-Map）与多传感器融合建图，以及 `robot_localization` EKF、AMCL 和 TF。

* 规划与控制涉及 A\*、Dijkstra、Hybrid A\* 全局规划和 DWA、TEB、Pure Pursuit 局部控制，使用 `move_base` / Nav2 完成导航系统联调。

* 嵌入式开发涉及 STM32、TI 微控制器、CAN、RS-485 和 Modbus RTU。

* 传感与控制涉及 IMU、GNSS、激光雷达、编码器、工业相机和伺服控制。

* 使用 `rosbag` 和 `rosbag2` 记录数据。

## 教育与竞赛



* 江西师范大学科学技术学院，电子信息工程本科（2022—2026）。

* 获 7 项竞赛奖项，包括全国大学生电子设计竞赛、蓝桥杯全国大学生软件和信息技术大赛，以及全国大学生嵌入式芯片与系统设计竞赛。

## 本地预览

下载并解压仓库后，用浏览器打开根目录的 `index.html`。网站使用原生 HTML、CSS 和 JavaScript，无需安装依赖或运行构建命令。项目库的筛选、搜索和详情弹窗需要浏览器启用 JavaScript。

## 仓库结构



```
robotics-portfolio/

├── index.html                       # 首页与项目库

├── resume.html                      # 网页简历

├── cases/                           # 15 个独立案例页

│   ├── agv-navigation.html

│   ├── air-ground-firefighting.html

│   ├── autonomous-parking-car.html

│   ├── coverage-seeding-uav.html

│   ├── delivery-uav.html

│   ├── drain-inspection.html

│   ├── fishing-boat-control.html

│   ├── medical-delivery-robot.html

│   ├── mobile-aiming-device.html

│   ├── net-fishing-usv.html

│   ├── ros1-uav.html

│   ├── slope-driving-car.html

│   ├── suspended-platform-monitoring.html

│   ├── water-pipe-inspection.html

│   └── wind-blade-inspection.html

├── assets/

│   ├── css/

│   │   ├── styles.css               # 全站样式与首页布局

│   │   ├── case.css                 # 独立案例页样式

│   │   └── resume.css               # 简历屏幕与打印样式

│   └── js/

│       ├── case-engineering.js      # 技术详情数据与渲染

│       ├── projects.js              # 项目库、配图信息及交互

│       └── resume.js                # 简历打印按钮

├── scripts/

│   └── sync-case-engineering.cjs    # 同步独立案例页的技术详情

├── art/

│   ├── mark.svg

│   ├── workshop-hero.webp

│   ├── workshop-hero-768.webp

│   ├── portfolio-social.png         # 链接分享封面

│   └── project-images/              # 15 张配图，按项目编号命名

└── README.md
```

## 内容维护



* 编辑首页的代表项目、技能和个人介绍。[index.html](index.html)

* 编辑网页简历正文。[resume.html](resume.html)

* 更新项目卡片内容与配图信息。配图文件按项目编号存放在 `art/project-images/`。[projects.js](assets/js/projects.js)

* 更新案例架构图、通信图、模块和接口。独立案例的标题与摘要在 `cases/` 对应页面中维护。[case-engineering.js](assets/js/case-engineering.js)

修改技术详情后，在仓库根目录使用 Node.js 运行同步脚本。脚本更新全部 15 个独立案例 HTML 中由 `case-engineering:start` 和 `case-engineering:end` 标记的片段。



```
node scripts/sync-case-engineering.cjs
```

使用 `--check` 可以检查片段是否与数据一致，文件保持原样。



```
node scripts/sync-case-engineering.cjs --check
```

## GitHub Pages 部署

在仓库的 **Settings → Pages** 中选择从 `main` 分支的 `/(root)` 发布。部署后，可检查首页、网页简历、独立案例和 `#case-…` 形式的案例弹窗链接（如 `#case-S03`）。