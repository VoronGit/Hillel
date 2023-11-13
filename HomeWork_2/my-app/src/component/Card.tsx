import styles from './Card.module.scss'

interface ICourse {
    id: number,
    image: string,
    level: string,
    title: string,
    user: {
        avatar: string,
        name: string
    },
    rating: number,
    students: number,
    modules: number,
    finishedModules?: number,
    duration: number,
    isMyCource?: boolean
}

function Card({ course }: { course: ICourse }) {
    return (
        <div className={styles.card}>
            <div className={styles.image__container}>
                <img
                    src={course.image}
                    alt=""
                />
                <div className={styles.level}>{course.level}</div>
            </div>
            <h3 className={styles.card__title}>{course.title}</h3>

            <div className={styles.card__info}>
                <div className={styles.user}>
                    <img
                        src={course.user.avatar}
                        alt={course.user.name}
                    />
                    <p>{course.user.name}</p>
                </div>
                <div className={styles.rating}>
                    <p>{course.rating}</p>
                </div>
            </div>
            {course.isMyCource ?
                <div>
                    <progress value={course.finishedModules ? course.finishedModules / course.modules*100 : 0} max="100">
                        {course.finishedModules ? course.finishedModules / course.modules*100 : 0}%
                    </progress>
                    <div className={styles.card__info}>
                        <p>{course.finishedModules} / {course.modules} Modules</p>
                        <div>{course.finishedModules ? course.finishedModules / course.modules * 100 : 0} %</div>
                    </div>
                </div> : <></>
            }

            <div className={styles.card__info}>
                <div>{course.students} Student</div>
                <div>{course.modules} Modules</div>
                <div>{course.duration}</div>
            </div>
        </div>
    )
}

export default Card