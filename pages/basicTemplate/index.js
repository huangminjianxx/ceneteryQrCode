import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.basicTemplate}>
        <div className={styles.header}>
            <span className={styles.title}>陆志富老师的精彩人生</span>
            <span className={styles.visitTimes}>已有 62576 人次浏览了此相册</span>
            <span className={styles.age}>1932.01.09-2022.08.06</span>
            <span className={styles.local}>重庆</span>
            <span className={styles.infor}>他是重庆摄影界的元老级人物，他的精彩人生本身就是一个励志传奇。
            他从四川泸定的大山里来到重庆，从事摄影组织和教学工作60多年，川渝地区很多摄影家都要叫他一声“陆老师”；
            他是重庆市摄影家协会、中国艺术摄影学会重庆分会（“重庆艺术摄影家协会”前身）、重庆市老年摄影家协会的创始人
            之一；他是动手能力极强的发明家实干家，自己做全套家俱，动手装电视机，他是重庆“手工冲洗彩色胶片照片第一人”
            ，在全国较早研发彩色照片手工冲洗恒温设备，他第一个把俄罗斯地平线摇头机、基辅88等摄影器材引入重庆；他勇于
            拥抱新技术，率先尝试探索数码摄影，从事数码摄影和手机摄影教学一直到90岁高龄，在家美团喊餐，出门滴滴打的
            .....</span>
        </div>
        <div className={styles.imgShow}>
            <img src='https://img0.baidu.com/it/u=1164705922,1631259085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889' />
            <img src="https://img0.baidu.com/it/u=1164705922,1631259085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889" />
            <img src="https://img0.baidu.com/it/u=1164705922,1631259085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"/>
            <img src="https://img0.baidu.com/it/u=1164705922,1631259085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"/>
            <img src="https://img0.baidu.com/it/u=1164705922,1631259085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"/>
            <img src="https://img0.baidu.com/it/u=1164705922,1631259085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"/>
            <img src="https://img0.baidu.com/it/u=1164705922,1631259085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"/>
            <img src="https://img0.baidu.com/it/u=1164705922,1631259085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"/>
            <img src="https://img0.baidu.com/it/u=1164705922,1631259085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"/>
            <img src="https://img0.baidu.com/it/u=1164705922,1631259085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"/>
        </div>
    </div>
  )
}
