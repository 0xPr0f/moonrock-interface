import { GrGithub } from "react-icons/gr";
import { SiDiscord, SiTwitter, SiInstagram } from "react-icons/si";

import styles from "./Footer.module.scss";

export default function Footer({ activeSocial = false }) {
  return (
    <footer
      className={[styles.Footer, !activeSocial && styles.inactiveSocial].join(
        " "
      )}
    >
      <span className={styles.Copyright}>
        &copy; MoonRock {new Date().getFullYear()}
      </span>
      <div className={styles.tAndC}>
        <span>Terms</span>
        <span>Built by Prof</span>
      </div>
      {activeSocial && (
        <div className={styles.socials}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://twitter.com/praiseprof"
          >
            <SiTwitter size={25} fill="rgb(8, 8, 154)" />
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/0xpr0f"
          >
            <GrGithub size={25} fill="rgb(8, 8, 154)" />
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://discord.gg/wUesCxfy"
          >
            <SiDiscord size={25} fill="rgb(8, 8, 154)" />
          </a>
        </div>
      )}
    </footer>
  );
}
