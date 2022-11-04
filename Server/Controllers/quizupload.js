import { addQuizModel } from "../Schema/addQuizSchema.js";

export const addQuiz = (req, res) => {
  const { SlNo,
    Stem,
    distractor1,
    distractor2,
    distractor3,
    distractor4,
    Key,
    Hint,
    TypeOfAssessment,
    CourseTitle,
    CognitiveLevel,
    ConceptCode,
    PurposeCode,
    EntranceCode } = req.body;
  if (!!(SlNo && Stem && distractor1 && distractor2)) {
    res.status(200).send({
      message: "Please enter the questions and answer",
    });
  } else {
    let ImageInfo = {
      data: fs.readFileSync("QuizQuestionImage/" + req.file.filename),
      contentType: "image/png",
    }
    const addQuizData = new addQuizModel({
      SlNo,
      Stem,
      Image: ImageInfo,
      distractor1,
      distractor2,
      distractor3,
      distractor4,
      Key,
      Hint,
      TypeOfAssessment,
      CourseTitle,
      CognitiveLevel,
      ConceptCode,
      PurposeCode,
      EntranceCode
    });

    console.log(addQuizData);

    addQuizData.save((err, data) => {
      console.log(data);
      if (err) {
        return res.send(err);
      } else {
        return res.status(200).send({
          message: "quiz added successfully!!",
        });
      }
    });
  }
};

