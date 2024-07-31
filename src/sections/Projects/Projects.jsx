import styles from './ProjectStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={viberr} 
            link='#' h3='Viberr' 
            p='Streaming App' />
        </div>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={freshBurger} 
            link='#' h3='Fresh Burger' 
            p='Hamburger Restaurant' />
        </div>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={hipsster} 
            link='#' h3='Hipsster' 
            p='Glasses Shop' />
        </div>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={fitLift} 
            link='#' h3='Fit Lift' 
            p='Fitness App' />
        </div>
    </section>
  )
}

export default Projects