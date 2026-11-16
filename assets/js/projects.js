const projects = [
  {
    id: "W03", group: "work", title: "排水管道检测机器人",
    page: "cases/drain-inspection.html",
    summary: "对接系缆控制指令，联调底盘行走、升降和巡检拍摄动作。",
    tags: ["系缆控制", "Modbus RTU", "工业相机"],
    status: "已用于正式管检作业",
    role: "负责机器人本体侧的指令执行与实机联调，对接底盘行走、升降机构和云台动作，配合补光与停驻拍摄。",
    context: "在相邻检查井之间巡检。操作员需要远程控制系缆机器人，并把发现的缺陷关联到可回看的视频位置。",
    steps: [
      ["本体动作与限位", "底盘、升降机构和云台通过系缆接收控制指令，配合补光执行沿程巡检与停驻拍摄。升降限位接到驱动器本地输入。"],
      ["上位机采集与索引", "上位机按时间戳关联视频帧、IMU、轮编码器和放缆计米，支持按井段和里程回看视频。"],
      ["系统缺陷筛查", "缺陷筛查功能通过 ONNX Runtime 运行模型，识别裂缝、沉积物和接缝错口，供操作员复核。"]
    ],
    result: "系统用于正式排水管道检测，缺陷筛查功能用现场采集的数据运行过。"
  },
  {
    id: "W01", group: "work", title: "海钓船用顶流机",
    page: "cases/fishing-boat-control.html",
    summary: "船体按上位机指令执行推进和转向，支持稳船驻留、短距移钓与手动接管。",
    tags: ["CAN / RS-485", "推进控制", "转向伺服"],
    status: "近海 3 小时实船测试",
    role: "负责船体侧的推进与转向指令执行，联调 CAN 推进驱动器的转速响应和 RS-485 转向伺服的舵角响应。",
    context: "海钓船需要在风浪中维持钓点驻留，同时让船员能随时调整位置或接管。",
    steps: [
      ["本体推进与转向", "推进驱动器和转向伺服按指令执行转速与位置闭环。转向限位和回程停推由本地硬件联锁处理。"],
      ["上位机调度与异常处理", "上位机通过 ROS2 Action 管理稳船任务，经 ros2_control 下发推进转速与目标舵角并读取反馈。定位失效时下发停推指令并退出稳船模式。"],
      ["实船测试记录", "系统用 rosbag2 记录漂移轨迹、电流和舵角跟随误差，供回看持续偏离、推力接近上限或疑似转向卡滞的片段。"]
    ],
    result: "在有风浪的近海完成 3 小时实船稳船驻留测试。"
  },
  {
    id: "W02", group: "work", title: "拉网捕鱼无人船",
    page: "cases/net-fishing-usv.html",
    summary: "船体接收差速推进指令，执行沿弧线布网、降速和停止动作。",
    tags: ["CAN", "差速推进", "张力联锁"],
    status: "已用于实际捕鱼作业",
    role: "负责无人船本体侧的差速推进，联调左右驱动器对 CAN 转速指令的响应，配合验证降速和停止动作。",
    context: "岸端留住网具一端，无人船牵引另一端按预设弧线布网，抵达接应点后由岸端收网。",
    steps: [
      ["本体差速推进与联锁", "左右推进驱动器通过 CAN 接收差速转速指令。驱动器在本地处理指令超时，独立张力联锁接入驱动使能回路。"],
      ["上位机航段管理", "上位机通过 ROS1 actionlib 管理航段、任务反馈和取消。张力升高时任务节点下发降速指令，岸端失联或船体越界时取消牵引。"],
      ["作业数据复查", "系统关联 rosbag 航迹、推进指令、张力曲线和船尾视频，供复查松绳、负载突升或疑似挂网片段。"]
    ],
    result: "系统已用于实际捕鱼作业。"
  },
  {
    id: "S01", group: "school", title: "ROS1 自主导航无人机",
    page: "cases/ros1-uav.html",
    summary: "连接 ROS1 与飞控，将自主巡航、避障和定点起降从仿真联调推进到实飞。",
    tags: ["ROS1", "MAVROS", "Gazebo"],
    status: "毕业设计 · 实飞验证",
    role: "本科毕业设计，独立开发",
    context: "搭建具备自主定位、规划和飞行任务执行能力的无人机系统。",
    steps: [
      ["搭建飞控与通信", "使用 Pixhawk 4 与 ArduPilot，接入 GNSS 和 IMU，完成飞控校准。通过 MAVROS 传递飞行指令和状态反馈。"],
      ["联调定位与规划", "用 C++ 开发任务控制和传感器处理节点，编写姿态解算与 A* 搜索相关代码。联调 TF，通过 AMCL 定位与 move_base 规划。"],
      ["验证飞行任务", "在 Gazebo 联调控制和导航流程，再开展实飞测试。"]
    ],
    result: "实飞验证自主巡航、避障和定点起降。"
  },
  {
    id: "S02", group: "school", title: "ROS2 AGV 多传感器融合导航",
    page: "cases/agv-navigation.html",
    summary: "用 EKF 联调多传感器导航，在实车上完成 200 米连续运输。",
    tags: ["ROS2 Humble", "STM32", "robot_localization"],
    status: "实车连续运输 200 米",
    role: "校园独立开发",
    context: "在 STM32 移动底盘上接入环境感知和运动反馈，完成运输任务中的定位与路径规划。",
    steps: [
      ["接入底盘和传感器", "搭载激光雷达、IMU 和光电编码器，为上层导航提供环境观测和运动反馈。"],
      ["融合与导航联调", "使用 robot_localization 的扩展卡尔曼滤波器进行多传感器融合，联调建图、自主定位和路径规划。"]
    ],
    result: "在实车测试中完成 200 米连续运输。"
  },
  {
    id: "S03", group: "school", title: "ROS2 智能送药小车",
    page: "cases/medical-delivery-robot.html",
    summary: "从识别病房号到卸药返程，把配送动作编排成一条任务链。",
    tags: ["ROS2 Humble", "OpenCV", "OCR"],
    status: "模拟医院全流程验证",
    role: "校园独立开发",
    context: "在模拟医院走廊中，识别纸面病房号，完成目标病房的药盒配送。",
    steps: [
      ["识别配送目标", "用 OpenCV 处理数字标号图像，通过 OCR 得到病房号。装载完成后启动配送，沿走廊标识寻径并判断到站。"],
      ["串联装卸与返程", "在 ROS2 中组织装载检测、到站提示和返程。到站后推杆推出药盒，检测到卸载后熄灭红色指示灯并返回药房。"]
    ],
    result: "在模拟医院场景验证出发、到站、卸药和返程。"
  },
  {
    id: "S04", group: "school", title: "植保飞行器全覆盖飞播系统",
    page: "cases/coverage-seeding-uav.html",
    summary: "用网格航线覆盖指定播撒区，将模拟播撒动作与飞行位置联动。",
    tags: ["四旋翼", "覆盖航线", "播撒控制"],
    status: "模拟田块联调",
    role: "校园独立开发",
    context: "在模拟田块中规划植保航线，让飞行器覆盖所有待播撒格区，并在飞越其他格区时关闭播撒。",
    steps: [
      ["划分作业区", "将田块划分为 28 个编号格区，区分待播撒区与非播撒区，为指定格区规划覆盖航线。"],
      ["联动飞行与播撒", "将模拟播撒动作关联到航线，在指定格区触发播撒，飞越非播撒区时关闭。"]
    ],
    result: "在 28 个格区中联调覆盖飞行与模拟播撒，按漏播、重复播撒和误撒三种情况检查作业过程。"
  },
  {
    id: "S05", group: "school", title: "空地协同智能消防系统",
    page: "cases/air-ground-firefighting.html",
    summary: "联调无人机巡逻与地面消防车响应，将模拟火源位置交给车辆执行。",
    tags: ["四旋翼", "巡逻规划", "空地协同"],
    status: "模拟火情协同联调",
    role: "校园独立开发",
    context: "搭建无人机与地面消防车协同原型，在测试场地完成模拟火情发现与地面响应。",
    steps: [
      ["规划空中巡逻", "按任务设定的地面覆盖宽度布置巡逻航线，用下视激光指示无人机航迹。"],
      ["将火源位置交给地面车辆", "无人机发现模拟火情后执行初步处置，并将火源位置发送给地面消防车，由车辆驶向目标执行灭火任务。"]
    ],
    result: "验证从空中发现模拟火情到地面消防车接收位置并到场的流程。"
  },
  {
    id: "S06", group: "school", title: "送货无人机",
    page: "cases/delivery-uav.html",
    summary: "串联定点悬停、升降吊舱收放和恢复巡航，完成指定地点交付。",
    tags: ["多旋翼", "升降吊舱", "定点悬停"],
    status: "指定地点送货测试",
    role: "校园独立开发",
    context: "设计多旋翼无人机送货流程，通过可升降吊舱在悬停时下放货物。",
    steps: [
      ["集成升降吊舱", "将吊舱安装在机腹，起飞和巡航时收起。飞抵目标点后降低高度并悬停，再下放吊舱。"],
      ["编排交付与回收", "用扬声器播放交付提示，并通过下视激光标示航迹。交付后收回吊舱，恢复巡航高度。"]
    ],
    result: "联调定点悬停、吊舱下放和回收、恢复巡航等动作，完成指定地点送货测试。"
  },
  {
    id: "S07", group: "school", title: "简易自行瞄准装置",
    page: "cases/mobile-aiming-device.html",
    summary: "把双轴云台装到自动寻迹小车上，在行驶中控制激光指向靶面。",
    tags: ["自动寻迹", "双轴云台", "激光指向"],
    status: "行驶中瞄准测试",
    role: "校园独立开发",
    context: "让小车沿地面标记路线行驶，同时通过云台调整激光指向，使光斑投射到目标靶面。",
    steps: [
      ["集成寻迹底盘与云台", "以自动寻迹小车为移动载体，在双轴云台上安装蓝紫激光模块。"],
      ["联调行驶与瞄准", "编排底盘沿线行驶和云台指向动作，在小车移动过程中观察激光在靶面上的连续照射效果。"]
    ],
    result: "在移动小车上进行靶面连续照射与光斑尺寸测试。"
  },
  {
    id: "S08", group: "school", title: "自动泊车电动车",
    page: "cases/autonomous-parking-car.html",
    summary: "用车载传感器联调倒车和侧方泊车，支持单项与连续执行。",
    tags: ["电动车底盘", "车载传感器", "泊车控制"],
    status: "入库与出库实车测试",
    role: "校园独立开发",
    context: "在测试泊车场地，让电动小车根据车载传感器反馈执行两种入库和出库操作。",
    steps: [
      ["实现两种泊车动作", "根据传感器反馈控制车辆转向与行驶，完成倒车入库、侧方入库和对应的出库动作。"],
      ["组织执行顺序", "编排可单独运行的倒车与侧方泊车流程，并将两种流程串联起来连续执行。"]
    ],
    result: "在测试场地验证单项与连续泊车，覆盖倒车和侧方两种入库与出库。"
  },
  {
    id: "S09", group: "school", title: "坡道行驶电动车",
    page: "cases/slope-driving-car.html",
    summary: "用车载传感器完成平地及坡道循迹，驶入指定停靠区后停车。",
    tags: ["TI 微控制器", "标记线循迹", "运动控制"],
    status: "平地与坡道实车测试",
    role: "校园独立开发",
    context: "以车载传感器、控制器和电池供电模块搭建自主行驶小车，在平地及坡道上沿标记线行驶。",
    steps: [
      ["接入车载传感器", "由 TI 微控制器读取地面标记线的传感器反馈，并据此调整小车行驶方向。"],
      ["完成指定区域停车", "编排行驶和停车逻辑，小车进入指定停靠区后停止。"]
    ],
    result: "在平地和不同坡度设置下验证循迹行驶及指定区域停车。"
  },
  {
    id: "W04", group: "work", title: "给水管道检测机器人",
    page: "cases/water-pipe-inspection.html",
    summary: "本体通过系缆接收推进指令，配合完成巡航、驻留采样和回收。",
    tags: ["系缆控制", "双路推进", "水听器"],
    role: "参与机器人本体侧推进指令与检测流程的对接。",
    context: "面向带压给水管段的漏点排查，方案通过系缆接入推进、压力采集和绕线设备。",
    steps: [
      ["本体推进与检测配合", "双路推进驱动器通过系缆接收控制指令，机器人配合巡航、驻留采样与回收。"],
      ["上位机采集与漏点筛查", "系统记录水听器音频、压力、姿态、放缆量和推进速度，结合声谱图与估计里程辅助筛查疑似泄漏。"]
    ]
  },
  {
    id: "W05", group: "work", title: "风电叶片检测机器人",
    page: "cases/wind-blade-inspection.html",
    summary: "本体按上位机指令行走、调整拍摄视角和补光，配合分段扫描。",
    tags: ["四轮驱动", "多相机", "Modbus RTU"],
    role: "参与设备侧行走与拍摄动作的对接。",
    context: "围绕叶片表面巡检，联动机器人行走、拍摄视角和补光，记录已拍与待拍区间。",
    steps: [
      ["本体行走与拍摄配合", "四轮驱动与云台按指令执行移动和视角调整，配合五路网络相机和七路补光完成分段扫描。"],
      ["系统影像质检与复拍", "系统归档各扫描区间影像，筛查前缘侵蚀和涂层剥落，标出失焦、过曝或反光帧，生成补拍清单。"]
    ]
  },
  {
    id: "W06", group: "work", title: "电动吊篮运行监测",
    page: "cases/suspended-platform-monitoring.html",
    summary: "设备侧配合上位机读取运行数据，告警和制动由本地联锁执行。",
    tags: ["Modbus RTU", "仪表数据采集", "安全继电器"],
    role: "参与设备侧运行数据采集的对接。",
    context: "运行监测需要保留告警前后的仪表数据，为班组核对制动与传感器状态提供记录。",
    steps: [
      ["设备侧采集与联锁", "设备侧提供载重、倾角和制动反馈。本地限位开关、仪表超限触点与独立安全继电器执行告警和制动联动。"],
      ["上位机监测与班报", "上位机通过只读 Modbus RTU 获取运行数据。系统汇总告警和制动记录，生成带事件编号、曲线和手册条目的班报。"]
    ]
  }
];

