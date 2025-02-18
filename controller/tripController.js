const prisma = require('../db/index');  

// Аялал үүсгэх
exports.createTrip = async (req, res) => {
  const { title, startDate, endDate,companyId, destinationId } = req.body;
  try {
    const trip = await prisma.trip.create({
      data: {
        title,
        startDate,
        endDate,
        companyId,
        destinationId,
      },
    });
    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ error: 'Аялал үүсгэхэд алдаа гарлаа' });
  }
};

// Аялал авах
exports.getTrip = async (req, res) => {
  try {
    const trip = await prisma.trip.findUnique({
      where: { id: req.params.id },
    });
    if (!trip) {
      return res.status(404).json({ error: 'Аялал олдсонгүй' });
    }
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ error: 'Аялал авахад алдаа гарлаа' });
  }
};

// Аялал шинэчлэх
exports.updateTrip = async (req, res) => {
  const { title, startDate, endDate, userId, destinationId } = req.body;
  try {
    const trip = await prisma.trip.update({
      where: { id: req.params.id },
      data: { title, startDate, endDate, userId, destinationId },
    });
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ error: 'Аялалыг шинэчлэхэд алдаа гарлаа' });
  }
};

// Аялал устгах
exports.deleteTrip = async (req, res) => {
  try {
    await prisma.trip.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: 'Аялал амжилттай устгагдлаа' });
  } catch (error) {
    res.status(500).json({ error: 'Аялал устгахад алдаа гарлаа' });
  }
};
