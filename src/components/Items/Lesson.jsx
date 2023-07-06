const Lesson = (props) => {
  const { lesson } = props;

  return (
    <>
      <div className="discoverybodyno2-wrap-bottom-item-lessons">
        <a href="#" className="discoverybodyno2-wrap-bottom-item-lesson">
          <img
            src={lesson.backgroundURL}
            alt="discoverybodyno2-wrap-bottom-item-lesson-img"
          />
          <div className="discoverybodyno2-wrap-bottom-item-lesson-info">
            <div className="discoverybodyno2-wrap-bottom-item-lesson-info-heading">
              {lesson.lessonHeading}
            </div>
            <div className="discoverybodyno2-wrap-bottom-item-lesson-info-heading-para">
              {lesson.lessonSubHeading}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Lesson;
