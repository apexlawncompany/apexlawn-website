import styles from "./details.module.css";
function Details() {
  return (
    <div className={styles.details}>
      <div className={styles.detailsCard}>
        <div className={styles.cardHeader}>About Our Foundation</div>
        <div className={styles.cardBody}>
          <p className="text-center">
            Eco-Utility <br /> Based in Apex, NC
          </p>
          <p className={styles.marginTop}>
            We kicked off Apex Lawn Company March of 2019.
          </p>
          <p className={styles.marginTop}>
            Ethics count; our company cares about delivering an outstanding
            product to our clients and providing good careers for our team.
            Every opportunity is a step forward in building the American Dream.
          </p>
        </div>
      </div>
      <div className={styles.detailsCard}>
        <div className={styles.cardHeader}>Apex Lawn Company</div>
        <div className={styles.cardBody}>
          <p className="text-center">Average Price Per Cut: $49</p>
          <p className={styles.marginTop}>
            Customized Care & Same Team Assigned to Each Lawn
          </p>
          <p className={styles.marginTop}>Satisfaction Guaruntee</p>
          <p className={styles.marginTop}>Customer Support: Mon-Sat 8am-7pm</p>
          <p className={styles.marginTop}>
            Workers paid living wage by W-2.{" "}
            <span className="color-red">We hire Vets!</span>
          </p>
        </div>
      </div>
      <div className={styles.detailsCard}>
        <div className={styles.cardHeader}>Average Competitors</div>
        <div className={styles.cardBody}>
          <p className="text-center">Average Price Per Cut: $60</p>
          <p className={styles.marginTop}>&quot;Big Box&quot; Packages</p>
          <p className={styles.marginTop}>Customer Service: Mon-Fri 8am-5pm</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
