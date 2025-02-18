const prisma = require('../db/index');  

exports.createPost = async (req, res) => {
  const { title, content, userId, imageUrl } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId,
        imageUrl,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Пост үүсгэхэд алдаа гарлаа' });

  }
};


exports.getPost = async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: req.params.id },
    });
    if (!post) {
      return res.status(404).json({ error: 'Пост олдсонгүй' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Пост авахад алдаа гарлаа' });
  }
};

exports.updatePost = async (req, res) => {
  const { title, content, companyId, userId, imageUrl } = req.body;
  try {
    const post = await prisma.post.update({
      where: { id: req.params.id },
      data: { title, content, companyId, userId, imageUrl },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Пост шинэчлэхэд алдаа гарлаа' });
  }
};


exports.deletePost = async (req, res) => {
  try {
    await prisma.post.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: 'Пост амжилттай устгагдлаа' });
  } catch (error) {
    res.status(500).json({ error: 'Пост устгахад алдаа гарлаа' });
  }
};
