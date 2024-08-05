import React from 'react';
import styles from '../Location/location.module.scss';

export default function Location() {
  return (
    <section className='section'>
      <div className="location__container">
        <h2 className={styles.location__title}>Де нас знайти?</h2>
        <div className={styles.location__content}>
          <div className={styles.content__left}>
            <a href="https://www.facebook.com/people/GO-AUTO-LVIV/61551881780072/" className={(styles.location__link, styles.link__facebook)}>GO AUTO LVIV</a>
            <a href="https://www.instagram.com/goautolviv/" className={(styles.location__link, styles.link__instagram)}>goautolviv</a>
            <a href="https://www.tiktok.com/@goautolviv/" className={(styles.location__link, styles.link__tiktok)}>goautolviv</a>
            <a href="tel:+380974300570" className={(styles.location__link, styles.link__phone)}>097 430 05 70</a>
            <a href="https://t.me/goautolviv" className={(styles.location__link, styles.link__telegram)}>t.me/goautolviv</a>
          </div>
          <div className={styles.content__right}>
            <iframe className={styles.content__location} 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10298.195642518393!2d23.962780871244192!3d49.81334768041673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae79ead6ddb1f%3A0x48f93716514bdbaa!2zR08gQVVUTyAtINCf0YDQvtC00LDQtiDRgtCwINC_0YDQuNCz0ZbQvSDQkNCy0YLQvg!5e0!3m2!1suk!2sua!4v1722843888883!5m2!1suk!2sua" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
