
const UNIT_META = [
  { id: "u1", short: "01", label: "Unit 1", title: "Festivals and Celebrations", color: "#e55c44" },
  { id: "u2", short: "02", label: "Unit 2", title: "Morals and Virtues", color: "#25756d" },
  { id: "u3", short: "03", label: "Unit 3", title: "Diverse Cultures", color: "#d4932f" },
  { id: "u4", short: "04", label: "Unit 4", title: "Space Exploration", color: "#3972b7" },
  { id: "u5", short: "05", label: "Unit 5", title: "The Value of Money", color: "#7a5a9e" }
];

const RAW_VOCABULARY = {
  u1: `
lantern|n. 灯笼；提灯|core
carnival|n. 狂欢节；嘉年华|extra
costume|n. （某地或某历史时期的）服装；戏装|core
dress (sb) up|穿上盛装；装扮|core
march|vi. & n. 行进；前进；示威游行|core
congratulation|n. 祝贺；恭喜|core
congratulate|vt. 向（某人）道贺；（因某事）为自己感到自豪|extra
riddle|n. 谜语；神秘事件|core
ceremony|n. 典礼；仪式|extra
samba|n. 桑巴舞；桑巴舞曲|extra
make-up|n. 化妆品；性格；构成方式|extra
after all|毕竟；别忘了|core
range|n. 一系列；范围、界限 vi. 包括；（在一定范围内）变化|core
range from ... to ...|包括从……到……之间|core
origin|n. 起源；起因；出身|core
religion|n. 宗教；宗教信仰|extra
religious|adj. 宗教的；笃信宗教的|extra
figure|n. 人物；数字；身材 vt. 认为；认定|core
charm|n. 魅力；迷人的特征；咒语|extra
joy|n. 高兴；喜悦|core
joyful|adj. 高兴的；快乐的|extra
gratitude|n. 感激之情；感谢|extra
harvest|n. 收获季节；收获；收成 vi. & vt. 收割（庄稼）；捕猎（动物、鱼）|core
agricultural|adj. 农业（劳动 / 生产）|extra
agriculture|n. 农业；农艺|core
crop|n. 庄稼；作物；一季的收成|core
gather|vi. 聚集；集合 vt. 聚集；搜集；收割|core
grateful|adj. 感激的；表示感谢的|core
feature|vt. 以……为特色 n. 特色；特征；特点|core
decorate|vt. 装饰；装潢|core
church|n. （基督教的）教堂；礼拜堂|core
significant|adj. 有重大意义的；显著的|core
fade|vi. & vt. 逐渐消失；（使）褪色； （身体）变得虚弱|extra
fade away|逐渐消失；（身体）变得虚弱|core
typical|adj. 典型的；有代表性的；平常的|core
firecracker|n. 鞭炮；爆竹|extra
evil|adj. 邪恶的；有害的；罪恶的 n. 邪恶；罪恶；恶行|extra
in spite of|不管；尽管|core
commercial|adj. 商业（化）的；以获利为目的的|core
commercialise (NAmE also -ize)|vt. 使商业化；利用……牟利|extra
commercialisation (NAmE also -ization)|n. 商业化|extra
take advantage of|利用；欺骗；占……的便宜|core
medium|n. （pl. media）媒介；手段；方法 adj. 中等的；中号的|core
the media|大众传播媒介|core
reflect|vt. 显示；反映；反射|core
belief|n. 信仰；信心；信任|core
faith|n. 宗教信仰；信任；相信|core
occasion|n. 特别的事情（或仪式、庆典）；（适当的）机会|core
have sth in common|（兴趣、想法等方面）相同；有相同的特征|core
atmosphere|n. 气氛；氛围；（地球的）大气（层）|core
lunar|adj. 阴历的；月球的；月亮的|core
eve|n. 前夕；前一天|core
envelope|n. 信封；塑料封套|core
Christmas carol|圣诞颂歌|core
merry|adj. 愉快的；高兴的|core
Merry Christmas!|圣诞快乐！|core
pumpkin|n. 南瓜|extra
pudding|n. 布丁；（餐末的）甜食|core
mashed potatoes|土豆泥|core
roast|adj. 烤的；焙的 vi. & vt. 烘烤；焙|core
turkey|n. 火鸡；火鸡肉|core
roast turkey|烤火鸡肉|core
pleased|adj. 高兴的；满意的|extra
firework|n. 烟火；烟花；［pl.］烟花表演|extra
frank|adj. 坦率的；直率的|core
to be frank|坦白说；坦率地说|core
go off|爆炸；走火；离开|core
except for|除……之外|core
inner|adj. 内部的；里面的；内心的|core
autonomous|adj. 自治的；有自治权的|core
region|n. 地区；区域；地带|core
represent|vt. 象征；代表；相当于|core
wrestling|n. 摔跤运动|extra
wrestle|vi. & vt. 摔跤；奋力对付|core
wrestler|n. 摔跤运动员|extra
archery|n. 射箭术；射箭运动|extra
set off|出发；动身；启程|core
fancy|adj. 花哨的；精致的；昂贵的 vt. 想要；倾慕；自认为是|core
robe|n. 袍服；礼袍|extra
eagle|n. 雕|core
grace|n. 优美；优雅；高雅|extra
absolutely|adv. 绝对地；完全地|core
moment|n. 片刻；瞬间|core
tent|n. 帐篷|extra
pot|n. 罐；壶；锅|core
brief|adj. 简洁的；简单的；短暂的|core
branch|n. 树枝；分支；支流|core
wedding|n. 婚礼；结婚庆典|core
clap|vt. 鼓掌；拍手；击掌 n. 鼓掌；拍手；掌声|core
respect|n. & vt. 尊敬；尊重|core
horrible|adj. 令人震惊的；恐怖的；极坏的|core
Coming-of-Age Day|成人节|proper
Rio|（全称 Rio de Janeiro）里约热内卢（巴西城市）|proper
Carla|卡拉|proper
Halloween|万圣节前夕|proper
Thanksgiving (Day)|感恩节|proper
La Tomatina|番茄大战|proper
Buñol|布尼奥尔（西班牙小镇）|proper
the Naadam Festival|那达慕”大会|proper
Inner Mongolia Autonomous Region|内蒙古自治区|proper
Mongolian|adj. 蒙古人的；蒙古的；蒙古语的 n. 蒙古语；蒙古人|proper`,
  u2: `
moral|adj. 道德的；道义上的 n. 品行；道德；寓意|core
virtue|n. 高尚的道德；美德；优秀品质|core
dilemma|n. 进退两难的境地；困境 的|extra
moral dilemma|的 moral dilemma 道德困境|core
faint|vi. 昏倒；晕厥 adj. 不清楚的；微弱的|extra
illustrate|vt. （举例）说明；阐明；给（书或文章）加插图|core
precious|adj. 珍稀的；宝贵的|core
entrust|vt. 委托；交付|extra
carry sb through sth|帮助某人渡过难关|core
marriage|n. 结婚；婚姻|core
majority|n. 大部分；大多数|core
complain|vi. & vt. 抱怨；发牢骚|core
tuition|n. （小组）教学；讲课|extra
fee|n. 专业服务费；报酬|core
tuition fees|学费|core
respond|vt. 回答；回复 vi. 做出反应；回应|core
response|n. 反应；回答；回复|core
union|n. 协会；联合会；工会|extra
scholarship|n. 奖学金|core
hire|vt. 聘任；雇用；租用 n. 租借；租用|core
physician|n. 医师；（尤指）内科医生|core
resident physician|住院医师|core
colleague|n. 同事；同僚|extra
reject|vt. 拒绝接受；不录用|core
rejection|n. 拒绝接受；否决|extra
appoint|vt. 任命；委派|extra
clinic|n. 诊所；门诊部|core
faraway|adj. 遥远的|extra
elect|vt. 选举；推选|extra
election|n. 选举；推选；当选|core
decade|n. 十年；十年期|core
elsewhere|adv. 在别处；去别处|core
tend|vt. 照顾；照料 vi. 倾向；趋于|core
tend to do sth|易于做某事；往往会发生某事|core
publish|vt. 发表（作品）；出版|core
staff|n. 员工；全体职员|core
retire|vi. & vt. 退休；退职；退出|core
saving|n. 节省物；节省；节约； ［pl.］ 储蓄金；存款|core
kindergarten|n. 学前班；幼儿园|core
principle|n. 道德原则；法则；原则|core
passive|adj. 被动的；顺从的|core
scared|adj. 害怕的；对……感到惊慌或恐惧的|extra
scare|vt. 惊吓；使害怕 vi. 受惊吓|core
sharp|adj.（增长、下跌等）急剧的；锋利的； 明显的|core
insurance|n. 保险；保险业|core
energetic|adj. 精力充沛的；充满活力的|core
replace|vt. 接替；取代；更换|core
accident|n. 事故；车祸；失事|core
operation|n. 手术；企业；经营|core
whisper|vi. & vt. 悄声说；耳语；低语 n. 耳语（声）；低语（声）；传言；谣传|core
midnight|n. 子夜；午夜|core
import|n. 进口；进口商品 vt. 进口；输入；引进|core
export|n. 出口；出口商品 vt. 出口；输出；传播|core
pole|n.（行星的）极；地极|core
lap|n. （坐着时的）大腿部；（跑道等的）一圈|core
bite|vt. & vi. (bit, bitten) 咬；叮；蜇 n. 咬；（咬下的）一口；咬伤|core
lip|n. 嘴唇|extra
assist|vt. 帮助；援助|extra
first aid|急救|core
pass away|去世|core
chairman|n. 主席；主持人；董事长|core
memory|n. 记忆力；回忆|core
in memory of|作为对……的纪念|core
chain|n. 一连串（人或事）；链子；链条|core
café|n. 咖啡馆；小餐馆|core
waitress|n. （餐馆的）女服务员；女侍者|extra
pregnant|adj. 怀孕的；妊娠的|extra
disguise|vt. 装扮；假扮；掩盖 n. 伪装；化装用具|extra
maple|n. 枫树；槭树|extra
cart|n. 手推车；运货马车|extra
spill|vt. & vi.（spilt spilled） （使）洒出；（使）溢出|extra
trip over|被……绊倒|core
limp|vi. 跛行；一瘸一拐地走|extra
tear|n. 眼泪；泪水|core
in tears|流着泪；含着泪|core
despair|n. 绝望 vi. 绝望；感到无望|extra
in despair|处于绝望中|core
harm|n. & vt. 伤害；损害|core
might|n. 力量；威力|extra
a great deal (of)|大量|core
fable|n. 寓言；寓言故事|extra
court|n. （网球等的）球场；法院；法庭|core
flexible|adj. 灵活的；可变通的|core
income|n. 收入；收益|core
per|prep. 每；每一|core
therefore|adv. 因此；所以|core
tension|n. 紧张关系；紧张；焦虑|core
Peking Union Medical College (PUMC)|北京协和医学院|proper
the Wenhai Scholarship|文海”奖学金|proper
the OB-GYN department|（全称 Department of Obstetrics and Gynecology）妇产科|proper
the People’s Republic of China|中华人民共和国|proper
the National People’s Congress|全国人民代表大会|proper
the North/South Pole|南极|proper
Henry Norman Bethune|亨利·诺曼·白求恩|proper`,
  u3: `
diverse|adj. 不同的；多种多样的|core
diversity|n. 差异（性）；不同（点）；多样性|extra
fortune|n. 机会；运气|extra
fortune cookie|幸运曲奇|core
gumbo|n. 秋葵汤（用秋葵荚做的浓鸡汤或海鲜汤）|extra
nachos|n.［pl.］墨西哥玉米片|extra
chip|n. （英）炸土豆条；（美）炸薯片；芯片；碎片|extra
cheese|n. 干酪；奶酪|core
spicy|adj. 加有香料的；辛辣的|extra
ethnic|adj. 具有民族特色的；异国风味的；民族的；种族的|extra
admit|vi. & vt. 承认 vt. 准许进入（或加入）|core
definitely|adv. 肯定；确实|core
occur|vi. 发生；出现|core
downtown|adv. 在市中心；往市中心|core
mission|n. 传教（区）；重要任务；使命|core
district|n. 地区；区域|core
graffiti|n.［pl.］涂鸦；胡写乱画|extra
comic|n. 连环画杂志；漫画杂志；喜剧演员 adj. 滑稽的；使人发笑的|core
afterwards (NAmE usually afterward)|adv. 以后；后来|core
head to|（朝……）前进；（向……）去|core
historical|adj.（有关）历史的|extra
seek|vt. & vi. (sought , sought) 寻找；寻求；争取；（向人）请求|core
seek one’s fortune|寻找成功致富之路；闯世界|core
earn|vt. & vi. 挣得；赚得；赢得；博得|core
earn a living|谋生|core
immigrant|n.（外来）移民；外侨|extra
select|vt. 选择；挑选；选拔|core
china|n. 瓷；瓷器|core
jazz|n. 爵士乐|core
bar|n. 酒吧；小吃店；小馆子|core
diagram|n. 简图；图解；图表；示意图|core
journal|n. 日志；日记；报纸；刊物|core
bring about|导致；引起|core
claim|vt. & n. 夺取（生命）；宣称；断言|core
series|n. 一系列；连续；接连|core
series of|一系列或一连串（事件）|core
apart from|除了……外（还）；此外|core
aside from|除了……外（还）；此外|extra
minority|n. 少数民族；少数派；少数人|core
escape|vi. & vt. 逃走；逃脱；避开 n. 逃跑；逃脱；解脱|core
Atlantic|adj. 大西洋的|core
financial|adj. 财政的；财务的；金融的|core
poetry|n. 诗集；诗歌；诗作|core
jeans|n. 牛仔裤|core
boot|n. 靴子|core
mushroom|n. 蘑菇；蕈|core
poisonous|adj. 引起中毒的；有毒的；分泌毒素的|extra
poison|n. 毒物；毒药；毒素 vt. 毒死；毒害|core
fold|vt. 包；裹；折叠 vt. & vi.（可）折小；（可）叠平|core
super|adv. 特别；格外 adj. 顶好的；超级的|core
collection|n. 作品集；收集物；收藏品|core
accessory|n. 配饰；附件；配件|extra
souvenir|n. 纪念物；纪念品|extra
percentage|n. 百分率；百分比|core
climate|n. 气候|core
mild|adj. 温和的；和善的；轻微的|core
settle|vt. & vi. 定居；结束（争论）；解决（纠纷）|core
construction|n. 建筑；建造；建造物；（句子、短语等的）结构|core
material|n. 材料；布料；素材 adj. 物质的；实际的|core
to name but a few|仅举几例|core
tai chi|太极拳|extra
clothing|界 clothing n. 衣服；服装|extra
herbal|adj. 药草的；香草的|extra
suit|vt. 适合；满足……需要；相配；合身 n. 西服；套装|core
(at) first hand|第一手；亲自|core
item|n. 项目；一件商品（或物品）；一条（新闻）|core
contain|vt. 包含；含有；容纳|core
neat|adj. 极好的；整洁的；整齐的|core
San Francisco|圣弗朗西斯科（旧金山）（美国城市）|proper
Napa Valley|纳帕谷（美国）|proper
the Golden Gate Bridge|金门桥|proper
the Mission District|教会区（旧金山）|proper
Mexico|墨西哥（北美洲国家）|proper
California|加利福尼亚（美国州名）|proper
Cantonese|adj. 广东的；粤语的 n. 粤语；广东人|proper
the Richmond District|里士满区（旧金山）|proper
Huangguoshu Waterfall|黄果树瀑布|proper
Journey to the West|西游记》|proper
Tin How Temple|天后古庙|proper
Bank of Canton|广东银行|proper
Portsmouth Square|花园角广场（旧金山）|proper
Robert Louis Stevenson|罗伯特·路易斯·斯蒂文森（英国作家）|proper`,
  u4: `
astronaut|n. 宇航员；太空人|core
procedure|n. 程序；步骤；手续|core
mental|adj. 精神的；思想的|core
cm|abbr. (centimetre or centimeter) 厘米|extra
intelligent|adj. 有智慧的；聪明的；有智力的|core
rocket|n. 火箭；火箭弹|core
gravity|n. 重力；引力|core
frontier|n. 边境；国界；边远地区|core
vehicle|n. 交通工具；车辆|core
determined|adj. 有决心的；意志坚定的|extra
determine|vt. 查明；确定；决定|core
satellite|n. 人造卫星；卫星|core
launch|vt. & n. 发射；发起；上市|core
orbit|n. （环绕地球、太阳等运行的）轨道；势力范围 vt. & vi. 沿轨道运行；环绕……运行|core
giant|adj. 巨大的；伟大的 n. 巨人；巨兽；伟人|extra
leap|n. 跳跃；剧增；剧变 vi. & vt. (leapt/leaped, leapt/leaped) 跳过；跃过|extra
mankind|n. 人类|core
agency|n. （政府的）专门机构；服务机构；代理处|core
transmit|vt. & vi. 传输；发送|extra
data|n.［pl.］资料；数据|core
on board|在宇宙飞船上；在船上；在飞机上|core
spacecraft|n. 航天器；宇宙飞船|extra
disappointment|n. 失望；沮丧|core
disappointed|adj. 失望的；沮丧的|core
desire|n. 渴望；欲望 vt. 渴望；期望|core
universe|n. 宇宙；天地万物|core
carry on|继续做，坚持干|core
independently|adv. 独立地；自立地|extra
independent|adj. 独立的；自立的|core
spacewalk|n. 太空行走；太空行走的时间|extra
jade|n. 玉；翡翠；玉器|extra
module|n. 舱；组件；模块|extra
signal|vt. & vi. 标志着；标明；发信号 n. 信号；标志|core
in the hope of doing sth|抱着……的希望|core
so as to (do sth)|为了；以便|core
recycle|vt. 回收利用；再利用|core
muscle|n. 肌肉；实力；影响力|core
lack|n. 缺乏；短缺 vt. 没有；缺乏|core
float|vi. 浮动；漂流；漂浮 vt. 使浮动；使漂流|extra
otherwise|adv. 否则；要不然|core
beyond|prep. 在更远处；超出|core
solar|adj. 太阳的；太阳能的|core
solar system|太阳系；类太阳系|core
current|adj. 当前的；现在的 n. 水流；电流；思潮|core
figure out|弄懂；弄清楚；弄明白|core
sufficient|adj. 足够的；充足的|core
soap|n. 肥皂|extra
towel|n. 毛巾；抹布|core
telescope|n. 望远镜|core
microwave (also microwave oven)|n. （also microwave oven）微波炉|extra
tissue|n. 纸巾；（人、动植物细胞的） 组织|core
facility|n. 设施；设备|core
keen|adj. 热衷的；渴望的|extra
globe|n. 地球；世界；地球仪|core
argue|vt. & vi. 论证；争辩；争论|core
argument|n. 争论；争吵；论点|extra
fatal|adj. 致命的；灾难性的|extra
shallow|adj. 肤浅的；浅的|core
result in|导致；造成|core
pattern|n. 模式；图案；模范|core
analysis|n. (pl. analyses ) （对事物的）分析；分析结果|extra
as a result|所以；结果（是）|core
high-end|adj. 高端的|extra
monitor|n. 监视器；监测仪 vt. 监视；监测；监控|core
regularly|adv. 经常；定期地|extra
regular|adj. 定期的；经常的；正常的|core
foam|n. 泡沫橡胶；泡沫|extra
pillow|n. 枕头|extra
smartphone|n. 智能手机|extra
resource|n. 资源；财力；物力|core
limited|adj. 有限的|core
provide for sb|提供生活所需|core
closing|adj. 结尾的；结束的 n. 停业；关闭；倒闭|extra
in closing|最后|core
mystery|n. 神秘事物；谜|extra
run out|用完；耗尽|core
attach|vt. 系；绑；贴|core
oxygen|n. 氧；氧气|core
Sputnik 1|旅伴一号”（苏联发射的人类第一颗人造卫星）|proper
the USSR|abbr. the Union of Soviet Socialist Republics 苏联|proper
Yuri Gagarin|尤里·加加林（苏联宇航员）|proper
Neil Armstrong|尼尔·阿姆斯特朗（美国宇航员）|proper
NASA|abbr. National Aeronautics and Spac Administration ( 美国 ) 国家航空与航天局|proper
Voyager 1|旅行者一号”|proper
Soyuz 11|联盟 11 号”|proper
Challenger|挑战者”号航天飞机|proper
the International Space Station|国际空间站|proper
Jade Rabbit|玉兔”月球车|proper
Mars|火星|proper
Jupiter|木星|proper`,
  u5: `
basis|n. 基础；根据；基点|core
on the basis of|在某事的基础上；根据某事|core
loan|n. 贷款；借款|core
take out a loan|取得贷款|core
plastic|n. 塑料 adj. 塑料制的；塑料的|core
apologise (NAmE also apologize)|vi. 道歉；谢罪|core
ignore|vt. 忽视；对……不予理会|core
in return|作为回报；作为回应|core
judge|vt. & vi. 评价；评判；判断 n. 法官；审判员；裁判员|core
scene|n.（戏剧或歌剧的）场；现场；场面|core
narrator|n.（书、戏剧或电影中的）叙述者；讲述者；（电视 节目中的）幕后解说员|extra
narration|n. 叙述；讲述；解说|extra
bet|n. 打赌；赌注 （bet, bet）vi. & vt. 下赌注；用……打赌 vt. 敢说|core
make a bet|打个赌|core
servant|n. 仆人；用人|core
as a matter of fact|事实上；其实；说真的|core
by accident|偶然地；意外地|core
sail|vi. & vt.（船）航行；（人）乘船航行|core
spot|vt. 看见；注意到；发现 n. 地点；处所；斑点；污迹|core
consulate|n. 领事馆|extra
dare|vi. & modal v. 胆敢；敢于|core
sort|n. 种类；类别|core
mining|n. 采矿；采矿业|extra
patience|n. 耐心；忍耐力；毅力|core
to be honest|说实话；坦率地说|core
ought to|应该；应当|core
be about to do sth|即将或正要（做某事）|core
indicate|vt. & vi. 表明；显示 vt. 象征；暗示|core
beneath|adv. & prep. 在（或往）……下面；在……的表面之下|core
postpone|vt. 延迟；延期；延缓|core
odd|adj. 奇怪的；怪异的；反常的|core
obligation|n. 义务；职责；责任|extra
intention|n. 打算；计划；意图；目的|core
nowhere|adv. 无处；哪里都不|core
in case|以防；以防万一|core
extent|n. 程度；限度；大小；范围|core
to ... extent|到……程度；在……程度上|core
opera|n. 歌剧|core
musical|n. 音乐剧 adj. 音乐的|extra
dinosaur|n. 恐龙|core
hug|vt. & vi. 拥抱；抱紧|core
pursue|vt. 追求；致力于|core
duty|n. 责任；义务；职责；值班|core
on duty|值班；值勤|core
hesitate|vi. 犹豫；迟疑；顾虑|core
sequence|vt. 按顺序排列 n. 顺序；一系列|extra
eventually|adv. 最后；终于|core
tailor|n.（男装）裁缝 vt. 专门制作；定做|core
clerk|n. 职员；文书；店员|core
manner|n. 举止；行为方式；方法；［pl.］ 礼貌；礼仪|core
in a ... manner|以一种……的方式；带着一副……的样子|core
downstairs|adv. 顺楼梯而下；在楼下；往楼下|core
stair|n. 楼梯；梯级|core
aside|adv. 到旁边；在旁边；留；存|core
frown|n. & vi. 皱眉|extra
in that case|既然那样；假使那样的话|core
option|n. 可选择的事物；选择；选择权|core
broad|adj. 宽阔的；广阔的；广泛的|core
indeed|adv. 其实；实际上；当然；确实|core
normal|adj. 典型的；正常的；一般的；精神正常的 n. 常态；通常标准；一般水平|core
willing|adj. 愿意；乐意|extra
be willing to do sth|愿意或乐意做某事|core
element|n. 要素；基本部分|core
plot|n. 故事情节；布局；阴谋|core
ambassador|n. 大使；使节；代表|extra
upper-class|adj. 上流社会的；上等阶层的|extra
upper|adj. 上面的；上层的；靠上部的|core
the upper class|上流社会；上等阶层|core
maintain|vt. 维持；保持；维修；保养|core
permission|n. 准许；许可；批准；许可证|extra
permit|vt. & vi. 允许；准许；使有可能|core
saying|n. 谚语；格言；警句|core
external|adj. 外部的；外面的；外来的|core
Roderick|罗德里克|proper
Oliver|奥利弗|proper
Henry Adams|亨利·亚当斯|proper
The Phantom of the Opera|歌剧魅影》（音乐剧）|proper
Reid|里德|proper
Todd|托德|proper
Portia Langham|波希亚·兰厄姆|proper`
};

const VOCABULARY = Object.entries(RAW_VOCABULARY).flatMap(([unit, raw]) =>
  raw.trim().split("\n").filter(Boolean).map((line, index) => {
    const [word, meaning, type = "core"] = line.split("|");
    return { id: `${unit}-${index + 1}`, unit, word: word.trim(), meaning: meaning.trim(), type: type.trim() };
  })
);