const projectPhotos = {
  W01: {
    width: 1536, height: 1024,
    alt: "水面上的蓝色双浮筒船，横梁上装有灰色控制箱、天线和黑色推进组件",
    caption: "船体与推进装置参考图"
  },
  W02: {
    width: 720, height: 405,
    alt: "黄色无人船在湖面拖动绿色渔网"
  },
  W03: {
    width: 1018, height: 1020, format: "jpg",
    alt: "轮式检测机器人位于圆形排水管内，系缆从机身延伸到画面前景"
  },
  W04: {
    width: 1440, height: 810,
    alt: "检测场景示意，灰色给水管道内的圆筒探头带有环形补光和系缆",
    caption: "给水管道检测场景示意图"
  },
  W05: {
    width: 714, height: 624,
    alt: "室内地面上的小型轮式检测设备，顶部支架装有相机"
  },
  W06: {
    width: 1080, height: 536,
    alt: "灰色金属框架上固定着带显示窗的监测盒和蓝色标牌"
  },
  S01: {
    width: 900, height: 1200,
    alt: "室内地面上的四旋翼无人机，机架上装有传感器和控制模块",
    caption: "无人机设备参考图"
  },
  S02: {
    width: 700, height: 525,
    alt: "装有激光雷达和麦克纳姆轮的移动小车，底盘线束可见"
  },
  S03: {
    width: 1440, height: 900,
    alt: "两辆送药小车停在室内标线场地，车头补光灯亮着"
  },
  S04: {
    width: 1440, height: 1080,
    alt: "带桨叶防护架的四旋翼样机停在室内测试区域"
  },
  S05: {
    width: 774, height: 587,
    alt: "带防护架的无人机与装有传感器的地面小车并排放置"
  },
  S06: {
    width: 1024, height: 768, format: "jpg",
    alt: "装配人员在工作台上操作带白色防护架的无人机"
  },
  S07: {
    width: 360, height: 340,
    alt: "标线场地中的轮式实验小车，底盘上装有光学组件"
  },
  S08: {
    width: 640, height: 360,
    alt: "小车停在室内划线车位里，车位前有黑色箭头"
  },
  S09: {
    width: 1152, height: 720,
    alt: "木面上的四轮实验小车俯视照，控制板和线束可见"
  }
};

