import styles from './index.module.scss'
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import { useEffect, useRef } from 'react';

export default function AnimalTemplate2() {

  const swiperElRef = useRef(null)

  useEffect(() => {
    register();
  })
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });


  }, []);
  return (
    <div className={styles.animalTemplate2}>
      <div></div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation='true'
        style={{
          height: '100%'
        }}
      >
        <swiper-slide className={styles.slideItem}>
          <div className={styles.slideItemDiv}>
            <img src='https://ccdn.goodq.top/caches/ca7f25a345c62638cfe4fe48163ebb7e/aHR0cDovLzVkMmQyNWU1YmMyMzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy80Nzg4OTRmMTM2MmNjOTBkNWViNTkwY2MxMmJlOWE4Yy05MC53ZWJw.webp' />
            <div className={styles.information}>
              <span className={styles.title}>场景合成</span>
              <span className={styles.infor}>启明星是那么大，那么亮<br />整个广漠的天幕上只有它一个在那里放射着令<br />人注目的光辉<br />活像一盏悬挂在高空的明灯</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide className={styles.slideItem}>
          <div className={styles.slideItemDiv}>
            <img src='https://ccdn.goodq.top/caches/ca7f25a345c62638cfe4fe48163ebb7e/aHR0cDovLzVkMmQyNWU1YmMyMzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy83MDFkMWJjZjUwMGUyNmM2NjMxZTE3ZTNiMWEyMmJiZC05MC53ZWJw.webp' />
            <div className={styles.information}>
              <span className={styles.title}>场景合成</span>
              <span className={styles.infor}>启明星是那么大，那么亮<br />整个广漠的天幕上只有它一个在那里放射着令<br />人注目的光辉<br />活像一盏悬挂在高空的明灯</span>
            </div>
          </div>



        </swiper-slide>
        <swiper-slide className={styles.slideItem}>
          <div className={styles.slideItemDiv}>
            <img src='https://ccdn.goodq.top/caches/ca7f25a345c62638cfe4fe48163ebb7e/aHR0cDovLzVkMmQyNWU1YmMyMzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9hMTA1ZTRkZThhNDQzNWE4MDE1MDRhMDJkY2M2M2I2Ni05MC53ZWJw.webp' />
            <div className={styles.information}>
              <span className={styles.title}>场景合成</span>
              <span className={styles.infor}>启明星是那么大，那么亮<br />整个广漠的天幕上只有它一个在那里放射着令<br />人注目的光辉<br />活像一盏悬挂在高空的明灯</span>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide className={styles.slideItem}>
          <div className={styles.slideItemDiv}>
            <img src='https://ccdn.goodq.top/caches/ca7f25a345c62638cfe4fe48163ebb7e/aHR0cDovLzVkMmQyNWU1YmMyMzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9hMDA3YWNlZGE5ODJjNThhOGFiYmY1MTI2M2Y2MmJmYy05MC53ZWJw.webp' />
            <div className={styles.information}>
              <span className={styles.title}>场景合成</span>
              <span className={styles.infor}>启明星是那么大，那么亮<br />整个广漠的天幕上只有它一个在那里放射着令<br />人注目的光辉<br />活像一盏悬挂在高空的明灯</span>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide className={styles.slideItem}>
          <div className={styles.slideItemDiv}>
            <img src='https://ccdn.goodq.top/caches/ca7f25a345c62638cfe4fe48163ebb7e/aHR0cDovLzVkMmQyNWU1YmMyMzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy82MzU5MWI2NWEwZDNlYTViMjcyYTI3ODc4OWIyM2IxMy05MC53ZWJw.webp' />
            <div className={styles.information}>
              <span className={styles.title}>场景合成</span>
              <span className={styles.infor}>启明星是那么大，那么亮<br />整个广漠的天幕上只有它一个在那里放射着令<br />人注目的光辉<br />活像一盏悬挂在高空的明灯</span>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide className={styles.slideItem}>
          <div className={styles.slideItemDiv}>
            <img src='https://ccdn.goodq.top/caches/ca7f25a345c62638cfe4fe48163ebb7e/aHR0cDovLzVkMmQyNWU1YmMyMzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9hZWExZDBmMDI4YWIxZjZhZjQ3NzQ0NjQ4OTcwN2RiOC05MC53ZWJw.webp' />
            <div className={styles.information}>
              <span className={styles.title}>场景合成</span>
              <span className={styles.infor}>启明星是那么大，那么亮<br />整个广漠的天幕上只有它一个在那里放射着令<br />人注目的光辉<br />活像一盏悬挂在高空的明灯</span>
            </div>
          </div>
        </swiper-slide>

      </swiper-container>
    </div>
  )
}