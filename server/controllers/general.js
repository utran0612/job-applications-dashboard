import User from "../models/User.js";
import Entity from "../models/Entity.js";
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEntities = async (req, res) => {
  try {
    const entities = await Entity.aggregate([
      {
        $project: {
          _id: 1,
          name: 1,
          title: 1,
          status: 1,
          createdAt: {
            $arrayElemAt: [{ $split: [{ $toString: "$createdAt" }, "T"] }, 0],
          },
        },
      },
      {
        $sort: { createdAt: -1 },
      },
    ]).exec();
    res.status(200).json(entities);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
