

const isCorrectCode = async (req, res) => {

    const body = req.body;

    try {
        if (body.code === "420420")
            res.status(200).json({ isCorrectCode: true});
        else 
            res.status(200).json({ isCorrectCode: false})
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message})
    }

}
export { isCorrectCode };