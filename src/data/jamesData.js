import Link from "next/link";

const jamesData = [
  {
    id: "summary",
    title: "Summary",
    content: (
      <>
        <p>
          James Kakkar, also known as Suvid James Kakkar, is the resilient
          founder and owner of Apex Lawn Company - a premier lawn care, pest
          control, and landscaping service in Apex, NC. Born on a full moon
          Halloween night in 2001 in Winter Haven, Florida, James launched Apex
          in March 2019 at age 17 from his garage, building a business that
          reflects his core belief: the means justify the end. Recognized by
          Expertise as one of the top lawn care services in the Triangle Area,
          Apex boasts a 4.8-star Google rating, with clients like Jay X praising
          James's "reasonable pricing and hard work."
        </p>
        {/* <br /> */}
        <p>
          With a North Carolina pesticide applicator license and a focus on
          eco-utility, James delivers customized lawn solutions while mentoring
          employees through addiction recovery. His software platform, Apex
          Ship, streamlines small business operations. Despite challenges like a
          wrongful arrest and COVID setbacks, James's faith and grit drive
          Apex's 98% client retention rate and ethical labor practices, hiring
          only W-2 employees. Apex isn't just about greener lawns - it's about
          building trust, community, and brighter futures in Apex, NC.
        </p>
      </>
    ),
  },

  {
    id: "personal-life",
    title: "Personal Life",
    content: (
      <>
        <p>
          We live out our lives in a reality illusive to the certainty of our
          eventuality. Our time is wasted on distractions and the fleeting
          pursuit of permanence in our short time on a rapidly changing Earth.
          The idea of forever is embedded in our humanity-our songs, our
          relationships, our faith. In my measly 23 years, I've realized three
          things: the end doesn't justify the means, but the means justify the
          end; you cannot think or act for others, nor blame your environment
          for your choices; and some people simply have more energy than others.
          I am James Kakkar, and this is a chapter of my story.
        </p>
        <br />
        <p>
          Born under a full moon on Halloween 2001 in Winter Haven, Florida, I
          grew up in a poor immigrant family. My dad, an Indian doctor serving
          underserved VA clinics, earned his citizenship through sweat and
          sacrifice. Right before the 2008 downturn, he launched his private
          practice with a $50,000 credit card loan-$150,000 in today's dollars.
          I watched him work 16-hour days, six days a week, improving our
          finances but straining home life. As a kid, I was different: the
          teacher's friend and the class menace. In third grade, I built a fort
          from desks and created "Suvid Dollars," a currency I printed and
          traded for candy-until teachers seized it, and I overprinted, crashing
          its value. A lesson in economics the government still hasn't learned.
        </p>
        <br />
        <p>
          At 10, my parents split, and Mom took me to her parents in New York.
          We survived on rotis and food kitchens during tight times. When they
          reconciled two years later, I returned to Florida as the shortest,
          skinniest kid in school. Middle and high school were lonely, but I
          grew-mentally and physically-eventually standing 6 feet tall and
          earning a spot among 90 out of 2000 students accepted into Apex High's
          AOIT program in Apex, NC. At 17, with two wood boards, a Troy-Bilt
          mower, and a dream, I incorporated Apex Lawn Company in March 2019. My
          parent's support was mixed: Dad bought me an F-150 but used the keys
          as leverage, taking them when angry, costing me clients. Mom rode with
          me to jobs since I couldn't get my license. Fed up, I drove to the
          Outer Banks without one, learning to avoid trouble. By year's end,
          Apex grossed $70,000, enough for my own Ford Ranger.
        </p>
        <br />
        <p>
          COVID hit hard, nearly bankrupting me. But God sent helpers like
          Thomas, my first success in supporting addiction recovery, and David,
          who worked 60-hour weeks to keep Apex alive. David's own struggles
          with meth, acid, and alcohol tested us, but after rehab-funded by his
          parents-he became a soil scientist at the University of Arkansas. Life
          gave me hard terms, but God gave second chances. I vowed to extend
          that to my team, treating them like friends. Today, at 23, I balance
          entrepreneurship with reflections on life's illusions, finding purpose
          in mentoring youth, supporting local causes in Apex, NC, and savoring
          sunrise coffees, open-road drives, and the joy of a perfect lawn.
        </p>
      </>
    ),
  },

  {
    id: "business-achievements",
    title: "Business Achievements",
    content: (
      <>
        <p>
          James Kakkar founded Apex Lawn Company in March 2019, transforming it
          into a premier name in Apex, NC, and the Triangle Area for lawn care,
          pest control, and landscaping. Holding a North Carolina pesticide
          applicator license since age 18, James emphasizes eco-utility with
          services like precision mowing, seasonal aeration, and
          drought-resistant turf installations. Recognized by Expertise as a top
          lawn care provider and boasting a 4.8-star Google rating, Apex serves
          over 200 properties annually with a 98% client retention rate, driven
          by transparent pricing (average cut: $49) and customized care with
          dedicated teams. Clients like Jay X praise James's "reasonable pricing
          and hard work" for services like lawn scalping.
        </p>
        <br />
        <p>
          Despite setbacks like COVID and a 2023 sinus condition that slashed
          revenue from $50,000 to $5,000 monthly, James rebuilt Apex through
          ethical labor practices, hiring only W-2 employees who pass background
          screenings. He also founded Apex Ship, a software platform automating
          shipping and inventory for small businesses, born from his own
          logistical challenges. Strategic moves-vendor partnerships, optimized
          fleet routes, and data-driven growth-drove a 300% revenue increase in
          three years. These achievements invite clients in Apex, NC, to trust a
          leader committed to excellence and community.
        </p>
      </>
    ),
  },

  {
    id: "employee-rehabilitation",
    title: "Employee Rehabilitation",
    content: (
      <>
        <p>
          <strong>Our Mission:</strong> At Apex Lawn Company, redemption is the
          ultimate growth story. James's commitment to combating addiction
          empowers employees with counseling, flexible schedules, and
          skill-building programs, turning personal battles into professional
          triumphs. It's a pledge to second chances, fostering a compassionate,
          resilient team in Apex, NC.
        </p>
        <br />
        <p>
          <strong>Meet Our Team Member's Stories:</strong>
        </p>
        <br />
        <p>
          <em>Thomas (Hired 2019):</em> "James saw me through my darkest days
          with substance abuse. His support-steady work, honest talks-helped me
          rebuild on my own terms. Now I'm clean, thriving, and still his
          friend. Apex gave me purpose."
        </p>
        <br />
        <p>
          <em>David (Hired 2020):</em> "Addiction nearly broke me-meth, acid, a
          fifth a night. James didn't give up; he got me to rehab. I'm a soil
          scientist now, thanks to his belief in second chances. Apex is
          family."
        </p>
        <br />
        <p>
          <em>Sarah L. (Hired 2022):</em> "Addiction stole years, but James's
          no-BS support-paid rehab leave, real check-ins-got me to operations
          manager. Apex isn't just a job; it's a lifeline."
        </p>
      </>
    ),
  },

  {
    id: "wrongful-arrest",
    title: "Wrongful Arrest",
    content: (
      <>
        <p>
          In June 2024, James Kakkar faced a wrongful arrest for felonious
          restraint after trying to help Kaitlyn Hansen, a 19-year-old employee
          struggling with drug addiction. On her second day, Kaitlyn passed out
          in James's truck. He provided food, gas money, and offered to pick her
          up for work. When she didn't answer at her trailer, James learned from
          her brother about her recurrent drug issues. Her father brought her
          from a Raleigh rehab facility to James's shop, where they arranged a
          hotel stay, covering expenses after a police officer searched her bag
          for drugs. James's parents housed her briefly, but Kaitlyn, angry and
          in withdrawal, conspired with a former employer, Tracy Gower, to
          falsely accuse James of kidnapping her from rehab and planning to
          traffic her to Florida.
        </p>
        <br />
        <p>
          Despite witness statements from Kaitlyn's family and employees-plus
          GPS records and shop cameras-Detective Wolfe arrested James, claiming
          probable cause without reviewing evidence. At the station, Wolfe
          falsely suggested James corroborated the story, and Magistrate Briggs,
          pushing for harsher charges like rape, set a $250,000 bond. James was
          held in a 6x12 cell for 23 hours and 50 minutes daily, denied phone
          calls, an attorney, or rights. Kaitlyn's family pleaded for his
          release, citing his community ties in Apex, NC, but Briggs dismissed
          them. At the preliminary hearing, the bond dropped to $10,000 with GPS
          tracking, posted by James's parents. A July 23, 2024, Fayetteville
          Observer article by reporter Joseph amplified the lies, falsely
          claiming Kaitlyn was 16 to fuel pre-election sensationalism,
          triggering death threats, lost clients, and vandalism to Apex's
          equipment. James suffered PTSD, totaling his truck in a blackout. The
          case was dismissed in December 2024 "in the interest of justice," and
          James secured expungement (N.C. Gen. Stat. § 15A-153), but the media's
          false narrative cost James half his clients and personal connections.
          Yet he emerged advocating for workplace mental health reforms and
          community resilience in Apex, NC, proving evil never wins.
        </p>
      </>
    ),
  },

  {
    id: "mission-contact",
    title: "Mission & Contact",
    content: (
      <>
        <p>
          James Kakkar's mission is rooted in faith and action: to turn
          obstacles into opportunities through grit, integrity, and second
          chances. Apex Lawn Company delivers unmatched lawn care while
          fostering a workplace of holistic growth-professional skills, personal
          healing. James envisions Apex as a regional leader in sustainable
          landscaping, with Apex Ship empowering entrepreneurs. His legacy?
          Greener communities, empowered teams, and a life driven by God's mercy
          over fleeting distractions. As James says, "God always wins."
        </p>
        <br />
        <p>
          Ready to connect? James welcomes questions on services, partnerships,
          or sharing stories over coffee. Reach him directly:
        </p>
        <br />
        <ul>
          <li>
            Email:{" "}
            <Link href="mailto:james@apexlawncompany.com">
              james@apexlawncompany.com
            </Link>
          </li>
        </ul>
        <br />
        <p>Let's build something great together in Apex, NC.</p>
      </>
    ),
  },
];

export default jamesData;
