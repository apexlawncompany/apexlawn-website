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
            <span style={{ color: "red" }}>We hire Vests!</span>
          </p>
        </div>
      </div>
      <div className={styles.detailsCard}>
        <div className={styles.cardHeader}>About Our Team</div>
        <div className={styles.cardBody}>
          <p className="text-center">
            We take pride in our team.James started Apex Lawn Company out of his
            garage in 2019 at the age of 17.
          </p>
          <p className={styles.marginTop}>
            The company has become a premeir landscape maintenance and install
            option for the Triangle Area.
          </p>
          <p className={styles.marginTop}>
            We pledge to source our labor ethically, and only hire{" "}
            <span style={{ color: "red" }}>W-2 Employees</span> who pass our
            background screening.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
