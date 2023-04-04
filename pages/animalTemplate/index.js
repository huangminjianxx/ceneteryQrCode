import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.animalTemplate}>
        <div className={styles.header}>
            <img src='https://5f6d8a1c22f35.t74.qifeiye.com/qfy-content/uploads/2020/09/7fe9558725cd0e220dfff28554afd73a-90.webp' />
        </div>
        <div className={styles.information}>
            <img src='https://5f6d8a1c22f35.t74.qifeiye.com/qfy-content/uploads/2020/09/e2c1104214e98be3df036aefed504bb9-90.webp' />
            <div className={styles.text}>
              <div className={styles.line}></div>
              <span className={styles.name}>Cookie</span>
              <span className={styles.time}>2022-2090</span>
              <span className={styles.introduction}>cookie的眼睛是蓝色的,像两颗闪闪发光的蓝宝石,圆溜溜的。耳朵似小白兔一样竖着,也像积木中的一对三角形。</span>
            </div>
            
        </div>
        <div className={styles.imgShow}>
          <img src='https://5f6d8a1c22f35.t74.qifeiye.com/qfy-content/uploads/2020/09/04b5c96c632e8f3d44bd611216b07078-1920x920-90.webp' />
          <img src='https://5f6d8a1c22f35.t74.qifeiye.com/qfy-content/uploads/2020/09/4fc2787133afa6136f5e9a03d585d1d9-1920x920-90.webp' />
          <img src='https://5f6d8a1c22f35.t74.qifeiye.com/qfy-content/uploads/2020/09/fe51fc2c1007002fdb2680de7b817964-1920x920-90.webp' />
          <img src='https://5f6d8a1c22f35.t74.qifeiye.com/qfy-content/uploads/2020/09/43c1cd96ca98989a8bdea11cb0964fea-1920x920-90.webp' />
        </div>
    </div>
  )
}