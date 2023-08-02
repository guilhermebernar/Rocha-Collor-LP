import styles from '@/styles/CampaignVideo.module.css';

export default function CampaignVideo() {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} controls>
        <source src="/assets/video/video01.mp4" type="video/mp4" />
        As melhores soluções de pintura e revestimento, com a Rocha Collor!
      </video>
    </div>
  );
}
