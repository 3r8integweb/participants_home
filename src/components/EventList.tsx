import React from 'react';
import styles from '../styles/EventList.module.scss';

const EventList: React.FC = () => {
    return (
        <div className={styles.eventList}>
            <h2>Today, May 15, 2024</h2>
            <div className={styles.eventItem}>
                <div className={styles.eventTitle}>Birthday Celebration</div>
                <div className={styles.eventLocation}>Pearlmont Hotel, Lapasan, Cagayan de Oro City</div>
                <button className={styles.reminderButton}>Set Reminder</button>
            </div>
        </div>
    );
};

export default EventList;