const groups = { work: "在职开发", school: "校园独立项目" };
const defaultPhotoCaption = "设备参考图";
const projectIndex = document.querySelector("#all-projects");
const projectIndexContent = projectIndex.querySelector(".project-index-content");
const projectList = document.querySelector("#project-list");
const projectCount = document.querySelector("#project-count");
const searchInput = document.querySelector("#project-search");
const clearSearch = document.querySelector("#clear-project-search");
const dialog = document.querySelector("#case-dialog");
const closeButton = dialog.querySelector(".close");
const copyButton = dialog.querySelector("#copy-case-link");
const shareStatus = dialog.querySelector("#case-share-status");
const shareInput = dialog.querySelector("#case-share-url");
const filterButtons = document.querySelectorAll("[data-filter]");
let selectedGroup = "all";
let caseTrigger;
let returningFromCase = false;

function caseHash(project) {
  return "#case-" + project.id;
}

function normalizeSearch(text) {
  return text.normalize("NFKC").toLowerCase().replace(/\bros\s+([12])\b/g, "ros$1");
}

const searchableProjects = projects.map(project => ({
  project,
  keywords: normalizeSearch([
    project.id, project.title, project.summary, project.role, project.status,
    project.context, project.result, ...project.tags, ...project.steps.flat()
  ].join(" "))
}));

