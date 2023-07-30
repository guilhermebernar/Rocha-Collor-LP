import styles from '@/styles/CampaignVideo.module.css';

export default function CampaignVideo() {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} controls>
        <source src="/assets/video/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
