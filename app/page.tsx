import { course } from "./course";

const stateLabels = {
  start: "Start here",
  next: "Up next",
  later: "Later",
};

function formatNumber(number: number) {
  return String(number).padStart(2, "0");
}

export default function Home() {
  const lessonCount = course.reduce((count, section) => count + section.lessons.length, 0);

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <span className="wordmark">
            <span className="brand-mark" aria-hidden="true">✦</span>
            neura
          </span>
          <a className="header-link" href="#learning-path">
            <span aria-hidden="true">⌁</span> Learning path
          </a>
        </div>
      </header>

      <main className="shell">
        <div className="course-intro">
          <div>
            <p className="eyebrow">THE AI COURSE</p>
            <h1 id="learning-path">Learning path<span>.</span></h1>
            <p>Explore how AI works, put it to use, and make thoughtful choices about it.</p>
          </div>
          <div className="orbit-art" aria-hidden="true">
            <span className="orbit orbit-outer" />
            <span className="orbit orbit-inner" />
            <span className="planet" />
            <span className="art-star">✦</span>
          </div>
        </div>

        <div className="course-layout">
          <nav className="course-index" aria-label="Course outline">
            <div className="index-heading">
              <div>
                <h2>Course outline</h2>
                <p>{course.length} sections · {lessonCount} lessons</p>
              </div>
            </div>
            <ol role="list">
              {course.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    <span className="index-number" aria-hidden="true">{formatNumber(index + 1)}</span>
                    <span>{section.title}</span>
                    <span className="index-arrow" aria-hidden="true">↓</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <ol className="course-path" aria-label="Course path" role="list">
            {course.map((section, sectionIndex) => (
              <li className="course-step" key={section.id}>
                <section className="unit" id={section.id} aria-labelledby={`${section.id}-title`}>
                  <div className="unit-heading">
                    <span className="unit-number" aria-hidden="true">{formatNumber(sectionIndex + 1)}</span>
                    <div>
                      <h2 id={`${section.id}-title`}>{section.title}</h2>
                      <p>{section.description}</p>
                    </div>
                  </div>

                  <ol className="lessons" aria-label={`${section.title} lesson order`} role="list">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <li className={`lesson lesson--${lesson.state}`} key={lesson.id}>
                        <span className="lesson-node" aria-hidden="true">{formatNumber(lessonIndex + 1)}</span>
                        <div className="lesson-card">
                          <span className="lesson-state">{stateLabels[lesson.state]}</span>
                          <h3>{lesson.title}</h3>
                          <p>{lesson.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
}