function projectImage(project) {
  const { width, height, alt, format = "webp" } = projectPhotos[project.id];
  return `<img src="art/project-images/${project.id}.${format}" width="${width}" height="${height}" alt="${alt}" loading="lazy" decoding="async">`;
}

function tagList(project) {
  return `<ul class="tags" aria-label="项目技术栈">${project.tags.map(tag => `<li class="tag">${tag}</li>`).join("")}</ul>`;
}

function projectCard(project) {
  const { caption = defaultPhotoCaption } = projectPhotos[project.id];
  const link = project.page || caseHash(project);
  const popup = project.page ? "" : ' aria-haspopup="dialog"';
  const proof = project.status ? `<span class="card-proof"><i></i>${project.status}</span>` : "";
  return `
    <article class="project-card" data-project="${project.id}">
      <figure class="card-art">
        ${projectImage(project)}
        <figcaption class="card-image-caption">${caption}</figcaption>
      </figure>
      <div class="card-content">
        <h4>${project.title}</h4>
        <p>${project.summary}</p>
        ${tagList(project)}
        <div class="card-bottom">
          ${proof}
          <a class="case-open" href="${link}"${popup} aria-label="查看${project.title}案例">查看案例 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>`;
}

function renderProjects() {
  const terms = normalizeSearch(searchInput.value).match(/\S+/g) || [];
  const matching = searchableProjects
    .filter(({ keywords }) => terms.every(term => keywords.includes(term)))
    .map(({ project }) => project);
  const visible = selectedGroup === "all" ? matching : matching.filter(project => project.group === selectedGroup);
  const visibleGroups = Object.entries(groups).map(([group, title]) => ({
    group, title,
    entries: visible.filter(project => project.group === group)
  })).filter(({ entries }) => entries.length > 0);

  projectList.innerHTML = visibleGroups.map(({ group, title, entries }) => `
    <section class="project-group" aria-labelledby="group-${group}">
      <h3 class="project-group-title" id="group-${group}">${title} <span>${entries.length} 项</span></h3>
      <div class="project-grid">${entries.map(projectCard).join("")}</div>
    </section>`).join("") || `
      <div class="project-empty">
        <h3>没有找到匹配的案例</h3>
        <p>可以换个关键词，或查看全部项目。</p>
        <button type="button" class="button secondary" data-reset-projects>查看全部项目</button>
      </div>`;
  projectCount.textContent = `共 ${visible.length} 个案例`;
  clearSearch.hidden = !searchInput.value;
  for (const button of filterButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.filter === selectedGroup));
  }
}

