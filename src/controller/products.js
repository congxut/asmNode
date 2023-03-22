import Product from "../models/products";
export const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length == 0) {
      return res.status(404).json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.json({
      message: "Lấy danh sách sản phẩm thành công",
      products,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(product);
    if (!product) {
      return res.json({
        message: "Không tìm thấy sản phẩm nào",
      });
    }
    return res.json({
      message: "Lấy sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
export const Addpro = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (!product) {
      return res.json({
        message: "Thêm sản phẩm không thành công",
      });
    }
    return res.json({
      message: "Thêm sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
export const update = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!product) {
      return res.json({
        message: "Cập nhật sản phẩm thất bại",
      });
    }
    return res.json({
      message: "Cập nhật sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);
    return res.json({
      message: "Xóa sản phẩm thành công",
      products,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
