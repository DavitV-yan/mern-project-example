const asyncHandler = require("express-async-handler")

/**
 * @des  Get Goals
 * @rout GET /api/goals
 * @access Private
 */
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" })
})

/**
 * @des  Send Goal
 * @rout POST /api/goals
 * @access Private
 */
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field")
  }
  res.status(200).json({ message: "Set goal" })
})


/**
 * @des  Update Goal
 * @rout PUT /api/goals/:id
 * @access Private
 */
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` })
})


/**
 * @des  Delete Goal
 * @rout DELETE /api/goals/:id
 * @access Private
 */
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` })
})


module.exports = {
  getGoals, setGoal, updateGoal, deleteGoals
}