function openCase(project) {
  shareStatus.textContent = "";
  shareInput.hidden = true;
  const { caption = defaultPhotoCaption } = projectPhotos[project.id];
  const fullCase = project.page ? `<a class="case-open" href="${project.page}">阅读完整案例 <span aria-hidden="true">↗</span></a>` : "";
  const validationFact = project.status ? `<div><dt>验证阶段</dt><dd>${project.status}</dd></div>` : "";
  const validationResult = project.result ? `<h3>验证情况</h3><p class="case-lede">${project.result}</p>` : "";
  const engineering = renderCaseEngineering(project.id, { inDialog: true });
  dialog.querySelector("#case-kicker").textContent = `${project.id} / ${groups[project.group]}`;
  dialog.querySelector("#case-body").innerHTML = `
    <h2 id="case-title">${project.title}</h2>
    <p class="case-lede">${project.context}</p>
    <dl class="case-facts">
      <div><dt>个人职责</dt><dd>${project.role}</dd></div>
      ${validationFact}
    </dl>
    ${fullCase}
    ${validationResult}
    ${tagList(project)}
    ${engineering}
    <figure class="case-picture">
      ${projectImage(project)}
      <figcaption>${caption}</figcaption>
    </figure>`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  closeButton.focus();
}

function syncCaseFromLocation() {
  returningFromCase = false;
  const project = projects.find(entry => caseHash(entry) === window.location.hash);
  if (project) {
    if (!caseTrigger?.isConnected) {
      projectIndex.open = true;
      projectIndex.scrollIntoView({ behavior: "instant" });
      caseTrigger = searchInput;
    }
    openCase(project);
  } else if (dialog.open) {
    dialog.close();
  }
}

