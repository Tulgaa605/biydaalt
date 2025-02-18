const prisma = require('../db/index');  


exports.createBooking = async (req, res) => {
  const { tripId, hotel, price } = req.body;
  try {
    const booking = await prisma.booking.create({
      data: {
        tripId,
        hotel,
        price,
      },
    });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Захиалга үүсгэхэд алдаа гарлаа' });
  }
};


exports.getBooking = async (req, res) => {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id: req.params.id },
    });
    if (!booking) {
      return res.status(404).json({ error: 'Захиалга олдсонгүй' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Захиалга авахад алдаа гарлаа' });
  }
};

// Захиалга шинэчлэх
exports.updateBooking = async (req, res) => {
  const { hotel, price } = req.body;
  try {
    const booking = await prisma.booking.update({
      where: { id: req.params.id },
      data: { hotel, price },
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Захиалгыг шинэчлэхэд алдаа гарлаа' });
  }
};

// Захиалга устгах
exports.deleteBooking = async (req, res) => {
  try {
    await prisma.booking.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: 'Захиалга амжилттай устгагдлаа' });
  } catch (error) {
    res.status(500).json({ error: 'Захиалга устгахад алдаа гарлаа' });
  }
};
