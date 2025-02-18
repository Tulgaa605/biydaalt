const prisma = require('../db/index');  



exports.createUser = async (req, res) => {
  
  try {
    const { username, email } = req.body;
    const user = await prisma.user.create({
      data: { username, email },
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Хэрэглэгч үүсгэхэд алдаа гарлаа',error });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Хэрэглэгч олдсонгүй' });
  }
};


exports.updateUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: { username, email },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Хэрэглэгчийг шинэчлэхэд алдаа гарлаа' });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: 'Хэрэглэгч амжилттай устгагдлаа' });
  } catch (error) {
    res.status(500).json({ error: 'Хэрэглэгчийг устгахад алдаа гарлаа' });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();  
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Хэрэглэгчдийг авахад алдаа гарлаа' });
  }
};
