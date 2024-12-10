export const feedbackSubmitController = async (req, res) => {
    const { category, rating, comments } = req.body;

    try {
    //   const feedback = new Feedback({
    //     // userId: '66911e043cd6d47e9aedd0ad',
    //     category,
    //     rating,
    //     comments,
    //   });
    //   await feedback.save();
      // const response = await axios.post('https://api.frill.co/feedback', {
      //   category,
      //   rating,
      //   comments,
      // });
      console.log("SUBMITTED");
      res.status(200).send({
          success: false,
          message: 'Feedback submitted successfully!', 
        });
    } catch (error) {
        console.log("ERROR");
      res.status(500).send({
        message: 'Failed to submit feedback', 
        data: error.message });
    }
};