function dismissCase() {
  if (history.state?.portfolioCase) {
    if (returningFromCase) return;
    returningFromCase = true;
    history.back();
  } else {
    history.replaceState(history.state, "", "#projects");
    syncCaseFromLocation();
  }
}

function clearProjectSearch() {
  searchInput.value = "";
  renderProjects();
  searchInput.focus();
}

for (const button of filterButtons) {
  const filter = button.dataset.filter;
  button.addEventListener("click", () => {
    if (selectedGroup === filter) return;
    selectedGroup = filter;
    renderProjects();
  });
}

searchInput.addEventListener("input", event => {
  if (!event.isComposing) renderProjects();
});
searchInput.addEventListener("compositionend", renderProjects);
clearSearch.addEventListener("click", clearProjectSearch);
projectList.addEventListener("click", event => {
  if (!event.target.closest("[data-reset-projects]")) return;
  selectedGroup = "all";
  clearProjectSearch();
});

document.addEventListener("click", event => {
  const link = event.target.closest('a[href^="#case-"]');
  if (!link || event.defaultPrevented || event.button !== 0 ||
      event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const project = projects.find(entry => caseHash(entry) === link.hash);
  if (!project) return;
  event.preventDefault();
  caseTrigger = link;
  if (window.location.hash !== link.hash) history.pushState({ portfolioCase: true }, "", link.hash);
  openCase(project);
});

copyButton.addEventListener("click", async () => {
  const caseLocation = window.location.href;
  const link = window.location.protocol === "file:"
    ? document.querySelector('link[rel="canonical"]').href + window.location.hash
    : caseLocation;
  shareStatus.textContent = "";
  shareInput.hidden = true;
  try {
    await navigator.clipboard.writeText(link);
    if (dialog.open && window.location.href === caseLocation) shareStatus.textContent = "链接已复制";
  } catch {
    if (!dialog.open || window.location.href !== caseLocation) return;
    shareInput.value = link;
    shareInput.hidden = false;
    shareInput.focus({ preventScroll: true });
    shareInput.select();
    shareStatus.textContent = "请复制已选中的链接";
  }
});

window.addEventListener("hashchange", syncCaseFromLocation);
closeButton.addEventListener("click", dismissCase);
dialog.addEventListener("cancel", event => {
  event.preventDefault();
  dismissCase();
});
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dismissCase();
});
dialog.addEventListener("close", () => {
  if (caseTrigger?.isConnected) caseTrigger.focus({ preventScroll: true });
  caseTrigger = undefined;
});

renderProjects();
projectIndexContent.hidden = false;
syncCaseFromLocation();
