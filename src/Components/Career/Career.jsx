import styles from './Career.module.css';
import img2 from './ayush.jpeg';
import img1 from './chandan.jpeg';
import img4 from './chetan.jpeg'; // This one remains unchanged
import img3 from './lokesh.jpeg';
const Career = () => {
return (
    <>
    <div className={styles.container}>
    <div className={styles.headsection}>
        <h1 className={styles.heading}>Career</h1>
        <p className={styles.para}>We&apos;re looking for passionate, creative minds to help us</p>
        <span className={styles.para}>redefine spaces with elegance and style.</span>
        <button className={styles.btn}><a href="mailto:rajesh@fnmafia.com">Send Resume</a></button>
    </div>
    <div className={styles.box}>
            <div className={styles.box1}>
                <span className={styles.light}><i className="fa-regular fa-lightbulb"></i></span>
                <h1 className={styles.boxhead}>Creativity at Our Core</h1>
                <p className={styles.boxpara}>At Urban Luxe, creativity isn&apos;t just a skill, it&apos;s our ethos. We believe in pushing boundaries, exploring new ideas, and designing spaces that tell a story. Join us in crafting environments that inspire and captivate.</p>
            </div>
            <div className={styles.box2}>
                <span className={styles.hand}><i className="fa-solid fa-handshake-angle"></i></span>
                <h1 className={styles.boxhead1}>Collaboration as Our Strength</h1>
                <p className={styles.boxpara2}>Collaboration is the cornerstone of our success. We thrive on the synergy of diverse talents and perspectives, fostering a culture where every voice is valued. Be part of a team where unity and creativity blend to create extraordinary results.</p>
            </div>
    </div>
    <div className={styles.middlesection}>
    <span className={styles.team}><i className="fa-solid fa-people-group"></i></span>
    <h1 className={styles.meet}>Meet our team</h1>
    <p className={styles.meetpara}>A dedicated team of skilled engineers breathes life </p>
    <span className={styles.meetpara}>into your home dreams. We blend elegance with </span>
    <p className={styles.meetpara}>functionality ensuring each space tells your unique story.</p>
    <button className={styles.learn}>Learn more</button>
    </div>
    </div>
    <div className={styles.imagee}>
    <img src={img1} alt="chandan member" height="100px" className={styles.chandan}/>
    <img src={img2} alt="ayush member" height="100px" className={styles.chandan}/>
    <img src={img3} alt="chandan member" height="100px" className={styles.chandan}/>
    <img src={img4} alt="chandan member" height="100px" className={styles.chandan}/>
    </div>
    </>
)
}

export default Career

