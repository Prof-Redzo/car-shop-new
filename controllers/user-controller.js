import User from "../models/User";


export const updateUser = async (req, res) => {
  try{
    const { id } = req.params;
  const user = req.body;

  await User.findByIdAndUpdate(id, user);

res.status(200).send(user);
} catch(e) {
  res.status(500).send("Something went wrong");
}

}